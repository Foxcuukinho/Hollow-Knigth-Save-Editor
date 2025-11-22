// items-bosses.js - Itens, Bosses e Grubs

// ==================== ITENS ====================
function loadItems(pd) {
    const container = document.getElementById('keyItems');
    container.innerHTML = '';
    
    const keyItems = [
        { label: '🖊️ Has Quill', key: 'hasQuill' },
        { label: '🏛️ Has City Key', key: 'hasCityKey' },
        { label: '🔑 Has Sly Key', key: 'hasSlykey' },
        { label: '🔑 Gave Sly Key', key: 'gaveSlykey' },
        { label: '⚪ Has White Key', key: 'hasWhiteKey' },
        { label: '⚪ Used White Key', key: 'usedWhiteKey' },
        { label: '💕 Has Mender Key', key: 'hasMenderKey' },
        { label: '💧 Has Waterways Key', key: 'hasWaterwaysKey' },
        { label: '🛁 Has Spa Key', key: 'hasSpaKey' },
        { label: '💕 Has Love Key', key: 'hasLoveKey' },
        { label: '👻 Found Ghost Coin', key: 'foundGhostCoin' },
        { label: '🏹 Has Hunter\'s Mark', key: 'hasHuntersMark' },
        { label: '🔑 Got Lurker Key', key: 'gotLurkerKey' },
        { label: '🔔 Notch Shroom Ogres', key: 'notchShroomOgres' },
        { label: '🔔 Notch Fog Canyon', key: 'notchFogCanyon' }
    ];
    
    keyItems.forEach(item => {
        createCheckboxField(container, item.label, item.key, pd[item.key]);
    });
    
    // Trinkets (Relíquias)
    const trinketsContainer = document.getElementById('trinkets');
    trinketsContainer.innerHTML = '';
    
    for (let i = 1; i <= 4; i++) {
        const fields = [
            { label: `💎 Trinket ${i}`, key: `trinket${i}`, value: pd[`trinket${i}`] },
            { label: `Found Trinket ${i}`, key: `foundTrinket${i}`, isCheck: true },
            { label: `No Trinket ${i}`, key: `noTrinket${i}`, isCheck: true },
            { label: `Sold Trinket ${i}`, key: `soldTrinket${i}`, value: pd[`soldTrinket${i}`] }
        ];
        
        fields.forEach(field => {
            if (field.isCheck) {
                createCheckboxField(trinketsContainer, field.label, field.key, pd[field.key]);
            } else {
                createNumberField(trinketsContainer, field.label, field.key, field.value);
            }
        });
    }
}

function collectItems(pd) {
    pd.hasQuill = getCheckboxValue('hasQuill');
    pd.hasCityKey = getCheckboxValue('hasCityKey');
    pd.hasSlykey = getCheckboxValue('hasSlykey');
    pd.gaveSlykey = getCheckboxValue('gaveSlykey');
    pd.hasWhiteKey = getCheckboxValue('hasWhiteKey');
    pd.usedWhiteKey = getCheckboxValue('usedWhiteKey');
    pd.hasMenderKey = getCheckboxValue('hasMenderKey');
    pd.hasWaterwaysKey = getCheckboxValue('hasWaterwaysKey');
    pd.hasSpaKey = getCheckboxValue('hasSpaKey');
    pd.hasLoveKey = getCheckboxValue('hasLoveKey');
    pd.foundGhostCoin = getCheckboxValue('foundGhostCoin');
    pd.hasHuntersMark = getCheckboxValue('hasHuntersMark');
    pd.gotLurkerKey = getCheckboxValue('gotLurkerKey');
    pd.notchShroomOgres = getCheckboxValue('notchShroomOgres');
    pd.notchFogCanyon = getCheckboxValue('notchFogCanyon');
    
    for (let i = 1; i <= 4; i++) {
        pd[`trinket${i}`] = getNumberValue(`trinket${i}`);
        pd[`foundTrinket${i}`] = getCheckboxValue(`foundTrinket${i}`);
        pd[`noTrinket${i}`] = getCheckboxValue(`noTrinket${i}`);
        pd[`soldTrinket${i}`] = getNumberValue(`soldTrinket${i}`);
    }
}

// ==================== BOSSES ====================
function loadBosses(pd) {
    const mainContainer = document.getElementById('mainBosses');
    mainContainer.innerHTML = '';
    
    const mainBosses = [
        { label: '🪲 False Knight Defeated', key: 'falseKnightDefeated' },
        { label: '🪲 Failed Champion Defeated', key: 'falseKnightDreamDefeated' },
        { label: '🪲 False Knight Orbs Collected', key: 'falseKnightOrbsCollected' },
        { label: '🕷️ Mawlek Defeated', key: 'mawlekDefeated' },
        { label: '🐝 Giant Buzzer Defeated', key: 'giantBuzzerDefeated' },
        { label: '🪰 Giant Fly Defeated', key: 'giantFlyDefeated' },
        { label: '🦗 Hornet 1 Defeated', key: 'hornet1Defeated' },
        { label: '🦗 Hornet Outskirts Defeated', key: 'hornetOutskirtsDefeated' },
        { label: '📚 Collector Defeated', key: 'collectorDefeated' },
        { label: '🔮 Mage Lord Dream Defeated', key: 'mageLordDreamDefeated' },
        { label: '🔮 Mage Lord Orbs Collected', key: 'mageLordOrbsCollected' },
        { label: '👻 Infected Knight Dream Defeated', key: 'infectedKnightDreamDefeated' },
        { label: '👻 Infected Knight Orbs Collected', key: 'infectedKnightOrbsCollected' },
        { label: '⚔️ Defeated Mantis Lords', key: 'defeatedMantisLords' },
        { label: '💩 Defeated Dung Defender', key: 'defeatedDungDefender' },
        { label: '⚪ White Defender Defeated', key: 'whiteDefenderDefeated' },
        { label: '⚪ White Defender Orbs Collected', key: 'whiteDefenderOrbsCollected' },
        { label: '⚪ White Defender Defeats', key: 'whiteDefenderDefeats', isNumber: true },
        { label: '🪱 Fluke Mother Defeated', key: 'flukeMotherDefeated' },
        { label: '💎 Defeated Mega Beam Miner', key: 'defeatedMegaBeamMiner' },
        { label: '🐝 Killed Hive Knight', key: 'killedHiveKnight' },
        { label: '🗡️ Killed Traitor Lord', key: 'killedTraitorLord' },
        { label: '⚔️ Killed Hollow Knight', key: 'killedHollowKnight' },
        { label: '☀️ Killed Final Boss (Radiance)', key: 'killedFinalBoss' },
        { label: '🎪 Grey Prince Defeats', key: 'greyPrinceDefeats', isNumber: true },
        { label: '🎪 Grey Prince Defeated', key: 'greyPrinceDefeated' },
        { label: '🎪 Grey Prince Orbs Collected', key: 'greyPrinceOrbsCollected' },
        { label: '🛡️ Blocker 1 Defeated', key: 'blocker1Defeated' },
        { label: '🛡️ Blocker 2 Defeated', key: 'blocker2Defeated' }
    ];
    
    mainBosses.forEach(boss => {
        if (boss.isNumber) {
            createNumberField(mainContainer, boss.label, boss.key, pd[boss.key]);
        } else {
            createCheckboxField(mainContainer, boss.label, boss.key, pd[boss.key]);
        }
    });
    
    // Dream Warriors
    const dreamContainer = document.getElementById('dreamWarriors');
    dreamContainer.innerHTML = '';
    
    const dreamWarriors = [
        { name: 'Gorb', key: 'aladarSlug' },
        { name: 'Xero', key: 'xero' },
        { name: 'Elder Hu', key: 'elderHu' },
        { name: 'Marmu', key: 'mumCaterpillar' },
        { name: 'No Eyes', key: 'noEyes' },
        { name: 'Markoth', key: 'markoth' },
        { name: 'Galien', key: 'galien' }
    ];
    
    dreamWarriors.forEach(warrior => {
        const div = document.createElement('div');
        div.className = 'field-box';
        div.innerHTML = `
            <label>👻 ${warrior.name}</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div>
                    <label style="font-size: 11px;">Defeated</label>
                    <input type="number" id="${warrior.key}Defeated" value="${pd[`${warrior.key}Defeated`] || 0}" min="0" max="10">
                </div>
                <div>
                    <label style="font-size: 11px;">Encountered</label>
                    <input type="checkbox" id="${warrior.key.toUpperCase()}_encountered" ${pd[`${warrior.key.toUpperCase()}_encountered`] ? 'checked' : ''}>
                </div>
            </div>
            <div style="margin-top: 10px;">
                <label style="font-size: 11px;">Pinned</label>
                <input type="checkbox" id="${warrior.key}Pinned" ${pd[`${warrior.key}Pinned`] ? 'checked' : ''}>
            </div>
        `;
        dreamContainer.appendChild(div);
    });
    
    // Dream Bosses
    const dreamBossesContainer = document.getElementById('dreamBosses');
    dreamBossesContainer.innerHTML = '';
    
    const dreamBosses = [
        { label: '🪲 Infected Knight Encountered', key: 'infectedKnightEncountered' },
        { label: '🔮 Mage Lord Encountered', key: 'mageLordEncountered' },
        { label: '🔮 Mage Lord Encountered 2', key: 'mageLordEncountered_2' },
        { label: '🔮 Mage Lord Defeated', key: 'mageLordDefeated' },
        { label: '🧚 Mega Moss Charger Encountered', key: 'megaMossChargerEncountered' },
        { label: '🧚 Mega Moss Charger Defeated', key: 'megaMossChargerDefeated' },
        { label: '🦀 Defeated Mega Jelly', key: 'defeatedMegaJelly' },
        { label: '🦀 Encountered Mega Jelly', key: 'encounteredMegaJelly' },
        { label: '💩 Dung Defender Encountered Ready', key: 'dungDefenderEncounterReady' },
        { label: '🪱 Fluke Mother Encountered', key: 'flukeMotherEncountered' }
    ];
    
    dreamBosses.forEach(boss => {
        createCheckboxField(dreamBossesContainer, boss.label, boss.key, pd[boss.key]);
    });
}

function collectBosses(pd) {
    // Main Bosses
    pd.falseKnightDefeated = getCheckboxValue('falseKnightDefeated');
    pd.falseKnightDreamDefeated = getCheckboxValue('falseKnightDreamDefeated');
    pd.falseKnightOrbsCollected = getCheckboxValue('falseKnightOrbsCollected');
    pd.mawlekDefeated = getCheckboxValue('mawlekDefeated');
    pd.giantBuzzerDefeated = getCheckboxValue('giantBuzzerDefeated');
    pd.giantFlyDefeated = getCheckboxValue('giantFlyDefeated');
    pd.hornet1Defeated = getCheckboxValue('hornet1Defeated');
    pd.hornetOutskirtsDefeated = getCheckboxValue('hornetOutskirtsDefeated');
    pd.collectorDefeated = getCheckboxValue('collectorDefeated');
    pd.mageLordDreamDefeated = getCheckboxValue('mageLordDreamDefeated');
    pd.mageLordOrbsCollected = getCheckboxValue('mageLordOrbsCollected');
    pd.infectedKnightDreamDefeated = getCheckboxValue('infectedKnightDreamDefeated');
    pd.infectedKnightOrbsCollected = getCheckboxValue('infectedKnightOrbsCollected');
    pd.defeatedMantisLords = getCheckboxValue('defeatedMantisLords');
    pd.defeatedDungDefender = getCheckboxValue('defeatedDungDefender');
    pd.whiteDefenderDefeated = getCheckboxValue('whiteDefenderDefeated');
    pd.whiteDefenderOrbsCollected = getCheckboxValue('whiteDefenderOrbsCollected');
    pd.whiteDefenderDefeats = getNumberValue('whiteDefenderDefeats');
    pd.flukeMotherDefeated = getCheckboxValue('flukeMotherDefeated');
    pd.defeatedMegaBeamMiner = getCheckboxValue('defeatedMegaBeamMiner');
    pd.killedHiveKnight = getCheckboxValue('killedHiveKnight');
    pd.killedTraitorLord = getCheckboxValue('killedTraitorLord');
    pd.killedHollowKnight = getCheckboxValue('killedHollowKnight');
    pd.killedFinalBoss = getCheckboxValue('killedFinalBoss');
    pd.greyPrinceDefeats = getNumberValue('greyPrinceDefeats');
    pd.greyPrinceDefeated = getCheckboxValue('greyPrinceDefeated');
    pd.greyPrinceOrbsCollected = getCheckboxValue('greyPrinceOrbsCollected');
    pd.blocker1Defeated = getCheckboxValue('blocker1Defeated');
    pd.blocker2Defeated = getCheckboxValue('blocker2Defeated');
    
    // Dream Warriors
    const warriors = ['aladarSlug', 'xero', 'elderHu', 'mumCaterpillar', 'noEyes', 'markoth', 'galien'];
    warriors.forEach(warrior => {
        pd[`${warrior}Defeated`] = getNumberValue(`${warrior}Defeated`);
        pd[`${warrior.toUpperCase()}_encountered`] = getCheckboxValue(`${warrior.toUpperCase()}_encountered`);
        pd[`${warrior}Pinned`] = getCheckboxValue(`${warrior}Pinned`);
    });
    
    // Dream Bosses
    pd.infectedKnightEncountered = getCheckboxValue('infectedKnightEncountered');
    pd.mageLordEncountered = getCheckboxValue('mageLordEncountered');
    pd.mageLordEncountered_2 = getCheckboxValue('mageLordEncountered_2');
    pd.mageLordDefeated = getCheckboxValue('mageLordDefeated');
    pd.megaMossChargerEncountered = getCheckboxValue('megaMossChargerEncountered');
    pd.megaMossChargerDefeated = getCheckboxValue('megaMossChargerDefeated');
    pd.defeatedMegaJelly = getCheckboxValue('defeatedMegaJelly');
    pd.encounteredMegaJelly = getCheckboxValue('encounteredMegaJelly');
    pd.dungDefenderEncounterReady = getCheckboxValue('dungDefenderEncounterReady');
    pd.flukeMotherEncountered = getCheckboxValue('flukeMotherEncountered');
}

// ==================== GRUBS ====================
function loadGrubs(pd) {
    const container = document.getElementById('grubsSection');
    container.innerHTML = '';
    
    const grubFields = [
        { label: '🐛 Grubs Collected', key: 'grubsCollected', value: pd.grubsCollected },
        { label: '🎁 Grub Rewards', key: 'grubRewards', value: pd.grubRewards },
        { label: '🏆 Final Grub Reward Collected', key: 'finalGrubRewardCollected' },
        { label: '👑 Fat Grub King', key: 'fatGrubKing' }
    ];
    
    grubFields.forEach(field => {
        if (typeof field.value === 'number') {
            createNumberField(container, field.label, field.key, field.value, 0, field.key === 'grubsCollected' ? 46 : 10);
        } else {
            createCheckboxField(container, field.label, field.key, pd[field.key]);
        }
    });
}

function collectGrubs(pd) {
    pd.grubsCollected = getNumberValue('grubsCollected');
    pd.grubRewards = getNumberValue('grubRewards');
    pd.finalGrubRewardCollected = getCheckboxValue('finalGrubRewardCollected');
    pd.fatGrubKing = getCheckboxValue('fatGrubKing');
}