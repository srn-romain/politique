import { getIcon } from '../icons.js';
import { store } from '../state.js';
import { institutionsData } from '../data/institutionsData.js';
import { createNodeCardHtml } from './NodeCard.js';

export function renderTreeView(container) {
  const state = store.getState();
  const {
    executive,
    ministries,
    searchQuery,
    selectedCategory,
    activePathway,
    currentStepIndex,
    simLinkedToTree
  } = state;

  const institutions = institutionsData;
  const activeStep = (simLinkedToTree && activePathway?.steps?.[currentStepIndex]) ? activePathway.steps[currentStepIndex] : null;
  const highlightedNodeIds = activeStep ? (activeStep.highlightNodes || []) : [];
  const isHighlighted = (id) => highlightedNodeIds.includes(id);

  const matchesSearch = (item) => {
    if (!item) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    const matchName     = (item.name     || '').toLowerCase().includes(q);
    const matchTitle    = (item.title    || '').toLowerCase().includes(q);
    const matchShort    = (item.shortName|| '').toLowerCase().includes(q);
    const matchBuilding = (item.building || item.institution || '').toLowerCase().includes(q);
    const repName = (
      item.currentMinister?.name ||
      item.currentLeader?.name   ||
      item.currentHolder         || ''
    ).toLowerCase();
    const matchRep  = repName.includes(q);
    const matchPred = (item.predecessors || []).some(p =>
      p.name.toLowerCase().includes(q) ||
      (p.highlight && p.highlight.toLowerCase().includes(q))
    );
    return matchName || matchTitle || matchShort || matchBuilding || matchRep || matchPred;
  };

  const filteredMinistries = ministries.filter(m => {
    if (
      selectedCategory !== 'all' &&
      selectedCategory !== 'legislatif' &&
      selectedCategory !== 'controle' &&
      m.category !== selectedCategory
    ) return false;
    return matchesSearch(m);
  });

  const filteredInstitutions = institutions.filter(inst => {
    if (selectedCategory !== 'all' && selectedCategory !== inst.category) return false;
    return matchesSearch(inst);
  });

  const presidentMatches = matchesSearch(executive?.president);
  const pmMatches        = matchesSearch(executive?.primeMinister);

  const showMins  = selectedCategory === 'all' ||
                    (selectedCategory !== 'legislatif' && selectedCategory !== 'controle');
  const showInsts = selectedCategory === 'all' ||
                    selectedCategory === 'legislatif' ||
                    selectedCategory === 'controle';

  const html = `
    <div class="tree-wrap">

      <!-- ── Bannière de simulation active ───── -->
      ${activeStep ? `
        <div class="container" style="margin-bottom: 32px;">
          <div class="sim-banner">
            <div style="display: flex; align-items: flex-start; gap: 16px; flex: 1;">
              <div class="sim-banner-step-num" aria-hidden="true">
                ${activeStep.stepNumber}
              </div>
              <div class="sim-banner-body">
                <span class="sim-banner-label">
                  Simulation en cours • Étape ${activeStep.stepNumber}
                </span>
                <div class="sim-banner-title">${escapeHtml(activeStep.title)}</div>
                <div class="sim-banner-desc">${escapeHtml(activeStep.description)}</div>
              </div>
            </div>
            <span class="sim-banner-count">
              ${highlightedNodeIds.length} institution(s) mobilisée(s)
            </span>
          </div>
        </div>
      ` : ''}

      <!-- ── Exécutif : Président → PM ────────── -->
      ${((presidentMatches || pmMatches) && selectedCategory === 'all') ? `
        <div class="exec-section">
          <div class="exec-title">
            <h2>Le Pouvoir Exécutif</h2>
            <p>Présidence de la République &amp; Direction du Gouvernement</p>
          </div>

          ${presidentMatches ? `
            <div class="exec-card-wrap">
              ${createNodeCardHtml(
                executive.president,
                'president',
                isHighlighted('presidence'),
                activeStep?.stepNumber
              )}
            </div>
          ` : ''}

          ${(presidentMatches && pmMatches) ? `
            <div class="tree-connector">
              <div class="tree-vline" aria-hidden="true"></div>
              <span class="tree-connector-label">
                Nomme le Premier ministre (Article 8) ↓
              </span>
              <div class="tree-vline" aria-hidden="true"></div>
            </div>
          ` : ''}

          ${pmMatches ? `
            <div class="exec-card-wrap">
              ${createNodeCardHtml(
                executive.primeMinister,
                'pm',
                isHighlighted('matignon'),
                activeStep?.stepNumber
              )}
            </div>
          ` : ''}

          <!-- Séparateur avec label -->
          <div class="tree-section-divider">
            <div class="tree-vline" aria-hidden="true"></div>
            <div class="tree-section-divider-line">
              <span class="tree-section-divider-text">
                Action Gouvernementale &amp; Institutions de la République
              </span>
            </div>
            <div class="tree-vline" aria-hidden="true"></div>
          </div>
        </div>
      ` : ''}

      <!-- ── Corps : Ministères + Parlement ──── -->
      <div class="container">
        <div class="tree-body">

          <!-- Colonne gauche : Ministères -->
          ${showMins ? `
            <div>
              <div class="tree-col-header">
                <div class="tree-col-header-left">
                  ${getIcon('Building2', { size: 20, className: 'tree-col-icon' })}
                  <h3>Les Ministères du Gouvernement</h3>
                </div>
                <span class="tree-count-badge">
                  ${filteredMinistries.length} ministères
                </span>
              </div>

              ${filteredMinistries.length === 0 ? `
                <div class="empty-state">
                  Aucun ministère ne correspond aux critères de recherche.
                </div>
              ` : `
                <div class="ministries-grid">
                  ${filteredMinistries.map(ministry => createNodeCardHtml(
                    ministry,
                    'ministry',
                    isHighlighted(ministry.id),
                    activeStep?.stepNumber
                  )).join('')}
                </div>
              `}
            </div>
          ` : ''}

          <!-- Colonne droite : Parlement & Contrôle -->
          ${showInsts ? `
            <div>
              <div class="tree-col-header">
                <div class="tree-col-header-left">
                  ${getIcon('Landmark', { size: 20, className: 'tree-col-icon' })}
                  <h3>Parlement &amp; Contrôle</h3>
                </div>
                <span class="tree-count-badge">
                  ${filteredInstitutions.length} institutions
                </span>
              </div>

              ${filteredInstitutions.length === 0 ? `
                <div class="empty-state">
                  Aucune institution ne correspond à votre recherche.
                </div>
              ` : `
                <div class="institutions-list">
                  ${filteredInstitutions.map(institution => createNodeCardHtml(
                    institution,
                    'institution',
                    isHighlighted(institution.id),
                    activeStep?.stepNumber
                  )).join('')}
                </div>
              `}
            </div>
          ` : ''}

        </div>
      </div>

    </div>
  `;

  container.innerHTML = html;
  attachTreeEvents(container, { executive, ministries, institutions });
}

function attachTreeEvents(container, { executive, ministries, institutions }) {
  container.querySelectorAll('.node-card').forEach(card => {
    const handleSelect = () => {
      const type = card.dataset.nodeType;
      const id = card.dataset.nodeId;
      let item = null;

      if (type === 'president') item = executive.president;
      else if (type === 'pm') item = executive.primeMinister;
      else if (type === 'institution') item = institutions.find(i => i.id === id);
      else item = ministries.find(m => m.id === id);

      if (item) {
        store.openDrawer(item, type);
      }
    };

    card.addEventListener('click', handleSelect);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSelect();
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
