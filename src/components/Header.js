import { getIcon } from '../icons.js';
import { store } from '../state.js';

const categories = [
  { id: 'all',                  label: 'Toutes' },
  { id: 'regalien',             label: 'Régalien' },
  { id: 'social_sante',         label: 'Social & Santé' },
  { id: 'education_recherche',  label: 'Éducation' },
  { id: 'ecologie_territoires', label: 'Écologie' },
  { id: 'culture_societe',      label: 'Culture & Sports' },
  { id: 'legislatif',           label: 'Parlement' },
  { id: 'controle',             label: 'Contrôle' },
];

function getSearchBarHtml(searchQuery, selectedCategory) {
  return `
    <div class="search-bar">
      <div class="container search-bar-inner">
        <!-- Champ de recherche -->
        <div class="search-input-wrap">
          ${getIcon('Search', { size: 15, className: 'search-icon' })}
          <input
            id="search-input"
            type="search"
            class="search-input"
            value="${escapeHtml(searchQuery)}"
            placeholder="Rechercher un ministre, ministère, prédécesseur…"
            aria-label="Rechercher dans l'organigramme"
          />
          ${searchQuery ? `
            <button
              id="search-clear-btn"
              class="search-clear"
              aria-label="Effacer la recherche"
            >
              ✕
            </button>
          ` : ''}
        </div>

        <!-- Filtres par catégorie -->
        <div
          id="filter-chips-wrap"
          class="filter-chips"
          role="group"
          aria-label="Filtrer par catégorie"
        >
          <span class="filter-label">Filtrer :</span>
          ${categories.map(cat => `
            <button
              class="chip${selectedCategory === cat.id ? ' active' : ''}"
              data-cat="${cat.id}"
              aria-pressed="${selectedCategory === cat.id}"
            >
              ${cat.label}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function attachSearchBarEvents(searchBar) {
  const searchInput = searchBar.querySelector('#search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      store.setState({ searchQuery: e.target.value });
    });
  }

  const clearBtn = searchBar.querySelector('#search-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      store.setState({ searchQuery: '' });
      if (searchInput) searchInput.focus();
    });
  }

  const chipsWrap = searchBar.querySelector('#filter-chips-wrap');
  if (chipsWrap) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    chipsWrap.addEventListener('mousedown', (e) => {
      isDown = true;
      hasMoved = false;
      chipsWrap.classList.add('grabbing');
      startX = e.pageX - chipsWrap.offsetLeft;
      scrollLeft = chipsWrap.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        chipsWrap.classList.remove('grabbing');
      }
    });

    chipsWrap.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - chipsWrap.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 4) {
        hasMoved = true;
      }
      chipsWrap.scrollLeft = scrollLeft - walk;
    });

    chipsWrap.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        chipsWrap.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    chipsWrap.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        if (hasMoved) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        const catId = chip.dataset.cat;
        store.setState({ selectedCategory: catId });

        // Centre le chip cliqué dans la zone scrollable
        const btnLeft = chip.offsetLeft;
        const btnWidth = chip.offsetWidth;
        const contWidth = chipsWrap.offsetWidth;
        chipsWrap.scrollTo({
          left: btnLeft - contWidth / 2 + btnWidth / 2,
          behavior: 'smooth'
        });
      });
    });
  }
}

export function renderHeader(container) {
  const state = store.getState();
  const { activeTab, searchQuery, selectedCategory, activePathway } = state;

  const existingHeader = container.querySelector('.site-header');

  if (existingHeader) {
    // 1. Mettre à jour les onglets SANS détruire le DOM du header pour préserver le scroll sur mobile
    const tabs = existingHeader.querySelectorAll('.nav-tab');
    tabs.forEach(btn => {
      const isActive = btn.dataset.tab === activeTab;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Maintenir l'onglet actif visible et centré dans la barre de navigation sur téléphone
    const activeBtn = existingHeader.querySelector(`.nav-tab[data-tab="${activeTab}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    // 2. Mettre à jour l'indicateur du simulateur si actif
    const simTab = existingHeader.querySelector('#nav-simulator');
    if (simTab) {
      const existingDot = simTab.querySelector('.nav-dot');
      if (activePathway && !existingDot) {
        const dot = document.createElement('span');
        dot.className = 'nav-dot';
        dot.setAttribute('aria-hidden', 'true');
        simTab.appendChild(dot);
      } else if (!activePathway && existingDot) {
        existingDot.remove();
      }
    }

    // 3. Barre de recherche : ajout / retrait / synchronisation
    let searchBar = existingHeader.querySelector('.search-bar');
    if (activeTab === 'tree') {
      if (!searchBar) {
        const tmp = document.createElement('div');
        tmp.innerHTML = getSearchBarHtml(searchQuery, selectedCategory);
        searchBar = tmp.firstElementChild;
        existingHeader.appendChild(searchBar);
        attachSearchBarEvents(searchBar);
      } else {
        const searchInput = searchBar.querySelector('#search-input');
        if (searchInput && searchInput.value !== searchQuery && document.activeElement !== searchInput) {
          searchInput.value = searchQuery;
        }

        let clearBtn = searchBar.querySelector('#search-clear-btn');
        if (searchQuery && !clearBtn) {
          const wrap = searchBar.querySelector('.search-input-wrap');
          if (wrap) {
            clearBtn = document.createElement('button');
            clearBtn.id = 'search-clear-btn';
            clearBtn.className = 'search-clear';
            clearBtn.setAttribute('aria-label', 'Effacer la recherche');
            clearBtn.textContent = '✕';
            clearBtn.addEventListener('click', () => {
              store.setState({ searchQuery: '' });
              if (searchInput) searchInput.focus();
            });
            wrap.appendChild(clearBtn);
          }
        } else if (!searchQuery && clearBtn) {
          clearBtn.remove();
        }

        const chips = searchBar.querySelectorAll('.chip');
        chips.forEach(chip => {
          const isActive = chip.dataset.cat === selectedCategory;
          chip.classList.toggle('active', isActive);
          chip.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
      }
    } else {
      if (searchBar) {
        searchBar.remove();
      }
    }
    return;
  }

  // Premier rendu initial
  const html = `
    <header class="site-header">
      <!-- ── Barre Marianne ───────────────────────── -->
      <div class="header-brand">
        <div class="container header-brand-inner">
          <div
            class="brand-block"
            id="brand-home-btn"
            role="link"
            tabindex="0"
          >
            <!-- Drapeau -->
            <div class="marianne-flag" aria-hidden="true">
              <span class="f-blue"></span>
              <span class="f-white"></span>
              <span class="f-red"></span>
            </div>

            <!-- RF -->
            <div class="marianne-text">
              <span class="rf-name">République</span>
              <span class="rf-name">Française</span>
              <span class="rf-devise">Liberté • Égalité • Fraternité</span>
            </div>

            <!-- Séparateur -->
            <div class="brand-separator" aria-hidden="true"></div>

            <!-- Nom application -->
            <div>
              <span class="brand-app-name">PolitiScope</span>
              <span class="brand-app-sub">Portail pédagogique des institutions de la République</span>
            </div>
          </div>

          <span class="badge-rf">Ve République</span>
        </div>
      </div>

      <!-- ── Navigation principale ─────────────── -->
      <nav class="header-nav" aria-label="Navigation principale">
        <div class="container header-nav-inner">
          <button
            id="nav-tree"
            class="nav-tab${activeTab === 'tree' ? ' active' : ''}"
            data-tab="tree"
          >
            ${getIcon('GitBranch', { size: 15 })}
            Organigramme
          </button>

          <button
            id="nav-simulator"
            class="nav-tab${activeTab === 'simulator' ? ' active' : ''}"
            data-tab="simulator"
          >
            ${getIcon('FileText', { size: 15 })}
            Parcours d'une Loi
            ${activePathway ? '<span class="nav-dot" aria-hidden="true"></span>' : ''}
          </button>

          <button
            id="nav-memos"
            class="nav-tab${activeTab === 'memos' ? ' active' : ''}"
            data-tab="memos"
          >
            ${getIcon('BookOpen', { size: 15 })}
            Fiches &amp; Quiz
          </button>

          <button
            id="nav-elections"
            class="nav-tab${activeTab === 'elections' ? ' active' : ''}"
            data-tab="elections"
          >
            ${getIcon('Vote', { size: 15 })}
            Présidentielle
          </button>

          <button
            id="nav-admin"
            class="nav-tab nav-settings${activeTab === 'admin' ? ' active' : ''}"
            data-tab="admin"
            title="Éditer les données"
          >
            ${getIcon('Settings', { size: 15 })}
            Éditeur
          </button>
        </div>
      </nav>

      <!-- ── Barre de recherche & filtres (tree uniquement) ── -->
      ${activeTab === 'tree' ? getSearchBarHtml(searchQuery, selectedCategory) : ''}
    </header>
  `;

  container.innerHTML = html;
  attachHeaderEvents(container);

  // Défilement centré sur l'onglet actif dès le premier affichage
  const activeBtn = container.querySelector(`.nav-tab[data-tab="${activeTab}"]`);
  if (activeBtn) {
    activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function attachHeaderEvents(container) {
  // Brand click
  const brandBtn = container.querySelector('#brand-home-btn');
  if (brandBtn) {
    const goHome = () => {
      store.setState({
        activeTab: 'tree',
        currentStepIndex: 0,
        simLinkedToTree: false
      });
    };
    brandBtn.addEventListener('click', goHome);
    brandBtn.addEventListener('keydown', e => e.key === 'Enter' && goHome());
  }

  // Navigation tabs
  container.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab === 'simulator') {
        store.setState({ activeTab: 'simulator', simLinkedToTree: false });
      } else {
        store.setState({ activeTab: tab });
      }
    });
  });

  const searchBar = container.querySelector('.search-bar');
  if (searchBar) {
    attachSearchBarEvents(searchBar);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
