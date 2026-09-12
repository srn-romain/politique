import { getIcon } from '../icons.js';
import { store } from '../state.js';
import { pathwaysData } from '../data/pathwaysData.js';

let playTimer = null;
let isPlaying = false;

export function cleanupProcessSimulator() {
  if (playTimer) {
    clearInterval(playTimer);
    playTimer = null;
  }
  isPlaying = false;
}

export function renderProcessSimulator(container) {
  const state = store.getState();
  const pathways = pathwaysData;
  const selectedPath = state.activePathway || pathways[0];
  const steps = selectedPath.steps || [];
  const currentStepIndex = state.currentStepIndex || 0;
  const currentStep = steps[currentStepIndex] || steps[0];

  const html = `
    <div class="container sim-view">

      <!-- ── Bannière intro ───────────────────── -->
      <div class="section-head">
        <h2>Comprendre le Parcours d'une Loi &amp; les Mécanismes Institutionnels</h2>
        <p>
          Sélectionnez une procédure pour suivre son déroulement officiel étape par étape
          et visualiser les institutions impliquées.
        </p>
      </div>

      <!-- ── Sélecteur de parcours ────────────── -->
      <div class="sim-pathways-grid">
        ${pathways.map(path => {
          const isSelected = selectedPath.id === path.id;
          return `
            <div
              class="pathway-card${isSelected ? ' selected' : ''}"
              data-pathway-id="${path.id}"
              role="button"
              tabindex="0"
              aria-pressed="${isSelected}"
            >
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="pathway-badge">${escapeHtml(path.badge)}</span>
                <span class="pathway-steps-count">${path.steps.length} étapes</span>
              </div>
              <h3 class="pathway-title">${escapeHtml(path.title)}</h3>
              <p class="pathway-summary">${escapeHtml(path.summary)}</p>
              <div class="pathway-footer-text">
                ${isSelected ? '● Sélectionné' : 'Consulter →'}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- ── Stepper principal ────────────────── -->
      <div class="stepper-card">

        <!-- En-tête du stepper -->
        <div class="stepper-header">
          <div>
            <span class="stepper-meta">
              Étape ${currentStepIndex + 1} sur ${steps.length} — ${escapeHtml(selectedPath.title)}
            </span>
            <h3 class="stepper-title">${escapeHtml(currentStep.title)}</h3>
          </div>

          <div class="stepper-controls">
            <button
              id="sim-play-toggle"
              class="btn btn-sm${isPlaying ? ' btn-danger' : ' btn-primary'}"
              aria-label="${isPlaying ? 'Mettre en pause' : 'Lecture automatique'}"
            >
              ${isPlaying
                ? `${getIcon('Pause', { size: 14 })} Pause`
                : `${getIcon('Play', { size: 14 })} Lecture auto`}
            </button>
            <button
              id="sim-reset-btn"
              class="btn-icon"
              aria-label="Recommencer depuis le début"
              title="Recommencer"
            >
              ${getIcon('RotateCcw', { size: 15 })}
            </button>
          </div>
        </div>

        <!-- Traceur d'étapes -->
        <div class="steps-tracker" role="list" aria-label="Navigation par étape">
          ${steps.map((step, idx) => `
            <button
              class="step-dot${idx === currentStepIndex ? ' current' : idx < currentStepIndex ? ' done' : ''}"
              data-step-index="${idx}"
              title="Étape ${idx + 1} : ${escapeHtml(step.title)}"
              aria-label="Aller à l'étape ${idx + 1}"
              ${idx === currentStepIndex ? 'aria-current="step"' : ''}
              role="listitem"
            >
              ${idx + 1}
            </button>
          `).join('')}
        </div>

        <!-- Contenu de l'étape -->
        <div class="step-body">

          <!-- Description (colonne principale) -->
          <div>
            <div class="step-institution-tag">
              <span class="step-institution-label">Institution(s) :</span>
              <span class="step-institution-name">${escapeHtml(currentStep.institutionName)}</span>
            </div>

            <div class="step-desc-box">
              <div class="step-desc-head">
                ${getIcon('Info', { size: 15, style: 'color: var(--blue-rf);' })}
                Description officielle de la procédure
              </div>
              <p class="step-desc-text">${escapeHtml(currentStep.description)}</p>
            </div>

            ${currentStep.keyConcept ? `
              <div class="step-keyconcept">
                <strong>💡 Point clé à retenir :</strong>
                ${escapeHtml(currentStep.keyConcept)}
              </div>
            ` : ''}
          </div>

          <!-- Colonne latérale -->
          <div>
            ${currentStep.legalRef ? `
              <div class="step-sidebar-card">
                <span class="step-sidebar-label">Base constitutionnelle</span>
                <p class="step-legalref">${escapeHtml(currentStep.legalRef)}</p>
              </div>
            ` : ''}

            <div class="step-tree-card">
              <span class="step-tree-label">Visualisation sur l'organigramme</span>
              <p class="step-tree-desc">
                Cette étape mobilise ${currentStep.highlightNodes?.length ?? 0} institution(s)
                mise(s) en valeur sur l'arbre.
              </p>
              <button id="sim-goto-tree-btn" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
                Afficher l'Organigramme ${getIcon('ArrowRight', { size: 13 })}
              </button>
            </div>
          </div>
        </div>

        <!-- Navigation étape précédente / suivante -->
        <div class="stepper-footer">
          <button
            id="sim-prev-btn"
            class="btn btn-ghost btn-sm"
            ${currentStepIndex === 0 ? 'disabled' : ''}
          >
            ${getIcon('ChevronLeft', { size: 15 })} Étape précédente
          </button>

          <span class="stepper-progress">
            ${currentStepIndex + 1} / ${steps.length}
          </span>

          <button
            id="sim-next-btn"
            class="btn btn-primary btn-sm"
            ${currentStepIndex === steps.length - 1 ? 'disabled' : ''}
          >
            Étape suivante ${getIcon('ChevronRight', { size: 15 })}
          </button>
        </div>

      </div>
    </div>
  `;

  container.innerHTML = html;
  attachSimulatorEvents(container, { pathways, selectedPath, steps, currentStepIndex });
}

function attachSimulatorEvents(container, { pathways, steps, currentStepIndex }) {
  // Pathway cards click
  container.querySelectorAll('.pathway-card').forEach(card => {
    const handleSelect = () => {
      const id = card.dataset.pathwayId;
      const path = pathways.find(p => p.id === id);
      if (path) {
        cleanupProcessSimulator();
        store.setState({
          activePathway: path,
          currentStepIndex: 0
        });
      }
    };
    card.addEventListener('click', handleSelect);
    card.addEventListener('keydown', e => e.key === 'Enter' && handleSelect());
  });

  // Step dots click
  container.querySelectorAll('.step-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.stepIndex, 10);
      cleanupProcessSimulator();
      store.setState({ currentStepIndex: idx });
    });
  });

  // Play / Pause toggle
  const playBtn = container.querySelector('#sim-play-toggle');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        cleanupProcessSimulator();
        renderProcessSimulator(container);
      } else {
        isPlaying = true;
        renderProcessSimulator(container);
        playTimer = setInterval(() => {
          const state = store.getState();
          const curr = state.currentStepIndex || 0;
          const maxSteps = state.activePathway?.steps?.length || 0;
          if (curr < maxSteps - 1) {
            store.setState({ currentStepIndex: curr + 1 });
          } else {
            cleanupProcessSimulator();
            renderProcessSimulator(container);
          }
        }, 4000);
      }
    });
  }

  // Reset button
  const resetBtn = container.querySelector('#sim-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      cleanupProcessSimulator();
      store.setState({ currentStepIndex: 0 });
    });
  }

  // Prev / Next
  const prevBtn = container.querySelector('#sim-prev-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStepIndex > 0) {
        cleanupProcessSimulator();
        store.setState({ currentStepIndex: currentStepIndex - 1 });
      }
    });
  }

  const nextBtn = container.querySelector('#sim-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStepIndex < steps.length - 1) {
        cleanupProcessSimulator();
        store.setState({ currentStepIndex: currentStepIndex + 1 });
      }
    });
  }

  // Switch to Tree view with highlighted nodes
  const gotoTreeBtn = container.querySelector('#sim-goto-tree-btn');
  if (gotoTreeBtn) {
    gotoTreeBtn.addEventListener('click', () => {
      cleanupProcessSimulator();
      store.setState({
        simLinkedToTree: true,
        activeTab: 'tree'
      });
    });
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
