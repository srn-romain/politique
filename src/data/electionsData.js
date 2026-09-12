// Données extensibles pour l'espace 'Élections & Candidats' (Prêt pour les futures échéances présidentielles)
export const electionsData = {
  nextPresidentialYear: 2027,
  ruleDescription: "Le Président de la République est élu pour 5 ans au suffrage universel direct au scrutin uninominal majoritaire à deux tours. Nul ne peut exercer plus de deux mandats consécutifs (Art. 6).",
  rules: [
    { title: "Conditions d'éligibilité", desc: "Être de nationalité française, âgé d'au moins 18 ans, jouir de ses droits civiques et électoraux." },
    { title: "Les 500 Parrainages", desc: "Obtenir la signature d'au moins 500 élus (maires, parlementaires, conseillers) répartis sur au moins 30 départements différents sans dépasser un dixième par département." },
    { title: "Temps de parole", desc: "Contrôlé strictement par l'ARCOM avec une équité puis une égalité stricte du temps d'antenne audiovisuel pendant la campagne officielle." },
    { title: "Plafond des dépenses", desc: "Dépenses électorales plafonnées et contrôlées par la CNCCFP avec remboursement public partiel si plus de 5% des suffrages exprimés." }
  ],
  sampleCandidates: [
    {
      id: "cand_1",
      name: "Espace Candidat Déclaré / Pressenti",
      party: "Bloc Central / Majorité",
      color: "#2563eb",
      status: "Personnalité pressentie",
      keyPillars: ["Continuité des réformes économiques", "Souveraineté européenne", "Transition énergétique nucléaire & renouvelable"],
      bio: "Cet espace accueillera dynamiquement les déclarations officielles de candidature, fiches détaillées et comparateurs programmatiques."
    },
    {
      id: "cand_2",
      name: "Espace Candidat Déclaré / Pressenti",
      party: "Gauche Républicaine / Écologie",
      color: "#dc2626",
      status: "Personnalité pressentie",
      keyPillars: ["Justice fiscale et sociale", "Planification écologique radicale", "Renforcement des services publics hospitaliers"],
      bio: "Comparateur complet des mesures économiques, fiscales et environnementales."
    },
    {
      id: "cand_3",
      name: "Espace Candidat Déclaré / Pressenti",
      party: "Droite Républicaine & Indépendants",
      color: "#059669",
      status: "Personnalité pressentie",
      keyPillars: ["Restauration de l'autorité de l'État", "Réduction des dépenses publiques", "Soutien aux PME et ruralité"],
      bio: "Suivi des déclarations et parrainages officiels validés par le Conseil Constitutionnel."
    },
    {
      id: "cand_4",
      name: "Espace Candidat Déclaré / Pressenti",
      party: "Rassemblement National & Alliés",
      color: "#1e3a8a",
      status: "Personnalité pressentie",
      keyPillars: ["Priorité nationale et pouvoir d'achat", "Maîtrise stricte des frontières", "Référendum d'initiative citoyenne"],
      bio: "Synthèse des propositions et fiches thématiques."
    }
  ],
  historicalElections: [
    { year: 2022, winner: "Emmanuel Macron (58,55%)", finalist: "Marine Le Pen (41,45%)", turnout: "71,99%" },
    { year: 2017, winner: "Emmanuel Macron (66,10%)", finalist: "Marine Le Pen (33,90%)", turnout: "74,56%" },
    { year: 2012, winner: "François Hollande (51,64%)", finalist: "Nicolas Sarkozy (48,36%)", turnout: "80,35%" },
    { year: 2007, winner: "Nicolas Sarkozy (53,06%)", finalist: "Ségolène Royal (46,94%)", turnout: "83,97%" },
    { year: 2002, winner: "Jacques Chirac (82,21%)", finalist: "Jean-Marie Le Pen (17,79%)", turnout: "79,71%" }
  ]
};
