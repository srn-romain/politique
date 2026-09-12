import React from 'react';
import { Vote, CheckCircle2, History } from 'lucide-react';
import { electionsData } from '../data/electionsData';

export default function ElectionsView() {
  return (
    <div className="container" style={{ paddingTop: '8px' }}>

      {/* ── Bannière intro ─────────────────── */}
      <div className="section-head">
        <h2>Guide de l'Élection Présidentielle</h2>
        <p>
          Règles constitutionnelles, parrainages d'élus et suivi
          des échéances électorales de la République.
        </p>
      </div>

      {/* ── Cadre constitutionnel ──────────── */}
      <div className="card" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, paddingBottom: 20, borderBottom: '1px solid var(--grey-200)', marginBottom: 20, flexWrap: 'wrap' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: 8, display: 'inline-block' }}>
              Cadre constitutionnel officiel
            </span>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--grey-900)' }}>
              Modalités du scrutin présidentiel
            </h3>
          </div>
          <span className="badge badge-grey">Articles 6 &amp; 7 de la Constitution</span>
        </div>

        <p style={{ fontSize: 14, color: 'var(--grey-700)', lineHeight: 1.7, background: 'var(--grey-100)', border: '1px solid var(--grey-200)', borderRadius: 'var(--radius-md)', padding: '18px 20px', marginBottom: 24 }}>
          {electionsData.ruleDescription}
        </p>

        <div className="rules-grid">
          {electionsData.rules.map((rule, idx) => (
            <div key={idx} className="rule-card">
              <div className="rule-card-head">
                <CheckCircle2 size={14} />
                {rule.title}
              </div>
              <p>{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Espace candidatures ────────────── */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, borderBottom: '2px solid var(--grey-200)', paddingBottom: 16, marginBottom: 20, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--grey-900)' }}>
              Espace Candidatures & Programmes (Évolutif)
            </h3>
            <p style={{ fontSize: 13, color: 'var(--grey-500)', marginTop: 4 }}>
              Section prête pour l'intégration des candidatures déclarées et comparateurs de propositions
            </p>
          </div>
          <span className="badge badge-blue" style={{ alignSelf: 'flex-start' }}>Échéance 2027</span>
        </div>

        <div className="candidates-grid">
          {electionsData.sampleCandidates.map(cand => (
            <div key={cand.id} className="cand-card">
              <div className="cand-top">
                <span className="cand-party">{cand.party}</span>
                <span className="cand-status">{cand.status}</span>
              </div>
              <h4 className="cand-name">{cand.name}</h4>
              <p className="cand-bio">{cand.bio}</p>
              <div className="cand-pillars">
                <span className="cand-pillars-label">Axes programmatiques :</span>
                {cand.keyPillars.map((pil, idx) => (
                  <div key={idx} className="cand-pillar">
                    <span className="cand-pillar-dot" aria-hidden="true" />
                    <span>{pil}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Historique présidentiel ────────── */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 16, borderBottom: '1px solid var(--grey-200)', marginBottom: 20 }}>
          <History size={16} style={{ color: 'var(--grey-500)' }} />
          <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--grey-900)' }}>
            Historique des Résultats Présidentiels sous la Ve République
          </h3>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="elections-table">
            <thead>
              <tr>
                <th>Année</th>
                <th>Élu (2nd tour)</th>
                <th>Second finaliste</th>
                <th>Participation</th>
              </tr>
            </thead>
            <tbody>
              {electionsData.historicalElections.map((elec, idx) => (
                <tr key={idx}>
                  <td>{elec.year}</td>
                  <td>{elec.winner}</td>
                  <td style={{ color: 'var(--grey-600)' }}>{elec.finalist}</td>
                  <td>{elec.turnout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
