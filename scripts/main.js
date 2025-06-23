// scripts/main.js
import { lockBase }       from './base.js';
import { demoMixer }      from './mixer.js';
import { castClassic,
         castExpression,
         castArrow }      from './spells.js';

// Section Base (const)
const selBase       = document.getElementById('selBase');
const outBase       = document.getElementById('outBase');
const btnResetBase  = document.getElementById('btnResetBase');

selBase.addEventListener('change', () => {
  outBase.textContent       = lockBase(selBase.value);
  selBase.disabled          = true;   // verrouillage de la const
  btnResetBase.disabled     = false;  // activation du reset
});

btnResetBase.addEventListener('click', () => {
  selBase.disabled          = false;  // déverrouillage
  selBase.value             = '';     // remise du placeholder
  outBase.textContent       = 'Aucune base sélectionnée.';
  btnResetBase.disabled     = true;   // désactivation du reset
});

// Section Mixer (var vs let)
const rngVar     = document.getElementById('rngVar');
const lblVar     = document.getElementById('lblVar');
const rngLet     = document.getElementById('rngLet');
const lblLet     = document.getElementById('lblLet');
const btnApply   = document.getElementById('btnApplyLet');
const outMix     = document.getElementById('outMix');

rngVar.addEventListener('input', () => {
  lblVar.textContent = rngVar.value;
  outMix.textContent = demoMixer('var', rngVar.value);
});

btnApply.addEventListener('click', () => {
  lblLet.textContent = rngLet.value;
  outMix.textContent = demoMixer('let', rngLet.value);
});

// Section Sorts (fonctions)
const outSpells = document.getElementById('outSpells');
document.querySelectorAll('#spellBook button').forEach(btn => {
  btn.addEventListener('click', () => {
    const spell = btn.dataset.spell;
    let result = '';
    if (spell === 'classic')       result = castClassic();
    else if (spell === 'expression') result = castExpression();
    else if (spell === 'arrow')     result = castArrow();
    outSpells.textContent = result;
  });
});
