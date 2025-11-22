// script.js - Arquivo Principal
let saveData = null;
const C_SHARP_HEADER = new Uint8Array([0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]);
const END_HEADER = new Uint8Array([11]);
const AES_KEY = 'UKu52ePUBwetZ9wNX88o54dnfKRu0T1l';

// Funções de Criptografia
function readVariableInt(data, offset) {
    let result = 0;
    let shift = 0;
    let pos = offset;
    while (pos < data.length) {
        const byte = data[pos++];
        result |= (byte & 0x7F) << shift;
        if ((byte & 0x80) === 0) break;
        shift += 7;
    }
    return { value: result, bytesRead: pos - offset };
}

function writeVariableInt(value) {
    const bytes = [];
    while (value >= 0x80) {
        bytes.push((value & 0x7F) | 0x80);
        value >>= 7;
    }
    bytes.push(value & 0x7F);
    return new Uint8Array(bytes);
}

function decryptSave(data) {
    try {
        let offset = C_SHARP_HEADER.length;
        const sizeInfo = readVariableInt(data, offset);
        offset += sizeInfo.bytesRead;
        const encryptedData = data.slice(offset, -1);
        const base64String = new TextDecoder().decode(encryptedData);
        const decrypted = CryptoJS.AES.decrypt(base64String, CryptoJS.enc.Utf8.parse(AES_KEY), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Erro ao descriptografar:', error);
        return null;
    }
}

function encryptSave(jsonString) {
    try {
        const encrypted = CryptoJS.AES.encrypt(jsonString, CryptoJS.enc.Utf8.parse(AES_KEY), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const base64String = encrypted.toString();
        const base64Bytes = new TextEncoder().encode(base64String);
        const sizeBytes = writeVariableInt(base64Bytes.length);
        const result = new Uint8Array(C_SHARP_HEADER.length + sizeBytes.length + base64Bytes.length + END_HEADER.length);
        let offset = 0;
        result.set(C_SHARP_HEADER, offset);
        offset += C_SHARP_HEADER.length;
        result.set(sizeBytes, offset);
        offset += sizeBytes.length;
        result.set(base64Bytes, offset);
        offset += base64Bytes.length;
        result.set(END_HEADER, offset);
        return result;
    } catch (error) {
        console.error('Erro ao criptografar:', error);
        return null;
    }
}

// Funções de UI
function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
}

// Carregar Save
function loadFile() {
    const input = document.getElementById('fileInput');
    const file = input.files[0];
    if (!file) {
        alert('Por favor, selecione um arquivo primeiro!');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const decrypted = decryptSave(data);
            if (!decrypted) {
                alert('Erro ao descriptografar o save.');
                return;
            }
            const parsed = JSON.parse(decrypted);
            saveData = parsed;
            populateAllEditors();
            document.getElementById('editor').style.display = 'block';
            alert('✅ Save carregado com sucesso!');
        } catch (error) {
            alert('Erro ao ler o arquivo: ' + error.message);
            console.error(error);
        }
    };
    reader.readAsArrayBuffer(file);
}

// Popular TODOS os editores
function populateAllEditors() {
    const pd = saveData.playerData || {};
    
    // Carregar cada seção
    loadBasicStats(pd);
    loadCombatStats(pd);
    loadProgressStats(pd);
    loadAbilities(pd);
    loadCharms(pd);
    loadItems(pd);
    loadBosses(pd);
    loadGrubs(pd);
    loadNPCs(pd);
    loadMaps(pd);
    loadJournal(pd);
    loadScenes(pd);
    loadAchievements(pd);
    loadGodhome(pd);
    loadGrimm(pd);
    loadRespawn(pd);
    loadMisc(pd);
}

// Salvar Save
function saveFile() {
    if (!saveData) {
        alert('Nenhum save carregado!');
        return;
    }

    try {
        // Coletar dados de TODOS os campos
        collectAllData();
        
        const jsonString = JSON.stringify(saveData);
        const encrypted = encryptSave(jsonString);
        
        if (!encrypted) {
            alert('Erro ao criptografar o save!');
            return;
        }

        const blob = new Blob([encrypted], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'user1.dat';
        a.click();
        URL.revokeObjectURL(url);

        alert('Save modificado baixado com sucesso!');
    } catch (error) {
        alert('Erro ao salvar: ' + error.message);
        console.error(error);
    }
}

// Função para coletar TODOS os dados dos campos
function collectAllData() {
    if (!saveData.playerData) saveData.playerData = {};
    const pd = saveData.playerData;
    
    // Coletar de todas as seções
    collectBasicStats(pd);
    collectCombatStats(pd);
    collectProgressStats(pd);
    collectAbilities(pd);
    collectCharms(pd);
    collectItems(pd);
    collectBosses(pd);
    collectGrubs(pd);
    collectNPCs(pd);
    collectMaps(pd);
    collectJournal(pd);
    collectScenes(pd);
    collectAchievements(pd);
    collectGodhome(pd);
    collectGrimm(pd);
    collectRespawn(pd);
    collectMisc(pd);
}

// Helpers para criar campos
function createNumberField(container, label, key, value, min = 0, max = 999999) {
    const div = document.createElement('div');
    div.className = 'field-box';
    div.innerHTML = `
        <label>${label}</label>
        <input type="number" id="${key}" value="${value || 0}" min="${min}" max="${max}">
    `;
    container.appendChild(div);
}

function createCheckboxField(container, label, key, value) {
    const div = document.createElement('div');
    div.className = 'checkbox-field';
    div.innerHTML = `
        <label for="${key}">${label}</label>
        <input type="checkbox" id="${key}" ${value ? 'checked' : ''}>
    `;
    container.appendChild(div);
}

function getNumberValue(key) {
    const el = document.getElementById(key);
    return el ? parseFloat(el.value) || 0 : 0;
}

function getCheckboxValue(key) {
    const el = document.getElementById(key);
    return el ? el.checked : false;
}