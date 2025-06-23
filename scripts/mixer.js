// scripts/mixer.js
let currentVarPower = 50;  // simule une var : modifiable en continu

export function demoMixer(type, value) {
  if (type === 'var') {
    currentVarPower = value;
    return `⚙️ [var] Puissance instantanée = ${currentVarPower}`;
  } else {
    // let : scope bloqué à l'appel
    let letPower = value;
    return `🔒 [let] Puissance appliquée = ${letPower}`;
  }
}
