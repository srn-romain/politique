import { getIcon } from '../icons.js';
import { memosData } from '../data/memosData.js';

let selectedMemoId = memosData[0].id;
const userAnswers = {};
const showExplanations = {};

export function renderMemoCenter(container) {
  const memos = memosData;
  const selectedMemo = memos.find(m => m.id === selectedMemoId) || memos[0];
  const isAnswered = userAnswers[selectedMemo.id] !== undefined;
  const userAnswerIdx = userAnswers[selectedMemo.id];

  const html = `
    <div class="container" style="padding-top: 8px;">

      <!-- ── Bannière intro ────────────────── -->
      <div class="section-head">
        <h2>Fiches Pratiques &amp; Compréhension de la Ve République</h2>
        <p>
          Des synthèses claires, objectives et pédagogiques pour comprendre
          le fonctionnement institutionnel.
        </p>
      </div>

      <!-- ── Layout deux colonnes ─────────── -->
      <div class="memos-layout">

        <!-- ── Sidebar : liste des fiches ── -->
        <aside>
          <div class="memos-sidebar-label">
            Sommaire des fiches (${memos.length})
          </div>
          <div class="memos-sidebar">
            ${memos.map(memo => {
              const isSelected = selectedMemo.id === memo.id;
              const answered = userAnswers[memo.id] !== undefined;
              const wasCorrect = answered && userAnswers[memo.id] === memo.quiz.correctIndex;

              return `
                <div
                  class="memo-list-item${isSelected ? ' selected' : ''}"
                  data-memo-id="${memo.id}"
                  role="button"
                  tabindex="0"
                  aria-pressed="${isSelected}"
                >
                  <div class="memo-list-icon" aria-hidden="true">
                    ${getIcon('BookOpen', { size: 16 })}
                  </div>
                  <div style="flex: 1; min-width: 0;">
                    <span class="memo-list-cat">${escapeHtml(memo.category)}</span>
                    <div class="memo-list-title">${escapeHtml(memo.title)}</div>
                    <div class="memo-list-sub">${escapeHtml(memo.subtitle)}</div>
                  </div>
                  ${answered ? `
                    <span class="memo-score-badge ${wasCorrect ? 'score-ok' : 'score-err'}">
                      ${wasCorrect ? '✓' : '✗'}
                    </span>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </aside>

        <!-- ── Contenu de la fiche sélectionnée ── -->
        <main>
          <div class="memo-detail">

            <!-- En-tête fiche -->
            <div class="memo-detail-head">
              <div class="memo-detail-icon" aria-hidden="true">
                ${getIcon('BookOpen', { size: 20 })}
              </div>
              <div>
                <span class="memo-detail-cat">
                  Fiche thématique • ${escapeHtml(selectedMemo.category)}
                </span>
                <h3 class="memo-detail-title">${escapeHtml(selectedMemo.title)}</h3>
                <p class="memo-detail-subtitle">${escapeHtml(selectedMemo.subtitle)}</p>
              </div>
            </div>

            <!-- Résumé -->
            <p class="memo-summary">${escapeHtml(selectedMemo.summary)}</p>

            <!-- Blocs de contenu -->
            <div class="memo-content-blocks">
              ${selectedMemo.content.map(block => `
                <div class="memo-block">
                  <h4>${escapeHtml(block.heading)}</h4>
                  <p>${escapeHtml(block.text)}</p>
                </div>
              `).join('')}

              ${selectedMemo.funFact ? `
                <div class="memo-funfact">
                  <strong>💡 Repère historique / Le saviez-vous ?</strong>
                  ${escapeHtml(selectedMemo.funFact)}
                </div>
              ` : ''}
            </div>

            <!-- Quiz -->
            <div class="quiz-box">
              <div class="quiz-header">
                <div class="quiz-title">
                  ${getIcon('Award', { size: 15, style: 'color: var(--blue-rf);' })}
                  Questionnaire d'auto-évaluation citoyenne
                </div>
                ${isAnswered ? `
                  <button class="btn btn-ghost btn-sm" id="quiz-reset-btn">
                    ${getIcon('RotateCcw', { size: 13 })} Recommencer
                  </button>
                ` : ''}
              </div>

              <p class="quiz-question">${escapeHtml(selectedMemo.quiz.question)}</p>

              <div class="quiz-options">
                ${selectedMemo.quiz.options.map((option, idx) => {
                  const isSelected = userAnswerIdx === idx;
                  const isCorrect  = idx === selectedMemo.quiz.correctIndex;

                  let cls = 'quiz-option';
                  if (isAnswered) {
                    if (isCorrect)        cls += ' q-correct';
                    else if (isSelected)  cls += ' q-wrong';
                    else                  cls += ' q-faded';
                  }

                  return `
                    <button
                      class="${cls}"
                      data-option-index="${idx}"
                      ${isAnswered ? 'disabled' : ''}
                    >
                      <span>${escapeHtml(option)}</span>
                      ${isAnswered && isCorrect ? getIcon('CheckCircle2', { size: 15, style: 'flex-shrink: 0;' }) : ''}
                      ${isAnswered && isSelected && !isCorrect ? getIcon('XCircle', { size: 15, style: 'flex-shrink: 0;' }) : ''}
                    </button>
                  `;
                }).join('')}
              </div>

              ${showExplanations[selectedMemo.id] ? `
                <div class="quiz-feedback">
                  <strong>
                    ${userAnswerIdx === selectedMemo.quiz.correctIndex
                      ? '✓ Réponse exacte :'
                      : 'Explication :'}
                  </strong>
                  ${escapeHtml(selectedMemo.quiz.explanation)}
                </div>
              ` : ''}
            </div>

          </div>
        </main>

      </div>
    </div>
  `;

  container.innerHTML = html;
  attachMemoEvents(container, selectedMemo);
}

function attachMemoEvents(container, selectedMemo) {
  // Sidebar items
  container.querySelectorAll('.memo-list-item').forEach(item => {
    const handleSelect = () => {
      selectedMemoId = item.dataset.memoId;
      renderMemoCenter(container);
      if (window.innerWidth < 1024) {
        const detail = container.querySelector('.memo-detail');
        if (detail) {
          detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    item.addEventListener('click', handleSelect);
    item.addEventListener('keydown', e => e.key === 'Enter' && handleSelect());
  });

  // Quiz option selection
  container.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (userAnswers[selectedMemo.id] !== undefined) return;
      const optIdx = parseInt(btn.dataset.optionIndex, 10);
      userAnswers[selectedMemo.id] = optIdx;
      showExplanations[selectedMemo.id] = true;
      renderMemoCenter(container);
    });
  });

  // Reset quiz
  const resetBtn = container.querySelector('#quiz-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      delete userAnswers[selectedMemo.id];
      delete showExplanations[selectedMemo.id];
      renderMemoCenter(container);
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
