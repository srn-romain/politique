import { getIcon } from '../icons.js';
import { store } from '../state.js';

export function renderDetailDrawer(container) {
  const state = store.getState();
  const { selectedNode: item, selectedNodeType: type } = state;

  if (!item) {
    container.innerHTML = '';
    return;
  }

  const isPresident   = type === 'president';
  const isPM          = type === 'pm';
  const isInstitution = type === 'institution';

  const representative = isPresident
    ? item
    : isPM
      ? {
          name: item.currentHolder,
          age: item.age,
          party: item.party,
          sinceDate: item.sinceDate,
          biography: item.biography,
          keyPowers: item.keyPowers
        }
      : isInstitution
        ? {
            name: item.currentLeader?.name,
            title: item.currentLeader?.title,
            age: item.currentLeader?.age,
            party: item.currentLeader?.party,
            sinceDate: item.currentLeader?.sinceDate,
            biography: item.currentLeader?.biography,
            keyPowers: item.keyPowers
          }
        : {
            name: item.currentMinister?.name,
            title: item.currentMinister?.title,
            age: item.currentMinister?.age,
            party: item.currentMinister?.party,
            sinceDate: item.currentMinister?.sinceDate,
            biography: item.currentMinister?.biography,
            missions: item.currentMinister?.missions
          };

  const title        = item.name || item.title || '';
  const building     = item.building || item.institution;
  const address      = item.address;
  const budget       = item.budgetBillions;
  const staff        = item.staffCount || item.composition || (item.seats ? `${item.seats} sièges` : null);
  const predecessors = item.predecessors || [];
  const powers       = representative?.missions || representative?.keyPowers || item.keyPowers;

  const categoryLabel = item.categoryLabel
    || item.branch
    || (isPresident ? "Chef de l'État" : isPM ? 'Chef du Gouvernement' : 'Institution');

  const initials = (name) =>
    name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'RF';

  const html = `
    <div class="drawer-backdrop" role="dialog" aria-modal="true" aria-label="Détails : ${escapeHtml(title)}">
      <!-- Fond cliquable pour fermer -->
      <div class="drawer-backdrop-click" id="drawer-backdrop-bg" aria-hidden="true"></div>

      <!-- Panneau latéral -->
      <div class="drawer-panel">

        <!-- En-tête fixe -->
        <div class="drawer-header">
          <span class="drawer-header-tag">${escapeHtml(categoryLabel)}</span>
          <button class="drawer-close" id="drawer-close-btn" aria-label="Fermer le panneau">
            ${getIcon('X', { size: 18 })}
          </button>
        </div>

        <!-- Corps scrollable -->
        <div class="drawer-body">

          <!-- ── Carte titre ──────────────────── -->
          <div class="drawer-title-card">
            <h2 class="drawer-title">${escapeHtml(title)}</h2>
            ${item.subtitle ? `
              <p class="drawer-subtitle">${escapeHtml(item.subtitle)}</p>
            ` : ''}

            <!-- Localisation & bâtiment -->
            ${(building || address) ? `
              <div class="drawer-meta-chips">
                ${building ? `
                  <span class="drawer-chip">
                    ${getIcon('Landmark', { size: 13 })} ${escapeHtml(building)}
                  </span>
                ` : ''}
                ${address ? `
                  <span class="drawer-chip">
                    ${getIcon('MapPin', { size: 13 })} ${escapeHtml(address)}
                  </span>
                ` : ''}
              </div>
            ` : ''}

            <!-- Stats budget / effectifs -->
            ${(budget || staff) ? `
              <div class="drawer-stats">
                ${budget ? `
                  <div class="drawer-stat">
                    <span class="drawer-stat-label">Budget alloué</span>
                    <span class="drawer-stat-value">${escapeHtml(budget)}</span>
                  </div>
                ` : ''}
                ${staff ? `
                  <div class="drawer-stat">
                    <span class="drawer-stat-label">Effectifs / Composition</span>
                    <span class="drawer-stat-value">${escapeHtml(staff)}</span>
                  </div>
                ` : ''}
              </div>
            ` : ''}
          </div>

          <!-- ── Représentant actuel ───────────── -->
          ${representative ? `
            <div class="drawer-section">
              <div class="drawer-section-head">
                <span class="drawer-section-title">
                  ${getIcon('User', { size: 15, style: 'color: var(--blue-rf);' })}
                  Représentant Actuel
                </span>
                ${representative.sinceDate ? `
                  <span class="drawer-since-badge">
                    En fonction depuis : ${escapeHtml(representative.sinceDate)}
                  </span>
                ` : ''}
              </div>

              <!-- Avatar + nom -->
              <div class="rep-card">
                <div class="rep-avatar" aria-hidden="true">
                  ${initials(representative.name)}
                </div>
                <div>
                  <div class="rep-name">${escapeHtml(representative.name || '')}</div>
                  <div class="rep-title">
                    ${escapeHtml(
                      representative.title
                      || item.title
                      || (isPresident ? 'Président de la République'
                          : isPM ? 'Premier Ministre'
                          : 'Ministre')
                    )}
                  </div>
                  <div class="rep-chips">
                    ${representative.age ? `
                      <span class="badge badge-grey">${representative.age} ans</span>
                    ` : ''}
                    ${representative.party ? `
                      <span class="badge badge-blue">${escapeHtml(representative.party)}</span>
                    ` : ''}
                  </div>
                </div>
              </div>

              <!-- Biographie -->
              ${representative.biography ? `
                <div>
                  <span class="bio-label">Parcours &amp; Biographie</span>
                  <p class="bio-text">${escapeHtml(representative.biography)}</p>
                </div>
              ` : ''}

              <!-- Missions / Pouvoirs -->
              ${(powers && powers.length > 0) ? `
                <div>
                  <span class="mission-label">
                    ${getIcon('Shield', { size: 13, style: 'display: inline; margin-right: 6px; color: var(--blue-rf);' })}
                    Missions &amp; Attributions officielles
                  </span>
                  <div class="missions-list">
                    ${powers.map(pow => `
                      <div class="mission-item">
                        ${getIcon('CheckCircle2', { size: 15, className: 'mission-check' })}
                        <span>${escapeHtml(pow)}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- ── Historique des prédécesseurs ─── -->
          <div class="drawer-section">
            <div class="drawer-section-head">
              <span class="drawer-section-title">
                ${getIcon('History', { size: 15 })}
                Historique des prédécesseurs à ce poste
              </span>
              <span class="badge badge-grey">${predecessors.length} répertoriés</span>
            </div>

            ${predecessors.length === 0 ? `
              <p class="text-muted" style="font-style: italic;">
                Aucun prédécesseur répertorié.
              </p>
            ` : `
              <div class="preds-timeline">
                ${predecessors.map(pred => `
                  <div class="pred-item">
                    <div class="pred-dot" aria-hidden="true"></div>
                    <div class="pred-card">
                      <div class="pred-header">
                        <span class="pred-name">${escapeHtml(pred.name)}</span>
                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                          <span class="pred-period">${escapeHtml(pred.period)}</span>
                          ${pred.party ? `
                            <span class="pred-party">• ${escapeHtml(pred.party)}</span>
                          ` : ''}
                        </div>
                      </div>
                      ${pred.highlight ? `
                        <div class="pred-highlight">
                          <strong>Action clé :</strong> ${escapeHtml(pred.highlight)}
                        </div>
                      ` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

        </div>

        <!-- Pied de panneau -->
        <div class="drawer-footer">
          <span class="drawer-source">
            Source : données institutionnelles de la République Française
          </span>
          <button class="btn btn-primary btn-sm" id="drawer-footer-close-btn">
            Fermer
          </button>
        </div>

      </div>
    </div>
  `;

  container.innerHTML = html;

  const handleClose = () => store.closeDrawer();

  const backdropBg = container.querySelector('#drawer-backdrop-bg');
  if (backdropBg) backdropBg.addEventListener('click', handleClose);

  const closeBtn = container.querySelector('#drawer-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', handleClose);

  const footerCloseBtn = container.querySelector('#drawer-footer-close-btn');
  if (footerCloseBtn) footerCloseBtn.addEventListener('click', handleClose);
}

// Global ESC key listener for the drawer
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const state = store.getState();
    if (state.selectedNode) {
      store.closeDrawer();
    }
  }
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
