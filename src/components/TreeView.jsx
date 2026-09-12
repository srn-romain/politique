import React from 'react';
import NodeCard from './NodeCard';
import { Building2, Landmark } from 'lucide-react';

export default function TreeView({
  executive,
  ministries,
  institutions,
  highlightedNodes = [],
  activeStepInfo = null,
  searchQuery = '',
  selectedCategory = 'all',
  onSelectNode
}) {
  const matchesSearch = (item) => {
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

  const presidentMatches = matchesSearch(executive.president);
  const pmMatches        = matchesSearch(executive.primeMinister);
  const isHighlighted    = (id) => highlightedNodes.includes(id);

  const showMins  = selectedCategory === 'all' ||
                    (selectedCategory !== 'legislatif' && selectedCategory !== 'controle');
  const showInsts = selectedCategory === 'all' ||
                    selectedCategory === 'legislatif' ||
                    selectedCategory === 'controle';

  return (
    <div className="tree-wrap">

      {/* ── Bannière de simulation active ───── */}
      {activeStepInfo && (
        <div className="container" style={{ marginBottom: '32px' }}>
          <div className="sim-banner">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1 }}>
              <div className="sim-banner-step-num" aria-hidden="true">
                {activeStepInfo.stepNumber}
              </div>
              <div className="sim-banner-body">
                <span className="sim-banner-label">
                  Simulation en cours • Étape {activeStepInfo.stepNumber}
                </span>
                <div className="sim-banner-title">{activeStepInfo.title}</div>
                <div className="sim-banner-desc">{activeStepInfo.description}</div>
              </div>
            </div>
            <span className="sim-banner-count">
              {highlightedNodes.length} institution(s) mobilisée(s)
            </span>
          </div>
        </div>
      )}

      {/* ── Exécutif : Président → PM ────────── */}
      {(presidentMatches || pmMatches) && selectedCategory === 'all' && (
        <div className="exec-section">
          <div className="exec-title">
            <h2>Le Pouvoir Exécutif</h2>
            <p>Présidence de la République & Direction du Gouvernement</p>
          </div>

          {presidentMatches && (
            <div className="exec-card-wrap">
              <NodeCard
                item={executive.president}
                type="president"
                isHighlighted={isHighlighted('presidence')}
                stepNumber={activeStepInfo?.stepNumber}
                onSelect={onSelectNode}
              />
            </div>
          )}

          {presidentMatches && pmMatches && (
            <div className="tree-connector">
              <div className="tree-vline" aria-hidden="true" />
              <span className="tree-connector-label">
                Nomme le Premier ministre (Article 8) ↓
              </span>
              <div className="tree-vline" aria-hidden="true" />
            </div>
          )}

          {pmMatches && (
            <div className="exec-card-wrap">
              <NodeCard
                item={executive.primeMinister}
                type="pm"
                isHighlighted={isHighlighted('matignon')}
                stepNumber={activeStepInfo?.stepNumber}
                onSelect={onSelectNode}
              />
            </div>
          )}

          {/* Séparateur avec label */}
          <div className="tree-section-divider">
            <div className="tree-vline" aria-hidden="true" />
            <div className="tree-section-divider-line">
              <span className="tree-section-divider-text">
                Action Gouvernementale & Institutions de la République
              </span>
            </div>
            <div className="tree-vline" aria-hidden="true" />
          </div>
        </div>
      )}

      {/* ── Corps : Ministères + Parlement ──── */}
      <div className="container">
        <div className="tree-body">

          {/* Colonne gauche : Ministères */}
          {showMins && (
            <div>
              <div className="tree-col-header">
                <div className="tree-col-header-left">
                  <Building2 size={20} className="tree-col-icon" aria-hidden="true" />
                  <h3>Les Ministères du Gouvernement</h3>
                </div>
                <span className="tree-count-badge">
                  {filteredMinistries.length} ministères
                </span>
              </div>

              {filteredMinistries.length === 0 ? (
                <div className="empty-state">
                  Aucun ministère ne correspond aux critères de recherche.
                </div>
              ) : (
                <div className="ministries-grid">
                  {filteredMinistries.map(ministry => (
                    <NodeCard
                      key={ministry.id}
                      item={ministry}
                      type="ministry"
                      isHighlighted={isHighlighted(ministry.id)}
                      stepNumber={activeStepInfo?.stepNumber}
                      onSelect={onSelectNode}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Colonne droite : Parlement & Contrôle */}
          {showInsts && (
            <div>
              <div className="tree-col-header">
                <div className="tree-col-header-left">
                  <Landmark size={20} className="tree-col-icon" aria-hidden="true" />
                  <h3>Parlement & Contrôle</h3>
                </div>
                <span className="tree-count-badge">
                  {filteredInstitutions.length} institutions
                </span>
              </div>

              {filteredInstitutions.length === 0 ? (
                <div className="empty-state">
                  Aucune institution ne correspond à votre recherche.
                </div>
              ) : (
                <div className="institutions-list">
                  {filteredInstitutions.map(institution => (
                    <NodeCard
                      key={institution.id}
                      item={institution}
                      type="institution"
                      isHighlighted={isHighlighted(institution.id)}
                      stepNumber={activeStepInfo?.stepNumber}
                      onSelect={onSelectNode}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
