// stats.js - Estatísticas e Progresso COMPLETO

window.loadBasicStats = function(pd) {
    const container = document.getElementById('basicStats');
    container.innerHTML = '';
    
    const stats = [
        { label: '💰 Geo', key: 'geo', value: pd.geo },
        { label: '❤️ Vida Atual', key: 'health', value: pd.health },
        { label: '❤️ Vida Máxima', key: 'maxHealth', value: pd.maxHealth, min: 1, max: 9 },
        { label: '❤️ Vida Base', key: 'maxHealthBase', value: pd.maxHealthBase, min: 1, max: 9 },
        { label: '💙 Vida Azul', key: 'healthBlue', value: pd.healthBlue },
        { label: '💙 Joni Health Blue', key: 'joniHealthBlue', value: pd.joniHealthBlue },
        { label: '❤️ Pedaços de Coração', key: 'heartPieces', value: pd.heartPieces, min: 0, max: 4 },
        { label: '❤️ Vida Anterior', key: 'prevHealth', value: pd.prevHealth },
        { label: '🛡️ Blocker Hits', key: 'blockerHits', value: pd.blockerHits },
        { label: '✨ Soul Atual', key: 'MPCharge', value: pd.MPCharge },
        { label: '✨ Soul Máximo', key: 'maxMP', value: pd.maxMP },
        { label: '✨ Soul Reserva', key: 'MPReserve', value: pd.MPReserve },
        { label: '✨ Soul Reserva Max', key: 'MPReserveMax', value: pd.MPReserveMax },
        { label: '⚗️ Fragmentos de Frasco', key: 'vesselFragments', value: pd.vesselFragments, min: 0, max: 3 },
        { label: '✨ Focus MP Amount', key: 'focusMP_amount', value: pd.focusMP_amount },
        { label: '🔔 Charm Notches', key: 'charmSlots', value: pd.charmSlots, min: 3, max: 11 },
        { label: '🔔 Notches Usados', key: 'charmSlotsFilled', value: pd.charmSlotsFilled },
        { label: '💤 Dream Orbs (Essence)', key: 'dreamOrbs', value: pd.dreamOrbs },
        { label: '💤 Dream Orbs Gastos', key: 'dreamOrbsSpent', value: pd.dreamOrbsSpent },
        { label: '🥚 Rancid Eggs', key: 'rancidEggs', value: pd.rancidEggs },
        { label: '🔑 Simple Keys', key: 'simpleKeys', value: pd.simpleKeys },
        { label: '⛏️ Pale Ore', key: 'ore', value: pd.ore },
        { label: '👻 Ghost Coins', key: 'ghostCoins', value: pd.ghostCoins },
        { label: '💀 Geo Pool (Shade)', key: 'geoPool', value: pd.geoPool }
    ];
    
    stats.forEach(stat => {
        createNumberField(container, stat.label, stat.key, stat.value, stat.min, stat.max);
    });
};

window.loadCombatStats = function(pd) {
    const container = document.getElementById('combatStats');
    container.innerHTML = '';
    
    const stats = [
        { label: '⚔️ Nail Damage', key: 'nailDamage', value: pd.nailDamage, min: 5, max: 21 },
        { label: '⚔️ Nail Range', key: 'nailRange', value: pd.nailRange },
        { label: '🔮 Beam Damage', key: 'beamDamage', value: pd.beamDamage },
        { label: '🔨 Nailsmith Upgrades', key: 'nailsmithUpgrades', value: pd.nailsmithUpgrades, min: 0, max: 4 },
        { label: '🔥 Fireball Level', key: 'fireballLevel', value: pd.fireballLevel, min: 0, max: 2 },
        { label: '⚡ Quake Level', key: 'quakeLevel', value: pd.quakeLevel, min: 0, max: 2 },
        { label: '💨 Scream Level', key: 'screamLevel', value: pd.screamLevel, min: 0, max: 2 },
        { label: '🔨 Honed Nail', key: 'honedNail', isCheck: true }
    ];
    
    stats.forEach(stat => {
        if (stat.isCheck) {
            createCheckboxField(container, stat.label, stat.key, pd[stat.key]);
        } else {
            createNumberField(container, stat.label, stat.key, stat.value, stat.min, stat.max);
        }
    });
};

window.loadProgressStats = function(pd) {
    const container = document.getElementById('progressStats');
    container.innerHTML = '';
    
    const stats = [
        { label: '📊 Completion %', key: 'completionPercentage', value: pd.completionPercentage, min: 0, max: 112 },
        { label: '⏱️ Play Time (segundos)', key: 'playTime', value: pd.playTime },
        { label: '🐛 Grubs Coletados', key: 'grubsCollected', value: pd.grubsCollected, min: 0, max: 46 },
        { label: '🎁 Grub Rewards', key: 'grubRewards', value: pd.grubRewards, min: 0, max: 4 },
        { label: '🛡️ Guardians Defeated', key: 'guardiansDefeated', value: pd.guardiansDefeated, min: 0, max: 3 },
        { label: '📖 Journal Entries Completed', key: 'journalEntriesCompleted', value: pd.journalEntriesCompleted },
        { label: '📝 Journal Notes Completed', key: 'journalNotesCompleted', value: pd.journalNotesCompleted },
        { label: '📚 Journal Entries Total', key: 'journalEntriesTotal', value: pd.journalEntriesTotal },
        { label: '🔥 Flames Collected', key: 'flamesCollected', value: pd.flamesCollected },
        { label: '🔥 Flames Required', key: 'flamesRequired', value: pd.flamesRequired },
        { label: '💀 Permadeath Mode', key: 'permadeathMode', value: pd.permadeathMode },
        { label: '🎮 Profile ID', key: 'profileID', value: pd.profileID },
        { label: '🌲 Glade Ghosts Killed', key: 'gladeGhostsKilled', value: pd.gladeGhostsKilled },
        { label: '💰 First Geo', key: 'firstGeo', isCheck: true },
        { label: '🦋 Heart Piece Collected', key: 'heartPieceCollected', isCheck: true },
        { label: '⚗️ Vessel Fragment Collected', key: 'vesselFragmentCollected', isCheck: true },
        { label: '❤️ Heart Piece Max', key: 'heartPieceMax', isCheck: true },
        { label: '⚗️ Vessel Fragment Max', key: 'vesselFragmentMax', isCheck: true }
    ];
    
    stats.forEach(stat => {
        if (stat.isCheck) {
            createCheckboxField(container, stat.label, stat.key, pd[stat.key]);
        } else {
            createNumberField(container, stat.label, stat.key, stat.value, stat.min, stat.max);
        }
    });
};
