// abilities.js - Habilidades e Movimentos COMPLETO

function loadAbilities(pd) {
    // Movimento
    const movementContainer = document.getElementById('movementAbilities');
    movementContainer.innerHTML = '';
    
    const movementAbilities = [
        { label: '💨 Can Dash', key: 'canDash' },
        { label: '🦋 Has Dash (Mothwing Cloak)', key: 'hasDash' },
        { label: '🌙 Can Back Dash', key: 'canBackDash' },
        { label: '🌑 Has Shadow Dash (Shade Cloak)', key: 'hasShadowDash' },
        { label: '🌑 Can Shadow Dash', key: 'canShadowDash' },
        { label: '🪲 Can Wall Jump', key: 'canWallJump' },
        { label: '🪲 Has Wall Jump (Mantis Claw)', key: 'hasWalljump' },
        { label: '👑 Has Double Jump (Monarch Wings)', key: 'hasDoubleJump' },
        { label: '💎 Can Super Dash', key: 'canSuperDash' },
        { label: '💎 Has Super Dash (Crystal Heart)', key: 'hasSuperDash' },
        { label: '💧 Has Acid Armour (Isma\'s Tear)', key: 'hasAcidArmour' },
        { label: '🔦 Has Lantern', key: 'hasLantern' },
        { label: '🚋 Has Tram Pass', key: 'hasTramPass' },
        { label: '👑 Has King\'s Brand', key: 'hasKingsBrand' },
        { label: '🌸 Has Xun Flower', key: 'hasXunFlower' },
        { label: '🪽 Infinite Air Jump', key: 'infiniteAirJump' }
    ];
    
    movementAbilities.forEach(ability => {
        createCheckboxField(movementContainer, ability.label, ability.key, pd[ability.key]);
    });
    
    // Magias
    const spellsContainer = document.getElementById('spellsAbilities');
    spellsContainer.innerHTML = '';
    
    const spells = [
        { label: '✨ Has Spell', key: 'hasSpell' },
        { label: '💤 Has Dream Nail', key: 'hasDreamNail' },
        { label: '💤 Has Dream Gate', key: 'hasDreamGate' },
        { label: '💤 Dream Nail Upgraded', key: 'dreamNailUpgraded' },
        { label: '🌟 Soul Limited', key: 'soulLimited' }
    ];
    
    spells.forEach(spell => {
        createCheckboxField(spellsContainer, spell.label, spell.key, pd[spell.key]);
    });
    
    // Dream Gate Position
    const dreamGateFields = [
        { label: '💤 Dream Gate Scene', key: 'dreamGateScene', value: pd.dreamGateScene || '', isText: true },
        { label: '💤 Dream Gate X', key: 'dreamGateX', value: pd.dreamGateX },
        { label: '💤 Dream Gate Y', key: 'dreamGateY', value: pd.dreamGateY }
    ];
    
    dreamGateFields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'field-box';
        if (field.isText) {
            div.innerHTML = `
                <label>${field.label}</label>
                <input type="text" id="${field.key}" value="${field.value}" style="width: 100%; padding: 8px; background: rgba(0,0,0,0.3); border: 1px solid #444; border-radius: 4px; color: #fff;">
            `;
        } else {
            div.innerHTML = `
                <label>${field.label}</label>
                <input type="number" id="${field.key}" value="${field.value || 0}">
            `;
        }
        spellsContainer.appendChild(div);
    });
    
    // Nail Arts
    const nailArtsContainer = document.getElementById('nailArts');
    nailArtsContainer.innerHTML = '';
    
    const nailArts = [
        { label: '⚔️ Has Nail Art', key: 'hasNailArt' },
        { label: '🌀 Has Cyclone (Cyclone Slash)', key: 'hasCyclone' },
        { label: '💨 Has Dash Slash', key: 'hasDashSlash' },
        { label: '⬆️ Has Upward Slash (Great Slash)', key: 'hasUpwardSlash' },
        { label: '✅ Has All Nail Arts', key: 'hasAllNailArts' }
    ];
    
    nailArts.forEach(art => {
        createCheckboxField(nailArtsContainer, art.label, art.key, pd[art.key]);
    });
}

function collectAbilities(pd) {
    // Movimento
    pd.canDash = getCheckboxValue('canDash');
    pd.hasDash = getCheckboxValue('hasDash');
    pd.canBackDash = getCheckboxValue('canBackDash');
    pd.hasShadowDash = getCheckboxValue('hasShadowDash');
    pd.canShadowDash = getCheckboxValue('canShadowDash');
    pd.canWallJump = getCheckboxValue('canWallJump');
    pd.hasWalljump = getCheckboxValue('hasWalljump');
    pd.hasDoubleJump = getCheckboxValue('hasDoubleJump');
    pd.canSuperDash = getCheckboxValue('canSuperDash');
    pd.hasSuperDash = getCheckboxValue('hasSuperDash');
    pd.hasAcidArmour = getCheckboxValue('hasAcidArmour');
    pd.hasLantern = getCheckboxValue('hasLantern');
    pd.hasTramPass = getCheckboxValue('hasTramPass');
    pd.hasKingsBrand = getCheckboxValue('hasKingsBrand');
    pd.hasXunFlower = getCheckboxValue('hasXunFlower');
    pd.infiniteAirJump = getCheckboxValue('infiniteAirJump');
    
    // Magias
    pd.hasSpell = getCheckboxValue('hasSpell');
    pd.hasDreamNail = getCheckboxValue('hasDreamNail');
    pd.hasDreamGate = getCheckboxValue('hasDreamGate');
    pd.dreamNailUpgraded = getCheckboxValue('dreamNailUpgraded');
    pd.soulLimited = getCheckboxValue('soulLimited');
    
    // Dream Gate
    const sceneEl = document.getElementById('dreamGateScene');
    if (sceneEl) pd.dreamGateScene = sceneEl.value;
    pd.dreamGateX = getNumberValue('dreamGateX');
    pd.dreamGateY = getNumberValue('dreamGateY');
    
    // Nail Arts
    pd.hasNailArt = getCheckboxValue('hasNailArt');
    pd.hasCyclone = getCheckboxValue('hasCyclone');
    pd.hasDashSlash = getCheckboxValue('hasDashSlash');
    pd.hasUpwardSlash = getCheckboxValue('hasUpwardSlash');
    pd.hasAllNailArts = getCheckboxValue('hasAllNailArts');
}