// scripts/base.js
/**
 * `const BASE_POTION` : une fois fixé, plus possible de changer.
 */
export function lockBase(choice) {
    const BASE_POTION = choice;
    return `🔒 Base fixée à « ${BASE_POTION} » (const immuable)`;
  }
  