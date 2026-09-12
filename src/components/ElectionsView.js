import { getIcon } from '../icons.js';
import { electionsData } from '../data/electionsData.js';

export function renderElectionsView(container) {
  const html = `
    <div class="container" style="padding-top: 8px;">

      <!-- ── Bannière intro ─────────────────── -->
      <div class="section-head">
        <h2>Guide de l'Élection Présidentielle</h2>
        <p>
          Règles constitutionnelles, parrainages d'élus et suivi
          des échéances électorales de la République.
        </p>
      </div>

      <!-- ── Cadre constitutionnel ──────────── -->
      <div class="card" style="margin-bottom: 32px;">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid var(--grey-200); margin-bottom: 20px; flex-wrap: wrap;">
          <div>
            <span class="badge badge-blue" style="margin-bottom: 8px; display: inline-block;">
              Cadre constitutionnel officiel
            </span>
            <h3 style="font-size: 20px; font-weight: 800; color: var(--grey-900);">
              Modalités du scrutin présidentiel
            </h3>
          </div>
          <span class="badge badge-grey">Articles 6 &amp; 7 de la Constitution</span>
        </div>

        <p style="font-size: 14px; color: var(--grey-700); line-height: 1.7; background: var(--grey-100); border: 1px solid var(--grey-200); border-radius: var(--radius-md); padding: 18px 20px; margin-bottom: 24px;">
          ${escapeHtml(electionsData.ruleDescription)}
        </p>

        <div class="rules-grid">
          ${electionsData.rules.map(rule => `
            <div class="rule-card">
              <div class="rule-card-head">
                ${getIcon('CheckCircle2', { size: 14 })}
                ${escapeHtml(rule.title)}
              </div>
              <p>${escapeHtml(rule.desc)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ── Espace candidatures ────────────── -->
      <div style="margin-bottom: 32px;">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; border-bottom: 2px solid var(--grey-200); padding-bottom: 16px; margin-bottom: 20px; flex-wrap: wrap;">
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--grey-900);">
              Espace Candidatures &amp; Programmes (Évolutif)
            </h3>
            <p style="font-size: 13px; color: var(--grey-500); margin-top: 4px;">
              Section prête pour l'intégration des candidatures déclarées et comparateurs de propositions
            </p>
          </div>
          <span class="badge badge-blue" style="align-self: flex-start;">Échéance 2027</span>
        </div>

        <div class="candidates-grid">
          ${electionsData.sampleCandidates.map(cand => `
            <div class="cand-card">
              <div class="cand-top">
                <span class="cand-party">${escapeHtml(cand.party)}</span>
                <span class="cand-status">${escapeHtml(cand.status)}</span>
              </div>
              <h4 class="cand-name">${escapeHtml(cand.name)}</h4>
              <p class="cand-bio">${escapeHtml(cand.bio)}</p>
              <div class="cand-pillars">
                <span class="cand-pillars-label">Axes programmatiques :</span>
                ${cand.keyPillars.map(pil => `
                  <div class="cand-pillar">
                    <span class="cand-pillar-dot" aria-hidden="true"></span>
                    <span>${escapeHtml(pil)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- ── Historique présidentiel ────────── -->
      <div class="card">
        <div style="display: flex; align-items: center; gap: 10px; padding-bottom: 16px; border-bottom: 1px solid var(--grey-200); margin-bottom: 20px;">
          ${getIcon('History', { size: 16, style: 'color: var(--grey-500);' })}
          <h3 style="font-size: 15px; font-weight: 800; color: var(--grey-900);">
            Historique des Résultats Présidentiels sous la Ve République
          </h3>
        </div>

        <div style="overflow-x: auto;">
          <table class="elections-table">
            <thead>
              <tr>
                <th>Année</th>
                <th>Élu (2nd tour)</th>
                <th>Second finaliste</th>
                <th>Participation</th>
              </tr>
            </thead>
            <tbody>
              ${electionsData.historicalElections.map(elec => `
                <tr>
                  <td>${escapeHtml(elec.year)}</td>
                  <td>${escapeHtml(elec.winner)}</td>
                  <td style="color: var(--grey-600);">${escapeHtml(elec.finalist)}</td>
                  <td>${escapeHtml(elec.turnout)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;

  container.innerHTML = html;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
