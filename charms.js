// charms.js - Sistema de Charms

const CHARMS_LIST = [
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

function loadCharms(pd) {
    const container = document.getElementById('charmsSection');
    container.innerHTML = '';
    
    CHARMS_LIST.forEach((charmName, index) => {
        const charmNum = index + 1;
        const div = document.createElement('div');
        div.className = 'charm-item';
        
        const gotKey = `gotCharm_${charmNum}`;
        const equippedKey = `equippedCharm_${charmNum}`;
        const costKey = `charmCost_${charmNum}`;
        const newKey = `newCharm_${charmNum}`;
        
        // Charms frágeis podem estar quebrados
        let brokenHTML = '';
        if (charmNum === 23 || charmNum === 24 || charmNum === 25) {
            const brokenKey = `brokenCharm_${charmNum}`;
            brokenHTML = `
                <div class="charm-check">
                    <label>Quebrado</label>
                    <input type="checkbox" id="${brokenKey}" ${pd[brokenKey] ? 'checked' : ''}>
                </div>
            `;
        }
        
        div.innerHTML = `
            <div class="charm-name">${charmNum}. ${charmName}</div>
            <div class="charm-check">
                <label>Possui</label>
                <input type="checkbox" id="${gotKey}" ${pd[gotKey] ? 'checked' : ''}>
            </div>
            <div class="charm-check">
                <label>Equipado</label>
                <input type="checkbox" id="${equippedKey}" ${pd[equippedKey] ? 'checked' : ''}>
            </div>
            <div class="charm-check">
                <label>Novo</label>
                <input type="checkbox" id="${newKey}" ${pd[newKey] ? 'checked' : ''}>
            </div>
            <div class="charm-check">
                <label>Custo</label>
                <input type="number" id="${costKey}" value="${pd[costKey] || 0}" min="0" max="5" style="width: 50px;">
            </div>
            ${brokenHTML}
        `;
        
        container.appendChild(div);
    });
    
    // Configurações de Charms
    const settingsContainer = document.getElementById('charmSettings');
    settingsContainer.innerHTML = '';
    
    const charmSettings = [
        { label: '💎 Has Charm', key: 'hasCharm' },
        { label: '📢 Charm Bench Msg', key: 'charmBenchMsg' },
        { label: '🔄 Can Overcharm', key: 'canOvercharm' },
        { label: '⚠️ Overcharmed', key: 'overcharmed' },
        { label: '💎 Charms Owned', key: 'charmsOwned', value: pd.charmsOwned },
        { label: '🔴 Royal Charm State', key: 'royalCharmState', value: pd.royalCharmState },
        { label: '❤️ Fragile Heart Unbreakable', key: 'fragileHealth_unbreakable' },
        { label: '💰 Fragile Greed Unbreakable', key: 'fragileGreed_unbreakable' },
        { label: '⚔️ Fragile Strength Unbreakable', key: 'fragileStrength_unbreakable' }
    ];
    
    charmSettings.forEach(setting => {
        if (typeof setting.value === 'number' || setting.value !== undefined) {
            createNumberField(settingsContainer, setting.label, setting.key, setting.value || 0);
        } else {
            createCheckboxField(settingsContainer, setting.label, setting.key, pd[setting.key]);
        }
    });
}

function collectCharms(pd) {
    // Coletar todos os 40 charms
    for (let i = 1; i <= 40; i++) {
        pd[`gotCharm_${i}`] = getCheckboxValue(`gotCharm_${i}`);
        pd[`equippedCharm_${i}`] = getCheckboxValue(`equippedCharm_${i}`);
        pd[`newCharm_${i}`] = getCheckboxValue(`newCharm_${i}`);
        pd[`charmCost_${i}`] = getNumberValue(`charmCost_${i}`);
        
        // Charms frágeis quebrados
        if (i === 23 || i === 24 || i === 25) {
            pd[`brokenCharm_${i}`] = getCheckboxValue(`brokenCharm_${i}`);
        }
    }
    
    // Configurações
    pd.hasCharm = getCheckboxValue('hasCharm');
    pd.charmBenchMsg = getCheckboxValue('charmBenchMsg');
    pd.canOvercharm = getCheckboxValue('canOvercharm');
    pd.overcharmed = getCheckboxValue('overcharmed');
    pd.charmsOwned = getNumberValue('charmsOwned');
    pd.royalCharmState = getNumberValue('royalCharmState');
    pd.fragileHealth_unbreakable = getCheckboxValue('fragileHealth_unbreakable');
    pd.fragileGreed_unbreakable = getCheckboxValue('fragileGreed_unbreakable');
    pd.fragileStrength_unbreakable = getCheckboxValue('fragileStrength_unbreakable');
    
    // equippedCharms array
    pd.equippedCharms = [];
    for (let i = 1; i <= 40; i++) {
        if (pd[`equippedCharm_${i}`]) {
            pd.equippedCharms.push(i);
        }
    }
}