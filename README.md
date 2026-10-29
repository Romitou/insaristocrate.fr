# ⚜️ INS'Aristocrate 2024

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.10-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.4-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Site officiel de la liste de campagne BDE INS'Aristocrate 2024 à l'INSA Rouen Normandie.**  
> Projet web événementiel développé avec **Nuxt 3**, **Tailwind CSS** et **TypeScript**, pensé pour offrir une expérience immersive, réactive et élégante autour d'un univers aristocratique parodique.

---

## 🌟 Présentation du projet

Dans le cadre des élections du Bureau des Élèves (BDE) de l'INSA Rouen Normandie en mars 2024, la liste **INS'Aristocrate** a conçu cette application web afin de fédérer les étudiants, communiquer le programme et rythmer la semaine de campagne.

Le site a servi de plaque tournante pour :
- **Diffuser les contenus multimédias exclusifs** (vidéo de campagne et rap d'inté avec compte à rebours dynamique jusqu'au reveal).
- **Consulter le planning interactif** des activités, soirées et distributions de nourriture quotidiennes.
- **Suivre le fil d'actualités** et les annonces de la campagne en temps réel.
- **Affirmer l'identité visuelle** grâce à une charte graphique travaillée (typographie Della Respira / Cormorant, blasons, fleurs de lys, effets de confettis festifs).

---

## 🛠️ Stack Technique & Choix d'Architecture

- **Framework Full-Stack** : [Nuxt 3](https://nuxt.com/) (Vue 3, Composition API `<script setup>`, SSR / Hybride).
- **Serveur & API** : Moteur [Nitro](https://nitro.unjs.io/) intégré pour les endpoints API internes (`/api/events`, `/api/videos`, `/api/news`).
- **Styling & Design System** : [Tailwind CSS](https://tailwindcss.com/) avec configuration sur-mesure (palette dorée/sombre, typographies `@font-face` personnalisées).
- **Composants d'interface** : [Headless UI Vue](https://headlessui.com/) et [Heroicons](https://heroicons.com/) pour des composants accessibles et sans style imposé.
- **Animations & Interactivité** : [GSAP (GreenSock)](https://gsap.com/) pour les transitions fluides et animations, couplé à `vue-confetti-explosion` pour l'effet festif.
- **SEO & Référencement** : Module `@nuxtjs/sitemap`, Open Graph meta tags complets et cartes Twitter optimisées pour le partage sur les réseaux sociaux.

---

## 💡 Fonctionnalités Clés

### 1. 📅 Planning d'événements dynamique
- Configuration déclarative centralisée (`events.config.ts`) regroupant les journées, créneaux et descriptions.
- API Nitro (`/server/api/events.ts`) qui formate, valide et ordonne chronologiquement les créneaux.
- Interface avec filtres par jour, modale de descriptif détaillé et affichage dynamique des statuts.

### 2. ⏳ Décompte & Révélation vidéo
- Système de compte à rebours interactif synchronisé sur l'heure de sortie officielle.
- Bascule automatique d'un lecteur d'attente (bruit blanc vidéo / teaser) vers le lecteur vidéo officiel dès expiration du décompte.

### 3. 📰 Fil d'actualités & annonces
- Endpoints de distribution des annonces de campagne avec calcul automatique du temps de lecture estimé.
- Mise en page responsive sous forme de cartes d'articles.

---

## 📁 Structure du Projet

```text
├── assets/                 # Typographies (Della Respira), logos et bordures héraldiques
├── layouts/
│   └── default.vue         # Layout global (bannières, navigation, footer responsive)
├── pages/
│   ├── index.vue           # Page d'accueil : vidéos, décompte et dernière actualité
│   ├── events.vue          # Page planning : agenda de la semaine et détails d'événements
│   └── news.vue            # Page actualités : l'ensemble des communiqués de campagne
├── public/                 # Assets statiques, favicons multi-plateformes, robots.txt
├── server/
│   └── api/
│       ├── events.ts       # Endpoint Nitro : tri et sérialisation des événements
│       ├── news.ts         # Endpoint Nitro : distribution des annonces
│       └── videos.ts       # Endpoint Nitro : flux vidéo dynamique et statut de reveal
├── events.config.ts        # Données de configuration des événements et dates clés
├── nuxt.config.ts          # Configuration des modules Nuxt, meta SEO et Tailwind
└── tailwind.config.ts      # Extension du thème Tailwind (polices, couleurs, bordures)
```

---

## 🚀 Installation et Démarrage

### Prérequis
- [Node.js](https://nodejs.org/) version 18.x ou supérieure
- `npm` ou `pnpm` / `yarn`

### Installation des dépendances
```bash
npm install
```

### Serveur de développement
Lance le serveur de développement local sur `http://localhost:3000` :
```bash
npm run dev
```

### Production
Compiler et packager l'application pour le déploiement :
```bash
npm run build
```

Tester localement l'artefact de production :
```bash
npm run preview
# ou directement
node .output/server/index.mjs
```

---

## 👤 Auteur

- **Romain** ([@Romitou](https://github.com/Romitou)) - Étudiant ingénieur à l'INSA Rouen Normandie.

---

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).
