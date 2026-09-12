import React, { useState } from 'react';
import {
  Download, Upload, RotateCcw, Save, Plus, Trash2, User, History, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function AdminEditor({
  executiveData,
  ministriesData,
  onSaveData,
  onResetToDefaults
}) {
  const [selectedEntityId,  setSelectedEntityId]  = useState('presidence');
  const [localExecutive,    setLocalExecutive]     = useState(() => JSON.parse(JSON.stringify(executiveData)));
  const [localMinistries,   setLocalMinistries]    = useState(() => JSON.parse(JSON.stringify(ministriesData)));
  const [saveNotification,  setSaveNotification]   = useState('');

  const isPresident          = selectedEntityId === 'presidence';
  const isPM                 = selectedEntityId === 'matignon';
  const selectedMinistryIndex = (!isPresident && !isPM)
    ? localMinistries.findIndex(m => m.id === selectedEntityId)
    : -1;
  const currentMinistry = selectedMinistryIndex >= 0 ? localMinistries[selectedMinistryIndex] : null;

  /* ── Helpers de mise à jour ─────────────────────────────── */
  const handleUpdateField = (field, value) => {
    if (isPresident) {
      setLocalExecutive(prev => ({ ...prev, president: { ...prev.president, [field]: value } }));
    } else if (isPM) {
      setLocalExecutive(prev => ({ ...prev, primeMinister: { ...prev.primeMinister, [field]: value } }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      const ministryFields = ['name', 'shortName', 'building', 'address', 'budgetBillions', 'staffCount'];
      if (ministryFields.includes(field)) {
        updated[selectedMinistryIndex] = { ...updated[selectedMinistryIndex], [field]: value };
      } else {
        updated[selectedMinistryIndex] = {
          ...updated[selectedMinistryIndex],
          currentMinister: { ...updated[selectedMinistryIndex].currentMinister, [field]: value }
        };
      }
      setLocalMinistries(updated);
    }
  };

  const handleAddPredecessor = () => {
    const newPred = { name: 'Nouveau Prédécesseur', period: '2024 - 2026', party: 'Parti', highlight: 'Action marquante' };
    if (isPresident) {
      setLocalExecutive(prev => ({ ...prev, president: { ...prev.president, predecessors: [newPred, ...(prev.president.predecessors || [])] } }));
    } else if (isPM) {
      setLocalExecutive(prev => ({ ...prev, primeMinister: { ...prev.primeMinister, predecessors: [newPred, ...(prev.primeMinister.predecessors || [])] } }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      updated[selectedMinistryIndex] = { ...updated[selectedMinistryIndex], predecessors: [newPred, ...(updated[selectedMinistryIndex].predecessors || [])] };
      setLocalMinistries(updated);
    }
  };

  const handleUpdatePredecessor = (index, field, value) => {
    if (isPresident) {
      const preds = [...localExecutive.president.predecessors];
      preds[index] = { ...preds[index], [field]: value };
      setLocalExecutive(prev => ({ ...prev, president: { ...prev.president, predecessors: preds } }));
    } else if (isPM) {
      const preds = [...localExecutive.primeMinister.predecessors];
      preds[index] = { ...preds[index], [field]: value };
      setLocalExecutive(prev => ({ ...prev, primeMinister: { ...prev.primeMinister, predecessors: preds } }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      const preds = [...updated[selectedMinistryIndex].predecessors];
      preds[index] = { ...preds[index], [field]: value };
      updated[selectedMinistryIndex] = { ...updated[selectedMinistryIndex], predecessors: preds };
      setLocalMinistries(updated);
    }
  };

  const handleRemovePredecessor = (index) => {
    if (isPresident) {
      const preds = localExecutive.president.predecessors.filter((_, i) => i !== index);
      setLocalExecutive(prev => ({ ...prev, president: { ...prev.president, predecessors: preds } }));
    } else if (isPM) {
      const preds = localExecutive.primeMinister.predecessors.filter((_, i) => i !== index);
      setLocalExecutive(prev => ({ ...prev, primeMinister: { ...prev.primeMinister, predecessors: preds } }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      updated[selectedMinistryIndex] = {
        ...updated[selectedMinistryIndex],
        predecessors: updated[selectedMinistryIndex].predecessors.filter((_, i) => i !== index)
      };
      setLocalMinistries(updated);
    }
  };

  const handleAddNewMinistry = () => {
    const newId = `ministere_${Date.now()}`;
    const newMinistry = {
      id: newId, name: 'Nouveau Ministère', shortName: 'Nouveau Ministère',
      category: 'social_sante', categoryLabel: 'Ministère', color: '#000091',
      icon: 'Landmark', building: 'Hôtel Ministériel', address: 'Paris',
      budgetBillions: '1.0 Md €', staffCount: '5 000 agents',
      currentMinister: {
        name: 'Nom du Ministre', title: 'Ministre', age: 45,
        sinceDate: '2026', party: 'Sans étiquette',
        biography: 'Parcours du nouveau ministre.', missions: ['Mission 1', 'Mission 2']
      },
      predecessors: []
    };
    setLocalMinistries(prev => [...prev, newMinistry]);
    setSelectedEntityId(newId);
  };

  const handleSaveLive = () => {
    onSaveData(localExecutive, localMinistries);
    setSaveNotification('Modifications enregistrées avec succès.');
    setTimeout(() => setSaveNotification(''), 4000);
  };

  const handleExportJSON = () => {
    const fullData = { executive: localExecutive, ministries: localMinistries };
    const dataStr  = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(fullData, null, 2));
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', 'gouvernement.json');
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSaveNotification("Fichier 'gouvernement.json' téléchargé avec succès.");
    setTimeout(() => setSaveNotification(''), 4000);
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.executive && parsed.ministries) {
          setLocalExecutive(parsed.executive);
          setLocalMinistries(parsed.ministries);
          onSaveData(parsed.executive, parsed.ministries);
          setSaveNotification('Fichier JSON importé avec succès.');
          setTimeout(() => setSaveNotification(''), 4000);
        } else {
          alert("Structure JSON invalide : doit contenir 'executive' et 'ministries'.");
        }
      } catch (err) {
        alert('Erreur de lecture du fichier : ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  /* ── Entité active pour le formulaire ───────────────────── */
  const activeEntity = isPresident ? {
    name: localExecutive.president.name, title: localExecutive.president.title,
    age: localExecutive.president.age, party: localExecutive.president.party,
    sinceDate: localExecutive.president.sinceDate, biography: localExecutive.president.biography,
    building: localExecutive.president.institution, address: localExecutive.president.address,
    predecessors: localExecutive.president.predecessors || []
  } : isPM ? {
    name: localExecutive.primeMinister.currentHolder, title: localExecutive.primeMinister.title,
    age: localExecutive.primeMinister.age, party: localExecutive.primeMinister.party,
    sinceDate: localExecutive.primeMinister.sinceDate, biography: localExecutive.primeMinister.biography,
    building: localExecutive.primeMinister.institution, address: localExecutive.primeMinister.address,
    predecessors: localExecutive.primeMinister.predecessors || []
  } : currentMinistry ? {
    name: currentMinistry.currentMinister?.name, title: currentMinistry.currentMinister?.title,
    age: currentMinistry.currentMinister?.age, party: currentMinistry.currentMinister?.party,
    sinceDate: currentMinistry.currentMinister?.sinceDate, biography: currentMinistry.currentMinister?.biography,
    building: currentMinistry.building, address: currentMinistry.address,
    budgetBillions: currentMinistry.budgetBillions, staffCount: currentMinistry.staffCount,
    ministryName: currentMinistry.name,
    predecessors: currentMinistry.predecessors || []
  } : null;

  /* ── Styles inline utilitaires (CSS-in-JS léger) ────────── */
  const inputStyle = {
    width: '100%', padding: '9px 12px', border: '1px solid var(--grey-300)',
    borderRadius: 'var(--radius-md)', fontSize: 13.5, color: 'var(--grey-900)',
    background: 'var(--grey-50)', fontFamily: 'inherit', outline: 'none',
    boxSizing: 'border-box'
  };
  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 800, textTransform: 'uppercase',
    letterSpacing: '.06em', color: 'var(--grey-700)', marginBottom: 6
  };
  const sectionBoxStyle = {
    background: 'var(--grey-100)', border: '1px solid var(--grey-200)',
    borderRadius: 'var(--radius-md)', padding: 20, display: 'flex',
    flexDirection: 'column', gap: 16
  };
  const listItemStyle = (selected) => ({
    padding: '12px 14px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
    border: selected ? '2px solid var(--blue-rf)' : '1px solid var(--grey-200)',
    background: selected ? 'var(--blue-rf-light)' : 'var(--grey-50)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 8, transition: 'border-color .15s'
  });

  return (
    <div className="container admin-view" style={{ paddingTop: 8 }}>

      {/* ── Bannière intro ─────────────────────── */}
      <div className="section-head">
        <h2>Gestionnaire des Ministères & Données</h2>
        <p>
          Modifiez les représentants et exportez le fichier{' '}
          <code style={{ background: 'var(--grey-200)', padding: '1px 6px', borderRadius: 4, fontSize: 12 }}>
            gouvernement.json
          </code>{' '}
          pour mettre à jour le site sans toucher au code source.
        </p>
      </div>

      {/* ── Avertissement ─────────────────────── */}
      <div className="admin-warning" style={{ marginBottom: 24 }}>
        <strong>⚠ Espace administrateur :</strong> Les modifications sont sauvegardées dans votre
        navigateur (localStorage). Exportez le JSON et placez-le dans <code>public/data/gouvernement.json</code>{' '}
        pour que les changements soient visibles publiquement sur GitHub Pages.
      </div>

      {/* ── Barre d'actions globales ─────────── */}
      <div className="card" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <span className="badge badge-blue" style={{ marginBottom: 8, display: 'inline-block' }}>
            Administration des données
          </span>
          <div style={{ fontSize: 13, color: 'var(--grey-700)' }}>
            {localMinistries.length + 2} entités — dernière sélection :{' '}
            <code style={{ background: 'var(--grey-150)', padding: '1px 6px', borderRadius: 4, fontSize: 11 }}>
              {selectedEntityId}
            </code>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={handleSaveLive}>
            <Save size={15} /> Enregistrer
          </button>
          <button className="btn btn-ghost" onClick={handleExportJSON}>
            <Download size={15} /> Exporter JSON
          </button>
          <label className="btn btn-ghost" style={{ cursor: 'pointer' }}>
            <Upload size={15} /> Importer JSON
            <input type="file" accept=".json" onChange={handleImportJSON} style={{ display: 'none' }} />
          </label>
          <button
            className="btn-icon"
            onClick={onResetToDefaults}
            title="Réinitialiser aux valeurs officielles"
            style={{ color: 'var(--red-err)' }}
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* ── Notification de sauvegarde ────────── */}
      {saveNotification && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: '#f0fdf4', border: '1px solid #a0e4b7',
          borderRadius: 'var(--radius-md)', padding: '12px 18px',
          color: 'var(--green-ok)', fontSize: 13, fontWeight: 600,
          marginBottom: 24
        }}>
          <CheckCircle2 size={16} />
          {saveNotification}
        </div>
      )}

      {/* ── Grille éditeur ───────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
        <style>{`
          @media (min-width: 1024px) {
            .admin-grid { grid-template-columns: 280px 1fr !important; }
          }
        `}</style>
        <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>

          {/* ── Sidebar : liste des entités ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--grey-500)' }}>
                Entités ({localMinistries.length + 2})
              </span>
              <button
                onClick={handleAddNewMinistry}
                style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', color: 'var(--blue-rf)', fontWeight: 700, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <Plus size={13} /> Nouveau ministère
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 640, overflowY: 'auto' }}>
              {/* Président */}
              <div
                style={listItemStyle(selectedEntityId === 'presidence')}
                onClick={() => setSelectedEntityId('presidence')}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedEntityId('presidence')}
              >
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--grey-900)' }}>Président de la République</div>
                  <div style={{ fontSize: 11, color: 'var(--grey-500)' }}>{localExecutive.president.name}</div>
                </div>
                <ArrowRight size={14} style={{ color: 'var(--grey-400)', flexShrink: 0 }} />
              </div>

              {/* Premier Ministre */}
              <div
                style={listItemStyle(selectedEntityId === 'matignon')}
                onClick={() => setSelectedEntityId('matignon')}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedEntityId('matignon')}
              >
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--grey-900)' }}>Premier Ministre (Matignon)</div>
                  <div style={{ fontSize: 11, color: 'var(--grey-500)' }}>{localExecutive.primeMinister.currentHolder}</div>
                </div>
                <ArrowRight size={14} style={{ color: 'var(--grey-400)', flexShrink: 0 }} />
              </div>

              {/* Séparateur Ministères */}
              <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--grey-400)', padding: '10px 4px 4px' }}>
                Ministères
              </div>

              {localMinistries.map(ministry => (
                <div
                  key={ministry.id}
                  style={listItemStyle(selectedEntityId === ministry.id)}
                  onClick={() => setSelectedEntityId(ministry.id)}
                  role="button" tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setSelectedEntityId(ministry.id)}
                >
                  <div style={{ minWidth: 0, paddingRight: 8 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--grey-900)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {ministry.shortName || ministry.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--grey-500)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {ministry.currentMinister?.name}
                    </div>
                  </div>
                  <span style={{ fontSize: 10, color: 'var(--grey-400)', fontWeight: 600, flexShrink: 0 }}>
                    {ministry.predecessors?.length || 0} préd.
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Formulaire d'édition ─────── */}
          <div>
            {activeEntity ? (
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                {/* Titre du formulaire */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 18, borderBottom: '1px solid var(--grey-200)' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--grey-900)' }}>
                    Édition :{' '}
                    {isPresident ? 'Présidence de la République'
                      : isPM ? 'Premier Ministre'
                      : (activeEntity.ministryName || 'Ministère')}
                  </h3>
                  <code style={{ fontSize: 10, background: 'var(--grey-150)', border: '1px solid var(--grey-200)', borderRadius: 4, padding: '2px 8px', color: 'var(--grey-500)' }}>
                    id: {selectedEntityId}
                  </code>
                </div>

                {/* Nom du ministère (uniquement pour les ministères) */}
                {!isPresident && !isPM && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Nom officiel du ministère</label>
                      <input
                        style={inputStyle}
                        type="text"
                        value={activeEntity.ministryName || ''}
                        onChange={e => handleUpdateField('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom court / usuel</label>
                      <input
                        style={inputStyle}
                        type="text"
                        value={currentMinistry?.shortName || ''}
                        onChange={e => handleUpdateField('shortName', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* ── Titulaire en fonction ── */}
                <div style={sectionBoxStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: 11, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--grey-700)', paddingBottom: 12, borderBottom: '1px solid var(--grey-200)' }}>
                    <User size={14} style={{ color: 'var(--blue-rf)' }} />
                    Titulaire en fonction
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Nom & Prénom</label>
                      <input
                        style={{ ...inputStyle, fontWeight: 700 }}
                        type="text"
                        value={activeEntity.name || ''}
                        onChange={e => handleUpdateField(
                          isPresident ? 'name' : isPM ? 'currentHolder' : 'name',
                          e.target.value
                        )}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Âge</label>
                      <input
                        style={inputStyle}
                        type="number"
                        value={activeEntity.age || ''}
                        onChange={e => handleUpdateField('age', parseInt(e.target.value) || '')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Parti / Nuance politique</label>
                      <input
                        style={inputStyle}
                        type="text"
                        value={activeEntity.party || ''}
                        onChange={e => handleUpdateField('party', e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Date de prise de fonction</label>
                      <input
                        style={inputStyle}
                        type="text"
                        value={activeEntity.sinceDate || ''}
                        onChange={e => handleUpdateField('sinceDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Biographie & Parcours résumé</label>
                    <textarea
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 80, lineHeight: 1.6 }}
                      rows={3}
                      value={activeEntity.biography || ''}
                      onChange={e => handleUpdateField('biography', e.target.value)}
                    />
                  </div>
                </div>

                {/* ── Prédécesseurs ────────── */}
                <div style={sectionBoxStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid var(--grey-200)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: 11, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--grey-700)' }}>
                      <History size={14} />
                      Prédécesseurs ({activeEntity.predecessors.length})
                    </span>
                    <button
                      onClick={handleAddPredecessor}
                      style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', color: 'var(--blue-rf)', fontWeight: 700, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <Plus size={13} /> Ajouter
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {activeEntity.predecessors.length === 0 && (
                      <p style={{ fontSize: 13, color: 'var(--grey-500)', fontStyle: 'italic' }}>
                        Aucun prédécesseur — cliquez sur "Ajouter" pour en créer un.
                      </p>
                    )}
                    {activeEntity.predecessors.map((pred, idx) => (
                      <div key={idx} style={{ background: 'var(--grey-50)', border: '1px solid var(--grey-200)', borderRadius: 'var(--radius-md)', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <input
                            style={{ ...inputStyle, flex: 1, minWidth: 140, fontWeight: 700 }}
                            type="text"
                            value={pred.name || ''}
                            onChange={e => handleUpdatePredecessor(idx, 'name', e.target.value)}
                            placeholder="Nom du prédécesseur"
                          />
                          <input
                            style={{ ...inputStyle, width: 140 }}
                            type="text"
                            value={pred.period || ''}
                            onChange={e => handleUpdatePredecessor(idx, 'period', e.target.value)}
                            placeholder="Période (ex: 2020 - 2024)"
                          />
                          <input
                            style={{ ...inputStyle, width: 130 }}
                            type="text"
                            value={pred.party || ''}
                            onChange={e => handleUpdatePredecessor(idx, 'party', e.target.value)}
                            placeholder="Parti"
                          />
                          <button
                            onClick={() => handleRemovePredecessor(idx)}
                            style={{ padding: '6px 8px', borderRadius: 'var(--radius-sm)', border: '1px solid #fac5c7', background: 'var(--red-err-light)', color: 'var(--red-err)', cursor: 'pointer', flexShrink: 0 }}
                            title="Supprimer ce prédécesseur"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <input
                          style={{ ...inputStyle }}
                          type="text"
                          value={pred.highlight || ''}
                          onChange={e => handleUpdatePredecessor(idx, 'highlight', e.target.value)}
                          placeholder="Action ou réforme majeure de son mandat"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bouton de sauvegarde */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 8, borderTop: '1px solid var(--grey-200)' }}>
                  <button className="btn btn-primary" onClick={handleSaveLive}>
                    <Save size={15} /> Enregistrer les modifications
                  </button>
                </div>

              </div>
            ) : (
              <div className="empty-state">
                Sélectionnez une entité dans la liste pour l'éditer.
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
