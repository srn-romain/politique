import './index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderTreeView } from './components/TreeView.js';
import { renderProcessSimulator, cleanupProcessSimulator } from './components/ProcessSimulator.js';
import { renderMemoCenter } from './components/MemoCenter.js';
import { renderElectionsView } from './components/ElectionsView.js';
import { renderAdminEditor, resetAdminLocalData } from './components/AdminEditor.js';
import { renderDetailDrawer } from './components/DetailDrawer.js';

function initApp() {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = `
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <div id="header-container"></div>
      <main id="main-content" class="main-content" style="flex: 1;"></main>
      
      <!-- ── Pied de page institutionnel ─── -->
      <footer class="site-footer">
        <div class="container footer-inner">

          <div class="footer-brand">
            <div class="marianne-flag" aria-hidden="true">
              <span class="f-blue"></span>
              <span class="f-white"></span>
              <span class="f-red"></span>
            </div>
            <div>
              <strong style="font-size: 13px; color: var(--grey-900);">
                PolitiScope • République Française
              </strong>
              <p style="font-size: 12px; color: var(--grey-500); margin-top: 2px;">
                Portail citoyen d'information et d'apprentissage des institutions
              </p>
            </div>
          </div>

          <nav class="footer-links" aria-label="Liens de navigation secondaires">
            <button class="footer-link-btn" data-tab="tree">
              Organigramme
            </button>
            <span class="footer-sep">•</span>
            <button class="footer-link-btn" data-tab="simulator">
              Parcours d'une Loi
            </button>
            <span class="footer-sep">•</span>
            <button class="footer-link-btn" data-tab="memos">
              Fiches &amp; Quiz
            </button>
            <span class="footer-sep">•</span>
            <button class="footer-link-btn" data-tab="elections">
              Présidentielle
            </button>
            <span class="footer-sep">•</span>
            <button class="footer-link-btn" data-tab="admin" style="color: var(--blue-rf);">
              Mode Éditeur
            </button>
          </nav>

        </div>
      </footer>

      <!-- ── Drawer latéral de détail ──── -->
      <div id="drawer-container"></div>
    </div>
  `;

  const headerContainer = root.querySelector('#header-container');
  const mainContent = root.querySelector('#main-content');
  const drawerContainer = root.querySelector('#drawer-container');

  // Footer navigation buttons
  root.querySelectorAll('.footer-link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      store.setState({ activeTab: tab });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  let currentRenderedTab = null;

  function renderCurrentView(state, changedKeys = []) {
    const { activeTab } = state;

    // Si on quitte le simulateur, arrêter son timer de lecture automatique
    if (currentRenderedTab === 'simulator' && activeTab !== 'simulator') {
      cleanupProcessSimulator();
    }
    currentRenderedTab = activeTab;

    // Rendu de l'en-tête
    renderHeader(headerContainer);

    // Rendu de la vue principale
    switch (activeTab) {
      case 'tree':
        renderTreeView(mainContent);
        break;
      case 'simulator':
        renderProcessSimulator(mainContent);
        break;
      case 'memos':
        renderMemoCenter(mainContent);
        break;
      case 'elections':
        renderElectionsView(mainContent);
        break;
      case 'admin':
        resetAdminLocalData();
        renderAdminEditor(mainContent);
        break;
      default:
        renderTreeView(mainContent);
    }

    // Rendu du tiroir de détail
    renderDetailDrawer(drawerContainer);
  }

  // Souscription aux changements d'état
  store.subscribe((state, changedKeys) => {
    // Si seul le drawer change (ouvrir/fermer), on ne réaffiche que le drawer pour éviter tout reflow
    if (
      changedKeys.length > 0 &&
      changedKeys.every(k => k === 'selectedNode' || k === 'selectedNodeType')
    ) {
      renderDetailDrawer(drawerContainer);
      return;
    }

    // Si seule la recherche ou catégorie change alors qu'on est sur 'tree', on met à jour Tree et Header
    if (
      state.activeTab === 'tree' &&
      changedKeys.length > 0 &&
      changedKeys.every(k => k === 'searchQuery' || k === 'selectedCategory')
    ) {
      renderTreeView(mainContent);
      // Mettre à jour l'état visuel actif des chips sans réinitialiser le champ texte
      const chips = headerContainer.querySelectorAll('.chip');
      chips.forEach(chip => {
        const isActive = chip.dataset.cat === state.selectedCategory;
        chip.classList.toggle('active', isActive);
        chip.setAttribute('aria-pressed', isActive);
      });
      return;
    }

    renderCurrentView(state, changedKeys);
  });

  // Premier rendu initial
  renderCurrentView(store.getState());
}

// Lancement au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
