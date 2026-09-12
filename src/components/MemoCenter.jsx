import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const iconMap = {
  Shield:       BookOpen,
  FileQuestion: BookOpen,
  Columns2:     BookOpen,
  Layers:       BookOpen,
  HelpCircle:   BookOpen,
};
// Lazy import de lucide pour les icônes dynamiques
import {
  Shield, Layers
} from 'lucide-react';
const iconMapFull = { Shield, Layers, BookOpen };

export default function MemoCenter({ memos }) {
  const [selectedMemo,      setSelectedMemo]      = useState(memos[0]);
  const [userAnswers,       setUserAnswers]        = useState({});
  const [showExplanations,  setShowExplanations]   = useState({});

  const handleSelectOption = (memoId, optionIndex) => {
    if (userAnswers[memoId] !== undefined) return;
    setUserAnswers(prev  => ({ ...prev, [memoId]: optionIndex }));
    setShowExplanations(prev => ({ ...prev, [memoId]: true }));
  };

  const resetQuiz = (memoId) => {
    setUserAnswers(prev  => { const c = { ...prev }; delete c[memoId]; return c; });
    setShowExplanations(prev => { const c = { ...prev }; delete c[memoId]; return c; });
  };

  return (
    <div className="container" style={{ paddingTop: '8px' }}>

      {/* ── Bannière intro ────────────────── */}
      <div className="section-head">
        <h2>Fiches Pratiques & Compréhension de la Ve République</h2>
        <p>
          Des synthèses claires, objectives et pédagogiques pour comprendre
          le fonctionnement institutionnel.
        </p>
      </div>

      {/* ── Layout deux colonnes ─────────── */}
      <div className="memos-layout">

        {/* ── Sidebar : liste des fiches ── */}
        <aside>
          <div className="memos-sidebar-label">
            Sommaire des fiches ({memos.length})
          </div>
          <div className="memos-sidebar">
            {memos.map(memo => {
              const isSelected  = selectedMemo.id === memo.id;
              const isAnswered  = userAnswers[memo.id] !== undefined;
              const wasCorrect  = isAnswered && userAnswers[memo.id] === memo.quiz.correctIndex;

              return (
                <div
                  key={memo.id}
                  className={`memo-list-item${isSelected ? ' selected' : ''}`}
                  onClick={() => setSelectedMemo(memo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setSelectedMemo(memo)}
                  aria-pressed={isSelected}
                >
                  <div className="memo-list-icon" aria-hidden="true">
                    <BookOpen size={16} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span className="memo-list-cat">{memo.category}</span>
                    <div className="memo-list-title">{memo.title}</div>
                    <div className="memo-list-sub">{memo.subtitle}</div>
                  </div>
                  {isAnswered && (
                    <span className={`memo-score-badge ${wasCorrect ? 'score-ok' : 'score-err'}`}>
                      {wasCorrect ? '✓' : '✗'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* ── Contenu de la fiche sélectionnée ── */}
        <main>
          <div className="memo-detail">

            {/* En-tête fiche */}
            <div className="memo-detail-head">
              <div className="memo-detail-icon" aria-hidden="true">
                <BookOpen size={20} />
              </div>
              <div>
                <span className="memo-detail-cat">
                  Fiche thématique • {selectedMemo.category}
                </span>
                <h3 className="memo-detail-title">{selectedMemo.title}</h3>
                <p className="memo-detail-subtitle">{selectedMemo.subtitle}</p>
              </div>
            </div>

            {/* Résumé */}
            <p className="memo-summary">{selectedMemo.summary}</p>

            {/* Blocs de contenu */}
            <div className="memo-content-blocks">
              {selectedMemo.content.map((block, idx) => (
                <div key={idx} className="memo-block">
                  <h4>{block.heading}</h4>
                  <p>{block.text}</p>
                </div>
              ))}

              {selectedMemo.funFact && (
                <div className="memo-funfact">
                  <strong>💡 Repère historique / Le saviez-vous ?</strong>
                  {selectedMemo.funFact}
                </div>
              )}
            </div>

            {/* Quiz */}
            <div className="quiz-box">
              <div className="quiz-header">
                <div className="quiz-title">
                  <Award size={15} style={{ color: 'var(--blue-rf)' }} />
                  Questionnaire d'auto-évaluation citoyenne
                </div>
                {userAnswers[selectedMemo.id] !== undefined && (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => resetQuiz(selectedMemo.id)}
                  >
                    <RotateCcw size={13} /> Recommencer
                  </button>
                )}
              </div>

              <p className="quiz-question">{selectedMemo.quiz.question}</p>

              <div className="quiz-options">
                {selectedMemo.quiz.options.map((option, idx) => {
                  const isAnswered = userAnswers[selectedMemo.id] !== undefined;
                  const isSelected = userAnswers[selectedMemo.id] === idx;
                  const isCorrect  = idx === selectedMemo.quiz.correctIndex;

                  let cls = 'quiz-option';
                  if (isAnswered) {
                    if (isCorrect)        cls += ' q-correct';
                    else if (isSelected)  cls += ' q-wrong';
                    else                  cls += ' q-faded';
                  }

                  return (
                    <button
                      key={idx}
                      className={cls}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(selectedMemo.id, idx)}
                    >
                      <span>{option}</span>
                      {isAnswered && isCorrect  && <CheckCircle2 size={15} style={{ flexShrink: 0 }} />}
                      {isAnswered && isSelected && !isCorrect && <XCircle size={15} style={{ flexShrink: 0 }} />}
                    </button>
                  );
                })}
              </div>

              {showExplanations[selectedMemo.id] && (
                <div className="quiz-feedback">
                  <strong>
                    {userAnswers[selectedMemo.id] === selectedMemo.quiz.correctIndex
                      ? '✓ Réponse exacte :'
                      : 'Explication :'}
                  </strong>
                  {selectedMemo.quiz.explanation}
                </div>
              )}
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
