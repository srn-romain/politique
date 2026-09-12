import { executiveData as defaultExecutive, ministriesData as defaultMinistries } from './data/governmentData.js';
import { pathwaysData } from './data/pathwaysData.js';

export const STORAGE_KEY_EXECUTIVE  = 'politiscope_custom_executive_v1';
export const STORAGE_KEY_MINISTRIES = 'politiscope_custom_ministries_v1';

function loadInitialExecutive() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_EXECUTIVE);
    return saved ? JSON.parse(saved) : defaultExecutive;
  } catch {
    return defaultExecutive;
  }
}

function loadInitialMinistries() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_MINISTRIES);
    return saved ? JSON.parse(saved) : defaultMinistries;
  } catch {
    return defaultMinistries;
  }
}

class Store {
  constructor() {
    this.state = {
      activeTab: 'tree',
      searchQuery: '',
      selectedCategory: 'all',

      executive: loadInitialExecutive(),
      ministries: loadInitialMinistries(),

      activePathway: pathwaysData[0],
      currentStepIndex: 0,
      simLinkedToTree: false,

      selectedNode: null,
      selectedNodeType: null,
    };

    this.listeners = new Set();

    // Chargement optionnel d'un fichier gouvernement.json public si aucun localStorage
    if (!localStorage.getItem(STORAGE_KEY_EXECUTIVE)) {
      fetch('./data/gouvernement.json')
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data?.executive && data?.ministries) {
            this.setState({
              executive: data.executive,
              ministries: data.ministries
            });
          }
        })
        .catch(() => {});
    }
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(changedKeys = []) {
    for (const listener of this.listeners) {
      listener(this.state, changedKeys);
    }
  }

  setState(partial) {
    const changedKeys = Object.keys(partial);
    this.state = { ...this.state, ...partial };
    this.notify(changedKeys);
  }

  saveData(newExec, newMins) {
    try {
      localStorage.setItem(STORAGE_KEY_EXECUTIVE, JSON.stringify(newExec));
      localStorage.setItem(STORAGE_KEY_MINISTRIES, JSON.stringify(newMins));
    } catch (e) {
      console.error('LocalStorage save error:', e);
    }
    this.setState({ executive: newExec, ministries: newMins });
  }

  resetToDefaults() {
    if (window.confirm('Réinitialiser toutes les données aux valeurs officielles par défaut ?')) {
      localStorage.removeItem(STORAGE_KEY_EXECUTIVE);
      localStorage.removeItem(STORAGE_KEY_MINISTRIES);
      this.setState({
        executive: defaultExecutive,
        ministries: defaultMinistries
      });
    }
  }

  openDrawer(node, type) {
    this.setState({ selectedNode: node, selectedNodeType: type });
  }

  closeDrawer() {
    this.setState({ selectedNode: null, selectedNodeType: null });
  }
}

export const store = new Store();
