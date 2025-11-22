let saveData = null;
const C_SHARP_HEADER = new Uint8Array([0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]);
const END_HEADER = new Uint8Array([11]);
const AES_KEY = 'UKu52ePUBwetZ9wNX88o54dnfKRu0T1l';

const movementAbilities = [
    { key: 'hasDash', name: 'Mothwing Cloak (Dash)' },
    { key: 'hasWalljump', name: 'Mantis Claw (Wall Jump)' },
    { key: 'hasDoubleJump', name: 'Monarch Wings (Double Jump)' },
    { key: 'hasSuperDash', name: 'Crystal Heart (Super Dash)' },
    { key: 'hasShadowDash', name: 'Shade Cloak (Shadow Dash)' },
    { key: 'hasAcidArmour', name: 'Isma\'s Tear (Acid Immunity)' },
    { key: 'hasLantern', name: 'Lumafly Lantern' },
    { key: 'hasTramPass', name: 'Tram Pass' },
    { key: 'hasKingsBrand', name: 'King\'s Brand' }
];

const spells = [
    { key: 'hasSpell', name: 'Possui Magias' },
    { key: 'hasDreamNail', name: 'Dream Nail' },
    { key: 'hasDreamGate', name: 'Dreamgate' },
    { key: 'dreamNailUpgraded', name: 'Dream Nail Upgraded (Awoken)' }
];

const nailArts = [
    { key: 'hasNailArt', name: 'Aprendeu alguma Nail Art' },
    { key: 'hasCyclone', name: 'Cyclone Slash' },
    { key: 'hasDashSlash', name: 'Dash Slash' },
    { key: 'hasUpwardSlash', name: 'Great Slash' }
];

const items = [
    { key: 'hasQuill', name: 'Quill (Escrever Mapas)' },
    { key: 'hasCityKey', name: 'City Crest' },
    { key: 'hasSlykey', name: 'Shopkeeper\'s Key' },
    { key: 'hasWhiteKey', name: 'Elegant Key' },
    { key: 'hasMenderKey', name: 'Love Key' },
    { key: 'hasWaterwaysKey', name: 'Simple Key (Waterways)' },
    { key: 'hasSpaKey', name: 'Simple Key (Spa)' },
    { key: 'hasLoveKey', name: 'Love Key' },
    { key: 'foundGhostCoin', name: 'Encontrou Relic' },
    { key: 'hasHuntersMark', name: 'Hunter\'s Mark' },
    { key: 'hasXunFlower', name: 'Delicate Flower' }
];

const bosses = [
    { key: 'falseKnightDefeated', name: 'False Knight' },
    { key: 'falseKnightDreamDefeated', name: 'Failed Champion' },
    { key: 'hornet1Defeated', name: 'Hornet (Greenpath)' },
    { key: 'hornetOutskirtsDefeated', name: 'Hornet (Kingdom\'s Edge)' },
    { key: 'mawlekDefeated', name: 'Brooding Mawlek' },
    { key: 'collectorDefeated', name: 'The Collector' },
    { key: 'infectedKnightDreamDefeated', name: 'Broken Vessel / Lost Kin' },
    { key: 'mageLordDreamDefeated', name: 'Soul Master / Soul Tyrant' },
    { key: 'defeatedMantisLords', name: 'Mantis Lords' },
    { key: 'defeatedDungDefender', name: 'Dung Defender' },
    { key: 'whiteDefenderDefeated', name: 'White Defender' },
    { key: 'flukeMotherDefeated', name: 'Flukemarm' },
    { key: 'defeatedMegaBeamMiner', name: 'Crystal Guardian' },
    { key: 'killedHiveKnight', name: 'Hive Knight' },
    { key: 'killedTraitorLord', name: 'Traitor Lord' },
    { key: 'killedHollowKnight', name: 'Hollow Knight' },
    { key: 'killedFinalBoss', name: 'Radiance' }
];

const dreamWarriors = [
    { key: 'elderHuDefeated', name: 'Elder Hu' },
    { key: 'xeroDefeated', name: 'Xero' },
    { key: 'galienDefeated', name: 'Galien' },
    { key: 'mumCaterpillarDefeated', name: 'Marmu' },
    { key: 'noEyesDefeated', name: 'No Eyes' },
    { key: 'markothDefeated', name: 'Markoth' },
    { key: 'aladarSlugDefeated', name: 'Gorb' }
];

const npcs = [
    { key: 'metElderbug', name: 'Conheceu Elderbug' },
    { key: 'metCornifer', name: 'Conheceu Cornifer' },
    { key: 'metIselda', name: 'Conheceu Iselda' },
    { key: 'slyRescued', name: 'Resgatou Sly' },
    { key: 'brettaRescued', name: 'Resgatou Bretta' },
    { key: 'metNailsmith', name: 'Conheceu Nailsmith' },
    { key: 'metCharmSlug', name: 'Conheceu Salubra' },
    { key: 'metLegEater', name: 'Conheceu Leg Eater' },
    { key: 'metCloth', name: 'Conheceu Cloth' },
    { key: 'metQuirrel', name: 'Conheceu Quirrel' },
    { key: 'metHornet', name: 'Conheceu Hornet' }
];

const maps = [
    { key: 'mapDirtmouth', name: 'Dirtmouth' },
    { key: 'mapCrossroads', name: 'Forgotten Crossroads' },
    { key: 'mapGreenpath', name: 'Greenpath' },
    { key: 'mapFogCanyon', name: 'Fog Canyon' },
    { key: 'mapFungalWastes', name: 'Fungal Wastes' },
    { key: 'mapCity', name: 'City of Tears' },
    { key: 'mapWaterways', name: 'Royal Waterways' },
    { key: 'mapMines', name: 'Crystal Peak' },
    { key: 'mapDeepnest', name: 'Deepnest' },
    { key: 'mapCliffs', name: 'Howling Cliffs' },
    { key: 'mapOutskirts', name: 'Kingdom\'s Edge' },
    { key: 'mapRoyalGardens', name: 'Queen\'s Gardens' },
    { key: 'mapRestingGrounds', name: 'Resting Grounds' },
    { key: 'mapAbyss', name: 'Ancient Basin / Abyss' }
];

const charms = [
    'Gathering Swarm', 'Wayward Compass', 'Grubsong', 'Stalwart Shell',
    'Soul Catcher', 'Shaman Stone', 'Soul Eater', 'Dashmaster',
    'Sprintmaster', 'Grubberfly\'s Elegy', 'Fragile Heart', 'Fragile Greed',
    'Fragile Strength', 'Spell Twister', 'Steady Body', 'Heavy Blow',
    'Sharp Shadow', 'Spore Shroom', 'Longnail', 'Mark of Pride',
    'Fury of the Fallen', 'Thorns of Agony', 'Baldur Shell', 'Flukenest',
    'Defender\'s Crest', 'Glowing Womb', 'Quick Focus', 'Deep Focus',
    'Lifeblood Heart', 'Lifeblood Core', 'Joni\'s Blessing', 'Hiveblood',
    'Dream Wielder', 'Dreamshield', 'Weaversong', 'Grimmchild',
    'Carefree Melody', 'Unbreakable Heart', 'Unbreakable Greed', 'Unbreakable Strength'
];

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
}

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
            saveData = parsed.playerData || parsed;
            populateEditor();
            document.getElementById('editor').style.display = 'block';
        } catch (error) {
            alert('Erro ao ler o arquivo: ' + error.message);
            console.error(error);
        }
    };
    reader.readAsArrayBuffer(file);
}

function populateEditor() {
    document.getElementById('geo').value = saveData.geo || 0;
    document.getElementById('health').value = saveData.health || 5;
    document.getElementById('maxHealth').value = saveData.maxHealth || 5;
    document.getElementById('MPCharge').value = saveData.MPCharge || 0;
    document.getElementById('maxMP').value = saveData.maxMP || 99;
    document.getElementById('charmSlots').value = saveData.charmSlots || 3;
    document.getElementById('dreamOrbs').value = saveData.dreamOrbs || 0;
    document.getElementById('rancidEggs').value = saveData.rancidEggs || 0;
    document.getElementById('simpleKeys').value = saveData.simpleKeys || 0;
    document.getElementById('heartPieces').value = saveData.heartPieces || 0;
    document.getElementById('vesselFragments').value = saveData.vesselFragments || 0;
    document.getElementById('ore').value = saveData.ore || 0;
    document.getElementById('grubsCollected').value = saveData.grubsCollected || 0;
    document.getElementById('grubsCollected2').value = saveData.grubsCollected || 0;
    document.getElementById('completionPercentage').value = saveData.completionPercentage || 0;
    document.getElementById('playTime').value = ((saveData.playTime || 0) / 3600).toFixed(1);
    document.getElementById('grubRewards').value = saveData.grubRewards || 0;
    
    document.getElementById('nailDamage').value = saveData.nailDamage || 5;
    document.getElementById('nailsmithUpgrades').value = saveData.nailsmithUpgrades || 0;
    document.getElementById('fireballLevel').value = saveData.fireballLevel || 0;
    document.getElementById('quakeLevel').value = saveData.quakeLevel || 0;
    document.getElementById('screamLevel').value = saveData.screamLevel || 0;

    const movementTable = document.getElementById('movementTable');
    movementTable.innerHTML = '<tr><th>Habilidade</th><th style="width: 100px; text-align: center;">Possuir</th></tr>';
    movementAbilities.forEach(ability => {
        const row = movementTable.insertRow();
        row.innerHTML = `<td>${ability.name}</td><td style="text-align: center;"><input type="checkbox" id="${ability.key}" ${saveData[ability.key] ? 'checked' : ''} /></td>`;
    });

    const spellsTable = document.getElementById('spellsTable');
    spellsTable.innerHTML = '<tr><th>Magia</th><th style="width: 100px; text-align: center;">Possuir</th></tr>';
    spells.forEach(spell => {
        const row = spellsTable.insertRow();
        row.innerHTML = `<td>${spell.name}</td><td style="text-align: center;"><input type="checkbox" id="${spell.key}" ${saveData[spell.key] ? 'checked' : ''} /></td>`;
    });

    const nailArtsTable = document.getElementById('nailArtsTable');
    nailArtsTable.innerHTML = '<tr><th>Nail Art</th><th style="width: 100px; text-align: center;">Possuir</th></tr>';
    nailArts.forEach(art => {
        const row = nailArtsTable.insertRow();
        row.innerHTML = `<td>${art.name}</td><td style="text-align: center;"><input type="checkbox" id="${art.key}" ${saveData[art.key] ? 'checked' : ''} /></td>`;
    });

    const charmsTable = document.getElementById('charmsTable');
    charmsTable.innerHTML = '<tr><th>Charm</th><th style="width: 100px; text-align: center;">Possui</th><th style="width: 100px; text-align: center;">Equipado</th></tr>';
    charms.forEach((charm, index) => {
        const charmNum = index + 1;
        const row = charmsTable.insertRow();
        row.innerHTML = `
            <td>${charm}</td>
            <td style="text-align: center;"><input type="checkbox" id="gotCharm_${charmNum}" ${saveData['gotCharm_' + charmNum] ? 'checked' : ''} /></td>
            <td style="text-align: center;"><input type="checkbox" id="equippedCharm_${charmNum}" ${saveData['equippedCharm_' + charmNum] ? 'checked' : ''} /></td>
        `;
    });

    const itemsTable = document.getElementById('itemsTable');
    itemsTable.innerHTML = '<tr><th>Item</th><th style="width: 100px; text-align: center;">Possui</th></tr>';
    items.forEach(item => {
        const row = itemsTable.insertRow();
        row.innerHTML = `<td>${item.name}</td><td style="text-align: center;"><input type="checkbox" id="${item.key}" ${saveData[item.key] ? 'checked' : ''} /></td>`;
    });

    const bossesTable = document.getElementById('bossesTable');
    bossesTable.innerHTML = '<tr><th>Boss</th><th style="width: 100px; text-align: center;">Derrotado</th></tr>';
    bosses.forEach(boss => {
        const row = bossesTable.insertRow();
        row.innerHTML = `<td>${boss.name}</td><td style="text-align: center;"><input type="checkbox" id="${boss.key}" ${saveData[boss.key] ? 'checked' : ''} /></td>`;
    });

    const dreamWarriorsTable = document.getElementById('dreamWarriorsTable');
    dreamWarriorsTable.innerHTML = '<tr><th>Warrior</th><th style="width: 150px; text-align: center;">Derrotado (vezes)</th></tr>';
    dreamWarriors.forEach(warrior => {
        const row = dreamWarriorsTable.insertRow();
        row.innerHTML = `<td>${warrior.name}</td><td style="text-align: center;"><input type="number" id="${warrior.key}" min="0" max="10" value="${saveData[warrior.key] || 0}" /></td>`;
    });

    const npcsTable = document.getElementById('npcsTable');
    npcsTable.innerHTML = '<tr><th>NPC</th><th style="width: 100px; text-align: center;">Status</th></tr>';
    npcs.forEach(npc => {
        const row = npcsTable.insertRow();
        row.innerHTML = `<td>${npc.name}</td><td style="text-align: center;"><input type="checkbox" id="${npc.key}" ${saveData[npc.key] ? 'checked' : ''} /></td>`;
    });

    const mapsTable = document.getElementById('mapsTable');
    mapsTable.innerHTML = '<tr><th>Área</th><th style="width: 100px; text-align: center;">Desbloqueado</th></tr>';
    maps.forEach(map => {
        const row = mapsTable.insertRow();
        row.innerHTML = `<td>${map.name}</td><td style="text-align: center;"><input type="checkbox" id="${map.key}" ${saveData[map.key] ? 'checked' : ''} /></td>`;
    });
}

function saveFile() {
    if (!saveData) {
        alert('Nenhum save carregado!');
        return;
    }

    saveData.geo = parseInt(document.getElementById('geo').value);
    saveData.health = parseInt(document.getElementById('health').value);
    saveData.maxHealth = parseInt(document.getElementById('maxHealth').value);
    saveData.MPCharge = parseInt(document.getElementById('MPCharge').value);
    saveData.maxMP = parseInt(document.getElementById('maxMP').value);
    saveData.charmSlots = parseInt(document.getElementById('charmSlots').value);
    saveData.dreamOrbs = parseInt(document.getElementById('dreamOrbs').value);
    saveData.rancidEggs = parseInt(document.getElementById('rancidEggs').value);
    saveData.simpleKeys = parseInt(document.getElementById('simpleKeys').value);
    saveData.heartPieces = parseInt(document.getElementById('heartPieces').value);
    saveData.vesselFragments = parseInt(document.getElementById('vesselFragments').value);
    saveData.ore = parseInt(document.getElementById('ore').value);
    saveData.grubsCollected = parseInt(document.getElementById('grubsCollected2').value);
    saveData.completionPercentage = parseInt(document.getElementById('completionPercentage').value);
    saveData.playTime = parseFloat(document.getElementById('playTime').value) * 3600;
    saveData.grubRewards = parseInt(document.getElementById('grubRewards').value);

    saveData.nailDamage = parseInt(document.getElementById('nailDamage').value);
    saveData.nailsmithUpgrades = parseInt(document.getElementById('nailsmithUpgrades').value);
    saveData.fireballLevel = parseInt(document.getElementById('fireballLevel').value);
    saveData.quakeLevel = parseInt(document.getElementById('quakeLevel').value);
    saveData.screamLevel = parseInt(document.getElementById('screamLevel').value);

    movementAbilities.forEach(ability => {
        saveData[ability.key] = document.getElementById(ability.key).checked;
    });

    spells.forEach(spell => {
        saveData[spell.key] = document.getElementById(spell.key).checked;
    });

    nailArts.forEach(art => {
        saveData[art.key] = document.getElementById(art.key).checked;
    });

    charms.forEach((charm, index) => {
        const charmNum = index + 1;
        saveData['gotCharm_' + charmNum] = document.getElementById('gotCharm_' + charmNum).checked;
        saveData['equippedCharm_' + charmNum] = document.getElementById('equippedCharm_' + charmNum).checked;
    });

    items.forEach(item => {
        saveData[item.key] = document.getElementById(item.key).checked;
    });

    bosses.forEach(boss => {
        saveData[boss.key] = document.getElementById(boss.key).checked;
    });

    dreamWarriors.forEach(warrior => {
        saveData[warrior.key] = parseInt(document.getElementById(warrior.key).value);
    });

    npcs.forEach(npc => {
        saveData[npc.key] = document.getElementById(npc.key).checked;
    });

    maps.forEach(map => {
        saveData[map.key] = document.getElementById(map.key).checked;
    });

    const finalData = { playerData: saveData, sceneData: { geoRocks: [], persistentBoolItems: [], persistentIntItems: [] } };
    const jsonString = JSON.stringify(finalData);
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
}