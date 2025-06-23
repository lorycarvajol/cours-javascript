````markdown
# 🧪 Potion Factory – Live Coding JS

Une application web interactive pour explorer et maîtriser les fondamentaux de JavaScript :  
déclarations de variables (`var`, `let`, `const`), portée (hoisting), fonctions (classiques, expressions, flèches) et exercices ludiques pour pratiquer en temps réel.

---

## 📋 Table des matières

- [✨ Fonctionnalités](#-fonctionnalités)  
- [🚀 Installation & Lancement](#-installation--lancement)  
- [📁 Structure du projet](#-structure-du-projet)  
- [🖼️ Pages & Composants](#️-pages--composants)  
- [🎨 Styles](#-styles)  
- [⚙️ Scripts](#️-scripts)  
- [🤝 Contribuer](#-contribuer)  
- [📝 Licence](#-licence)  

---

## ✨ Fonctionnalités

1. **Accueil**  
   - Sélection d’une `const` (Base Potion) verrouillée au choix  
   - Mixer d’ingrédients : démonstration de `var` vs `let` (temps réel vs clic)  
   - Livre des sorts : appels de trois types de fonctions  

2. **Jeux & Exercices**  
   - QCM et exercices interactifs sur la portée, réaffectation, redéclaration  
   - Boutons “Vérifier / Solution / Relancer” pour chaque exercice  

3. **Références**  
   - Documentation ludique sur :  
     - Déclaration et portée de variables (`var`, `let`, `const`)  
     - Hoisting  
     - Différentes syntaxes de fonctions  
   - Exercices interactifs (prénom, année de naissance)  

---

## 🚀 Installation & Lancement

1. **Cloner le dépôt**  
   ```bash
   git clone https://github.com/lorycarvajol/cours-javascript.git
   cd potion-factory
````

2. **Ouvrir l’application**

   * Double-cliquez sur `index.html` dans votre explorateur,
   * ou servez le dossier via un petit serveur local (ex. `npx http-server`).

> L’application est entièrement statique : aucun back-end nécessaire.

---

## 📁 Structure du projet

```
potion-factory/
│
├─ index.html             # Page d’accueil (BasePotion / Mixer / Livre des Sorts)
├─ tutoriels.html         # Jeux & Exercices interactifs
├─ references.html        # Documentation & exercices de référence
│
├─ style.css              # Styles globaux & variables CSS
│
├─ scripts/
│   ├─ main.js            # Contrôleurs pour index.html
│   ├─ base.js            # Fonction lockBase()
│   ├─ mixer.js           # Fonction demoMixer()
│   └─ spells.js          # Fonctions de sorts (classic, expression, arrow)
│
└─ README.md              # Documentation (vous y êtes ! ✨)
```

---

## 🖼️ Pages & Composants

### 1. **Accueil** (`index.html`)

* **Base Potion** : `<select>` + bouton Reset
* **Mixer** : deux `<input type="range">` pour `var` et `let`
* **Livre des Sorts** : trois boutons déclenchant `castClassic()`, etc.

### 2. **Jeux & Exercices** (`tutoriels.html`)

* Exercices “var vs let”, “const”, “fonctions”…
* UI “Vérifier / Solution / Relancer” pour chaque cas
* JavaScript embarqué simplifié pour valider les réponses

### 3. **Références** (`references.html`)

* Sections explicatives sur variables, hoisting, fonctions
* Deux exercices interactifs (prénom & année de naissance)

---

## 🎨 Styles

* **Bootstrap 5** pour la grille et composants de base
* **Roboto** (Google Fonts) + variables CSS
* **`style.css`**

  * Thème violet (`--purple`, `--purple-dark`)
  * Cards, heroes, alertes, code snippets, formulaires

Extrait (`style.css`):

```css
:root {
  --purple: #6f42c1;
  --purple-dark: #58229c;
  --light-bg: #f0f2f5;
}
body { background: var(--light-bg); font-family: 'Roboto', sans-serif; }
.btn-purple {
  background: var(--purple);
  border-color: var(--purple);
  color: #fff;
}
```

---

## ⚙️ Scripts

* **`scripts/main.js`**
  Gère l’interactivité de la page d’accueil (Base Potion, Mixer, Sorts).
* **`base.js`**

  ```js
  export function lockBase(choice) {
    return `Base verrouillée : ${choice}`;
  }
  ```
* **`mixer.js`**

  ```js
  export function demoMixer(type, power) {
    return `${type} → puissance : ${power}`;
  }
  ```
* **`spells.js`**
  Trois exportations : `castClassic()`, `castExpression()`, `castArrow()`
* JavaScript ES Modules, importés dans `main.js`.

---

## 🤝 Contribuer

1. **Fork** le dépôt
2. Créez une branche : `git checkout -b feature/ma-fonction`
3. **Commit** vos changements : `git commit -m "Ajoute un nouvel exercice"`
4. **Push** : `git push origin feature/ma-fonction`
5. Ouvrez une **Pull Request**

---

## 📝 Licence

Ce projet est sous licence **MIT**.
© 2025 Potion Factory

```
```
