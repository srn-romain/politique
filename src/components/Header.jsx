import React from 'react';
import {
  GitBranch,
  FileText,
  BookOpen,
  Vote,
  Search,
  Settings
} from 'lucide-react';

export default function Header({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onResetSimulation,
  activePathway
}) {
  const categories = [
    { id: 'all',                 label: 'Toutes' },
    { id: 'regalien',            label: 'Régalien' },
    { id: 'social_sante',        label: 'Social & Santé' },
    { id: 'education_recherche', label: 'Éducation' },
    { id: 'ecologie_territoires',label: 'Écologie' },
    { id: 'culture_societe',     label: 'Culture & Sports' },
    { id: 'legislatif',          label: 'Parlement' },
    { id: 'controle',            label: 'Contrôle' },
  ];

  return (
    <header className="site-header">

      {/* ── Barre Marianne ───────────────────────── */}
      <div className="header-brand">
        <div className="container header-brand-inner">

          <div
            className="brand-block"
            onClick={() => { setActiveTab('tree'); onResetSimulation(); }}
            role="link"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setActiveTab('tree')}
          >
            {/* Drapeau */}
            <div className="marianne-flag" aria-hidden="true">
              <span className="f-blue" />
              <span className="f-white" />
              <span className="f-red" />
            </div>

            {/* RF */}
            <div className="marianne-text">
              <span className="rf-name">République</span>
              <span className="rf-name">Française</span>
              <span className="rf-devise">Liberté • Égalité • Fraternité</span>
            </div>

            {/* Séparateur */}
            <div className="brand-separator" aria-hidden="true" />

            {/* Nom application */}
            <div>
              <span className="brand-app-name">PolitiScope</span>
              <span className="brand-app-sub">Portail pédagogique des institutions de la République</span>
            </div>
          </div>

          <span className="badge-rf">Ve République</span>
        </div>
      </div>

      {/* ── Navigation principale ─────────────── */}
      <nav className="header-nav" aria-label="Navigation principale">
        <div className="container header-nav-inner">

          <button
            id="nav-tree"
            className={`nav-tab${activeTab === 'tree' ? ' active' : ''}`}
            onClick={() => setActiveTab('tree')}
          >
            <GitBranch size={15} />
            Organigramme
          </button>

          <button
            id="nav-simulator"
            className={`nav-tab${activeTab === 'simulator' ? ' active' : ''}`}
            onClick={() => setActiveTab('simulator')}
          >
            <FileText size={15} />
            Parcours d'une Loi
            {activePathway && <span className="nav-dot" aria-hidden="true" />}
          </button>

          <button
            id="nav-memos"
            className={`nav-tab${activeTab === 'memos' ? ' active' : ''}`}
            onClick={() => setActiveTab('memos')}
          >
            <BookOpen size={15} />
            Fiches & Quiz
          </button>

          <button
            id="nav-elections"
            className={`nav-tab${activeTab === 'elections' ? ' active' : ''}`}
            onClick={() => setActiveTab('elections')}
          >
            <Vote size={15} />
            Présidentielle
          </button>

          <button
            id="nav-admin"
            className={`nav-tab nav-settings${activeTab === 'admin' ? ' active' : ''}`}
            onClick={() => setActiveTab('admin')}
            title="Éditer les données"
          >
            <Settings size={15} />
            Éditeur
          </button>

        </div>
      </nav>

      {/* ── Barre de recherche & filtres (tree uniquement) ── */}
      {activeTab === 'tree' && (
        <div className="search-bar">
          <div className="container search-bar-inner">

            {/* Champ de recherche */}
            <div className="search-input-wrap">
              <Search size={15} className="search-icon" aria-hidden="true" />
              <input
                id="search-input"
                type="search"
                className="search-input"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Rechercher un ministre, ministère, prédécesseur…"
                aria-label="Rechercher dans l'organigramme"
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Effacer la recherche"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filtres par catégorie */}
            <div className="filter-chips" role="group" aria-label="Filtrer par catégorie">
              <span className="filter-label">Filtrer :</span>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`chip${selectedCategory === cat.id ? ' active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  aria-pressed={selectedCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
