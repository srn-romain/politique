import React from 'react';
import {
  Shield, Scale, Crosshair, Landmark, Globe, GraduationCap,
  HeartPulse, Leaf, Briefcase, Palette, Wheat, Atom, Trophy,
  Building2, ShieldCheck, FileCheck2, Receipt, History, ChevronRight, Zap
} from 'lucide-react';

const iconMap = {
  ShieldAlert: Shield, Scale, Crosshair, Landmark, Globe, GraduationCap,
  HeartPulse, Leaf, Briefcase, Palette, Wheat, Atom, Trophy,
  Building2, ShieldCheck, FileCheck2, Receipt
};

export default function NodeCard({
  item,
  type = 'ministry',
  isHighlighted = false,
  stepNumber = null,
  onSelect
}) {
  const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Landmark;

  const isPresident = type === 'president';
  const isPM        = type === 'pm';
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

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item, type)}
      onKeyDown={e => e.key === 'Enter' && onSelect(item, type)}
      className={`node-card card-clickable${isHighlighted ? ' node-highlighted' : ''}`}
      aria-label={`Consulter ${item.shortName || item.title || item.name}`}
    >
      {/* ── En-tête ──────────────────────────── */}
      <div className="node-card-top">
        <div className="node-card-icon-wrap">
          <div className={`node-icon${isHighlighted ? ' highlighted' : ''}`} aria-hidden="true">
            <IconComponent size={18} />
          </div>
          <div>
            <span className="node-card-label">{categoryLabel}</span>
            <h3 className="node-card-name">
              {item.shortName || item.title || item.name}
            </h3>
          </div>
        </div>

        {isHighlighted && (
          <span className="sim-badge" aria-label={`Étape active ${stepNumber ?? ''}`}>
            <Zap size={11} />
            {stepNumber ? `Étape #${stepNumber}` : 'Active'}
          </span>
        )}
      </div>

      {/* ── Méta-chips ───────────────────────── */}
      {(item.building || item.budgetBillions || item.seats) && (
        <div className="node-meta-chips">
          {item.building && (
            <span className="meta-chip">
              <Landmark size={11} />
              {item.building}
            </span>
          )}
          {item.budgetBillions && (
            <span className="meta-chip budget">Budget : {item.budgetBillions}</span>
          )}
          {item.seats && (
            <span className="meta-chip seats">
              {item.seats} {typeof item.seats === 'number' ? 'sièges' : ''}
            </span>
          )}
        </div>
      )}

      {/* ── Représentant actuel ───────────────── */}
      {representative && (
        <div className="node-rep">
          <div className="node-rep-avatar" aria-hidden="true">
            {representative.name
              ? representative.name.split(' ').map(n => n[0]).join('').slice(0, 2)
              : 'RF'}
          </div>
          <div>
            <div className="node-rep-name">{representative.name}</div>
            <div className="node-rep-meta">
              {representative.age ? `${representative.age} ans` : ''}
              {representative.age && representative.party ? ' • ' : ''}
              {representative.party || ''}
            </div>
          </div>
        </div>
      )}

      {/* ── Pied de carte ────────────────────── */}
      <div className="node-card-footer">
        <span className="node-footer-pred">
          <History size={13} />
          {predecessorCount > 0
            ? `${predecessorCount} prédécesseur${predecessorCount > 1 ? 's' : ''}`
            : 'Fiche institutionnelle'}
        </span>
        <span className="node-footer-link">
          Consulter
          <ChevronRight size={13} />
        </span>
      </div>
    </div>
  );
}
