/**
 * Bibliothèque d'icônes vectorielles SVG (identiques à Lucide)
 * Zéro dépendance externe, affichage instantané et infaillible.
 */

const iconPaths = {
  // Navigation & UI
  GitBranch: [
    '<line x1="6" y1="3" x2="6" y2="15"></line>',
    '<circle cx="18" cy="6" r="3"></circle>',
    '<circle cx="6" cy="18" r="3"></circle>',
    '<path d="M18 9a9 9 0 0 1-9 9"></path>'
  ],
  FileText: [
    '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>',
    '<polyline points="14 2 14 8 20 8"></polyline>',
    '<line x1="16" y1="13" x2="8" y2="13"></line>',
    '<line x1="16" y1="17" x2="8" y2="17"></line>',
    '<line x1="10" y1="9" x2="8" y2="9"></line>'
  ],
  BookOpen: [
    '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>',
    '<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>'
  ],
  Vote: [
    '<path d="m9 12 2 2 4-4"></path>',
    '<path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>',
    '<path d="M22 19H2"></path>'
  ],
  Settings: [
    '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>',
    '<circle cx="12" cy="12" r="3"></circle>'
  ],
  Search: [
    '<circle cx="11" cy="11" r="8"></circle>',
    '<line x1="21" y1="21" x2="16.65" y2="16.65"></line>'
  ],
  Zap: [
    '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>'
  ],
  History: [
    '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>',
    '<path d="M3 3v5h5"></path>',
    '<path d="M12 7v5l4 2"></path>'
  ],
  ChevronRight: [
    '<polyline points="9 18 15 12 9 6"></polyline>'
  ],
  ChevronLeft: [
    '<polyline points="15 18 9 12 15 6"></polyline>'
  ],
  ArrowRight: [
    '<line x1="5" y1="12" x2="19" y2="12"></line>',
    '<polyline points="12 5 19 12 12 19"></polyline>'
  ],
  X: [
    '<line x1="18" y1="6" x2="6" y2="18"></line>',
    '<line x1="6" y1="6" x2="18" y2="18"></line>'
  ],
  User: [
    '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>',
    '<circle cx="12" cy="7" r="4"></circle>'
  ],
  MapPin: [
    '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>',
    '<circle cx="12" cy="10" r="3"></circle>'
  ],
  CheckCircle2: [
    '<circle cx="12" cy="12" r="10"></circle>',
    '<path d="m9 12 2 2 4-4"></path>'
  ],
  XCircle: [
    '<circle cx="12" cy="12" r="10"></circle>',
    '<line x1="15" y1="9" x2="9" y2="15"></line>',
    '<line x1="9" y1="9" x2="15" y2="15"></line>'
  ],
  Award: [
    '<circle cx="12" cy="8" r="7"></circle>',
    '<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>'
  ],
  Info: [
    '<circle cx="12" cy="12" r="10"></circle>',
    '<line x1="12" y1="16" x2="12" y2="12"></line>',
    '<line x1="12" y1="8" x2="12.01" y2="8"></line>'
  ],
  Play: [
    '<polygon points="5 3 19 12 5 21 5 3"></polygon>'
  ],
  Pause: [
    '<rect x="6" y="4" width="4" height="16"></rect>',
    '<rect x="14" y="4" width="4" height="16"></rect>'
  ],
  RotateCcw: [
    '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>',
    '<path d="M3 3v5h5"></path>'
  ],
  Save: [
    '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>',
    '<polyline points="17 21 17 13 7 13 7 21"></polyline>',
    '<polyline points="7 3 7 8 15 8"></polyline>'
  ],
  Download: [
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>',
    '<polyline points="7 10 12 15 17 10"></polyline>',
    '<line x1="12" y1="15" x2="12" y2="3"></line>'
  ],
  Upload: [
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>',
    '<polyline points="17 8 12 3 7 8"></polyline>',
    '<line x1="12" y1="3" x2="12" y2="15"></line>'
  ],
  Plus: [
    '<line x1="12" y1="5" x2="12" y2="19"></line>',
    '<line x1="5" y1="12" x2="19" y2="12"></line>'
  ],
  Trash2: [
    '<polyline points="3 6 5 6 21 6"></polyline>',
    '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
    '<line x1="10" y1="11" x2="10" y2="17"></line>',
    '<line x1="14" y1="11" x2="14" y2="17"></line>'
  ],
  Layers: [
    '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>',
    '<polyline points="2 17 12 22 22 17"></polyline>',
    '<polyline points="2 12 12 17 22 12"></polyline>'
  ],

  // Node & Institution Icons
  Landmark: [
    '<line x1="3" y1="22" x2="21" y2="22"></line>',
    '<line x1="6" y1="18" x2="6" y2="11"></line>',
    '<line x1="10" y1="18" x2="10" y2="11"></line>',
    '<line x1="14" y1="18" x2="14" y2="11"></line>',
    '<line x1="18" y1="18" x2="18" y2="11"></line>',
    '<polygon points="12 2 20 7 4 7"></polygon>'
  ],
  Building2: [
    '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>',
    '<path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"></path>',
    '<path d="M18 9h2"></path>',
    '<path d="M18 13h2"></path>',
    '<path d="M18 17h2"></path>',
    '<path d="M10 6h4"></path>',
    '<path d="M10 10h4"></path>',
    '<path d="M10 14h4"></path>',
    '<path d="M10 18h4"></path>'
  ],
  Shield: [
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'
  ],
  ShieldAlert: [
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    '<line x1="12" y1="8" x2="12" y2="12"></line>',
    '<line x1="12" y1="16" x2="12.01" y2="16"></line>'
  ],
  ShieldCheck: [
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    '<path d="m9 12 2 2 4-4"></path>'
  ],
  Scale: [
    '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>',
    '<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>',
    '<path d="M7 21h10"></path>',
    '<path d="M12 3v18"></path>',
    '<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>'
  ],
  Crosshair: [
    '<circle cx="12" cy="12" r="10"></circle>',
    '<line x1="22" y1="12" x2="18" y2="12"></line>',
    '<line x1="6" y1="12" x2="2" y2="12"></line>',
    '<line x1="12" y1="6" x2="12" y2="2"></line>',
    '<line x1="12" y1="22" x2="12" y2="18"></line>'
  ],
  Globe: [
    '<circle cx="12" cy="12" r="10"></circle>',
    '<line x1="2" y1="12" x2="22" y2="12"></line>',
    '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>'
  ],
  GraduationCap: [
    '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>',
    '<path d="M6 12v5c3 3 9 3 12 0v-5"></path>'
  ],
  HeartPulse: [
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>',
    '<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>'
  ],
  Leaf: [
    '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>',
    '<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>'
  ],
  Briefcase: [
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>',
    '<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>'
  ],
  Palette: [
    '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>',
    '<circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>',
    '<circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>',
    '<circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>',
    '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>'
  ],
  Wheat: [
    '<path d="M2 22 16 8"></path>',
    '<path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path>',
    '<path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path>',
    '<path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0 4.94Z"></path>',
    '<path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path>',
    '<path d="M11.47 17.47 13 19l1.53-1.53a3.5 3.5 0 0 0 0-4.94L13 11l-1.53 1.53a3.5 3.5 0 0 0 0 4.94Z"></path>',
    '<path d="M15.47 13.47 17 15l1.53-1.53a3.5 3.5 0 0 0 0-4.94L17 7l-1.53 1.53a3.5 3.5 0 0 0 0 4.94Z"></path>'
  ],
  Atom: [
    '<circle cx="12" cy="12" r="1"></circle>',
    '<path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>',
    '<path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>'
  ],
  Trophy: [
    '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>',
    '<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>',
    '<path d="M4 22h16"></path>',
    '<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>',
    '<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>',
    '<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>'
  ],
  FileCheck2: [
    '<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>',
    '<polyline points="14 2 14 8 20 8"></polyline>',
    '<path d="m3 15 2 2 4-4"></path>'
  ],
  Receipt: [
    '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path>',
    '<path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>',
    '<path d="M12 17.5v-11"></path>'
  ]
};

/**
 * Génère une balise SVG pour une icône donnée
 * @param {string} name - Nom de l'icône (ex: "Landmark", "Search")
 * @param {object} options - Options { size: 16, className: '', style: '', ariaHidden: true }
 * @returns {string} Code HTML SVG
 */
export function getIcon(name, options = {}) {
  const size = options.size || 16;
  const className = options.className ? ` class="${options.className}"` : '';
  const style = options.style ? ` style="${options.style}"` : '';
  const ariaHidden = options.ariaHidden !== false ? ' aria-hidden="true"' : '';
  
  const paths = iconPaths[name] || iconPaths['Landmark'] || [];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${className}${style}${ariaHidden}>${paths.join('')}</svg>`;
}
