# 🏛️ PolitiScope • L'Arbre Interactif des Institutions & du Gouvernement Français

Une application web interactive, visuellement percutante et hautement pédagogique dédiée à la découverte et la compréhension des institutions politiques de la Ve République française.

---

## 🌟 Fonctionnalités

1. **🌳 L'Arbre du Pouvoir (Organigramme Interactif)** :
   - Présidence de la République (Élysée)
   - Premier Ministre (Hôtel de Matignon)
   - **Tous les Ministères de plein exercice** (Intérieur, Justice, Armées, Bercy, Affaires Étrangères, Éducation, Santé, Écologie, Travail, Culture, etc.)
   - **Parlement & Hautes Juridictions** (Assemblée Nationale, Sénat, Conseil Constitutionnel, Conseil d'État, Cour des Comptes).
   - Filtrage par pôle thématique (Régalien, Économie, Social, Écologie...) et barre de recherche temps réel.

2. **📜 Fiches Ministres & Historique des Prédécesseurs** :
   - En cliquant sur n'importe quel ministère ou institution, un tiroir latéral s'ouvre avec l'âge, le parti, la biographie, les missions clés, le budget, le bâtiment officiel et la **chronologie complète des prédécesseurs historiques avec leurs réalisations phares**.

3. **⚡ Simulateur de Lois & Pouvoirs (Mise en relief dynamique)** :
   - Suivi étape par étape de scénarios clés :
     - *Comment naît une loi ? (Du ministère à la promulgation)*
     - *Le 49.3 & la Motion de Censure*
     - *La Dissolution de l'Assemblée Nationale (Art. 12)*
     - *La Formation du Gouvernement (Art. 8)*
   - **L'arbre s'illumine et se met en relief en direct** avec les institutions mobilisées à chaque étape.

4. **📖 Mémos Pédagogiques & Mini-Quiz Citoyens** :
   - Fiches synthétiques sans jargon (Séparation des pouvoirs, Projet vs Proposition de loi, Navette parlementaire, QPC...).
   - Quiz interactifs avec score et effets visuels.

5. **🗳️ Espace Élections & Programmes** :
   - Rappel des règles constitutionnelles (500 parrainages, ARCOM, comptes de campagne).
   - Espace extensible prêt pour les futurs candidats et comparateurs de programmes.

---

## 🚀 Déploiement Ultra-Simple sur GitHub Pages

Ce projet est 100% configuré pour GitHub Pages (`base: './'`).

### Méthode 1 : Déploiement automatique via GitHub Actions (Recommandé)
1. Poussez le projet sur votre dépôt GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - PolitiScope"
   git remote add origin https://github.com/VOTRE_PSEUDO/VOTRE_REPO.git
   git branch -M main
   git push -u origin main
   ```
2. Dans votre dépôt GitHub, allez dans **Settings** > **Pages**.
3. Dans **Build and deployment** > **Source**, choisissez **GitHub Actions**.
4. Le workflow inclus `.github/workflows/deploy.yml` déploie automatiquement le site en 30 secondes !

### Méthode 2 : Build manuel
```bash
npm run build
```
Le dossier `dist/` généré contient tous les fichiers HTML, JS et CSS prêts à être hébergés sur n'importe quel serveur statique ou branche `gh-pages`.

---

## 💻 Développement Local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur local
npm run dev
```
Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.
