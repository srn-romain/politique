import React, { useState } from 'react';
import { 
  Settings, 
  Download, 
  Upload, 
  RotateCcw, 
  Save, 
  Plus, 
  Trash2, 
  Edit3, 
  User, 
  History, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function AdminEditor({
  executiveData,
  ministriesData,
  onSaveData,
  onResetToDefaults
}) {
  const [selectedEntityId, setSelectedEntityId] = useState('presidence');
  const [localExecutive, setLocalExecutive] = useState(JSON.parse(JSON.stringify(executiveData)));
  const [localMinistries, setLocalMinistries] = useState(JSON.parse(JSON.stringify(ministriesData)));
  const [saveNotification, setSaveNotification] = useState('');

  const isPresident = selectedEntityId === 'presidence';
  const isPM = selectedEntityId === 'matignon';
  const selectedMinistryIndex = !isPresident && !isPM 
    ? localMinistries.findIndex(m => m.id === selectedEntityId)
    : -1;

  const currentMinistry = selectedMinistryIndex >= 0 ? localMinistries[selectedMinistryIndex] : null;

  const handleUpdateField = (field, value) => {
    if (isPresident) {
      setLocalExecutive(prev => ({
        ...prev,
        president: { ...prev.president, [field]: value }
      }));
    } else if (isPM) {
      setLocalExecutive(prev => ({
        ...prev,
        primeMinister: { ...prev.primeMinister, [field]: value }
      }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      if (['name', 'shortName', 'building', 'address', 'budgetBillions', 'staffCount'].includes(field)) {
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
    const newPred = { name: "Nouveau Prédécesseur", period: "2024 - 2026", party: "Parti", highlight: "Action marquante" };
    
    if (isPresident) {
      setLocalExecutive(prev => ({
        ...prev,
        president: { ...prev.president, predecessors: [newPred, ...(prev.president.predecessors || [])] }
      }));
    } else if (isPM) {
      setLocalExecutive(prev => ({
        ...prev,
        primeMinister: { ...prev.primeMinister, predecessors: [newPred, ...(prev.primeMinister.predecessors || [])] }
      }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      updated[selectedMinistryIndex] = {
        ...updated[selectedMinistryIndex],
        predecessors: [newPred, ...(updated[selectedMinistryIndex].predecessors || [])]
      };
      setLocalMinistries(updated);
    }
  };

  const handleUpdatePredecessor = (index, field, value) => {
    if (isPresident) {
      const preds = [...localExecutive.president.predecessors];
      preds[index] = { ...preds[index], [field]: value };
      setLocalExecutive(prev => ({
        ...prev,
        president: { ...prev.president, predecessors: preds }
      }));
    } else if (isPM) {
      const preds = [...localExecutive.primeMinister.predecessors];
      preds[index] = { ...preds[index], [field]: value };
      setLocalExecutive(prev => ({
        ...prev,
        primeMinister: { ...prev.primeMinister, predecessors: preds }
      }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      const preds = [...updated[selectedMinistryIndex].predecessors];
      preds[index] = { ...preds[index], [field]: value };
      updated[selectedMinistryIndex].predecessors = preds;
      setLocalMinistries(updated);
    }
  };

  const handleRemovePredecessor = (index) => {
    if (isPresident) {
      const preds = localExecutive.president.predecessors.filter((_, i) => i !== index);
      setLocalExecutive(prev => ({
        ...prev,
        president: { ...prev.president, predecessors: preds }
      }));
    } else if (isPM) {
      const preds = localExecutive.primeMinister.predecessors.filter((_, i) => i !== index);
      setLocalExecutive(prev => ({
        ...prev,
        primeMinister: { ...prev.primeMinister, predecessors: preds }
      }));
    } else if (currentMinistry) {
      const updated = [...localMinistries];
      updated[selectedMinistryIndex].predecessors = updated[selectedMinistryIndex].predecessors.filter((_, i) => i !== index);
      setLocalMinistries(updated);
    }
  };

  const handleAddNewMinistry = () => {
    const newId = `ministere_${Date.now()}`;
    const newMinistry = {
      id: newId,
      name: "Nouveau Ministère",
      shortName: "Nouveau Ministère",
      category: "social_sante",
      categoryLabel: "Ministère",
      color: "#000091",
      icon: "Landmark",
      building: "Hôtel Ministériel",
      address: "Paris",
      budgetBillions: "1.0 Md €",
      staffCount: "5 000 agents",
      currentMinister: {
        name: "Nom du Ministre",
        title: "Ministre",
        age: 45,
        sinceDate: "2026",
        party: "Sans étiquette",
        biography: "Parcours du nouveau ministre.",
        missions: ["Mission 1", "Mission 2"]
      },
      predecessors: []
    };
    setLocalMinistries(prev => [...prev, newMinistry]);
    setSelectedEntityId(newId);
  };

  const handleSaveLive = () => {
    onSaveData(localExecutive, localMinistries);
    setSaveNotification("Modifications enregistrées avec succès.");
    setTimeout(() => setSaveNotification(''), 4000);
  };

  const handleExportJSON = () => {
    const fullData = {
      executive: localExecutive,
      ministries: localMinistries
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "gouvernement.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

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
          setSaveNotification("Fichier JSON importé avec succès.");
          setTimeout(() => setSaveNotification(''), 4000);
        } else {
          alert("Structure JSON invalide : doit contenir 'executive' et 'ministries'.");
        }
      } catch (err) {
        alert("Erreur de lecture du fichier : " + err.message);
      }
    };
    reader.readAsText(file);
  };

  const activeEntity = isPresident 
    ? {
        name: localExecutive.president.name,
        title: localExecutive.president.title,
        age: localExecutive.president.age,
        party: localExecutive.president.party,
        sinceDate: localExecutive.president.sinceDate,
        biography: localExecutive.president.biography,
        building: localExecutive.president.institution,
        address: localExecutive.president.address,
        predecessors: localExecutive.president.predecessors || []
      }
    : isPM
      ? {
          name: localExecutive.primeMinister.currentHolder,
          title: localExecutive.primeMinister.title,
          age: localExecutive.primeMinister.age,
          party: localExecutive.primeMinister.party,
          sinceDate: localExecutive.primeMinister.sinceDate,
          biography: localExecutive.primeMinister.biography,
          building: localExecutive.primeMinister.institution,
          address: localExecutive.primeMinister.address,
          predecessors: localExecutive.primeMinister.predecessors || []
        }
      : currentMinistry 
        ? {
            name: currentMinistry.currentMinister?.name,
            title: currentMinistry.currentMinister?.title,
            age: currentMinistry.currentMinister?.age,
            party: currentMinistry.currentMinister?.party,
            sinceDate: currentMinistry.currentMinister?.sinceDate,
            biography: currentMinistry.currentMinister?.biography,
            building: currentMinistry.building,
            address: currentMinistry.address,
            budgetBillions: currentMinistry.budgetBillions,
            staffCount: currentMinistry.staffCount,
            ministryName: currentMinistry.name,
            predecessors: currentMinistry.predecessors || []
          }
        : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Top Banner */}
      <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#000091] block mb-1">
            Administration des Données
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            Gestionnaire des Ministères & Données
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
            Modifiez les représentants et téléchargez le fichier <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-800">gouvernement.json</code> pour mettre à jour le site sans toucher au code.
          </p>
        </div>

        {/* Global Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleSaveLive}
            className="px-4 py-2 rounded-md bg-[#000091] hover:bg-[#1212ff] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Enregistrer</span>
          </button>

          <button
            onClick={handleExportJSON}
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-900 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Exporter JSON</span>
          </button>

          <label className="px-3.5 py-2 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer border border-gray-300 transition-colors">
            <Upload className="w-4 h-4 text-gray-500" />
            <span>Importer JSON</span>
            <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
          </label>

          <button
            onClick={onResetToDefaults}
            className="p-2 rounded-md bg-white text-rose-700 hover:bg-rose-50 border border-gray-300 transition-colors"
            title="Réinitialiser"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {saveNotification && (
        <div className="p-3.5 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
          <span>{saveNotification}</span>
        </div>
      )}

      {/* Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Sélectionner l'entité ({localMinistries.length + 2})
            </h3>
            <button
              onClick={handleAddNewMinistry}
              className="text-xs font-bold text-[#000091] hover:underline flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Nouveau ministère
            </button>
          </div>

          <div className="space-y-2 max-h-[640px] overflow-y-auto pr-1">
            <div
              onClick={() => setSelectedEntityId('presidence')}
              className={`p-3 rounded-md cursor-pointer transition-all border flex items-center justify-between ${
                selectedEntityId === 'presidence'
                  ? 'bg-blue-50 border-2 border-[#000091]'
                  : 'bg-white border-gray-200 hover:border-gray-400'
              }`}
            >
              <div>
                <h4 className="text-xs font-bold text-gray-900">Président de la République</h4>
                <p className="text-xs text-gray-600">{localExecutive.president.name}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
            </div>

            <div
              onClick={() => setSelectedEntityId('matignon')}
              className={`p-3 rounded-md cursor-pointer transition-all border flex items-center justify-between ${
                selectedEntityId === 'matignon'
                  ? 'bg-blue-50 border-2 border-[#000091]'
                  : 'bg-white border-gray-200 hover:border-gray-400'
              }`}
            >
              <div>
                <h4 className="text-xs font-bold text-gray-900">Premier Ministre (Matignon)</h4>
                <p className="text-xs text-gray-600">{localExecutive.primeMinister.currentHolder}</p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
            </div>

            <div className="pt-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 px-1">
              Ministères
            </div>

            {localMinistries.map((ministry) => (
              <div
                key={ministry.id}
                onClick={() => setSelectedEntityId(ministry.id)}
                className={`p-3 rounded-md cursor-pointer transition-all border flex items-center justify-between ${
                  selectedEntityId === ministry.id
                    ? 'bg-blue-50 border-2 border-[#000091]'
                    : 'bg-white border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="min-w-0 pr-2">
                  <h4 className="text-xs font-bold text-gray-900 truncate">{ministry.shortName || ministry.name}</h4>
                  <p className="text-xs text-gray-600 truncate">{ministry.currentMinister?.name}</p>
                </div>
                <span className="text-[11px] text-gray-400 font-mono flex-shrink-0">
                  {ministry.predecessors?.length || 0} préd.
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-8 space-y-6">
          {activeEntity && (
            <div className="rounded-lg p-6 sm:p-8 bg-white border border-gray-200 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">
                  Édition : {isPresident ? "Présidence" : isPM ? "Premier Ministre" : (activeEntity.ministryName || "Ministère")}
                </h3>
                <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                  {selectedEntityId}
                </span>
              </div>

              {!isPresident && !isPM && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Nom Officiel du Ministère
                    </label>
                    <input
                      type="text"
                      value={activeEntity.ministryName || ''}
                      onChange={(e) => handleUpdateField('name', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000091]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Nom Court / Usuel
                    </label>
                    <input
                      type="text"
                      value={currentMinistry?.shortName || ''}
                      onChange={(e) => handleUpdateField('shortName', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000091]"
                    />
                  </div>
                </div>
              )}

              {/* Minister details */}
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#000091]" />
                  Titulaire en Fonction
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Nom & Prénom
                    </label>
                    <input
                      type="text"
                      value={activeEntity.name || ''}
                      onChange={(e) => handleUpdateField(isPresident ? 'name' : isPM ? 'currentHolder' : 'name', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-[#000091]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Âge
                    </label>
                    <input
                      type="number"
                      value={activeEntity.age || ''}
                      onChange={(e) => handleUpdateField('age', parseInt(e.target.value) || '')}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000091]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Parti / Nuance Politique
                    </label>
                    <input
                      type="text"
                      value={activeEntity.party || ''}
                      onChange={(e) => handleUpdateField('party', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000091]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">
                      Date de prise de fonction
                    </label>
                    <input
                      type="text"
                      value={activeEntity.sinceDate || ''}
                      onChange={(e) => handleUpdateField('sinceDate', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000091]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">
                    Biographie & Parcours Résumé
                  </label>
                  <textarea
                    rows={3}
                    value={activeEntity.biography || ''}
                    onChange={(e) => handleUpdateField('biography', e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#000091]"
                  />
                </div>
              </div>

              {/* Predecessors */}
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-2">
                    <History className="w-4 h-4 text-gray-500" />
                    Historique des Prédécesseurs ({activeEntity.predecessors.length})
                  </h4>
                  <button
                    onClick={handleAddPredecessor}
                    className="text-xs font-bold text-[#000091] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Ajouter un prédécesseur
                  </button>
                </div>

                <div className="space-y-2">
                  {activeEntity.predecessors.map((pred, idx) => (
                    <div key={idx} className="p-3 rounded bg-white border border-gray-200 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <input
                          type="text"
                          value={pred.name || ''}
                          onChange={(e) => handleUpdatePredecessor(idx, 'name', e.target.value)}
                          placeholder="Nom du prédécesseur"
                          className="px-2.5 py-1 bg-white border border-gray-300 rounded text-xs font-bold text-gray-900 flex-1 focus:outline-none focus:ring-1 focus:ring-[#000091]"
                        />
                        <input
                          type="text"
                          value={pred.period || ''}
                          onChange={(e) => handleUpdatePredecessor(idx, 'period', e.target.value)}
                          placeholder="Période (ex: 2020 - 2024)"
                          className="px-2.5 py-1 bg-white border border-gray-300 rounded text-xs text-gray-800 w-32 focus:outline-none focus:ring-1 focus:ring-[#000091]"
                        />
                        <input
                          type="text"
                          value={pred.party || ''}
                          onChange={(e) => handleUpdatePredecessor(idx, 'party', e.target.value)}
                          placeholder="Parti"
                          className="px-2.5 py-1 bg-white border border-gray-300 rounded text-xs text-gray-600 w-28 hidden sm:inline focus:outline-none focus:ring-1 focus:ring-[#000091]"
                        />
                        <button
                          onClick={() => handleRemovePredecessor(idx)}
                          className="p-1 rounded text-rose-600 hover:bg-rose-50"
                          title="Supprimer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={pred.highlight || ''}
                        onChange={(e) => handleUpdatePredecessor(idx, 'highlight', e.target.value)}
                        placeholder="Action ou réforme majeure"
                        className="w-full px-2.5 py-1 bg-white border border-gray-300 rounded text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#000091]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom save */}
              <div className="pt-3 border-t border-gray-200 flex justify-end">
                <button
                  onClick={handleSaveLive}
                  className="px-5 py-2.5 rounded-md bg-[#000091] hover:bg-[#1212ff] text-white font-bold text-sm flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Enregistrer les modifications</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
}
