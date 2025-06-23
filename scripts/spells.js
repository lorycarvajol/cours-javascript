// scripts/spells.js

// 1. Sort classique (déclaration de fonction – hoisting)
export function castClassic() {
    return classicSpell();
  }
  function classicSpell() {
    return '✨ Sort Classique lancé : “Abracadabra!”';
  }
  
  // 2. Sort expression (expression de fonction – pas de hoisting)
  export const castExpression = function() {
    return '🌀 Sort Expression lancé : “Alakazam!”';
  };
  
  // 3. Sort flèche (arrow function – syntaxe courte, pas de this)
  export const castArrow = () => {
    return '⚡ Sort Flèche lancé : “Zap-Zoom!”';
  };
  