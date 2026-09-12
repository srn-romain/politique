import React from 'react';
import {
  X, Landmark, User, MapPin, History, Shield, CheckCircle2
} from 'lucide-react';

export default function DetailDrawer({ item, type, onClose }) {
  if (!item) return null;

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

  const title       = item.name || item.title;
  const building    = item.building || item.institution;
  const address     = item.address;
  const budget      = item.budgetBillions;
  const staff       = item.staffCount || item.composition || (item.seats ? `${item.seats} sièges` : null);
  const predecessors = item.predecessors || [];
  const powers      = representative?.missions || representative?.keyPowers || item.keyPowers;

  const categoryLabel = item.categoryLabel
    || item.branch
    || (isPresident ? "Chef de l'État" : isPM ? 'Chef du Gouvernement' : 'Institution');

  const initials = (name) =>
    name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'RF';

  return (
    <div className="drawer-backdrop" role="dialog" aria-modal="true" aria-label={`Détails : ${title}`}>
      {/* Fond cliquable pour fermer */}
      <div className="drawer-backdrop-click" onClick={onClose} aria-hidden="true" />

      {/* Panneau latéral */}
      <div className="drawer-panel">

        {/* En-tête fixe */}
        <div className="drawer-header">
          <span className="drawer-header-tag">{categoryLabel}</span>
          <button className="drawer-close" onClick={onClose} aria-label="Fermer le panneau">
            <X size={18} />
          </button>
        </div>

        {/* Corps scrollable */}
        <div className="drawer-body">

          {/* ── Carte titre ──────────────────── */}
          <div className="drawer-title-card">
            <h2 className="drawer-title">{title}</h2>
            {item.subtitle && (
              <p className="drawer-subtitle">{item.subtitle}</p>
            )}

            {/* Localisation & bâtiment */}
            {(building || address) && (
              <div className="drawer-meta-chips">
                {building && (
                  <span className="drawer-chip">
                    <Landmark size={13} /> {building}
                  </span>
                )}
                {address && (
                  <span className="drawer-chip">
                    <MapPin size={13} /> {address}
                  </span>
                )}
              </div>
            )}

            {/* Stats budget / effectifs */}
            {(budget || staff) && (
              <div className="drawer-stats">
                {budget && (
                  <div className="drawer-stat">
                    <span className="drawer-stat-label">Budget alloué</span>
                    <span className="drawer-stat-value">{budget}</span>
                  </div>
                )}
                {staff && (
                  <div className="drawer-stat">
                    <span className="drawer-stat-label">Effectifs / Composition</span>
                    <span className="drawer-stat-value">{staff}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Représentant actuel ───────────── */}
          {representative && (
            <div className="drawer-section">
              <div className="drawer-section-head">
                <span className="drawer-section-title">
                  <User size={15} style={{ color: 'var(--blue-rf)' }} />
                  Représentant Actuel
                </span>
                {representative.sinceDate && (
                  <span className="drawer-since-badge">
                    En fonction depuis : {representative.sinceDate}
                  </span>
                )}
              </div>

              {/* Avatar + nom */}
              <div className="rep-card">
                <div className="rep-avatar" aria-hidden="true">
                  {initials(representative.name)}
                </div>
                <div>
                  <div className="rep-name">{representative.name}</div>
                  <div className="rep-title">
                    {representative.title
                      || item.title
                      || (isPresident ? 'Président de la République'
                          : isPM ? 'Premier Ministre'
                          : 'Ministre')}
                  </div>
                  <div className="rep-chips">
                    {representative.age && (
                      <span className="badge badge-grey">{representative.age} ans</span>
                    )}
                    {representative.party && (
                      <span className="badge badge-blue">{representative.party}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Biographie */}
              {representative.biography && (
                <div>
                  <span className="bio-label">Parcours & Biographie</span>
                  <p className="bio-text">{representative.biography}</p>
                </div>
              )}

              {/* Missions / Pouvoirs */}
              {powers && powers.length > 0 && (
                <div>
                  <span className="mission-label">
                    <Shield size={13} style={{ display: 'inline', marginRight: 6, color: 'var(--blue-rf)' }} />
                    Missions & Attributions officielles
                  </span>
                  <div className="missions-list">
                    {powers.map((pow, idx) => (
                      <div key={idx} className="mission-item">
                        <CheckCircle2 size={15} className="mission-check" aria-hidden="true" />
                        <span>{pow}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Historique des prédécesseurs ─── */}
          <div className="drawer-section">
            <div className="drawer-section-head">
              <span className="drawer-section-title">
                <History size={15} />
                Historique des prédécesseurs à ce poste
              </span>
              <span className="badge badge-grey">{predecessors.length} répertoriés</span>
            </div>

            {predecessors.length === 0 ? (
              <p className="text-muted" style={{ fontStyle: 'italic' }}>
                Aucun prédécesseur répertorié.
              </p>
            ) : (
              <div className="preds-timeline">
                {predecessors.map((pred, idx) => (
                  <div key={idx} className="pred-item">
                    <div className="pred-dot" aria-hidden="true" />
                    <div className="pred-card">
                      <div className="pred-header">
                        <span className="pred-name">{pred.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <span className="pred-period">{pred.period}</span>
                          {pred.party && (
                            <span className="pred-party">• {pred.party}</span>
                          )}
                        </div>
                      </div>
                      {pred.highlight && (
                        <div className="pred-highlight">
                          <strong>Action clé :</strong> {pred.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Pied de panneau */}
        <div className="drawer-footer">
          <span className="drawer-source">
            Source : données institutionnelles de la République Française
          </span>
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}
