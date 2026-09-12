import React, { useState, useEffect } from 'react';
import {
  Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Info, ArrowRight
} from 'lucide-react';

export default function ProcessSimulator({
  pathways,
  activePathway,
  setActivePathway,
  currentStepIndex,
  setCurrentStepIndex,
  onSwitchToTreeView
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedPath = activePathway || pathways[0];
  const steps        = selectedPath.steps || [];
  const currentStep  = steps[currentStepIndex] || steps[0];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex(prev => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length, setCurrentStepIndex]);

  const handleSelectPathway = (path) => {
    setActivePathway(path);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleNext  = () => { if (currentStepIndex < steps.length - 1) setCurrentStepIndex(p => p + 1); };
  const handlePrev  = () => { if (currentStepIndex > 0) setCurrentStepIndex(p => p - 1); };
  const handleReset = () => { setCurrentStepIndex(0); setIsPlaying(false); };

  return (
    <div className="container sim-view">

      {/* ── Bannière intro ───────────────────── */}
      <div className="section-head">
        <h2>Comprendre le Parcours d'une Loi & les Mécanismes Institutionnels</h2>
        <p>
          Sélectionnez une procédure pour suivre son déroulement officiel étape par étape
          et visualiser les institutions impliquées.
        </p>
      </div>

      {/* ── Sélecteur de parcours ────────────── */}
      <div className="sim-pathways-grid">
        {pathways.map(path => {
          const isSelected = selectedPath.id === path.id;
          return (
            <div
              key={path.id}
              className={`pathway-card${isSelected ? ' selected' : ''}`}
              onClick={() => handleSelectPathway(path)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && handleSelectPathway(path)}
              aria-pressed={isSelected}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="pathway-badge">{path.badge}</span>
                <span className="pathway-steps-count">{path.steps.length} étapes</span>
              </div>
              <h3 className="pathway-title">{path.title}</h3>
              <p className="pathway-summary">{path.summary}</p>
              <div className="pathway-footer-text">
                {isSelected ? '● Sélectionné' : 'Consulter →'}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Stepper principal ────────────────── */}
      <div className="stepper-card">

        {/* En-tête du stepper */}
        <div className="stepper-header">
          <div>
            <span className="stepper-meta">
              Étape {currentStepIndex + 1} sur {steps.length} — {selectedPath.title}
            </span>
            <h3 className="stepper-title">{currentStep.title}</h3>
          </div>

          <div className="stepper-controls">
            <button
              className={`btn btn-sm${isPlaying ? ' btn-danger' : ' btn-primary'}`}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Mettre en pause' : 'Lecture automatique'}
            >
              {isPlaying
                ? <><Pause size={14} /> Pause</>
                : <><Play size={14} /> Lecture auto</>}
            </button>
            <button
              className="btn-icon"
              onClick={handleReset}
              aria-label="Recommencer depuis le début"
              title="Recommencer"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Traceur d'étapes */}
        <div className="steps-tracker" role="list" aria-label="Navigation par étape">
          {steps.map((step, idx) => (
            <button
              key={idx}
              className={`step-dot${idx === currentStepIndex ? ' current' : idx < currentStepIndex ? ' done' : ''}`}
              onClick={() => { setCurrentStepIndex(idx); setIsPlaying(false); }}
              title={`Étape ${idx + 1} : ${step.title}`}
              aria-label={`Aller à l'étape ${idx + 1}`}
              aria-current={idx === currentStepIndex ? 'step' : undefined}
              role="listitem"
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Contenu de l'étape */}
        <div className="step-body">

          {/* Description (colonne principale) */}
          <div>
            <div className="step-institution-tag">
              <span className="step-institution-label">Institution(s) :</span>
              <span className="step-institution-name">{currentStep.institutionName}</span>
            </div>

            <div className="step-desc-box">
              <div className="step-desc-head">
                <Info size={15} style={{ color: 'var(--blue-rf)' }} />
                Description officielle de la procédure
              </div>
              <p className="step-desc-text">{currentStep.description}</p>
            </div>

            {currentStep.keyConcept && (
              <div className="step-keyconcept">
                <strong>💡 Point clé à retenir :</strong>
                {currentStep.keyConcept}
              </div>
            )}
          </div>

          {/* Colonne latérale */}
          <div>
            {currentStep.legalRef && (
              <div className="step-sidebar-card">
                <span className="step-sidebar-label">Base constitutionnelle</span>
                <p className="step-legalref">{currentStep.legalRef}</p>
              </div>
            )}

            <div className="step-tree-card">
              <span className="step-tree-label">Visualisation sur l'organigramme</span>
              <p className="step-tree-desc">
                Cette étape mobilise {currentStep.highlightNodes?.length ?? 0} institution(s)
                mise(s) en valeur sur l'arbre.
              </p>
              <button className="btn btn-primary btn-sm" onClick={onSwitchToTreeView} style={{ width: '100%', justifyContent: 'center' }}>
                Afficher l'Organigramme <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation étape précédente / suivante */}
        <div className="stepper-footer">
          <button
            className="btn btn-ghost btn-sm"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
          >
            <ChevronLeft size={15} /> Étape précédente
          </button>

          <span className="stepper-progress">
            {currentStepIndex + 1} / {steps.length}
          </span>

          <button
            className="btn btn-primary btn-sm"
            onClick={handleNext}
            disabled={currentStepIndex === steps.length - 1}
          >
            Étape suivante <ChevronRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}
