// Données complètes sur le Parlement et les Hautes Institutions de la Ve République
export const institutionsData = [
  {
    id: "assemblee_nationale",
    name: "Assemblée Nationale",
    shortName: "Assemblée Nationale (Palais Bourbon)",
    category: "legislatif",
    branch: "Pouvoir Législatif (Chambre Basse)",
    color: "#0284c7",
    icon: "Building2",
    building: "Palais Bourbon",
    address: "126 Rue de l'Université, 75007 Paris",
    seats: 577,
    mandateLength: "5 ans (Suffrage universel direct)",
    currentLeader: {
      title: "Présidente de l'Assemblée Nationale",
      name: "Yaël Braun-Pivet",
      sinceDate: "Juin 2022 (Réélue en juillet 2024)",
      party: "Renaissance (Ensemble)",
      age: 55,
      biography: "Avocate de formation, députée des Yvelines depuis 2017, ancienne présidente de la Commission des Lois (2017-2022), éphémère ministre des Outre-mer, première femme présidente de l'Assemblée nationale dans l'histoire de la République."
    },
    keyPowers: [
      "Vote les projets et propositions de loi",
      "Dispose du DERNIER MOT en cas de désaccord avec le Sénat sur un texte",
      "Contrôle l'action du gouvernement (questions au gouvernement, commissions d'enquête)",
      "Peut renverser le Gouvernement par le vote d'une Motion de Censure (Art. 49.2 / 49.3)",
      "Vote le Budget de l'État (Loi de Finances) et de la Sécurité Sociale (PLFSS)"
    ],
    composition: "577 députés élus au scrutin majoritaire à deux tours dans des circonscriptions territoriales.",
    predecessors: [
      { name: "Richard Ferrand", period: "2018 - 2022", party: "LREM", highlight: "Gestion des réformes institutionnelles et adaptation des travaux pendant la crise sanitaire" },
      { name: "François de Rugy", period: "2017 - 2018", party: "LREM / Écologiste", highlight: "Lancement des groupes de travail 'Rendez-vous des Réformes'" },
      { name: "Claude Bartolone", period: "2012 - 2017", party: "PS", highlight: "Débats historiques sur le mariage pour tous (136h de séance)" },
      { name: "Bernard Accoyer", period: "2007 - 2012", party: "UMP", highlight: "Mise en œuvre de la révision constitutionnelle de 2008 (nouveaux droits de l'opposition)" },
      { name: "Jean-Louis Debré", period: "2002 - 2007", party: "UMP", highlight: "Préservation des prérogatives parlementaires et rénovation des débats" },
      { name: "Laurent Fabius", period: "1988 - 1992 & 1997 - 2000", party: "PS", highlight: "Création des questions d'actualité retransmises à la télévision" },
      { name: "Jacques Chaban-Delmas", period: "1958 - 1969, 1978 - 1981, 1986 - 1988", party: "Gaulliste", highlight: "Président historique de la Ve République (16 ans de présidence au total)" }
    ]
  },
  {
    id: "senat",
    name: "Sénat",
    shortName: "Sénat (Palais du Luxembourg)",
    category: "legislatif",
    branch: "Pouvoir Législatif (Chambre Haute)",
    color: "#6366f1",
    icon: "Landmark",
    building: "Palais du Luxembourg",
    address: "15 Rue de Vaugirard, 75006 Paris",
    seats: 348,
    mandateLength: "6 ans (Renouvelable par moitié tous les 3 ans)",
    currentLeader: {
      title: "Président du Sénat (2e personnage de l'État)",
      name: "Gérard Larcher",
      sinceDate: "Octobre 2014 (Réélu en 2017, 2020, 2023 - également 2008-2011)",
      party: "Les Républicains",
      age: 76,
      biography: "Vétérinaire de profession, sénateur des Yvelines depuis 1986, ancien maire de Rambouillet et ancien ministre délégué aux Relations du travail (2004-2007). Record de longévité contemporaine à la tête du Plateau."
    },
    keyPowers: [
      "Examine et amende tous les textes de loi (navette parlementaire)",
      "Représente constitutionnellement les collectivités territoriales de la République (Art. 24)",
      "Assure l'intérim de la Présidence de la République en cas de vacance du pouvoir (Art. 7)",
      "Droit de véto indispensable lors d'une Révision de la Constitution (Art. 89)",
      "NE PEUT PAS ÊTRE DISSOUS par le Président de la République (continuité garantie)"
    ],
    composition: "348 sénateurs élus au suffrage universel indirect par un collège d'environ 160 000 grands électeurs (maires, conseillers municipaux, régionaux et départementaux, députés).",
    predecessors: [
      { name: "Jean-Pierre Bel", period: "2011 - 2014", party: "PS", highlight: "Première présidence de gauche du Sénat sous la Ve République" },
      { name: "Christian Poncelet", period: "1998 - 2008", party: "RPR / UMP", highlight: "Passage du mandat sénatorial de 9 ans à 6 ans et modernisation informatique" },
      { name: "René Monory", period: "1992 - 1998", party: "UDF", highlight: "Créateur du Futuroscope et défenseur des territoires ruraux" },
      { name: "Alain Poher", period: "1968 - 1992", party: "Centre démocrate", highlight: "Recordman de longévité (24 ans de présidence), a assuré deux fois l'intérim présidentiel (1969 et 1974)" },
      { name: "Gaston Monnerville", period: "1958 - 1968", party: "Parti Radical", highlight: "Premier président du Sénat de la Ve République, grande figure guyanaise et résistant" }
    ]
  },
  {
    id: "conseil_constitutionnel",
    name: "Conseil Constitutionnel",
    shortName: "Conseil Constitutionnel (Les Sages)",
    category: "controle",
    branch: "Gardien de la Constitution & Contrôle",
    color: "#b45309",
    icon: "ShieldCheck",
    building: "Aile Montpensier (Palais-Royal)",
    address: "2 Rue de Montpensier, 75001 Paris",
    seats: "9 membres (+ anciens Présidents)",
    mandateLength: "9 ans non renouvelable (renouvelé par tiers tous les 3 ans)",
    currentLeader: {
      title: "Président du Conseil Constitutionnel",
      name: "Laurent Fabius",
      sinceDate: "Mars 2016",
      party: "Nommé par François Hollande",
      age: 79,
      biography: "Ancien Premier ministre (1984-1986, le plus jeune de l'histoire à 37 ans), ancien ministre des Finances puis des Affaires étrangères (artisan de la COP21), président de l'Assemblée nationale à deux reprises."
    },
    keyPowers: [
      "Contrôle la conformité des lois à la Constitution avant leur promulgation (Art. 61)",
      "Juge de la Question Prioritaire de Constitutionnalité (QPC) posée par les citoyens (Art. 61-1)",
      "Veille à la régularité de l'élection présidentielle et des référendums et proclame les résultats",
      "Vérifie la constitutionnalité des traités internationaux avant ratification"
    ],
    composition: "9 membres nommés : 3 par le Président de la République (qui désigne aussi le Président du Conseil), 3 par le Président de l'AN, 3 par le Président du Sénat.",
    predecessors: [
      { name: "Jean-Louis Debré", period: "2007 - 2016", party: "Nommé par Jacques Chirac", highlight: "Mise en œuvre historique de la QPC (Question Prioritaire de Constitutionnalité)" },
      { name: "Pierre Mazeaud", period: "2004 - 2007", party: "Nommé par Jacques Chirac", highlight: "Jurisprudence sur la clarté et l'accessibilité de la loi" },
      { name: "Yves Guéna", period: "2000 - 2004", party: "Nommé par Jacques Chirac", highlight: "Validation de l'élection présidentielle de 2002" },
      { name: "Roland Dumas", period: "1995 - 2000", party: "Nommé par François Mitterrand", highlight: "Jurisprudence sur le statut pénal du chef de l'État" },
      { name: "Robert Badinter", period: "1986 - 1995", party: "Nommé par François Mitterrand", highlight: "Consécration du 'bloc de constitutionnalité' et des libertés publiques fondamentales" }
    ]
  },
  {
    id: "conseil_etat",
    name: "Conseil d'État",
    shortName: "Conseil d'État",
    category: "controle",
    branch: "Conseil Juridique & Cour Suprême Administrative",
    color: "#475569",
    icon: "FileCheck2",
    building: "Palais-Royal",
    address: "1 Place du Palais-Royal, 75001 Paris",
    seats: "300+ conseillers et auditeurs",
    mandateLength: "Magistrats administratifs inamovibles",
    currentLeader: {
      title: "Vice-Président du Conseil d'État (Dirigeant effectif)",
      name: "Didier-Roland Tabuteau",
      sinceDate: "Janvier 2022",
      party: "Grand commis de l'État",
      age: 68,
      biography: "Conseiller d'État, médecin et docteur en droit, ancien directeur général de l'ANSM, spécialiste reconnu du droit de la santé et de la sécurité sociale."
    },
    keyPowers: [
      "Donne un avis juridique obligatoire sur TOUS les projets de loi du Gouvernement avant passage en Conseil des ministres",
      "Plus haute juridiction de l'ordre administratif (juge en dernier ressort les actes de l'administration et de l'État)",
      "Rend des avis consultatifs au gouvernement sur l'interprétation des textes juridiques complexes",
      "Juge des référés-libertés pour la protection des libertés fondamentales face aux décisions publiques"
    ],
    composition: "Héritier direct du Conseil du Roi et créé sous sa forme moderne par Napoléon Bonaparte en 1799. Le Premier ministre en est le président théorique, mais sa direction réelle est assurée par le Vice-Président.",
    predecessors: [
      { name: "Bruno Lasserre", period: "2018 - 2022", party: "Haut fonctionnaire", highlight: "Gestion des contentieux de crise sanitaire Covid et état d'urgence" },
      { name: "Jean-Marc Sauvé", period: "2006 - 2018", party: "Haut fonctionnaire", highlight: "Rénovation du référé et présidence de la CIASE" },
      { name: "Renaud Denoix de Saint Marc", period: "1995 - 2006", party: "Haut fonctionnaire", highlight: "Codification du code de justice administrative" }
    ]
  },
  {
    id: "cour_comptes",
    name: "Cour des Comptes",
    shortName: "Cour des Comptes (Rue Cambon)",
    category: "controle",
    branch: "Contrôle des Finances Publiques",
    color: "#334155",
    icon: "Receipt",
    building: "Palais Cambon",
    address: "13 Rue Cambon, 75001 Paris",
    seats: "Magistrats financiers",
    mandateLength: "Magistrats inamovibles",
    currentLeader: {
      title: "Premier Président de la Cour des Comptes",
      name: "Pierre Moscovici",
      sinceDate: "Juin 2020",
      party: "Nommé en Conseil des Ministres",
      age: 68,
      biography: "Ancien député, ministre de l'Économie et des Finances (2012-2014) et Commissaire européen aux affaires économiques et financières (2014-2019)."
    },
    keyPowers: [
      "Contrôle la régularité et la bonne gestion des comptes de l'État et des organismes publics",
      "Assiste le Parlement et le Gouvernement dans le contrôle de l'exécution des lois de finances (Art. 47-2)",
      "Publie un rapport public annuel très attendu pointant les gaspillages et dysfonctionnements publics",
      "Évalue l'efficacité et l'impact réel des politiques publiques"
    ],
    composition: "Institution bicentenaire fondée par Napoléon Ier en 1807. Indépendante du pouvoir exécutif et législatif.",
    predecessors: [
      { name: "Didier Migaud", period: "2010 - 2020", party: "Ancien député PS", highlight: "Certification des comptes de l'État et indépendance renforcée" },
      { name: "Philippe Séguin", period: "2004 - 2010", party: "Ancien président AN (RPR)", highlight: "Exigence de transparence républicaine et modernisation de la Cour" },
      { name: "François Logerot", period: "2001 - 2004", party: "Magistrat", highlight: "Adaptation au cadre budgétaire LOLF" }
    ]
  }
];
