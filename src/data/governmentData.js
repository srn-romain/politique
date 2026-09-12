// Données complètes et détaillées sur l'Exécutif et les Ministères français
export const executiveData = {
  president: {
    id: "presidence",
    title: "Président de la République",
    name: "Emmanuel Macron",
    subtitle: "Chef de l'État & Chef des Armées",
    institution: "Palais de l'Élysée",
    address: "55 Rue du Faubourg Saint-Honoré, 75008 Paris",
    age: 48,
    party: "Renaissance (Ensemble)",
    sinceDate: "14 mai 2017 (Réélu le 24 avril 2022)",
    mandate: "2017 - Présent (2nd mandat)",
    roleDescription: "Garant de la Constitution, chef des armées, incarnation de la continuité de l'État et de l'indépendance nationale. Il négocie et ratifie les traités, promulgue les lois et dispose du droit de dissolution de l'Assemblée nationale.",
    biography: "Diplômé de Sciences Po Paris et de l'ENA (promotion Léopold-Sédar-Senghor). Inspecteur des finances puis banquier d'affaires chez Rothschild & Co. Nommé secrétaire général adjoint de l'Élysée en 2012, puis Ministre de l'Économie (2014-2016). Élu plus jeune président de la Ve République en mai 2017 à 39 ans, puis réélu en 2022.",
    keyPowers: [
      "Nomme le Premier Ministre (Art. 8)",
      "Préside le Conseil des Ministres chaque mercredi",
      "Chef des Armées & détient le feu nucléaire (Art. 15)",
      "Peut dissoudre l'Assemblée Nationale (Art. 12)",
      "Promulgue les lois votées par le Parlement (Art. 10)",
      "Pouvoirs exceptionnels en cas de crise majeure (Art. 16)"
    ],
    predecessors: [
      { name: "François Hollande", period: "2012 - 2017", party: "Parti Socialiste", highlight: "Accords de Paris sur le climat (COP21), mariage pour tous" },
      { name: "Nicolas Sarkozy", period: "2007 - 2012", party: "UMP", highlight: "Réforme constitutionnelle de 2008, crise financière mondiale" },
      { name: "Jacques Chirac", period: "1995 - 2007", party: "RPR / UMP", highlight: "Passage au quinquennat (2000), refus de la guerre en Irak (2003)" },
      { name: "François Mitterrand", period: "1981 - 1995", party: "Parti Socialiste", highlight: "Abolition de la peine de mort, 5e semaine de congés payés, traité de Maastricht" },
      { name: "Valéry Giscard d'Estaing", period: "1974 - 1981", party: "UDF", highlight: "Majorité à 18 ans, loi IVG Veil, divorce par consentement mutuel" },
      { name: "Georges Pompidou", period: "1969 - 1974", party: "UDR", highlight: "Modernisation industrielle, création du Centre Pompidou" },
      { name: "Charles de Gaulle", period: "1958 - 1969", party: "UNR", highlight: "Fondateur de la Ve République, élection du Président au suffrage universel direct (1962)" }
    ]
  },
  primeMinister: {
    id: "matignon",
    title: "Premier Ministre",
    name: "Chef du Gouvernement",
    currentHolder: "Michel Barnier",
    subtitle: "Hôtel de Matignon",
    institution: "Hôtel de Matignon",
    address: "57 Rue de Varenne, 75007 Paris",
    age: 73,
    party: "Les Républicains / Majorité présidentielle",
    sinceDate: "Septembre 2024",
    mandate: "2024 - Présent",
    roleDescription: "Dirige l'action du Gouvernement (Art. 21). Responsable de la Défense nationale et de l'exécution des lois. Il exerce le pouvoir réglementaire et propose la nomination des ministres au Président.",
    biography: "Homme d'État expérimenté, ancien ministre à de multiples reprises (Environnement, Affaires européennes, Affaires étrangères, Agriculture), ancien Commissaire européen et négociateur en chef de l'Union européenne pour le Brexit (2016-2021). Nommé Premier ministre à l'automne 2024.",
    keyPowers: [
      "Dirige l'action du Gouvernement et coordonne les ministères",
      "Dispose du pouvoir réglementaire (décrets d'application)",
      "Propose la nomination et la révocation des ministres",
      "Engage la responsabilité du Gouvernement devant l'Assemblée (Art. 49.1, 49.2, 49.3)",
      "Dépose les projets de loi au Parlement au nom du Gouvernement"
    ],
    predecessors: [
      { name: "Gabriel Attal", period: "Janvier 2024 - Septembre 2024", party: "Renaissance", highlight: "Plus jeune Premier ministre de la Ve République (34 ans)" },
      { name: "Élisabeth Borne", period: "Mai 2022 - Janvier 2024", party: "Renaissance", highlight: "2e femme Première ministre, réforme des retraites" },
      { name: "Jean Castex", period: "Juillet 2020 - Mai 2022", party: "Divers droite", highlight: "Gestion de la crise Covid-19, plan France Relance" },
      { name: "Édouard Philippe", period: "Mai 2017 - Juillet 2020", party: "LR / Horizons", highlight: "Grand débat national, réforme de la SNCF" },
      { name: "Bernard Cazeneuve", period: "Décembre 2016 - Mai 2017", party: "PS", highlight: "Transition républicaine, sécurité nationale" },
      { name: "Manuel Valls", period: "Mars 2014 - Décembre 2016", party: "PS", highlight: "Loi Travail, état d'urgence post-attentats" },
      { name: "Jean-Marc Ayrault", period: "Mai 2012 - Mars 2014", party: "PS", highlight: "Loi sur la transparence de la vie publique" },
      { name: "François Fillon", period: "Mai 2007 - Mai 2012", party: "UMP", highlight: "Premier ministre durant l'intégralité du mandat de Nicolas Sarkozy" },
      { name: "Dominique de Villepin", period: "2005 - 2007", party: "UMP", highlight: "Contrat Première Embauche (CPE), énergie" },
      { name: "Lionel Jospin", period: "1997 - 2002", party: "PS", highlight: "Cohabitation sous Chirac, passage aux 35 heures, PACS" }
    ]
  }
};

export const ministriesData = [
  {
    id: "interieur",
    name: "Ministère de l'Intérieur et des Outre-mer",
    shortName: "Intérieur",
    category: "regalien",
    categoryLabel: "Ministère Régalien",
    color: "#2563eb",
    icon: "ShieldAlert",
    building: "Hôtel de Beauvau",
    address: "Place Beauvau, 75008 Paris",
    budgetBillions: "25.6 Mds €",
    staffCount: "290 000 agents",
    currentMinister: {
      name: "Bruno Retailleau",
      title: "Ministre de l'Intérieur",
      age: 63,
      sinceDate: "Septembre 2024",
      party: "Les Républicains",
      biography: "Ancien président du groupe Les Républicains au Sénat, sénateur de la Vendée, ancien président du Conseil régional des Pays de la Loire. Connu pour sa ligne d'autorité républicaine et de fermeté régalienne.",
      missions: [
        "Sécurité intérieure (Police nationale, Gendarmerie nationale)",
        "Administration territoriale et maintien de l'ordre public",
        "Gestion de l'immigration et de l'intégration républicaine",
        "Organisation des élections politiques et référendums",
        "Sécurité civile (Sapeurs-pompiers, gestion des crises)"
      ]
    },
    predecessors: [
      { name: "Gérald Darmanin", period: "2020 - 2024", party: "Renaissance / ex-LR", highlight: "Loi immigration 2023, sécurisation des JO Paris 2024, loi sécurité globale" },
      { name: "Christophe Castaner", period: "2018 - 2020", party: "LREM", highlight: "Gestion du mouvement des Gilets Jaunes, réforme du maintien de l'ordre" },
      { name: "Gérard Collomb", period: "2017 - 2018", party: "LREM / ex-PS", highlight: "Loi renforçant la sécurité intérieure et la lutte contre le terrorisme (SILT)" },
      { name: "Matthias Fekl", period: "Mars 2017 - Mai 2017", party: "PS", highlight: "Fin du quinquennat Hollande" },
      { name: "Bruno Le Roux", period: "2016 - 2017", party: "PS", highlight: "Sécurisation de l'état d'urgence" },
      { name: "Bernard Cazeneuve", period: "2014 - 2016", party: "PS", highlight: "Gestion des attentats de 2015-2016, état d'urgence" },
      { name: "Manuel Valls", period: "2012 - 2014", party: "PS", highlight: "Réforme des zones de sécurité prioritaires" },
      { name: "Claude Guéant", period: "2011 - 2012", party: "UMP", highlight: "Circulaire sur les étudiants étrangers" },
      { name: "Brice Hortefeux", period: "2009 - 2011", party: "UMP", highlight: "Création de la gendarmerie rattachée à l'Intérieur" },
      { name: "Michèle Alliot-Marie", period: "2007 - 2009", party: "UMP", highlight: "Première femme ministre de l'Intérieur" },
      { name: "Nicolas Sarkozy", period: "2002 - 2004 & 2005 - 2007", party: "UMP", highlight: "Police de proximité supprimée, création du CFCM, émeutes de banlieue 2005" }
    ]
  },
  {
    id: "justice",
    name: "Ministère de la Justice",
    shortName: "Justice (Garde des Sceaux)",
    category: "regalien",
    categoryLabel: "Ministère Régalien",
    color: "#7c3aed",
    icon: "Scale",
    building: "Hôtel de Bourvallais",
    address: "13 Place Vendôme, 75001 Paris",
    budgetBillions: "10.1 Mds €",
    staffCount: "92 000 agents",
    currentMinister: {
      name: "Didier Migaud",
      title: "Garde des Sceaux, Ministre de la Justice",
      age: 74,
      sinceDate: "Septembre 2024",
      party: "Divers gauche",
      biography: "Juriste et magistrat financier, ancien député PS de l'Isère, ancien Premier président de la Cour des comptes (2010-2020) et président de la Haute Autorité pour la transparence de la vie publique (HATVP, 2020-2024).",
      missions: [
        "Administration judiciaire et fonctionnement des cours et tribunaux",
        "Administration pénitentiaire et exécution des peines",
        "Protection judiciaire de la jeunesse (PJJ)",
        "Élaboration des projets de lois civiles, pénales et constitutionnelles",
        "Garantie de l'indépendance de l'autorité judiciaire"
      ]
    },
    predecessors: [
      { name: "Éric Dupond-Moretti", period: "2020 - 2024", party: "Indépendant / Majorité", highlight: "Loi d'orientation et de programmation de la justice (+7,5 Mds €), États généraux de la justice" },
      { name: "Nicole Belloubet", period: "2017 - 2020", party: "Divers gauche", highlight: "Loi de programmation 2018-2022, réforme de la procédure pénale" },
      { name: "François Bayrou", period: "Mai 2017 - Juin 2017", party: "MoDem", highlight: "Projet de loi de moralisation et transparence de la vie publique" },
      { name: "Jean-Jacques Urvoas", period: "2016 - 2017", party: "PS", highlight: "Loi sur la modernisation de la justice du XXIe siècle" },
      { name: "Christiane Taubira", period: "2012 - 2016", party: "Walwari / PRG", highlight: "Loi sur le mariage pour tous (2013), réforme pénale (contrainte pénale)" },
      { name: "Michel Mercier", period: "2010 - 2012", party: "MoDem / NC", highlight: "Réforme de la garde à vue, jurés populaires en correctionnelle" },
      { name: "Rachida Dati", period: "2007 - 2009", party: "UMP", highlight: "Réforme de la carte judiciaire, peines planchers pour récidivistes" },
      { name: "Pascal Clément", period: "2005 - 2007", party: "UMP", highlight: "Réforme de la récidive et suivi socio-judiciaire" },
      { name: "Dominique Perben", period: "2002 - 2005", party: "UMP", highlight: "Loi Perben I et II sur la criminalité organisée" },
      { name: "Robert Badinter", period: "1981 - 1986", party: "PS", highlight: "Abolition historique de la peine de mort en France (1981)" }
    ]
  },
  {
    id: "armees",
    name: "Ministère des Armées et des Anciens Combattants",
    shortName: "Armées",
    category: "regalien",
    categoryLabel: "Ministère Régalien",
    color: "#059669",
    icon: "Crosshair",
    building: "Hexagone Balard",
    address: "60 Boulevard du Général-Martial-Valin, 75015 Paris",
    budgetBillions: "47.2 Mds €",
    staffCount: "270 000 militaires & civils",
    currentMinister: {
      name: "Sébastien Lecornu",
      title: "Ministre des Armées",
      age: 39,
      sinceDate: "Mai 2022 (Reconduit)",
      party: "Renaissance",
      biography: "Juriste, ancien sénateur et président du département de l'Eure, ministre des Outre-mer (2020-2022). Nommé ministre des Armées en 2022, artisan de la Loi de programmation militaire 2024-2030 (413 milliards d'euros).",
      missions: [
        "Préparation, commandement et déploiement des forces armées (Terre, Mer, Air & Espace, Cyber)",
        "Dissuasion nucléaire océanique et aéroportée",
        "Renseignement militaire (DRM, DGSE)",
        "Industrie de défense, souveraineté et innovations d'armement",
        "Mémoire combattante et soutien aux vétérans"
      ]
    },
    predecessors: [
      { name: "Florence Parly", period: "2017 - 2022", party: "Divers gauche", highlight: "Loi de programmation militaire 2019-2025, création du Commandement de l'Espace" },
      { name: "Sylvie Goulard", period: "Mai 2017 - Juin 2017", party: "MoDem", highlight: "Transition début mandat Macron" },
      { name: "Jean-Yves Le Drian", period: "2012 - 2017", party: "PS", highlight: "Opérations Serval/Barkhane au Sahel, exportations Rafale, Opération Sentinelle" },
      { name: "Gérard Longuet", period: "2011 - 2012", party: "UMP", highlight: "Intervention en Libye (Opération Harmattan)" },
      { name: "Alain Juppé", period: "2010 - 2011", party: "UMP", highlight: "Restructuration des armées et bases de défense" },
      { name: "Hervé Morin", period: "2007 - 2010", party: "Nouveau Centre", highlight: "Livre blanc sur la défense 2008, retour de la France dans le commandement intégré de l'OTAN" },
      { name: "Michèle Alliot-Marie", period: "2002 - 2007", party: "UMP", highlight: "Professionnalisation achevée des armées" }
    ]
  },
  {
    id: "economie",
    name: "Ministère de l'Économie, des Finances et de l'Industrie",
    shortName: "Économie (Bercy)",
    category: "regalien",
    categoryLabel: "Ministère Régalien",
    color: "#d97706",
    icon: "Landmark",
    building: "Bercy (Hôtel des Ministres)",
    address: "139 Rue de Bercy, 75012 Paris",
    budgetBillions: "Budget de l'État : ~490 Mds €",
    staffCount: "135 000 agents",
    currentMinister: {
      name: "Antoine Armand",
      title: "Ministre de l'Économie, des Finances et de l'Industrie",
      age: 35,
      sinceDate: "Septembre 2024",
      party: "Renaissance",
      biography: "Ancien élève de l'ENS Ulm et de l'ENA, inspecteur des finances, député de Haute-Savoie et président de la commission des affaires économiques de l'Assemblée nationale avant sa nomination à Bercy.",
      missions: [
        "Préparation et exécution du budget de l'État et des lois de finances",
        "Politique fiscale, recouvrement des impôts et douanes",
        "Souveraineté industrielle, réindustrialisation et transition énergétique",
        "Régulation financière, concurrence et protection des consommateurs",
        "Gestion de la dette publique et de la trésorerie de l'État"
      ]
    },
    predecessors: [
      { name: "Bruno Le Maire", period: "2017 - 2024", party: "Renaissance / ex-LR", highlight: "Record de longévité à Bercy (7 ans), plan 'Quoi qu'il en coûte', loi PACTE, inflation post-Covid" },
      { name: "Michel Sapin", period: "2014 - 2017", party: "PS", highlight: "Loi Sapin II sur la transparence et lutte contre la corruption" },
      { name: "Emmanuel Macron", period: "2014 - 2016", party: "Indépendant / PS", highlight: "Loi Macron pour la croissance, l'activité et l'égalité des chances économiques" },
      { name: "Arnaud Montebourg", period: "2012 - 2014", party: "PS", highlight: "Ministre du Redressement productif, promotion du Made in France" },
      { name: "Pierre Moscovici", period: "2012 - 2014", party: "PS", highlight: "Pacte de responsabilité, crédit d'impôt compétitivité emploi (CICE)" },
      { name: "François Baroin", period: "2011 - 2012", party: "UMP", highlight: "Gestion de la crise de la zone euro et perte du triple A français" },
      { name: "Christine Lagarde", period: "2007 - 2011", party: "UMP", highlight: "Gestion de la crise financière des subprimes de 2008, loi TEPA, devenue Directrice du FMI" },
      { name: "Thierry Breton", period: "2005 - 2007", party: "UMP", highlight: "Réduction de la dette publique et privatisation des autoroutes" },
      { name: "Nicolas Sarkozy", period: "Mars 2004 - Nov 2004", party: "UMP", highlight: "Sauvetage d'Alstom, baisse des prix dans la grande distribution" }
    ]
  },
  {
    id: "affaires_etrangeres",
    name: "Ministère de l'Europe et des Affaires Étrangères",
    shortName: "Affaires Étrangères (Quai d'Orsay)",
    category: "regalien",
    categoryLabel: "Ministère Régalien",
    color: "#0284c7",
    icon: "Globe",
    building: "Hôtel du Quai d'Orsay",
    address: "37 Quai d'Orsay, 75007 Paris",
    budgetBillions: "6.2 Mds €",
    staffCount: "14 000 diplomates & agents",
    currentMinister: {
      name: "Jean-Noël Barrot",
      title: "Ministre de l'Europe et des Affaires Étrangères",
      age: 43,
      sinceDate: "Septembre 2024",
      party: "MoDem",
      biography: "Économiste (docteur d'HEC et professeur au MIT), député des Yvelines, ancien ministre délégué au Numérique puis aux Affaires européennes.",
      missions: [
        "Représentation diplomatique de la France et réseau d'ambassades mondial (3e réseau mondial)",
        "Négociations bilatérales, multilatérales (ONU, G7, G20) et construction européenne",
        "Protection des 2 millions de Français résidant à l'étranger",
        "Aide publique au développement et action culturelle (Instituts français, Alliances françaises)",
        "Gestion des crises internationales et diplomatie économique"
      ]
    },
    predecessors: [
      { name: "Stéphane Séjourné", period: "Janvier 2024 - Septembre 2024", party: "Renaissance", highlight: "Soutien à l'Ukraine, nomination comme Commissaire européen" },
      { name: "Catherine Colonna", period: "2022 - 2024", party: "Diplomate de carrière", highlight: "Guerre en Ukraine, crise au Proche-Orient, réarmement diplomatique" },
      { name: "Jean-Yves Le Drian", period: "2017 - 2022", party: "Divers gauche", highlight: "Pilar de la diplomatie française sous Macron I, crise des sous-marins AUKUS" },
      { name: "Jean-Marc Ayrault", period: "2016 - 2017", party: "PS", highlight: "Accords de paix pour le Proche-Orient, crise syrienne" },
      { name: "Laurent Fabius", period: "2012 - 2016", party: "PS", highlight: "Accord historique de Paris sur le climat (COP21), accord sur le nucléaire iranien" },
      { name: "Alain Juppé", period: "2011 - 2012", party: "UMP", highlight: "Printemps arabe, intervention internationale en Libye" },
      { name: "Michèle Alliot-Marie", period: "2010 - 2011", party: "UMP", highlight: "Crise tunisienne" },
      { name: "Bernard Kouchner", period: "2007 - 2010", party: "Divers gauche (Ouverture)", highlight: "Diplomatie humanitaire, présidence française de l'UE 2008" },
      { name: "Dominique de Villepin", period: "2002 - 2004", party: "RPR / UMP", highlight: "Discours mémorable à l'ONU contre la guerre en Irak (14 février 2003)" }
    ]
  },
  {
    id: "education",
    name: "Ministère de l'Éducation Nationale",
    shortName: "Éducation Nationale",
    category: "education_recherche",
    categoryLabel: "Éducation & Jeunesse",
    color: "#ea580c",
    icon: "GraduationCap",
    building: "Hôtel de Rochechouart",
    address: "110 Rue de Grenelle, 75007 Paris",
    budgetBillions: "63.5 Mds € (1er budget de l'État)",
    staffCount: "1.2 million d'enseignants & personnels",
    currentMinister: {
      name: "Anne Genetet",
      title: "Ministre de l'Éducation Nationale",
      age: 61,
      sinceDate: "Septembre 2024",
      party: "Renaissance",
      biography: "Médecin de formation, députée des Français établis hors de France (Asie-Océanie) depuis 2017, spécialiste des questions de défense et de diplomatie parlementaire.",
      missions: [
        "Organisation et pilotage du système scolaire (maternelle, primaire, collège, lycée)",
        "Élaboration des programmes scolaires et organisation des examens nationaux (Brevet, Bac)",
        "Formation et gestion du corps enseignant (1,2 million d'agents)",
        "Lutte contre le harcèlement scolaire et promotion de la laïcité républicaine",
        "Mixité sociale et inclusion scolaire"
      ]
    },
    predecessors: [
      { name: "Nicole Belloubet", period: "Février 2024 - Septembre 2024", party: "Divers gauche", highlight: "Mise en place des groupes de besoins au collège, pause numérique" },
      { name: "Amélie Oudéa-Castéra", period: "Janvier 2024 - Février 2024", party: "Renaissance", highlight: "Court passage au super-ministère Éducation & Sports" },
      { name: "Gabriel Attal", period: "Juillet 2023 - Janvier 2024", party: "Renaissance", highlight: "Interdiction de l'abaya à l'école, plan choc des savoirs, lutte anti-harcèlement" },
      { name: "Pap Ndiaye", period: "2022 - 2023", party: "Indépendant", highlight: "Mixité sociale dans le privé sous contrat, revalorisation du pacte enseignant" },
      { name: "Jean-Michel Blanquer", period: "2017 - 2022", party: "LREM", highlight: "Dédoublement des classes de CP/CE1 en REP, réforme du Baccalauréat, école à 3 ans" },
      { name: "Najat Vallaud-Belkacem", period: "2014 - 2017", party: "PS", highlight: "Réforme du collège, première femme ministre de l'Éducation" },
      { name: "Benoît Hamon", period: "Avril 2014 - Août 2014", party: "PS", highlight: "Décret sur les rythmes scolaires" },
      { name: "Vincent Peillon", period: "2012 - 2014", party: "PS", highlight: "Refondation de l'école de la République, semaine de 4,5 jours" },
      { name: "Luc Chatel", period: "2009 - 2012", party: "UMP", highlight: "Autonomie des établissements scolaires" },
      { name: "Xavier Darcos", period: "2007 - 2009", party: "UMP", highlight: "Suppression du samedi matin à l'école primaire" }
    ]
  },
  {
    id: "sante",
    name: "Ministère de la Santé et de l'Accès aux Soins",
    shortName: "Santé & Prévention",
    category: "social_sante",
    categoryLabel: "Social & Santé",
    color: "#dc2626",
    icon: "HeartPulse",
    building: "Ministère des Affaires Sociales",
    address: "14 Avenue Duquesne, 75007 Paris",
    budgetBillions: "Budget Sécurité Sociale (ONDAM) : ~250 Mds €",
    staffCount: "1.1 million de soignants hospitaliers",
    currentMinister: {
      name: "Geneviève Darrieussecq",
      title: "Ministre de la Santé et de l'Accès aux Soins",
      age: 68,
      sinceDate: "Septembre 2024",
      party: "MoDem",
      biography: "Médecin allergologue de profession, ancienne maire de Mont-de-Marsan, ancienne secrétaire d'État aux Armées puis ministre déléguée aux Personnes handicapées.",
      missions: [
        "Politique de santé publique et organisation des hôpitaux et cliniques",
        "Lutte contre les déserts médicaux et amélioration de l'accès aux soins",
        "Gestion des crises sanitaires, pandémies et veille épidémiologique",
        "Prévention, vaccination, santé mentale et périnatalité",
        "Financement de la sécurité sociale et de l'assurance maladie"
      ]
    },
    predecessors: [
      { name: "Frédéric Valletoux", period: "Février 2024 - Septembre 2024", party: "Horizons", highlight: "Loi sur l'accès aux soins et engagement des soignants" },
      { name: "Catherine Vautrin", period: "Janvier 2024 - Février 2024", party: "Divers droite", highlight: "Super-ministère du Travail, de la Santé et des Solidarités" },
      { name: "Aurélien Rousseau", period: "Juillet 2023 - Décembre 2023", party: "Divers gauche", highlight: "Ancien directeur de l'ARS IDF pendant le Covid, démission post-loi immigration" },
      { name: "François Braun", period: "2022 - 2023", party: "Indépendant (urgentiste)", highlight: "Mission flash sur les urgences, permanence des soins" },
      { name: "Brigitte Bourguignon", period: "Mai 2022 - Juillet 2022", party: "LREM", highlight: "Transition estivale" },
      { name: "Olivier Véran", period: "2020 - 2022", party: "LREM / ex-PS", highlight: "Gestion intégrale de la pandémie Covid-19, Ségur de la Santé (revalorisation historique des soignants)" },
      { name: "Agnès Buzyn", period: "2017 - 2020", party: "LREM", highlight: "Extension des 11 vaccins obligatoires, début de crise Covid" },
      { name: "Marisol Touraine", period: "2012 - 2017", party: "PS", highlight: "Généralisation du tiers payant, paquet de cigarettes neutre" },
      { name: "Xavier Bertrand", period: "2010 - 2012", party: "UMP", highlight: "Gestion du scandale du Mediator et réforme de l'agence du médicament" },
      { name: "Roselyne Bachelot", period: "2007 - 2010", party: "UMP", highlight: "Loi HPST (Hôpital, patients, santé et territoires), grippe H1N1" }
    ]
  },
  {
    id: "ecologie",
    name: "Ministère de la Transition Écologique, de l'Énergie, du Climat et de la Prévention des Risques",
    shortName: "Transition Écologique",
    category: "ecologie_territoires",
    categoryLabel: "Écologie & Territoires",
    color: "#16a34a",
    icon: "Leaf",
    building: "Hôtel de Roquelaure",
    address: "246 Boulevard Saint-Germain, 75007 Paris",
    budgetBillions: "38.2 Mds €",
    staffCount: "35 000 agents",
    currentMinister: {
      name: "Agnès Pannier-Runacher",
      title: "Ministre de la Transition Écologique, de l'Énergie et du Climat",
      age: 50,
      sinceDate: "Septembre 2024",
      party: "Renaissance",
      biography: "Ancienne élève d'HEC, Sciences Po et ENA (inspection des finances). Ancienne ministre déléguée à l'Industrie puis ministre de la Transition énergétique sous les gouvernements Borne et Attal.",
      missions: [
        "Planification écologique et décarbonation de l'économie",
        "Transition énergétique : relance du nucléaire, essor du solaire et de l'éolien",
        "Biodiversité, gestion des ressources en eau et adaptation au changement climatique",
        "Rénovation thermique des logements et transports propres",
        "Prévention des risques technologiques et naturels majeurs"
      ]
    },
    predecessors: [
      { name: "Christophe Béchu", period: "2022 - 2024", party: "Horizons", highlight: "Plan national d'adaptation au changement climatique (+4°C), plan eau" },
      { name: "Amélie de Montchalin", period: "Mai 2022 - Juillet 2022", party: "LREM", highlight: "Lancement de la planification écologique territoriale" },
      { name: "Barbara Pompili", period: "2020 - 2022", party: "En Commun / ex-EELV", highlight: "Loi Climat et Résilience issue de la Convention Citoyenne pour le Climat" },
      { name: "Élisabeth Borne", period: "2019 - 2020", party: "LREM", highlight: "Loi d'orientation des mobilités (LOM), loi anti-gaspillage (AGEC)" },
      { name: "François de Rugy", period: "2018 - 2019", party: "LREM / ex-EELV", highlight: "Loi relative à l'énergie et au climat" },
      { name: "Nicolas Hulot", period: "2017 - 2018", party: "Écologiste indépendant", highlight: "Plan climat, fin de l'exploration des hydrocarbures, démission en direct sur France Inter" },
      { name: "Ségolène Royal", period: "2014 - 2017", party: "PS", highlight: "Loi de transition énergétique pour la croissance verte, organisation de la COP21" },
      { name: "Delphine Batho", period: "2012 - 2013", party: "PS", highlight: "Débat national sur la transition énergétique" },
      { name: "Jean-Louis Borloo", period: "2007 - 2010", party: "Parti Radical", highlight: "Grenelle de l'Environnement (lois Grenelle 1 et 2), création du grand ministère de l'Écologie" }
    ]
  },
  {
    id: "travail",
    name: "Ministère du Travail et de l'Emploi",
    shortName: "Travail & Emploi",
    category: "social_sante",
    categoryLabel: "Social & Santé",
    color: "#0d9488",
    icon: "Briefcase",
    building: "Hôtel du Châtelet",
    address: "127 Rue de Grenelle, 75007 Paris",
    budgetBillions: "21.4 Mds €",
    staffCount: "12 000 agents + France Travail",
    currentMinister: {
      name: "Astrid Panosyan-Bouvet",
      title: "Ministre du Travail et de l'Emploi",
      age: 53,
      sinceDate: "Septembre 2024",
      party: "Renaissance",
      biography: "Diplômée d'HEC, Sciences Po et Harvard Kennedy School. Ancienne dirigeante d'entreprise (Unibail-Rodamco), cofondatrice d'En Marche en 2016 et députée de Paris.",
      missions: [
        "Objectif du plein emploi et insertion professionnelle (France Travail)",
        "Relations professionnelles, dialogue social et conventions collectives",
        "Apprentissage, alternance et formation professionnelle continue",
        "Santé, sécurité au travail et inspection du travail",
        "Assurance chômage et accompagnement des demandeurs d'emploi"
      ]
    },
    predecessors: [
      { name: "Catherine Vautrin", period: "Janvier 2024 - Septembre 2024", party: "Divers droite", highlight: "Réforme de l'assurance chômage, gouvernance France Travail" },
      { name: "Olivier Dussopt", period: "2022 - 2024", party: "Territoires de Progrès (Renaissance)", highlight: "Portage de la réforme des retraites (recul à 64 ans), création de France Travail" },
      { name: "Élisabeth Borne", period: "2020 - 2022", party: "LREM", highlight: "Plan '1 jeune, 1 solution', explosion de l'apprentissage (800 000 contrats)" },
      { name: "Muriel Pénicaud", period: "2017 - 2020", party: "LREM", highlight: "Ordonnances Travail de 2017 (barème Prud'hommes, fusion des IRP en CSE), loi Avenir professionnel" },
      { name: "Myriam El Khomri", period: "2015 - 2017", party: "PS", highlight: "Loi Travail (Loi El Khomri de 2016), Compte Personnel d'Activité (CPA)" },
      { name: "François Rebsamen", period: "2014 - 2015", party: "PS", highlight: "Loi sur le dialogue social" },
      { name: "Michel Sapin", period: "2012 - 2014", party: "PS", highlight: "Contrats de génération, emplois d'avenir" },
      { name: "Xavier Bertrand", period: "2010 - 2012 & 2007 - 2009", party: "UMP", highlight: "Service minimum dans les transports, représentativité syndicale" }
    ]
  },
  {
    id: "culture",
    name: "Ministère de la Culture",
    shortName: "Culture",
    category: "culture_societe",
    categoryLabel: "Culture & Société",
    color: "#e11d48",
    icon: "Palette",
    building: "Palais-Royal (Aile Montpensier)",
    address: "3 Rue de Valois, 75001 Paris",
    budgetBillions: "4.4 Mds €",
    staffCount: "10 000 agents + musées & théâtres nationaux",
    currentMinister: {
      name: "Rachida Dati",
      title: "Ministre de la Culture",
      age: 60,
      sinceDate: "Janvier 2024 (Reconduite)",
      party: "Divers droite",
      biography: "Magistrate de formation, ancienne Garde des Sceaux sous Nicolas Sarkozy (2007-2009), ancienne députée européenne et maire du 7e arrondissement de Paris. Nommée à la Culture en 2024.",
      missions: [
        "Préservation et mise en valeur du patrimoine historique et architectural (châteaux, cathédrales)",
        "Soutien à la création artistique contemporaine (théâtre, musique, danse, arts plastiques)",
        "Audiovisuel public et régulation des médias culturels",
        "Pass Culture pour les jeunes de 15 à 18 ans et démocratisation culturelle",
        "Industries culturelles : cinéma (CNC), livre (prix unique), musique et jeux vidéo"
      ]
    },
    predecessors: [
      { name: "Rima Abdul Malak", period: "2022 - 2024", party: "Indépendante", highlight: "Chantier de restauration de Notre-Dame de Paris, loi sur la restitution des biens culturels spoliés" },
      { name: "Roselyne Bachelot", period: "2020 - 2022", party: "Divers droite", highlight: "Plan de soutien massif au spectacle vivant pendant le Covid ('année blanche' des intermittents)" },
      { name: "Franck Riester", period: "2018 - 2020", party: "Agir", highlight: "Lancement de la plateforme Pass Culture, directive européenne sur le droit d'auteur" },
      { name: "Françoise Nyssen", period: "2017 - 2018", party: "Indépendante (Actes Sud)", highlight: "Plan pour les bibliothèques, éducation artistique et culturelle" },
      { name: "Audrey Azoulay", period: "2016 - 2017", party: "PS", highlight: "Loi relative à la liberté de la création, devenue Directrice générale de l'UNESCO" },
      { name: "Fleur Pellerin", period: "2014 - 2016", party: "PS", highlight: "Création du label French Tech et soutien aux industries créatives" },
      { name: "Aurélie Filippetti", period: "2012 - 2014", party: "PS", highlight: "Abrogation de la TVA à 7% sur le livre, sanctuarisation du budget de la culture" },
      { name: "Frédéric Mitterrand", period: "2009 - 2012", party: "Indépendant", highlight: "Loi HADOPI sur le droit d'auteur sur Internet" },
      { name: "Christine Albanel", period: "2007 - 2009", party: "UMP", highlight: "Entrée gratuite dans les musées pour les moins de 26 ans" },
      { name: "Jack Lang", period: "1981 - 1986 & 1988 - 1993", party: "PS", highlight: "Création de la Fête de la Musique, Journées du Patrimoine, loi sur le prix unique du livre (Loi Lang)" },
      { name: "André Malraux", period: "1959 - 1969", party: "Gaulliste", highlight: "Premier ministre de la Culture sous De Gaulle, création des Maisons de la Culture et inventaire du patrimoine" }
    ]
  },
  {
    id: "agriculture",
    name: "Ministère de l'Agriculture, de la Souveraineté alimentaire et de la Forêt",
    shortName: "Agriculture & Forêt",
    category: "ecologie_territoires",
    categoryLabel: "Écologie & Territoires",
    color: "#65a30d",
    icon: "Wheat",
    building: "Hôtel de Villeroy",
    address: "78 Rue de Varenne, 75007 Paris",
    budgetBillions: "5.8 Mds € (+ PAC européenne ~9 Mds €)",
    staffCount: "30 000 agents",
    currentMinister: {
      name: "Annie Genevard",
      title: "Ministre de l'Agriculture, de la Souveraineté alimentaire et de la Forêt",
      age: 69,
      sinceDate: "Septembre 2024",
      party: "Les Républicains",
      biography: "Professeure de lettres classiques, députée du Doubs depuis 2012, ancienne vice-présidente de l'Assemblée nationale et figure majeure du monde rural.",
      missions: [
        "Souveraineté alimentaire nationale et compétitivité agricole",
        "Négociation et versement des aides de la Politique Agricole Commune (PAC)",
        "Santé animale, végétale et sécurité sanitaire des aliments",
        "Transition agroécologique, gestion de la ressource en eau et renouvellement des générations",
        "Gestion durable de la filière forêt-bois"
      ]
    },
    predecessors: [
      { name: "Marc Fesneau", period: "2022 - 2024", party: "MoDem", highlight: "Gestion de la crise agricole de l'hiver 2024, loi d'orientation agricole" },
      { name: "Julien Denormandie", period: "2020 - 2022", party: "LREM", highlight: "Plan protéines végétales, loi Egalim 2 pour la rémunération des éleveurs" },
      { name: "Didier Guillaume", period: "2018 - 2020", party: "Divers gauche", highlight: "Loi Egalim 1 issue des États généraux de l'alimentation" },
      { name: "Stéphane Travert", period: "2017 - 2018", party: "LREM / ex-PS", highlight: "Organisation des États généraux de l'alimentation" },
      { name: "Stéphane Le Foll", period: "2012 - 2017", party: "PS", highlight: "Loi d'avenir pour l'agriculture, promotion de l'agroécologie (4 pour 1000)" },
      { name: "Bruno Le Maire", period: "2009 - 2012", party: "UMP", highlight: "Loi de modernisation de l'agriculture, contractualisation" },
      { name: "Michel Barnier", period: "2007 - 2009", party: "UMP", highlight: "Bilan de santé de la PAC, plan de relance de l'agriculture" }
    ]
  },
  {
    id: "enseignement_superieur",
    name: "Ministère de l'Enseignement Supérieur et de la Recherche",
    shortName: "Recherche & Enseignement Sup.",
    category: "education_recherche",
    categoryLabel: "Éducation & Recherche",
    color: "#0891b2",
    icon: "Atom",
    building: "Hôtel de Boncourt",
    address: "21 Rue Descartes, 75005 Paris",
    budgetBillions: "26.1 Mds €",
    staffCount: "200 000 enseignants-chercheurs & agents",
    currentMinister: {
      name: "Patrick Hetzel",
      title: "Ministre de l'Enseignement Supérieur et de la Recherche",
      age: 62,
      sinceDate: "Septembre 2024",
      party: "Les Républicains",
      biography: "Professeur des universités en sciences de gestion, ancien directeur général de l'enseignement supérieur (DGESIP) et député du Bas-Rhin depuis 2012.",
      missions: [
        "Gouvernance et financement des universités et grandes écoles",
        "Recherche scientifique fondamentale et appliquée (CNRS, INSERM, CEA, INRIA)",
        "Vie étudiante, bourses universitaires (CROUS) et logement étudiant",
        "Plateforme Parcoursup et orientation post-bac",
        "Souveraineté scientifique et transferts technologiques"
      ]
    },
    predecessors: [
      { name: "Sylvie Retailleau", period: "2022 - 2024", party: "Universitaire / Indépendante", highlight: "Présidente de l'Université Paris-Saclay, revalorisation des bourses étudiantes" },
      { name: "Frédérique Vidal", period: "2017 - 2022", party: "Universitaire / LREM", highlight: "Loi de programmation de la recherche (LPR 2021-2030), création de Parcoursup (loi ORE)" },
      { name: "Thierry Mandon", period: "2015 - 2017", party: "PS", highlight: "Simplification universitaire, portail de candidature en Master" },
      { name: "Geneviève Fioraso", period: "2012 - 2015", party: "PS", highlight: "Loi ESR de 2013 réformant l'enseignement supérieur et regroupements d'universités" },
      { name: "Laurent Wauquiez", period: "2011 - 2012", party: "UMP", highlight: "Chantiers du Grand Emprunt et campus d'excellence" },
      { name: "Valérie Pécresse", period: "2007 - 2011", party: "UMP", highlight: "Loi LRU sur l'autonomie des universités, Opération Campus (5 milliards d'euros)" }
    ]
  },
  {
    id: "sports",
    name: "Ministère des Sports, de la Jeunesse et de la Vie Associative",
    shortName: "Sports & Jeunesse",
    category: "culture_societe",
    categoryLabel: "Culture & Société",
    color: "#f59e0b",
    icon: "Trophy",
    building: "Immeuble Le Galliéni",
    address: "95 Avenue de France, 75013 Paris",
    budgetBillions: "1.2 Md €",
    staffCount: "5 000 agents + fédérations sportives",
    currentMinister: {
      name: "Gil Avérous",
      title: "Ministre des Sports, de la Jeunesse et de la Vie Associative",
      age: 53,
      sinceDate: "Septembre 2024",
      party: "Divers droite",
      biography: "Maire de Châteauroux depuis 2014, président de l'association Villes de France, acteur majeur de l'accueil des épreuves de tir des Jeux Olympiques de Paris 2024.",
      missions: [
        "Héritage des Jeux Olympiques et Paralympiques de Paris 2024",
        "Développement du sport pour tous, sport-santé et sport à l'école",
        "Soutien au sport de haut niveau et préparation des grands rendez-vous internationaux",
        "Accompagnement de la vie associative et du bénévolat",
        "Service Civique et engagement de la jeunesse"
      ]
    },
    predecessors: [
      { name: "Amélie Oudéa-Castéra", period: "2022 - 2024", party: "Renaissance", highlight: "Organisation et succès historique des Jeux Olympiques et Paralympiques de Paris 2024" },
      { name: "Roxana Maracineanu", period: "2018 - 2022", party: "Indépendante (championne du monde de natation)", highlight: "Loi sur la démocratisation du sport, lutte contre les violences sexuelles dans le sport" },
      { name: "Laura Flessel", period: "2017 - 2018", party: "Indépendante (championne olympique d'escrime)", highlight: "Attribution officielle des JO 2024 à Paris" },
      { name: "Patrick Kanner", period: "2014 - 2017", party: "PS", highlight: "Organisation de l'Euro 2016 de football en France" },
      { name: "Valérie Fourneyron", period: "2012 - 2014", party: "PS", highlight: "Réforme du statut des sportifs de haut niveau" },
      { name: "David Douillet", period: "2011 - 2012", party: "UMP", highlight: "Double champion olympique de judo" },
      { name: "Chantal Jouanno", period: "2010 - 2011", party: "UMP", highlight: "Promotion du sport féminin et de l'éthique sportive" }
    ]
  }
];
