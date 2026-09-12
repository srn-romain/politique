import { getIcon } from '../icons.js';

export function createNodeCardHtml(item, type = 'ministry', isHighlighted = false, stepNumber = null) {
  const isPresident   = type === 'president';
  const isPM          = type === 'pm';
  const isInstitution = type === 'institution';

  const representative = isPresident
    ? item
    : isPM
      ? { name: item.currentHolder, age: item.age, party: item.party }
      : isInstitution
        ? item.currentLeader
        : item.currentMinister;

  const predecessorCount = item.predecessors ? item.predecessors.length : 0;

  const categoryLabel = item.categoryLabel
    || item.branch
    || (isPresident ? "Chef de l'État" : isPM ? 'Chef du Gouvernement' : 'Institution');

  const iconName = item.icon || 'Landmark';
  const displayName = item.shortName || item.title || item.name || '';

  const repInitials = representative?.name
    ? representative.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : 'RF';

  const itemId = item.id || (isPresident ? 'presidence' : isPM ? 'matignon' : '');

  return `
    <div
      role="button"
      tabindex="0"
      class="node-card card-clickable${isHighlighted ? ' node-highlighted' : ''}"
      data-node-id="${itemId}"
      data-node-type="${type}"
      aria-label="Consulter ${escapeHtml(displayName)}"
    >
      <!-- ── En-tête ──────────────────────────── -->
      <div class="node-card-top">
        <div class="node-card-icon-wrap">
          <div class="node-icon${isHighlighted ? ' highlighted' : ''}" aria-hidden="true">
            ${getIcon(iconName, { size: 18 })}
          </div>
          <div>
            <span class="node-card-label">${escapeHtml(categoryLabel)}</span>
            <h3 class="node-card-name">${escapeHtml(displayName)}</h3>
          </div>
        </div>

        ${isHighlighted ? `
          <span class="sim-badge" aria-label="Étape active ${stepNumber ?? ''}">
            ${getIcon('Zap', { size: 11 })}
            ${stepNumber ? `Étape #${stepNumber}` : 'Active'}
          </span>
        ` : ''}
      </div>

      <!-- ── Méta-chips ───────────────────────── -->
      ${(item.building || item.budgetBillions || item.seats) ? `
        <div class="node-meta-chips">
          ${item.building ? `
            <span class="meta-chip">
              ${getIcon('Landmark', { size: 11 })}
              ${escapeHtml(item.building)}
            </span>
          ` : ''}
          ${item.budgetBillions ? `
            <span class="meta-chip budget">Budget : ${escapeHtml(item.budgetBillions)}</span>
          ` : ''}
          ${item.seats ? `
            <span class="meta-chip seats">
              ${escapeHtml(String(item.seats))} ${typeof item.seats === 'number' ? 'sièges' : ''}
            </span>
          ` : ''}
        </div>
      ` : ''}

      <!-- ── Représentant actuel ───────────────── -->
      ${representative ? `
        <div class="node-rep">
          <div class="node-rep-avatar" aria-hidden="true">
            ${repInitials}
          </div>
          <div>
            <div class="node-rep-name">${escapeHtml(representative.name || '')}</div>
            <div class="node-rep-meta">
              ${representative.age ? `${representative.age} ans` : ''}
              ${representative.age && representative.party ? ' • ' : ''}
              ${representative.party ? escapeHtml(representative.party) : ''}
            </div>
          </div>
        </div>
      ` : ''}

      <!-- ── Pied de carte ────────────────────── -->
      <div class="node-card-footer">
        <span class="node-footer-pred">
          ${getIcon('History', { size: 13 })}
          ${predecessorCount > 0
            ? `${predecessorCount} prédécesseur${predecessorCount > 1 ? 's' : ''}`
            : 'Fiche institutionnelle'}
        </span>
        <span class="node-footer-link">
          Consulter
          ${getIcon('ChevronRight', { size: 13 })}
        </span>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
