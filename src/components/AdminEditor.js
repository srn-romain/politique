import { getIcon } from '../icons.js';
import { store } from '../state.js';

let selectedEntityId = 'presidence';
let localExecutive = null;
let localMinistries = null;
let saveNotification = '';
let notificationTimer = null;

function setSaveNotification(msg, container) {
  saveNotification = msg;
  if (notificationTimer) clearTimeout(notificationTimer);
  if (msg) {
    notificationTimer = setTimeout(() => {
      saveNotification = '';
      renderAdminEditor(container);
    }, 4000);
  }
  renderAdminEditor(container);
}

export function resetAdminLocalData() {
  const state = store.getState();
  localExecutive = JSON.parse(JSON.stringify(state.executive));
  localMinistries = JSON.parse(JSON.stringify(state.ministries));
}

export function renderAdminEditor(container) {
  const state = store.getState();

  // Initialisation ou synchronisation des données locales si non définies
  if (!localExecutive) {
    localExecutive = JSON.parse(JSON.stringify(state.executive));
  }
  if (!localMinistries) {
    localMinistries = JSON.parse(JSON.stringify(state.ministries));
  }

  const isPresident = selectedEntityId === 'presidence';
  const isPM        = selectedEntityId === 'matignon';
  const selectedMinistryIndex = (!isPresident && !isPM)
    ? localMinistries.findIndex(m => m.id === selectedEntityId)
    : -1;
  const currentMinistry = selectedMinistryIndex >= 0 ? localMinistries[selectedMinistryIndex] : null;

  const activeEntity = isPresident ? {
    name: localExecutive.president.name,
    title: localExecutive.president.title,
    age: localExecutive.president.age,
    party: localExecutive.president.party,
    sinceDate: localExecutive.president.sinceDate,
    biography: localExecutive.president.biography,
    building: localExecutive.president.institution,
    address: localExecutive.president.address,
    predecessors: localExecutive.president.predecessors || []
  } : isPM ? {
    name: localExecutive.primeMinister.currentHolder,
    title: localExecutive.primeMinister.title,
    age: localExecutive.primeMinister.age,
    party: localExecutive.primeMinister.party,
    sinceDate: localExecutive.primeMinister.sinceDate,
    biography: localExecutive.primeMinister.biography,
    building: localExecutive.primeMinister.institution,
    address: localExecutive.primeMinister.address,
    predecessors: localExecutive.primeMinister.predecessors || []
  } : currentMinistry ? {
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
  } : null;

  const labelStyle = 'display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .06em; color: var(--grey-700); margin-bottom: 6px;';
  const inputStyle = 'width: 100%; padding: 9px 12px; border: 1px solid var(--grey-300); border-radius: var(--radius-md); font-size: 13.5px; color: var(--grey-900); background: var(--grey-50); font-family: inherit; outline: none; box-sizing: border-box;';
  const sectionBoxStyle = 'background: var(--grey-100); border: 1px solid var(--grey-200); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 16px;';

  const html = `
    <div class="container admin-view" style="padding-top: 8px;">

      <!-- ── Bannière intro ─────────────────────── -->
      <div class="section-head">
        <h2>Gestionnaire des Ministères &amp; Données</h2>
        <p>
          Modifiez les représentants et exportez le fichier
          <code style="background: var(--grey-200); padding: 1px 6px; border-radius: 4px; font-size: 12px;">
            gouvernement.json
          </code>
          pour mettre à jour le site sans toucher au code source.
        </p>
      </div>

      <!-- ── Avertissement ─────────────────────── -->
      <div class="admin-warning" style="margin-bottom: 24px;">
        <strong>⚠ Espace administrateur :</strong> Les modifications sont sauvegardées dans votre
        navigateur (localStorage). Exportez le JSON et placez-le dans <code>public/data/gouvernement.json</code>
        pour que les changements soient visibles publiquement sur GitHub Pages.
      </div>

      <!-- ── Barre d'actions globales ─────────── -->
      <div class="card" style="margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
        <div>
          <span class="badge badge-blue" style="margin-bottom: 8px; display: inline-block;">
            Administration des données
          </span>
          <div style="font-size: 13px; color: var(--grey-700);">
            ${localMinistries.length + 2} entités — dernière sélection :
            <code style="background: var(--grey-150); padding: 1px 6px; border-radius: 4px; font-size: 11px;">
              ${escapeHtml(selectedEntityId)}
            </code>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-primary" id="admin-save-btn">
            ${getIcon('Save', { size: 15 })} Enregistrer
          </button>
          <button class="btn btn-ghost" id="admin-export-btn">
            ${getIcon('Download', { size: 15 })} Exporter JSON
          </button>
          <label class="btn btn-ghost" style="cursor: pointer;">
            ${getIcon('Upload', { size: 15 })} Importer JSON
            <input type="file" id="admin-import-file" accept=".json" style="display: none;" />
          </label>
          <button
            class="btn-icon"
            id="admin-reset-btn"
            title="Réinitialiser aux valeurs officielles"
            style="color: var(--red-err);"
          >
            ${getIcon('RotateCcw', { size: 16 })}
          </button>
        </div>
      </div>

      <!-- ── Notification de sauvegarde ────────── -->
      ${saveNotification ? `
        <div style="display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #a0e4b7; border-radius: var(--radius-md); padding: 12px 18px; color: var(--green-ok); font-size: 13px; font-weight: 600; margin-bottom: 24px;">
          ${getIcon('CheckCircle2', { size: 16 })}
          ${escapeHtml(saveNotification)}
        </div>
      ` : ''}

      <!-- ── Grille éditeur ───────────────────── -->
      <div class="admin-grid" style="display: grid; grid-template-columns: 1fr; gap: 32px;">
        <style>
          @media (min-width: 1024px) {
            .admin-grid { grid-template-columns: 280px 1fr !important; }
          }
        </style>

        <!-- ── Sidebar : liste des entités ── -->
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .07em; color: var(--grey-500);">
              Entités (${localMinistries.length + 2})
            </span>
            <button
              id="admin-add-ministry-btn"
              style="display: flex; align-items: center; gap: 4px; background: none; border: none; color: var(--blue-rf); font-weight: 700; font-size: 12px; cursor: pointer; font-family: inherit;"
            >
              ${getIcon('Plus', { size: 13 })} Nouveau ministère
            </button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 6px; max-height: 640px; overflow-y: auto;">
            <!-- Président -->
            <div
              class="admin-entity-item"
              data-entity-id="presidence"
              role="button"
              tabindex="0"
              style="padding: 12px 14px; border-radius: var(--radius-md); cursor: pointer; border: ${selectedEntityId === 'presidence' ? '2px solid var(--blue-rf)' : '1px solid var(--grey-200)'}; background: ${selectedEntityId === 'presidence' ? 'var(--blue-rf-light)' : 'var(--grey-50)'}; display: flex; align-items: center; justify-content: space-between; gap: 8px;"
            >
              <div>
                <div style="font-size: 12px; font-weight: 700; color: var(--grey-900);">Président de la République</div>
                <div style="font-size: 11px; color: var(--grey-500);">${escapeHtml(localExecutive.president.name)}</div>
              </div>
              ${getIcon('ArrowRight', { size: 14, style: 'color: var(--grey-400); flex-shrink: 0;' })}
            </div>

            <!-- Premier Ministre -->
            <div
              class="admin-entity-item"
              data-entity-id="matignon"
              role="button"
              tabindex="0"
              style="padding: 12px 14px; border-radius: var(--radius-md); cursor: pointer; border: ${selectedEntityId === 'matignon' ? '2px solid var(--blue-rf)' : '1px solid var(--grey-200)'}; background: ${selectedEntityId === 'matignon' ? 'var(--blue-rf-light)' : 'var(--grey-50)'}; display: flex; align-items: center; justify-content: space-between; gap: 8px;"
            >
              <div>
                <div style="font-size: 12px; font-weight: 700; color: var(--grey-900);">Premier Ministre (Matignon)</div>
                <div style="font-size: 11px; color: var(--grey-500);">${escapeHtml(localExecutive.primeMinister.currentHolder)}</div>
              </div>
              ${getIcon('ArrowRight', { size: 14, style: 'color: var(--grey-400); flex-shrink: 0;' })}
            </div>

            <!-- Séparateur Ministères -->
            <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .07em; color: var(--grey-400); padding: 10px 4px 4px;">
              Ministères
            </div>

            ${localMinistries.map(ministry => `
              <div
                class="admin-entity-item"
                data-entity-id="${ministry.id}"
                role="button"
                tabindex="0"
                style="padding: 12px 14px; border-radius: var(--radius-md); cursor: pointer; border: ${selectedEntityId === ministry.id ? '2px solid var(--blue-rf)' : '1px solid var(--grey-200)'}; background: ${selectedEntityId === ministry.id ? 'var(--blue-rf-light)' : 'var(--grey-50)'}; display: flex; align-items: center; justify-content: space-between; gap: 8px;"
              >
                <div style="min-width: 0; padding-right: 8px;">
                  <div style="font-size: 12px; font-weight: 700; color: var(--grey-900); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${escapeHtml(ministry.shortName || ministry.name)}
                  </div>
                  <div style="font-size: 11px; color: var(--grey-500); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${escapeHtml(ministry.currentMinister?.name || '')}
                  </div>
                </div>
                <span style="font-size: 10px; color: var(--grey-400); font-weight: 600; flex-shrink: 0;">
                  ${ministry.predecessors?.length || 0} préd.
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- ── Formulaire d'édition ─────── -->
        <div>
          ${activeEntity ? `
            <div class="card" style="display: flex; flex-direction: column; gap: 24px;">

              <!-- Titre du formulaire -->
              <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid var(--grey-200);">
                <h3 style="font-size: 18px; font-weight: 800; color: var(--grey-900);">
                  Édition : ${
                    isPresident ? 'Présidence de la République'
                      : isPM ? 'Premier Ministre'
                      : escapeHtml(activeEntity.ministryName || 'Ministère')
                  }
                </h3>
                <code style="font-size: 10px; background: var(--grey-150); border: 1px solid var(--grey-200); border-radius: 4px; padding: 2px 8px; color: var(--grey-500);">
                  id: ${escapeHtml(selectedEntityId)}
                </code>
              </div>

              <!-- Nom du ministère (uniquement pour les ministères) -->
              ${(!isPresident && !isPM) ? `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div>
                    <label style="${labelStyle}">Nom officiel du ministère</label>
                    <input
                      style="${inputStyle}"
                      type="text"
                      id="input-ministry-name"
                      value="${escapeHtml(activeEntity.ministryName || '')}"
                    />
                  </div>
                  <div>
                    <label style="${labelStyle}">Nom court / usuel</label>
                    <input
                      style="${inputStyle}"
                      type="text"
                      id="input-ministry-shortname"
                      value="${escapeHtml(currentMinistry?.shortName || '')}"
                    />
                  </div>
                </div>
              ` : ''}

              <!-- ── Titulaire en fonction ── -->
              <div style="${sectionBoxStyle}">
                <div style="display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: .07em; color: var(--grey-700); padding-bottom: 12px; border-bottom: 1px solid var(--grey-200);">
                  ${getIcon('User', { size: 14, style: 'color: var(--blue-rf);' })}
                  Titulaire en fonction
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <div>
                    <label style="${labelStyle}">Nom &amp; Prénom</label>
                    <input
                      style="${inputStyle} font-weight: 700;"
                      type="text"
                      id="input-rep-name"
                      value="${escapeHtml(activeEntity.name || '')}"
                    />
                  </div>
                  <div>
                    <label style="${labelStyle}">Âge</label>
                    <input
                      style="${inputStyle}"
                      type="number"
                      id="input-rep-age"
                      value="${activeEntity.age || ''}"
                    />
                  </div>
                  <div>
                    <label style="${labelStyle}">Parti / Nuance politique</label>
                    <input
                      style="${inputStyle}"
                      type="text"
                      id="input-rep-party"
                      value="${escapeHtml(activeEntity.party || '')}"
                    />
                  </div>
                  <div>
                    <label style="${labelStyle}">Date de prise de fonction</label>
                    <input
                      style="${inputStyle}"
                      type="text"
                      id="input-rep-sincedate"
                      value="${escapeHtml(activeEntity.sinceDate || '')}"
                    />
                  </div>
                </div>

                <div>
                  <label style="${labelStyle}">Biographie &amp; Parcours résumé</label>
                  <textarea
                    style="${inputStyle} resize: vertical; min-height: 80px; line-height: 1.6;"
                    rows="3"
                    id="input-rep-bio"
                  >${escapeHtml(activeEntity.biography || '')}</textarea>
                </div>
              </div>

              <!-- ── Prédécesseurs ────────── -->
              <div style="${sectionBoxStyle}">
                <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--grey-200);">
                  <span style="display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: .07em; color: var(--grey-700);">
                    ${getIcon('History', { size: 14 })}
                    Prédécesseurs (${activeEntity.predecessors.length})
                  </span>
                  <button
                    id="admin-add-pred-btn"
                    style="display: flex; align-items: center; gap: 5px; background: none; border: none; color: var(--blue-rf); font-weight: 700; font-size: 12px; cursor: pointer; font-family: inherit;"
                  >
                    ${getIcon('Plus', { size: 13 })} Ajouter
                  </button>
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px;">
                  ${activeEntity.predecessors.length === 0 ? `
                    <p style="font-size: 13px; color: var(--grey-500); font-style: italic;">
                      Aucun prédécesseur — cliquez sur "Ajouter" pour en créer un.
                    </p>
                  ` : activeEntity.predecessors.map((pred, idx) => `
                    <div style="background: var(--grey-50); border: 1px solid var(--grey-200); border-radius: var(--radius-md); padding: 14px; display: flex; flex-direction: column; gap: 8px;">
                      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <input
                          style="${inputStyle} flex: 1; min-width: 140px; font-weight: 700;"
                          type="text"
                          class="pred-input-name"
                          data-pred-idx="${idx}"
                          value="${escapeHtml(pred.name || '')}"
                          placeholder="Nom du prédécesseur"
                        />
                        <input
                          style="${inputStyle} width: 140px;"
                          type="text"
                          class="pred-input-period"
                          data-pred-idx="${idx}"
                          value="${escapeHtml(pred.period || '')}"
                          placeholder="Période (ex: 2020 - 2024)"
                        />
                        <input
                          style="${inputStyle} width: 130px;"
                          type="text"
                          class="pred-input-party"
                          data-pred-idx="${idx}"
                          value="${escapeHtml(pred.party || '')}"
                          placeholder="Parti"
                        />
                        <button
                          class="pred-remove-btn"
                          data-pred-idx="${idx}"
                          style="padding: 6px 8px; border-radius: var(--radius-sm); border: 1px solid #fac5c7; background: var(--red-err-light); color: var(--red-err); cursor: pointer; flex-shrink: 0;"
                          title="Supprimer ce prédécesseur"
                        >
                          ${getIcon('Trash2', { size: 14 })}
                        </button>
                      </div>
                      <input
                        style="${inputStyle}"
                        type="text"
                        class="pred-input-highlight"
                        data-pred-idx="${idx}"
                        value="${escapeHtml(pred.highlight || '')}"
                        placeholder="Action ou réforme majeure de son mandat"
                      />
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Bouton de sauvegarde -->
              <div style="display: flex; justify-content: flex-end; padding-top: 8px; border-top: 1px solid var(--grey-200);">
                <button class="btn btn-primary" id="admin-save-form-btn">
                  ${getIcon('Save', { size: 15 })} Enregistrer les modifications
                </button>
              </div>

            </div>
          ` : `
            <div class="empty-state">
              Sélectionnez une entité dans la liste pour l'éditer.
            </div>
          `}
        </div>

      </div>

    </div>
  `;

  container.innerHTML = html;
  attachAdminEvents(container, { isPresident, isPM, currentMinistry, selectedMinistryIndex });
}

function attachAdminEvents(container, { isPresident, isPM, currentMinistry, selectedMinistryIndex }) {
  // Save handler
  const handleSave = () => {
    store.saveData(localExecutive, localMinistries);
    setSaveNotification('Modifications enregistrées avec succès.', container);
  };

  const saveBtn = container.querySelector('#admin-save-btn');
  if (saveBtn) saveBtn.addEventListener('click', handleSave);

  const saveFormBtn = container.querySelector('#admin-save-form-btn');
  if (saveFormBtn) saveFormBtn.addEventListener('click', handleSave);

  // Reset to defaults
  const resetBtn = container.querySelector('#admin-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      store.resetToDefaults();
      const state = store.getState();
      localExecutive = JSON.parse(JSON.stringify(state.executive));
      localMinistries = JSON.parse(JSON.stringify(state.ministries));
      setSaveNotification('Données réinitialisées aux valeurs officielles.', container);
    });
  }

  // Export JSON
  const exportBtn = container.querySelector('#admin-export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const fullData = { executive: localExecutive, ministries: localMinistries };
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(fullData, null, 2));
      const a = document.createElement('a');
      a.setAttribute('href', dataStr);
      a.setAttribute('download', 'gouvernement.json');
      document.body.appendChild(a);
      a.click();
      a.remove();
      setSaveNotification("Fichier 'gouvernement.json' téléchargé avec succès.", container);
    });
  }

  // Import JSON
  const importFile = container.querySelector('#admin-import-file');
  if (importFile) {
    importFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.executive && parsed.ministries) {
            localExecutive = parsed.executive;
            localMinistries = parsed.ministries;
            store.saveData(localExecutive, localMinistries);
            setSaveNotification('Fichier JSON importé avec succès.', container);
          } else {
            alert("Structure JSON invalide : doit contenir 'executive' et 'ministries'.");
          }
        } catch (err) {
          alert('Erreur de lecture du fichier : ' + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  // Select entity
  container.querySelectorAll('.admin-entity-item').forEach(item => {
    const handleSelect = () => {
      selectedEntityId = item.dataset.entityId;
      renderAdminEditor(container);
      if (window.innerWidth < 1024) {
        const formCard = container.querySelector('#admin-save-form-btn')?.closest('.card');
        if (formCard) {
          formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    item.addEventListener('click', handleSelect);
    item.addEventListener('keydown', e => e.key === 'Enter' && handleSelect());
  });

  // Add new ministry
  const addMinBtn = container.querySelector('#admin-add-ministry-btn');
  if (addMinBtn) {
    addMinBtn.addEventListener('click', () => {
      const newId = `ministere_${Date.now()}`;
      const newMinistry = {
        id: newId,
        name: 'Nouveau Ministère',
        shortName: 'Nouveau Ministère',
        category: 'social_sante',
        categoryLabel: 'Ministère',
        color: '#000091',
        icon: 'Landmark',
        building: 'Hôtel Ministériel',
        address: 'Paris',
        budgetBillions: '1.0 Md €',
        staffCount: '5 000 agents',
        currentMinister: {
          name: 'Nom du Ministre',
          title: 'Ministre',
          age: 45,
          sinceDate: '2026',
          party: 'Sans étiquette',
          biography: 'Parcours du nouveau ministre.',
          missions: ['Mission 1', 'Mission 2']
        },
        predecessors: []
      };
      localMinistries.push(newMinistry);
      selectedEntityId = newId;
      renderAdminEditor(container);
    });
  }

  // Inputs binding
  const bindField = (selector, field, isNumeric = false) => {
    const el = container.querySelector(selector);
    if (!el) return;
    el.addEventListener('input', (e) => {
      const val = isNumeric ? (parseInt(e.target.value, 10) || '') : e.target.value;
      if (isPresident) {
        localExecutive.president[field] = val;
      } else if (isPM) {
        localExecutive.primeMinister[field] = val;
      } else if (currentMinistry) {
        if (field === 'name' || field === 'shortName') {
          currentMinistry[field] = val;
        } else {
          currentMinistry.currentMinister[field] = val;
        }
      }
    });
  };

  bindField('#input-ministry-name', 'name');
  bindField('#input-ministry-shortname', 'shortName');
  bindField('#input-rep-name', isPresident ? 'name' : isPM ? 'currentHolder' : 'name');
  bindField('#input-rep-age', 'age', true);
  bindField('#input-rep-party', 'party');
  bindField('#input-rep-sincedate', 'sinceDate');
  bindField('#input-rep-bio', 'biography');

  // Predecessors add
  const addPredBtn = container.querySelector('#admin-add-pred-btn');
  if (addPredBtn) {
    addPredBtn.addEventListener('click', () => {
      const newPred = {
        name: 'Nouveau Prédécesseur',
        period: '2024 - 2026',
        party: 'Parti',
        highlight: 'Action marquante'
      };
      if (isPresident) {
        localExecutive.president.predecessors = [newPred, ...(localExecutive.president.predecessors || [])];
      } else if (isPM) {
        localExecutive.primeMinister.predecessors = [newPred, ...(localExecutive.primeMinister.predecessors || [])];
      } else if (currentMinistry) {
        currentMinistry.predecessors = [newPred, ...(currentMinistry.predecessors || [])];
      }
      renderAdminEditor(container);
    });
  }

  // Predecessors edit & remove
  container.querySelectorAll('.pred-input-name').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(input.dataset.predIdx, 10);
      getPreds(isPresident, isPM, currentMinistry)[idx].name = e.target.value;
    });
  });
  container.querySelectorAll('.pred-input-period').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(input.dataset.predIdx, 10);
      getPreds(isPresident, isPM, currentMinistry)[idx].period = e.target.value;
    });
  });
  container.querySelectorAll('.pred-input-party').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(input.dataset.predIdx, 10);
      getPreds(isPresident, isPM, currentMinistry)[idx].party = e.target.value;
    });
  });
  container.querySelectorAll('.pred-input-highlight').forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(input.dataset.predIdx, 10);
      getPreds(isPresident, isPM, currentMinistry)[idx].highlight = e.target.value;
    });
  });
  container.querySelectorAll('.pred-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.predIdx, 10);
      const preds = getPreds(isPresident, isPM, currentMinistry);
      preds.splice(idx, 1);
      renderAdminEditor(container);
    });
  });
}

function getPreds(isPresident, isPM, currentMinistry) {
  if (isPresident) return localExecutive.president.predecessors;
  if (isPM) return localExecutive.primeMinister.predecessors;
  return currentMinistry.predecessors;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
