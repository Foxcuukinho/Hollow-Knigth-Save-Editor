// remaining.js - NPCs, Mapas, Journal, Achievements, Godhome, Grimm, Respawn, Misc

// ==================== NPCs ====================
function loadNPCs(pd) {
    const metContainer = document.getElementById('npcsMet');
    metContainer.innerHTML = '';
    
    const npcsMet = [
        'metElderbug', 'metQuirrel', 'metRelicDealer', 'metRelicDealerShop', 'metCornifer', 
        'metIselda', 'metNailsmith', 'metCharmSlug', 'metLegEater', 'metCloth', 'metHornet',
        'metMoth', 'metBanker', 'metGiraffe', 'metHunter', 'metJinn', 'metEmilitia',
        'metNailmasterMato', 'metNailmasterSheo', 'metNailmasterOro', 'metQueen', 'metXun',
        'metStag', 'metGrimm', 'metBrum', 'metDivine'
    ];
    
    npcsMet.forEach(key => {
        createCheckboxField(metContainer, key.replace('met', 'Met '), key, pd[key]);
    });
    
    // Resgatados/Estados
    const rescued = [
        { label: 'Sly Rescued', key: 'slyRescued' },
        { label: 'Bretta Rescued', key: 'brettaRescued' },
        { label: 'Bretta Left Town', key: 'brettaLeftTown' },
        { label: 'Cloth In Town', key: 'clothInTown' },
        { label: 'Cloth Left Town', key: 'clothLeftTown' },
        { label: 'Cloth Killed', key: 'clothKilled' },
        { label: 'Saved Cloth', key: 'savedCloth' }
    ];
    
    rescued.forEach(r => {
        createCheckboxField(metContainer, r.label, r.key, pd[r.key]);
    });
    
    // Conversas
    const convoContainer = document.getElementById('npcsConvo');
    convoContainer.innerHTML = '';
    
    const conversations = [
        'elderbugReintro', 'elderbugHistory1', 'elderbugHistory2', 'elderbugHistory3',
        'quirrelCityEncountered', 'quirrelMinesEncountered', 'quirrelMantisEncountered',
        'quirrelSpaEncountered', 'quirrelArchiveEncountered', 'quirrelEpilogueCompleted',
        'corniferAtHome', 'hunterRoared', 'hunterRewardOffered', 'huntersMarkOffered',
        'dungDefenderAwoken', 'dungDefenderLeft', 'nailsmithKilled', 'nailsmithSpared'
    ];
    
    conversations.forEach(key => {
        createCheckboxField(convoContainer, key, key, pd[key]);
    });
    
    // Lojas
    const shopsContainer = document.getElementById('shops');
    shopsContainer.innerHTML = '';
    
    const shops = [
        { label: 'Opened Mapper Shop', key: 'openedMapperShop' },
        { label: 'Opened Sly Shop', key: 'openedSlyShop' },
        { label: 'Met Sly Shop', key: 'metSlyShop' },
        { label: 'Got Sly Charm', key: 'gotSlyCharm' },
        { label: 'Sly Shell Frag 1', key: 'slyShellFrag1' },
        { label: 'Sly Shell Frag 2', key: 'slyShellFrag2' },
        { label: 'Sly Shell Frag 3', key: 'slyShellFrag3' },
        { label: 'Sly Shell Frag 4', key: 'slyShellFrag4' },
        { label: 'Sly Vessel Frag 1', key: 'slyVesselFrag1' },
        { label: 'Sly Vessel Frag 2', key: 'slyVesselFrag2' },
        { label: 'Sly Vessel Frag 3', key: 'slyVesselFrag3' },
        { label: 'Sly Vessel Frag 4', key: 'slyVesselFrag4' },
        { label: 'Sly Notch 1', key: 'slyNotch1' },
        { label: 'Sly Notch 2', key: 'slyNotch2' }
    ];
    
    shops.forEach(shop => {
        createCheckboxField(shopsContainer, shop.label, shop.key, pd[shop.key]);
    });
}

function collectNPCs(pd) {
    const allNPCKeys = [
        'metElderbug', 'metQuirrel', 'metRelicDealer', 'metRelicDealerShop', 'metCornifer', 
        'metIselda', 'metNailsmith', 'metCharmSlug', 'metLegEater', 'metCloth', 'metHornet',
        'metMoth', 'metBanker', 'metGiraffe', 'metHunter', 'metJinn', 'metEmilitia',
        'metNailmasterMato', 'metNailmasterSheo', 'metNailmasterOro', 'metQueen', 'metXun',
        'metStag', 'metGrimm', 'metBrum', 'metDivine',
        'slyRescued', 'brettaRescued', 'brettaLeftTown', 'clothInTown', 'clothLeftTown', 'clothKilled', 'savedCloth',
        'elderbugReintro', 'elderbugHistory1', 'elderbugHistory2', 'elderbugHistory3',
        'quirrelCityEncountered', 'quirrelMinesEncountered', 'quirrelMantisEncountered',
        'quirrelSpaEncountered', 'quirrelArchiveEncountered', 'quirrelEpilogueCompleted',
        'corniferAtHome', 'hunterRoared', 'hunterRewardOffered', 'huntersMarkOffered',
        'dungDefenderAwoken', 'dungDefenderLeft', 'nailsmithKilled', 'nailsmithSpared',
        'openedMapperShop', 'openedSlyShop', 'metSlyShop', 'gotSlyCharm',
        'slyShellFrag1', 'slyShellFrag2', 'slyShellFrag3', 'slyShellFrag4',
        'slyVesselFrag1', 'slyVesselFrag2', 'slyVesselFrag3', 'slyVesselFrag4',
        'slyNotch1', 'slyNotch2'
    ];
    
    allNPCKeys.forEach(key => {
        pd[key] = getCheckboxValue(key);
    });
}

// ==================== MAPAS ====================
function loadMaps(pd) {
    const mapsContainer = document.getElementById('mapsOwned');
    mapsContainer.innerHTML = '';
    
    const maps = [
        'mapDirtmouth', 'mapCrossroads', 'mapGreenpath', 'mapFogCanyon', 'mapRoyalGardens',
        'mapFungalWastes', 'mapCity', 'mapWaterways', 'mapMines', 'mapDeepnest',
        'mapCliffs', 'mapOutskirts', 'mapRestingGrounds', 'mapAbyss'
    ];
    
    maps.forEach(key => {
        createCheckboxField(mapsContainer, key.replace('map', 'Map: '), key, pd[key]);
    });
    
    createCheckboxField(mapsContainer, 'Has Map', 'hasMap', pd.hasMap);
    createCheckboxField(mapsContainer, 'Map All Rooms', 'mapAllRooms', pd.mapAllRooms);
    
    // Pins
    const pinsContainer = document.getElementById('mapPins');
    pinsContainer.innerHTML = '';
    
    const pins = [
        'hasPin', 'hasPinBench', 'hasPinCocoon', 'hasPinDreamPlant', 'hasPinGuardian',
        'hasPinBlackEgg', 'hasPinShop', 'hasPinSpa', 'hasPinStag', 'hasPinTram',
        'hasPinGhost', 'hasPinGrub', 'hasMarker', 'hasMarker_r', 'hasMarker_b',
        'hasMarker_y', 'hasMarker_w'
    ];
    
    pins.forEach(key => {
        createCheckboxField(pinsContainer, key, key, pd[key]);
    });
    
    ['r', 'b', 'y', 'w'].forEach(color => {
        createNumberField(pinsContainer, `Spare Markers ${color.toUpperCase()}`, `spareMarkers_${color}`, pd[`spareMarkers_${color}`] || 6);
    });
    
    // Áreas Visitadas
    const areasContainer = document.getElementById('areasVisited');
    areasContainer.innerHTML = '';
    
    const areas = [
        'visitedDirtmouth', 'visitedCrossroads', 'visitedGreenpath', 'visitedFungus', 'visitedHive',
        'visitedCrossroadsInfected', 'visitedRuins', 'visitedMines', 'visitedRoyalGardens',
        'visitedFogCanyon', 'visitedDeepnest', 'visitedRestingGrounds', 'visitedWaterways',
        'visitedAbyss', 'visitedOutskirts', 'visitedWhitePalace', 'visitedCliffs',
        'visitedAbyssLower', 'visitedGodhome', 'visitedMines10'
    ];
    
    areas.forEach(key => {
        createCheckboxField(areasContainer, key, key, pd[key]);
    });
}

function collectMaps(pd) {
    const maps = [
        'mapDirtmouth', 'mapCrossroads', 'mapGreenpath', 'mapFogCanyon', 'mapRoyalGardens',
        'mapFungalWastes', 'mapCity', 'mapWaterways', 'mapMines', 'mapDeepnest',
        'mapCliffs', 'mapOutskirts', 'mapRestingGrounds', 'mapAbyss',
        'hasMap', 'mapAllRooms'
    ];
    maps.forEach(key => pd[key] = getCheckboxValue(key));
    
    const pins = [
        'hasPin', 'hasPinBench', 'hasPinCocoon', 'hasPinDreamPlant', 'hasPinGuardian',
        'hasPinBlackEgg', 'hasPinShop', 'hasPinSpa', 'hasPinStag', 'hasPinTram',
        'hasPinGhost', 'hasPinGrub', 'hasMarker', 'hasMarker_r', 'hasMarker_b',
        'hasMarker_y', 'hasMarker_w'
    ];
    pins.forEach(key => pd[key] = getCheckboxValue(key));
    
    ['r', 'b', 'y', 'w'].forEach(color => {
        pd[`spareMarkers_${color}`] = getNumberValue(`spareMarkers_${color}`);
    });
    
    const areas = [
        'visitedDirtmouth', 'visitedCrossroads', 'visitedGreenpath', 'visitedFungus', 'visitedHive',
        'visitedCrossroadsInfected', 'visitedRuins', 'visitedMines', 'visitedRoyalGardens',
        'visitedFogCanyon', 'visitedDeepnest', 'visitedRestingGrounds', 'visitedWaterways',
        'visitedAbyss', 'visitedOutskirts', 'visitedWhitePalace', 'visitedCliffs',
        'visitedAbyssLower', 'visitedGodhome', 'visitedMines10'
    ];
    areas.forEach(key => pd[key] = getCheckboxValue(key));
}

// ==================== JOURNAL ====================
function loadJournal(pd) {
    const statsContainer = document.getElementById('journalStats');
    statsContainer.innerHTML = '';
    
    const journalStats = [
        { label: 'Has Journal', key: 'hasJournal' },
        { label: 'Fill Journal', key: 'fillJournal' },
        { label: 'Last Journal Item', key: 'lastJournalItem', isNumber: true },
        { label: 'Seen Journal Msg', key: 'seenJournalMsg' },
        { label: 'Seen Hunter Msg', key: 'seenHunterMsg' }
    ];
    
    journalStats.forEach(stat => {
        if (stat.isNumber) {
            createNumberField(statsContainer, stat.label, stat.key, pd[stat.key]);
        } else {
            createCheckboxField(statsContainer, stat.label, stat.key, pd[stat.key]);
        }
    });
    
    // Inimigos - Parte 1
    loadEnemyKills(pd, 'enemiesKilled1', 0, 60);
    // Inimigos - Parte 2
    loadEnemyKills(pd, 'enemiesKilled2', 60, 130);
}

function loadEnemyKills(pd, containerId, start, end) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const enemies = Object.keys(pd).filter(key => key.startsWith('killed') && !key.includes('Kills'));
    
    enemies.slice(start, end).forEach(killedKey => {
        const enemyName = killedKey.replace('killed', '');
        const killsKey = `kills${enemyName}`;
        const newDataKey = `newData${enemyName}`;
        
        if (pd[killsKey] !== undefined) {
            const div = document.createElement('div');
            div.className = 'enemy-kill-row';
            div.innerHTML = `
                <div class="enemy-name">${enemyName}</div>
                <div class="enemy-input">
                    <label>Kills</label>
                    <input type="number" id="${killsKey}" value="${pd[killsKey] || 0}" min="0">
                </div>
                <div class="enemy-checkbox">
                    <label>Killed</label>
                    <input type="checkbox" id="${killedKey}" ${pd[killedKey] ? 'checked' : ''}>
                </div>
                <div class="enemy-checkbox">
                    <label>New Data</label>
                    <input type="checkbox" id="${newDataKey}" ${pd[newDataKey] ? 'checked' : ''}>
                </div>
            `;
            container.appendChild(div);
        }
    });
}

function collectJournal(pd) {
    pd.hasJournal = getCheckboxValue('hasJournal');
    pd.fillJournal = getCheckboxValue('fillJournal');
    pd.lastJournalItem = getNumberValue('lastJournalItem');
    pd.seenJournalMsg = getCheckboxValue('seenJournalMsg');
    pd.seenHunterMsg = getCheckboxValue('seenHunterMsg');
    
    // Coletar todos os enemies
    Object.keys(pd).forEach(key => {
        if (key.startsWith('killed')) {
            const el = document.getElementById(key);
            if (el) pd[key] = el.type === 'checkbox' ? el.checked : parseInt(el.value) || 0;
        }
        if (key.startsWith('kills') || key.startsWith('newData')) {
            const el = document.getElementById(key);
            if (el) pd[key] = el.type === 'checkbox' ? el.checked : parseInt(el.value) || 0;
        }
    });
}

// ==================== SCENES ====================
function loadScenes(pd) {
    const visitedArea = document.getElementById('scenesVisited');
    const mappedArea = document.getElementById('scenesMapped');
    
    visitedArea.value = (pd.scenesVisited || []).join('\n');
    mappedArea.value = (pd.scenesMapped || []).join('\n');
}

function collectScenes(pd) {
    const visitedArea = document.getElementById('scenesVisited');
    const mappedArea = document.getElementById('scenesMapped');
    
    pd.scenesVisited = visitedArea.value.split('\n').filter(s => s.trim());
    pd.scenesMapped = mappedArea.value.split('\n').filter(s => s.trim());
}

// ==================== ACHIEVEMENTS ====================
function loadAchievements(pd) {
    const container = document.getElementById('achievementsGeneral');
    container.innerHTML = '';
    
    const achievements = [
        'openedTown', 'openedCrossroads', 'openedGreenpath', 'openedRuins1', 'openedRuins2',
        'openedFungalWastes', 'openedRoyalGardens', 'openedRestingGrounds', 'openedDeepnest',
        'unlockedCompletionRate', 'backerCredits'
    ];
    
    achievements.forEach(key => {
        createCheckboxField(container, key, key, pd[key]);
    });
    
    const colosseumContainer = document.getElementById('colosseum');
    colosseumContainer.innerHTML = '';
    
    const colosseum = [
        { label: 'Colosseum Bronze Opened', key: 'colosseumBronzeOpened' },
        { label: 'Colosseum Bronze Completed', key: 'colosseumBronzeCompleted' },
        { label: 'Colosseum Silver Opened', key: 'colosseumSilverOpened' },
        { label: 'Colosseum Silver Completed', key: 'colosseumSilverCompleted' },
        { label: 'Colosseum Gold Opened', key: 'colosseumGoldOpened' },
        { label: 'Colosseum Gold Completed', key: 'colosseumGoldCompleted' },
        { label: 'Little Fool Met', key: 'littleFoolMet' },
        { label: 'Seen Colosseum Title', key: 'seenColosseumTitle' }
    ];
    
    colosseum.forEach(c => {
        createCheckboxField(colosseumContainer, c.label, c.key, pd[c.key]);
    });
}

function collectAchievements(pd) {
    const allKeys = [
        'openedTown', 'openedCrossroads', 'openedGreenpath', 'openedRuins1', 'openedRuins2',
        'openedFungalWastes', 'openedRoyalGardens', 'openedRestingGrounds', 'openedDeepnest',
        'unlockedCompletionRate', 'backerCredits',
        'colosseumBronzeOpened', 'colosseumBronzeCompleted', 'colosseumSilverOpened',
        'colosseumSilverCompleted', 'colosseumGoldOpened', 'colosseumGoldCompleted',
        'littleFoolMet', 'seenColosseumTitle'
    ];
    
    allKeys.forEach(key => pd[key] = getCheckboxValue(key));
}

// ==================== GODHOME ====================
function loadGodhome(pd) {
    const container = document.getElementById('godhomeGeneral');
    container.innerHTML = '';
    
    const godhome = [
        { label: 'Godseeker Unlocked', key: 'godseekerUnlocked' },
        { label: 'Has Godfinder', key: 'hasGodfinder' },
        { label: 'Unlocked New Boss Statue', key: 'unlockedNewBossStatue' },
        { label: 'Boss Rush Mode', key: 'bossRushMode' },
        { label: 'Entered GG Atrium', key: 'enteredGGAtrium' },
        { label: 'Ordeal Achieved', key: 'ordealAchieved' }
    ];
    
    godhome.forEach(g => {
        createCheckboxField(container, g.label, g.key, pd[g.key]);
    });
    
    // Boss Doors
    const doorsContainer = document.getElementById('bossDoors');
    doorsContainer.innerHTML = '';
    
    for (let tier = 1; tier <= 5; tier++) {
        const doorKey = `bossDoorStateTier${tier}`;
        const doorData = pd[doorKey] || {};
        
        const div = document.createElement('div');
        div.className = 'field-box';
        div.innerHTML = `
            <label style="font-weight: bold; margin-bottom: 10px; display: block;">🚪 Boss Door Tier ${tier}</label>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <div>
                    <input type="checkbox" id="${doorKey}_canUnlock" ${doorData.canUnlock ? 'checked' : ''}>
                    <label for="${doorKey}_canUnlock" style="font-size: 12px;">Can Unlock</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_unlocked" ${doorData.unlocked ? 'checked' : ''}>
                    <label for="${doorKey}_unlocked" style="font-size: 12px;">Unlocked</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_completed" ${doorData.completed ? 'checked' : ''}>
                    <label for="${doorKey}_completed" style="font-size: 12px;">Completed</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_allBindings" ${doorData.allBindings ? 'checked' : ''}>
                    <label for="${doorKey}_allBindings" style="font-size: 12px;">All Bindings</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_noHits" ${doorData.noHits ? 'checked' : ''}>
                    <label for="${doorKey}_noHits" style="font-size: 12px;">No Hits</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_boundNail" ${doorData.boundNail ? 'checked' : ''}>
                    <label for="${doorKey}_boundNail" style="font-size: 12px;">Bound Nail</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_boundShell" ${doorData.boundShell ? 'checked' : ''}>
                    <label for="${doorKey}_boundShell" style="font-size: 12px;">Bound Shell</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_boundCharms" ${doorData.boundCharms ? 'checked' : ''}>
                    <label for="${doorKey}_boundCharms" style="font-size: 12px;">Bound Charms</label>
                </div>
                <div>
                    <input type="checkbox" id="${doorKey}_boundSoul" ${doorData.boundSoul ? 'checked' : ''}>
                    <label for="${doorKey}_boundSoul" style="font-size: 12px;">Bound Soul</label>
                </div>
            </div>
        `;
        doorsContainer.appendChild(div);
    }
    
    // Boss Statues
    const statuesContainer = document.getElementById('bossStatues');
    statuesContainer.innerHTML = '';
    
    const statues = [
        'GruzMother', 'Vengefly', 'BroodingMawlek', 'FalseKnight', 'FailedChampion',
        'Hornet1', 'Hornet2', 'MegaMossCharger', 'MantisLords', 'Oblobbles',
        'GreyPrince', 'BrokenVessel', 'LostKin', 'Nosk', 'Flukemarm',
        'Collector', 'WatcherKnights', 'SoulMaster', 'SoulTyrant', 'GodTamer',
        'CrystalGuardian1', 'CrystalGuardian2', 'Uumuu', 'DungDefender', 'WhiteDefender',
        'HiveKnight', 'TraitorLord', 'Grimm', 'NightmareGrimm', 'HollowKnight',
        'ElderHu', 'Galien', 'Markoth', 'Marmu', 'NoEyes', 'Xero', 'Gorb',
        'Radiance', 'Sly', 'Nailmasters', 'MageKnight', 'Paintmaster', 'Zote'
    ];
    
    statues.forEach(statue => {
        const key = `statueState${statue}`;
        const statueData = pd[key] || {};
        
        const div = document.createElement('div');
        div.className = 'statue-item';
        div.innerHTML = `
            <div class="statue-name">🗿 ${statue}</div>
            <div class="statue-checks">
                <div class="statue-check">
                    <label>Seen</label>
                    <input type="checkbox" id="${key}_hasBeenSeen" ${statueData.hasBeenSeen ? 'checked' : ''}>
                </div>
                <div class="statue-check">
                    <label>Unlocked</label>
                    <input type="checkbox" id="${key}_isUnlocked" ${statueData.isUnlocked ? 'checked' : ''}>
                </div>
                <div class="statue-check">
                    <label>Tier 1</label>
                    <input type="checkbox" id="${key}_completedTier1" ${statueData.completedTier1 ? 'checked' : ''}>
                </div>
                <div class="statue-check">
                    <label>Tier 2</label>
                    <input type="checkbox" id="${key}_completedTier2" ${statueData.completedTier2 ? 'checked' : ''}>
                </div>
                <div class="statue-check">
                    <label>Tier 3</label>
                    <input type="checkbox" id="${key}_completedTier3" ${statueData.completedTier3 ? 'checked' : ''}>
                </div>
                <div class="statue-check">
                    <label>Seen T3</label>
                    <input type="checkbox" id="${key}_seenTier3Unlock" ${statueData.seenTier3Unlock ? 'checked' : ''}>
                </div>
            </div>
        `;
        statuesContainer.appendChild(div);
    });
    
    // Grimm NPCs
    const grimmNPCsContainer = document.getElementById('grimmNPCs');
    if (grimmNPCsContainer) {
        grimmNPCsContainer.innerHTML = '';
        const grimmNPCs = [
            { label: 'Nymm In Town', key: 'nymmInTown' },
            { label: 'Divine In Town', key: 'divineInTown' },
            { label: 'Troupe In Town', key: 'troupeInTown' }
        ];
        grimmNPCs.forEach(npc => {
            createCheckboxField(grimmNPCsContainer, npc.label, npc.key, pd[npc.key]);
        });
    }
}

function collectGodhome(pd) {
    pd.godseekerUnlocked = getCheckboxValue('godseekerUnlocked');
    pd.hasGodfinder = getCheckboxValue('hasGodfinder');
    pd.unlockedNewBossStatue = getCheckboxValue('unlockedNewBossStatue');
    pd.bossRushMode = getCheckboxValue('bossRushMode');
    pd.enteredGGAtrium = getCheckboxValue('enteredGGAtrium');
    pd.ordealAchieved = getCheckboxValue('ordealAchieved');
    
    // Boss Doors
    for (let tier = 1; tier <= 5; tier++) {
        const doorKey = `bossDoorStateTier${tier}`;
        if (!pd[doorKey]) pd[doorKey] = {};
        
        pd[doorKey].canUnlock = getCheckboxValue(`${doorKey}_canUnlock`);
        pd[doorKey].unlocked = getCheckboxValue(`${doorKey}_unlocked`);
        pd[doorKey].completed = getCheckboxValue(`${doorKey}_completed`);
        pd[doorKey].allBindings = getCheckboxValue(`${doorKey}_allBindings`);
        pd[doorKey].noHits = getCheckboxValue(`${doorKey}_noHits`);
        pd[doorKey].boundNail = getCheckboxValue(`${doorKey}_boundNail`);
        pd[doorKey].boundShell = getCheckboxValue(`${doorKey}_boundShell`);
        pd[doorKey].boundCharms = getCheckboxValue(`${doorKey}_boundCharms`);
        pd[doorKey].boundSoul = getCheckboxValue(`${doorKey}_boundSoul`);
        pd[doorKey].viewedBossSceneCompletions = pd[doorKey].viewedBossSceneCompletions || [];
    }
    
    // Boss Statues
    const statues = [
        'GruzMother', 'Vengefly', 'BroodingMawlek', 'FalseKnight', 'FailedChampion',
        'Hornet1', 'Hornet2', 'MegaMossCharger', 'MantisLords', 'Oblobbles',
        'GreyPrince', 'BrokenVessel', 'LostKin', 'Nosk', 'Flukemarm',
        'Collector', 'WatcherKnights', 'SoulMaster', 'SoulTyrant', 'GodTamer',
        'CrystalGuardian1', 'CrystalGuardian2', 'Uumuu', 'DungDefender', 'WhiteDefender',
        'HiveKnight', 'TraitorLord', 'Grimm', 'NightmareGrimm',
        'HiveKnight', 'TraitorLord', 'Grimm', 'NightmareGrimm', 'HollowKnight',
        'ElderHu', 'Galien', 'Markoth', 'Marmu', 'NoEyes', 'Xero', 'Gorb',
        'Radiance', 'Sly', 'Nailmasters', 'MageKnight', 'Paintmaster', 'Zote'
    ];
    
    statues.forEach(statue => {
        const key = `statueState${statue}`;
        if (!pd[key]) pd[key] = {};
        
        pd[key].hasBeenSeen = getCheckboxValue(`${key}_hasBeenSeen`);
        pd[key].isUnlocked = getCheckboxValue(`${key}_isUnlocked`);
        pd[key].completedTier1 = getCheckboxValue(`${key}_completedTier1`);
        pd[key].completedTier2 = getCheckboxValue(`${key}_completedTier2`);
        pd[key].completedTier3 = getCheckboxValue(`${key}_completedTier3`);
        pd[key].seenTier3Unlock = getCheckboxValue(`${key}_seenTier3Unlock`);
        pd[key].usingAltVersion = pd[key].usingAltVersion || false;
    });
    
    // Grimm NPCs
    pd.nymmInTown = getCheckboxValue('nymmInTown');
    pd.divineInTown = getCheckboxValue('divineInTown');
    pd.troupeInTown = getCheckboxValue('troupeInTown');
}

// ==================== GRIMM ====================
function loadGrimm(pd) {
    const container = document.getElementById('grimmSection');
    container.innerHTML = '';
    
    const grimm = [
        { label: '🔥 Flames Collected', key: 'flamesCollected', isNumber: true },
        { label: '🔥 Flames Required', key: 'flamesRequired', isNumber: true },
        { label: '🎪 Troupe In Town', key: 'troupeInTown' },
        { label: '💎 Divine In Town', key: 'divineInTown' },
        { label: '🐛 Grimmchild Level', key: 'grimmChildLevel', isNumber: true },
        { label: '🎭 Met Grimm', key: 'metGrimm' },
        { label: '⚔️ Fought Grimm', key: 'foughtGrimm' },
        { label: '💀 Defeated Nightmare Grimm', key: 'defeatedNightmareGrimm' },
        { label: '🌙 Grimmchild Awoken', key: 'grimmchildAwoken' },
        { label: '🔥 Got Brumm Flame', key: 'gotBrummsFlame' },
        { label: '💥 Brumm Broke Brazier', key: 'brummBrokeBrazier' },
        { label: '🏮 Destroyed Nightmare Lantern', key: 'destroyedNightmareLantern' },
        { label: '🔔 Got Grimm Notch', key: 'gotGrimmNotch' },
        { label: '🏮 Nightmare Lantern Appeared', key: 'nightmareLanternAppeared' },
        { label: '🔥 Nightmare Lantern Lit', key: 'nightmareLanternLit' }
    ];
    
    grimm.forEach(g => {
        if (g.isNumber) {
            createNumberField(container, g.label, g.key, pd[g.key]);
        } else {
            createCheckboxField(container, g.label, g.key, pd[g.key]);
        }
    });
}

function collectGrimm(pd) {
    pd.flamesCollected = getNumberValue('flamesCollected');
    pd.flamesRequired = getNumberValue('flamesRequired');
    pd.troupeInTown = getCheckboxValue('troupeInTown');
    pd.divineInTown = getCheckboxValue('divineInTown');
    pd.grimmChildLevel = getNumberValue('grimmChildLevel');
    pd.metGrimm = getCheckboxValue('metGrimm');
    pd.foughtGrimm = getCheckboxValue('foughtGrimm');
    pd.defeatedNightmareGrimm = getCheckboxValue('defeatedNightmareGrimm');
    pd.grimmchildAwoken = getCheckboxValue('grimmchildAwoken');
    pd.gotBrummsFlame = getCheckboxValue('gotBrummsFlame');
    pd.brummBrokeBrazier = getCheckboxValue('brummBrokeBrazier');
    pd.destroyedNightmareLantern = getCheckboxValue('destroyedNightmareLantern');
    pd.gotGrimmNotch = getCheckboxValue('gotGrimmNotch');
    pd.nightmareLanternAppeared = getCheckboxValue('nightmareLanternAppeared');
    pd.nightmareLanternLit = getCheckboxValue('nightmareLanternLit');
}

// ==================== RESPAWN ====================
function loadRespawn(pd) {
    const respawnContainer = document.getElementById('respawnSection');
    respawnContainer.innerHTML = '';
    
    const respawnFields = [
        { label: 'At Bench', key: 'atBench' },
        { label: 'Respawn Scene', key: 'respawnScene', isText: true, value: pd.respawnScene },
        { label: 'Map Zone', key: 'mapZone', isNumber: true, value: pd.mapZone },
        { label: 'Respawn Marker Name', key: 'respawnMarkerName', isText: true, value: pd.respawnMarkerName },
        { label: 'Respawn Type', key: 'respawnType', isNumber: true, value: pd.respawnType },
        { label: 'Respawn Facing Right', key: 'respawnFacingRight' },
        { label: 'Hazard Respawn Facing Right', key: 'hazardRespawnFacingRight' }
    ];
    
    respawnFields.forEach(field => {
        if (field.isText) {
            const div = document.createElement('div');
            div.className = 'field-box';
            div.innerHTML = `<label>${field.label}</label><input type="text" id="${field.key}" value="${field.value || ''}" style="width: 100%; padding: 8px; background: rgba(0,0,0,0.3); border: 1px solid #444; border-radius: 4px; color: #fff;">`;
            respawnContainer.appendChild(div);
        } else if (field.isNumber) {
            createNumberField(respawnContainer, field.label, field.key, field.value);
        } else {
            createCheckboxField(respawnContainer, field.label, field.key, pd[field.key]);
        }
    });
    
    // Shade
    const shadeContainer = document.getElementById('shadeSection');
    shadeContainer.innerHTML = '';
    
    const shadeFields = [
        { label: 'Shade Scene', key: 'shadeScene', isText: true, value: pd.shadeScene },
        { label: 'Shade Map Zone', key: 'shadeMapZone', isText: true, value: pd.shadeMapZone },
        { label: 'Shade Position X', key: 'shadePositionX', isNumber: true, value: pd.shadePositionX },
        { label: 'Shade Position Y', key: 'shadePositionY', isNumber: true, value: pd.shadePositionY },
        { label: 'Shade Health', key: 'shadeHealth', isNumber: true, value: pd.shadeHealth },
        { label: 'Shade MP', key: 'shadeMP', isNumber: true, value: pd.shadeMP },
        { label: 'Shade Fireball Level', key: 'shadeFireballLevel', isNumber: true, value: pd.shadeFireballLevel }
    ];
    
    shadeFields.forEach(field => {
        if (field.isText) {
            const div = document.createElement('div');
            div.className = 'field-box';
            div.innerHTML = `<label>${field.label}</label><input type="text" id="${field.key}" value="${field.value || ''}" style="width: 100%; padding: 8px; background: rgba(0,0,0,0.3); border: 1px solid #444; border-radius: 4px; color: #fff;">`;
            shadeContainer.appendChild(div);
        } else if (field.isNumber) {
            createNumberField(shadeContainer, field.label, field.key, field.value);
        } else {
            createCheckboxField(shadeContainer, field.label, field.key, pd[field.key]);
        }
    });
    
    // White Palace keys (checkboxes)
    const wpKeys = [
        'whitePalaceOrb_1', 'whitePalaceOrb_2', 'whitePalaceOrb_3', 'whitePalaceSecretRoomVisited',
        'whitePalaceMidWarp', 'whitePalace05_lever', 'openedBlackEggDoor', 'openedBlackEggPath',
        'gotKingFragment', 'gotQueenFragment', 'duskKnightDefeated'
    ];
    wpKeys.forEach(key => pd[key] = getCheckboxValue(key));
}