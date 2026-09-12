import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TreeView from './components/TreeView';
import DetailDrawer from './components/DetailDrawer';
import ProcessSimulator from './components/ProcessSimulator';
import MemoCenter from './components/MemoCenter';
import ElectionsView from './components/ElectionsView';
import AdminEditor from './components/AdminEditor';

import { executiveData as defaultExecutive, ministriesData as defaultMinistries } from './data/governmentData';
import { institutionsData } from './data/institutionsData';
import { pathwaysData } from './data/pathwaysData';
import { memosData } from './data/memosData';

import './index.css';

const STORAGE_KEY_EXECUTIVE  = 'politiscope_custom_executive_v1';
const STORAGE_KEY_MINISTRIES = 'politiscope_custom_ministries_v1';

export default function App() {
  const [activeTab,        setActiveTab]        = useState('tree');
  const [searchQuery,      setSearchQuery]      = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  /* ── Données gouvernement (LocalStorage + JSON externe) ── */
  const [executive, setExecutive] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_EXECUTIVE);
      return saved ? JSON.parse(saved) : defaultExecutive;
    } catch { return defaultExecutive; }
  });

  const [ministries, setMinistries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MINISTRIES);
      return saved ? JSON.parse(saved) : defaultMinistries;
    } catch { return defaultMinistries; }
  });

  /* Chargement optionnel d'un fichier gouvernement.json public */
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY_EXECUTIVE)) {
      fetch('./data/gouvernement.json')
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data?.executive && data?.ministries) {
            setExecutive(data.executive);
            setMinistries(data.ministries);
          }
        })
        .catch(() => {});
    }
  }, []);

  /* ── Simulation ────────────────────────────────────────── */
  const [activePathway,     setActivePathway]     = useState(pathwaysData[0]);
  const [currentStepIndex,  setCurrentStepIndex]  = useState(0);
  const [simLinkedToTree,   setSimLinkedToTree]   = useState(false);

  /* ── Drawer ────────────────────────────────────────────── */
  const [selectedNode,     setSelectedNode]     = useState(null);
  const [selectedNodeType, setSelectedNodeType] = useState(null);

  const handleSelectNode   = (item, type) => { setSelectedNode(item); setSelectedNodeType(type); };
  const handleCloseDrawer  = () => { setSelectedNode(null); setSelectedNodeType(null); };
  const handleResetSim     = () => { setCurrentStepIndex(0); setSimLinkedToTree(false); };
  const handleSwitchToTree = () => { setSimLinkedToTree(true); setActiveTab('tree'); };
  const handleGoToSimulator = () => { setSimLinkedToTree(false); setActiveTab('simulator'); };

  /* ── Admin save ────────────────────────────────────────── */
  const handleSaveData = (newExec, newMins) => {
    setExecutive(newExec);
    setMinistries(newMins);
    try {
      localStorage.setItem(STORAGE_KEY_EXECUTIVE,  JSON.stringify(newExec));
      localStorage.setItem(STORAGE_KEY_MINISTRIES, JSON.stringify(newMins));
    } catch (e) { console.error('LocalStorage save error:', e); }
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Réinitialiser toutes les données aux valeurs officielles par défaut ?')) {
      localStorage.removeItem(STORAGE_KEY_EXECUTIVE);
      localStorage.removeItem(STORAGE_KEY_MINISTRIES);
      setExecutive(defaultExecutive);
      setMinistries(defaultMinistries);
    }
  };

  const activeStep         = activePathway?.steps?.[currentStepIndex];
  const highlightedNodeIds = simLinkedToTree ? (activeStep?.highlightNodes || []) : [];


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onResetSimulation={handleResetSim}
        onGoToSimulator={handleGoToSimulator}
        activePathway={activePathway}
      />

      <main className="main-content" style={{ flex: 1 }}>

        {activeTab === 'tree' && (
          <TreeView
            executive={executive}
            ministries={ministries}
            institutions={institutionsData}
            highlightedNodes={highlightedNodeIds}
            activeStepInfo={simLinkedToTree ? activeStep : null}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onSelectNode={handleSelectNode}
          />
        )}

        {activeTab === 'simulator' && (
          <ProcessSimulator
            pathways={pathwaysData}
            activePathway={activePathway}
            setActivePathway={setActivePathway}
            currentStepIndex={currentStepIndex}
            setCurrentStepIndex={setCurrentStepIndex}
            onSwitchToTreeView={handleSwitchToTree}
          />
        )}

        {activeTab === 'memos' && (
          <MemoCenter memos={memosData} />
        )}

        {activeTab === 'elections' && (
          <ElectionsView />
        )}

        {activeTab === 'admin' && (
          <AdminEditor
            executiveData={executive}
            ministriesData={ministries}
            onSaveData={handleSaveData}
            onResetToDefaults={handleResetToDefaults}
          />
        )}

      </main>

      {/* ── Pied de page institutionnel ─── */}
      <footer className="site-footer">
        <div className="container footer-inner">

          <div className="footer-brand">
            <div className="marianne-flag" aria-hidden="true">
              <span className="f-blue" />
              <span className="f-white" />
              <span className="f-red" />
            </div>
            <div>
              <strong style={{ fontSize: 13, color: 'var(--grey-900)' }}>
                PolitiScope • République Française
              </strong>
              <p style={{ fontSize: 12, color: 'var(--grey-500)', marginTop: 2 }}>
                Portail citoyen d'information et d'apprentissage des institutions
              </p>
            </div>
          </div>

          <nav className="footer-links" aria-label="Liens de navigation secondaires">
            <button className="footer-link-btn" onClick={() => setActiveTab('tree')}>
              Organigramme
            </button>
            <span className="footer-sep">•</span>
            <button className="footer-link-btn" onClick={() => setActiveTab('simulator')}>
              Parcours d'une Loi
            </button>
            <span className="footer-sep">•</span>
            <button className="footer-link-btn" onClick={() => setActiveTab('memos')}>
              Fiches &amp; Quiz
            </button>
            <span className="footer-sep">•</span>
            <button className="footer-link-btn" onClick={() => setActiveTab('elections')}>
              Présidentielle
            </button>
            <span className="footer-sep">•</span>
            <button className="footer-link-btn" onClick={() => setActiveTab('admin')}
              style={{ color: 'var(--blue-rf)' }}>
              Mode Éditeur
            </button>
          </nav>

        </div>
      </footer>

      {/* ── Drawer latéral de détail ──── */}
      <DetailDrawer
        item={selectedNode}
        type={selectedNodeType}
        onClose={handleCloseDrawer}
      />

    </div>
  );
}
