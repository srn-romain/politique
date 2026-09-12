/**
 * PolitiScope — Application Complète Vanilla HTML / JS / CSS
 * Fonctionne à 100% sans aucun serveur, sans npm, directement en double-cliquant
 * sur index.html ou dans l'aperçu WebStorm (localhost:63342).
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. DONNÉES INSTITUTIONNELLES & ÉLECTORALES
     ========================================================================== */

  const electionsData = {
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

  const institutionsData = [
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

  const memosData = [
    {
      id: "separation_pouvoirs",
      category: "Fondamentaux",
      title: "La Séparation des Pouvoirs",
      icon: "Shield",
      subtitle: "Exécutif, Législatif, Judiciaire : qui fait quoi ?",
      summary: "Théorisée par Montesquieu, la séparation des pouvoirs empêche qu'une seule personne ou institution détienne tout le pouvoir.",
      content: [
        {
          heading: "1. Le Pouvoir Exécutif (Applique les lois)",
          text: "Composé du **Président de la République** (Chef de l'État) et du **Gouvernement** (Premier Ministre et ministres). Il conduit la politique de la nation, dirige l'administration, la police et les armées, et fait exécuter les lois."
        },
        {
          heading: "2. Le Pouvoir Législatif (Vote les lois & contrôle)",
          text: "Composé du **Parlement** (Assemblée Nationale et Sénat). Il débat, propose, amende et vote les textes de loi et le budget de l'État. Il contrôle quotidiennement l'action des ministres."
        },
        {
          heading: "3. L'Autorité Judiciaire (Fait respecter les lois)",
          text: "Composée des juges et magistrats indépendants. Elle tranche les litiges entre citoyens, punit les infractions et veille à ce que chacun respecte les règles."
        }
      ],
      funFact: "Le terme 'bâtiment régalien' vient du mot latin 'rex' (roi). Les ministères régaliens (Armées, Intérieur, Justice, Affaires Étrangères, Finances) gèrent les fonctions indispensables sans lesquelles un État ne peut exister.",
      quiz: {
        question: "Qui a le pouvoir de voter les lois en France ?",
        options: [
          "Le Président de la République",
          "Le Parlement (Assemblée Nationale & Sénat)",
          "Le Conseil d'État",
          "Les Préfets"
        ],
        correctIndex: 1,
        explanation: "Seul le Parlement (les députés et sénateurs) détient le pouvoir législatif de voter les lois de la République."
      }
    },
    {
      id: "projet_vs_proposition",
      category: "Lois & Procédures",
      title: "Projet de loi vs Proposition de loi",
      icon: "FileQuestion",
      subtitle: "Ne confondez plus jamais ces deux termes !",
      summary: "Bien que les deux textes finissent par devenir des 'Lois', leur origine et leur parcours préalable sont très différents.",
      content: [
        {
          heading: "Le Projet de Loi (Gouvernement)",
          text: "Il émane du **Premier ministre et des ministres**. Avant d'être déposé au Parlement, il doit obligatoirement être soumis pour avis au **Conseil d'État** et adopté en **Conseil des Ministres**. Il représente la très grande majorité des lois promulguées."
        },
        {
          heading: "La Proposition de Loi (Parlementaires)",
          text: "Elle émane d'un ou plusieurs **députés** ou **sénateurs**. Elle n'a pas besoin de passer par le Conseil des ministres ni par le Conseil d'État, mais est soumise à l'article 40 (elle ne peut pas créer une dépense publique sans ressource compensatoire)."
        }
      ],
      funFact: "Environ 80 à 90% des lois votées chaque année en France sont des 'Projets' de loi issus du gouvernement.",
      quiz: {
        question: "D'où provient obligatoirement un 'Projet de loi' ?",
        options: [
          "D'un groupe de citoyens par pétition",
          "Du Gouvernement (Premier ministre ou ministres)",
          "D'un juge de la Cour de Cassation",
          "Exclusivement du Sénat"
        ],
        correctIndex: 1,
        explanation: "Un 'Projet de loi' provient toujours du Gouvernement, tandis qu'une 'Proposition de loi' provient des parlementaires (députés ou sénateurs)."
      }
    },
    {
      id: "pourquoi_deux_chambres",
      category: "Parlement",
      title: "Pourquoi l'Assemblée et le Sénat ?",
      icon: "Columns2",
      subtitle: "Le bicamérisme français expliqué simplement",
      summary: "La France a deux assemblées (Parlement bicaméral) pour garantir l'équilibre et la réflexion approfondie des lois.",
      content: [
        {
          heading: "L'Assemblée Nationale (Le Peuple)",
          text: "577 députés élus directement par tous les citoyens tous les 5 ans. Elle représente la nation dans sa diversité démographique. Elle a le pouvoir de renverser le gouvernement et a le DERNIER MOT en cas de désaccord législatif."
        },
        {
          heading: "Le Sénat (Les Territoires)",
          text: "348 sénateurs élus au suffrage indirect par les maires et élus locaux. Il assure la voix des communes, départements et régions. Il est indissoluble, garantissant la stabilité de l'État en toute circonstance."
        }
      ],
      funFact: "Le président du Sénat devient automatiquement Président de la République par intérim si le chef de l'État démissionne ou décède (comme Alain Poher en 1969 et 1974).",
      quiz: {
        question: "Quelle chambre a le dernier mot si les députés et les sénateurs ne s'entendent pas ?",
        options: [
          "Le Sénat",
          "L'Assemblée Nationale",
          "Le Conseil Constitutionnel",
          "La Cour des Comptes"
        ],
        correctIndex: 1,
        explanation: "L'Assemblée Nationale a constitutionnellement le dernier mot car ses députés sont directement élus par l'ensemble des citoyens français."
      }
    },
    {
      id: "hierarchie_normes",
      category: "Droit & Règles",
      title: "La Pyramide des Lois (Hiérarchie des Normes)",
      icon: "Layers",
      subtitle: "Pourquoi une décision du maire ne peut pas contredire la Constitution",
      summary: "Théorisée par le juriste Hans Kelsen, la hiérarchie des normes garantit qu'une règle inférieure respecte toujours les règles supérieures.",
      content: [
        {
          heading: "1. Le Bloc de Constitutionnalité (Le Sommet)",
          text: "La Constitution de 1958, la Déclaration des Droits de l'Homme de 1789, le Préambule de 1946 et la Charte de l'Environnement. Aucune règle en France ne peut y déroger."
        },
        {
          heading: "2. Les Traités Internationaux & Droit Européen",
          text: "Accords internationaux ratifiés (ONU, UE, CEDH). Ils priment sur les lois nationales françaises ordinaires."
        },
        {
          heading: "3. La Loi (Votée par le Parlement)",
          text: "Texte voté par les députés et sénateurs, promulgué par le Président."
        },
        {
          heading: "4. Les Règlements (Décrets & Arrêtés)",
          text: "Décrets du Premier ministre ou Président, puis Arrêtés des ministres, préfets et maires."
        }
      ],
      funFact: "Un simple arrêté municipal d'un maire interdisant les feux d'artifice doit respecter tous les échelons supérieurs : décrets, lois et droits fondamentaux de la Constitution !",
      quiz: {
        question: "Quel texte se trouve au sommet absolu de la hiérarchie juridique en France ?",
        options: [
          "Le Code pénal",
          "Un décret ministériel",
          "La Constitution de la République",
          "Une directive municipale"
        ],
        correctIndex: 2,
        explanation: "La Constitution est la norme suprême du droit français. Toutes les autres règles doivent s'y conformer."
      }
    },
    {
      id: "qu_est_ce_que_la_qpc",
      category: "Justice & Citoyen",
      title: "La QPC : L'arme constitutionnelle du citoyen",
      icon: "HelpCircle",
      subtitle: "Comment n'importe quel citoyen peut contester une loi devant les Sages",
      summary: "Introduite en 2008, la Question Prioritaire de Constitutionnalité permet à un justiciable de faire supprimer une loi contraire aux libertés.",
      content: [
        {
          heading: "Le Principe",
          text: "Lors d'un procès (civil, pénal ou administratif), si vous estimez que la loi qu'on vous applique porte atteinte aux droits et libertés garantis par la Constitution, votre avocat peut poser une QPC."
        },
        {
          heading: "Le Filtre",
          text: "Le juge transmet la question à la Cour de Cassation ou au Conseil d'État, qui vérifie que la question est nouvelle et sérieuse, puis la transmet au **Conseil Constitutionnel**."
        },
        {
          heading: "Le Pouvoir d'Abrogation",
          text: "Si les Sages du Conseil Constitutionnel vous donnent raison, la loi est **immédiatement abrogée et effacée de l'ordre juridique français pour tout le monde** !"
        }
      ],
      funFact: "Depuis sa création, la QPC a permis de faire déclarer inconstitutionnelles des centaines de lois anciennes ou mal formulées.",
      quiz: {
        question: "Que se passe-t-il si le Conseil Constitutionnel déclare une loi contraire à la Constitution suite à une QPC ?",
        options: [
          "Le citoyen reçoit une simple lettre d'excuse",
          "La loi est abrogée et disparaît du droit français",
          "Le gouvernement doit démissionner",
          "Rien ne change pour les autres procès"
        ],
        correctIndex: 1,
        explanation: "La décision d'inconstitutionnalité abroge la loi : celle-ci disparaît de l'ordre juridique français et ne s'applique plus à personne."
      }
    }
  ];

  const pathwaysData = [
    {
      id: "loi_projet",
      title: "Comment naît une Loi ? (Projet du Gouvernement)",
      badge: "Processus Législatif Principal",
      icon: "FileText",
      summary: "Suivez le parcours complet d'un texte né au sein du gouvernement jusqu'à sa promulgation et son application pour tous les citoyens.",
      color: "#2563eb",
      steps: [
        {
          stepNumber: 1,
          title: "1. Rédaction par le Ministère & Matignon",
          highlightNodes: ["matignon", "interieur", "justice", "economie", "ecologie", "education"],
          institutionName: "Ministère porteur & Hôtel de Matignon",
          description: "Le ministre concerné par le sujet (ex: Intérieur pour la sécurité, Bercy pour le budget) rédige l'avant-projet de loi en lien étroit avec les services du Premier ministre.",
          keyConcept: "Projet de loi = initiative du Gouvernement (représente plus de 85% des lois adoptées).",
          legalRef: "Article 39 de la Constitution"
        },
        {
          stepNumber: 2,
          title: "2. Avis juridique obligatoire du Conseil d'État",
          highlightNodes: ["conseil_etat"],
          institutionName: "Conseil d'État (Palais-Royal)",
          description: "Avant toute présentation, le texte est examiné par les juristes du Conseil d'État. Ils vérifient sa conformité constitutionnelle, sa qualité rédactionnelle et son articulation avec le droit européen.",
          keyConcept: "L'avis du Conseil d'État est consultatif mais très respecté par le Gouvernement pour éviter une future censure.",
          legalRef: "Article 39, alinéa 2"
        },
        {
          stepNumber: 3,
          title: "3. Adoption en Conseil des Ministres",
          highlightNodes: ["presidence", "matignon"],
          institutionName: "Palais de l'Élysée",
          description: "Le mercredi matin, réuni sous la présidence du Chef de l'État, le Conseil des Ministres adopte officiellement le projet de loi. Le texte devient alors un 'Projet de loi de la République'.",
          keyConcept: "Tous les ministres doivent faire preuve de solidarité gouvernementale.",
          legalRef: "Article 39 de la Constitution"
        },
        {
          stepNumber: 4,
          title: "4. Dépôt & Première lecture à l'Assemblée Nationale",
          highlightNodes: ["assemblee_nationale"],
          institutionName: "Assemblée Nationale (Palais Bourbon)",
          description: "Le projet est déposé sur le bureau de l'Assemblée. Il est d'abord étudié, amendé et voté en commission parlementaire (ex: Commission des Lois), puis débattu publiquement dans l'Hémicycle article par article.",
          keyConcept: "Les députés déposent des amendements pour modifier, ajouter ou supprimer des articles.",
          legalRef: "Article 42 & 43"
        },
        {
          stepNumber: 5,
          title: "5. La Navette Parlementaire vers le Sénat",
          highlightNodes: ["senat", "assemblee_nationale"],
          institutionName: "Sénat (Palais du Luxembourg)",
          description: "Le texte voté par les députés est transmis au Sénat. Les sénateurs l'examinent, l'amendent et le votent à leur tour. Le texte fait la 'navette' d'une chambre à l'autre tant qu'il n'y a pas d'accord sur un texte identique.",
          keyConcept: "Pour être adoptée sans étape supplémentaire, la loi doit être votée dans les mêmes termes par les deux chambres.",
          legalRef: "Article 45 de la Constitution"
        },
        {
          stepNumber: 6,
          title: "6. Commission Mixte Paritaire (CMP)",
          highlightNodes: ["assemblee_nationale", "senat"],
          institutionName: "Assemblée & Sénat réunis",
          description: "En cas de désaccord après deux lectures (ou une seule si urgence déclarée), le Premier ministre convoque 7 députés et 7 sénateurs pour rédiger un compromis sur les articles en désaccord.",
          keyConcept: "La CMP permet de surmonter les divergences politiques entre députés et sénateurs.",
          legalRef: "Article 45, alinéa 2"
        },
        {
          stepNumber: 7,
          title: "7. Le Dernier Mot de l'Assemblée Nationale",
          highlightNodes: ["assemblee_nationale"],
          institutionName: "Assemblée Nationale",
          description: "Si la CMP échoue, le Gouvernement peut demander à l'Assemblée Nationale de statuer définitivement. Les députés ont le 'dernier mot' démocratique face aux sénateurs.",
          keyConcept: "L'Assemblée l'emporte car ses membres sont élus au suffrage universel direct par tous les citoyens.",
          legalRef: "Article 45, alinéa 4"
        },
        {
          stepNumber: 8,
          title: "8. Contrôle par le Conseil Constitutionnel",
          highlightNodes: ["conseil_constitutionnel"],
          institutionName: "Conseil Constitutionnel (Les Sages)",
          description: "Avant d'être promulguée, la loi peut être contestée par 60 députés ou 60 sénateurs (ou le Président/PM/Président d'une chambre). Les Sages vérifient qu'aucun article ne viole la Constitution ou les libertés fondamentales.",
          keyConcept: "Les articles jugés non conformes sont censurés et supprimés du texte final.",
          legalRef: "Article 61 de la Constitution"
        },
        {
          stepNumber: 9,
          title: "9. Promulgation & Publication au Journal Officiel",
          highlightNodes: ["presidence", "matignon"],
          institutionName: "Président de la République & JORF",
          description: "Dans les 15 jours, le Président de la République signe le décret de promulgation, contresigné par le Premier ministre. La loi est publiée au Journal Officiel et entre immédiatement en vigueur sur tout le territoire !",
          keyConcept: "'Nul n'est censé ignorer la loi' dès sa parution officielle.",
          legalRef: "Article 10 de la Constitution"
        }
      ]
    },
    {
      id: "article_49_3",
      title: "Le 49.3 & La Motion de Censure",
      badge: "Mécanisme Clé de Crise",
      icon: "Zap",
      summary: "Comment le Gouvernement peut adopter une loi sans vote du Parlement, et comment les députés peuvent en retour le renverser.",
      color: "#e11d48",
      steps: [
        {
          stepNumber: 1,
          title: "1. Délibération préalable en Conseil des Ministres",
          highlightNodes: ["presidence", "matignon"],
          institutionName: "Palais de l'Élysée",
          description: "Le Premier ministre doit obligatoirement obtenir l'autorisation formelle du Conseil des Ministres pour pouvoir dégainer l'article 49 alinéa 3 sur un projet de loi.",
          keyConcept: "Autorisation collégiale sous la houlette du Président de la République.",
          legalRef: "Article 49, alinéa 3 de la Constitution"
        },
        {
          stepNumber: 2,
          title: "2. Engagement de la responsabilité à la tribune de l'Assemblée",
          highlightNodes: ["matignon", "assemblee_nationale"],
          institutionName: "Hémicycle du Palais Bourbon",
          description: "Le Premier ministre monte à la tribune et déclare engager la responsabilité de son gouvernement sur le texte. Les débats parlementaires sont immédiatement suspendus.",
          keyConcept: "Le texte est considéré comme adopté sauf si une motion de censure est votée dans les 48 heures.",
          legalRef: "Article 49.3"
        },
        {
          stepNumber: 3,
          title: "3. Dépôt éventuel d'une Motion de Censure",
          highlightNodes: ["assemblee_nationale"],
          institutionName: "Députés de l'Opposition",
          description: "L'opposition dispose de 24 heures pour déposer une motion de censure. Elle doit être signée par au moins un dixième des membres de l'Assemblée (au moins 58 députés).",
          keyConcept: "Une motion de censure est une tentative formelle de destituer le Premier ministre et son équipe.",
          legalRef: "Article 49, alinéa 2"
        },
        {
          stepNumber: 4,
          title: "4. Le Vote de Censure dans l'Hémicycle",
          highlightNodes: ["assemblee_nationale"],
          institutionName: "Assemblée Nationale (Vote solennel)",
          description: "Le vote a lieu 48h après le dépôt. Seuls les députés favorables à la censure votent. Pour l'emporter, la motion doit recueillir la MAJORITÉ ABSOLUE des membres de l'Assemblée (289 voix sur 577).",
          keyConcept: "Les députés absents ou abstentionnistes sont comptabilisés comme soutenant le Gouvernement.",
          legalRef: "Majorité absolue exigée"
        },
        {
          stepNumber: 5,
          title: "5. Dénouement : Démission ou Adoption directe",
          highlightNodes: ["presidence", "matignon", "assemblee_nationale"],
          institutionName: "Matignon / Élysée",
          description: "• Si la motion atteint 289 voix : Le Gouvernement est RENVERSÉ et le Premier ministre doit remettre sa démission au Président. Le texte de loi est rejeté.\n• Si la motion échoue : Le texte de loi est DÉFINITIVEMENT ADOPTÉ à l'Assemblée sans aucun vote sur les articles !",
          keyConcept: "Le 49.3 transforme le vote d'une loi en un vote d'existence pour le Gouvernement.",
          legalRef: "Article 50 de la Constitution"
        }
      ]
    },
    {
      id: "dissolution",
      title: "La Dissolution de l'Assemblée Nationale",
      badge: "Arme Institutionnelle Présidentielle",
      icon: "RotateCcw",
      summary: "Comment le Président de la République peut renvoyer les députés et convoquer des élections législatives anticipées.",
      color: "#7c3aed",
      steps: [
        {
          stepNumber: 1,
          title: "1. La Décision souveraine du Président",
          highlightNodes: ["presidence"],
          institutionName: "Palais de l'Élysée",
          description: "Le Président de la République décide seul, sans contreseing du Premier ministre, d'utiliser son pouvoir de dissolution prévu par l'article 12 pour résoudre une crise politique ou une absence de majorité.",
          keyConcept: "Pouvoir propre du Président (aucun ministre n'a à valider cette décision).",
          legalRef: "Article 12 de la Constitution"
        },
        {
          stepNumber: 2,
          title: "2. Consultations obligatoires pour avis",
          highlightNodes: ["presidence", "matignon", "assemblee_nationale", "senat"],
          institutionName: "Élysée / Matignon / AN / Sénat",
          description: "Le Président doit obligatoirement consulter le Premier ministre, la Présidente de l'Assemblée nationale et le Président du Sénat. Leurs avis sont formels mais non contraignants.",
          keyConcept: "Procédure consultative obligatoire pour acter l'état des institutions.",
          legalRef: "Article 12, alinéa 1"
        },
        {
          stepNumber: 3,
          title: "3. Décret de Dissolution & Fin du Mandat des Députés",
          highlightNodes: ["presidence", "assemblee_nationale"],
          institutionName: "Journal Officiel de la République",
          description: "Le décret présidentiel prononce la dissolution immédiate. Les 577 députés perdent leur mandat. Le Sénat, lui, continue de siéger normalement car il est indissoluble.",
          keyConcept: "Le Sénat assure la continuité du pouvoir législatif d'urgence.",
          legalRef: "Article 12"
        },
        {
          stepNumber: 4,
          title: "4. Organisation des Législatives sous 20 à 40 jours",
          highlightNodes: ["interieur"],
          institutionName: "Ministère de l'Intérieur & Préfectures",
          description: "Le Ministère de l'Intérieur organise le scrutin sur tout le territoire national et dans les circonscriptions des Français de l'étranger dans un délai strict de 20 à 40 jours.",
          keyConcept: "Campagne éclair et mobilisation des 48 millions d'électeurs.",
          legalRef: "Article 12, alinéa 2"
        },
        {
          stepNumber: 5,
          title: "5. Nouvelle Assemblée & Nouveau Gouvernement",
          highlightNodes: ["assemblee_nationale", "matignon", "presidence"],
          institutionName: "Palais Bourbon & Élysée",
          description: "La nouvelle Assemblée se réunit de plein droit le deuxième jeudi qui suit son élection. En fonction de la nouvelle majorité, le Président nomme un nouveau Premier ministre (parfois issu de l'opposition en cas de cohabitation).",
          keyConcept: "Le Président ne peut procéder à une nouvelle dissolution pendant l'année qui suit ces élections.",
          legalRef: "Article 12, alinéa 4"
        }
      ]
    },
    {
      id: "nomination_gouvernement",
      title: "La Formation du Gouvernement",
      badge: "Architecture Exécutive",
      icon: "Users",
      summary: "De la désignation du Premier Ministre au Palais de l'Élysée jusqu'à la composition de l'équipe gouvernementale.",
      color: "#059669",
      steps: [
        {
          stepNumber: 1,
          title: "1. Le Choix du Premier Ministre par le Président",
          highlightNodes: ["presidence", "matignon"],
          institutionName: "Palais de l'Élysée",
          description: "Le Président nomme le Premier ministre. En pratique, il choisit une personnalité capable de ne pas être immédiatement censurée par une majorité de députés à l'Assemblée.",
          keyConcept: "Acte sans contreseing du Président de la République.",
          legalRef: "Article 8, alinéa 1"
        },
        {
          stepNumber: 2,
          title: "2. Négociations et composition de l'équipe",
          highlightNodes: ["matignon"],
          institutionName: "Hôtel de Matignon",
          description: "Le nouveau Premier ministre consulte les forces politiques et élabore la liste des ministres de plein exercice, ministres délégués et secrétaires d'État selon les équilibres politiques et compétences.",
          keyConcept: "Vérification préalable de la situation fiscale et pénale par la Haute Autorité pour la transparence (HATVP).",
          legalRef: "Loi de moralisation de la vie publique"
        },
        {
          stepNumber: 3,
          title: "3. Décret de nomination présidentiel",
          highlightNodes: ["presidence", "matignon", "interieur", "justice", "economie", "affaires_etrangeres"],
          institutionName: "Palais de l'Élysée",
          description: "Sur la proposition du Premier ministre, le Président nomme officiellement l'ensemble des membres du Gouvernement. Le Secrétaire général de l'Élysée lit la liste sur le perron.",
          keyConcept: "La célèbre annonce du perron de l'Élysée retransmise en direct.",
          legalRef: "Article 8, alinéa 2"
        },
        {
          stepNumber: 4,
          title: "4. Discours de Politique Générale (DPG) à l'Assemblée",
          highlightNodes: ["matignon", "assemblee_nationale"],
          institutionName: "Assemblée Nationale",
          description: "Le Premier ministre présente sa feuille de route stratégique devant la représentation nationale. Il peut solliciter un vote de confiance des députés.",
          keyConcept: "Engagement de confiance envers le Parlement républicain.",
          legalRef: "Article 49, alinéa 1"
        }
      ]
    }
  ];

  const executiveData = {
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

  const ministriesData = [
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
        age: 33,
        sinceDate: "Septembre 2024",
        party: "Renaissance",
        biography: "Ancien élève de l'École normale supérieure (Ulm) et de l'ENA, inspecteur des finances, député de la Haute-Savoie (2022-2024) et président de la Commission des Affaires économiques.",
        missions: [
          "Élaboration du Budget de l'État (Loi de Finances) et politique fiscale",
          "Gestion de la dette publique et de la trésorerie de l'État (AFT)",
          "Politique industrielle, souveraineté économique et régulation de la concurrence",
          "Lutte contre la fraude fiscale et douanière",
          "Financement de la transition écologique et des entreprises"
        ]
      },
      predecessors: [
        { name: "Bruno Le Maire", period: "2017 - 2024", party: "Renaissance / ex-LR", highlight: "Record de longévité à Bercy (7 ans), plan 'Quoi qu'il en coûte', loi PACTE" },
        { name: "Michel Sapin", period: "2014 - 2017", party: "PS", highlight: "Loi Sapin II sur la transparence et lutte contre la corruption" },
        { name: "Emmanuel Macron", period: "2014 - 2016", party: "Indépendant (ex-PS)", highlight: "Loi pour la croissance, l'activité et l'égalité des chances économiques (Loi Macron)" },
        { name: "Arnaud Montebourg", period: "2012 - 2014", party: "PS", highlight: "Défense du 'Made in France' et redressement productif" },
        { name: "Pierre Moscovici", period: "2012 - 2014", party: "PS", highlight: "Pacte de compétitivité, création de la BPI" },
        { name: "François Baroin", period: "2011 - 2012", party: "UMP", highlight: "Gestion de la crise de la zone euro et du triple A" },
        { name: "Christine Lagarde", period: "2007 - 2011", party: "UMP", highlight: "Crise financière mondiale de 2008, première femme ministre des Finances du G8" },
        { name: "Nicolas Sarkozy", period: "Mars 2004 - Novembre 2004", party: "UMP", highlight: "Sauvetage d'Alstom et baisse de la TVA dans la restauration" }
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
      budgetBillions: "6.0 Mds €",
      staffCount: "14 000 diplomates & agents",
      currentMinister: {
        name: "Jean-Noël Barrot",
        title: "Ministre de l'Europe et des Affaires Étrangères",
        age: 41,
        sinceDate: "Septembre 2024",
        party: "MoDem",
        biography: "Économiste, diplômé d'HEC et de Sciences Po, professeur associé au MIT, député des Yvelines, ministre délégué chargé de la Transition numérique (2022-2024) puis de l'Europe (2024).",
        missions: [
          "Représentation diplomatique de la France dans le monde (3e réseau diplomatique mondial)",
          "Négociations et traités au sein de l'Union Européenne et de l'ONU",
          "Protection et assistance des 2 millions de Français établis hors de France",
          "Aide publique au développement et coopération culturelle internationale",
          "Attractivité économique et commerce extérieur"
        ]
      },
      predecessors: [
        { name: "Stéphane Séjourné", period: "Janvier 2024 - Septembre 2024", party: "Renaissance", highlight: "Soutien à l'Ukraine, diplomatie européenne" },
        { name: "Catherine Colonna", period: "2022 - 2024", party: "Diplomate", highlight: "Gestion de la guerre en Ukraine, diplomatie féministe" },
        { name: "Jean-Yves Le Drian", period: "2017 - 2022", party: "Divers gauche", highlight: "Gestion de crises internationales majeures (AUKUS, Sahel)" },
        { name: "Jean-Marc Ayrault", period: "2016 - 2017", party: "PS", highlight: "Accord de paix pour la Syrie et suivi de la COP21" },
        { name: "Laurent Fabius", period: "2012 - 2016", party: "PS", highlight: "Président de la COP21 (Accord de Paris 2015), accord sur le nucléaire iranien" },
        { name: "Alain Juppé", period: "2011 - 2012", party: "UMP", highlight: "Printemps arabe et intervention internationale en Libye" },
        { name: "Bernard Kouchner", period: "2007 - 2010", party: "Ouverture / ex-PS", highlight: "Droit d'ingérence humanitaire et présidence française de l'UE (2008)" },
        { name: "Dominique de Villepin", period: "2002 - 2004", party: "RPR / UMP", highlight: "Discours historique du 14 février 2003 à l'ONU refusant la guerre en Irak" }
      ]
    },
    {
      id: "education",
      name: "Ministère de l'Éducation Nationale",
      shortName: "Éducation Nationale",
      category: "education_recherche",
      categoryLabel: "Éducation & Recherche",
      color: "#ea580c",
      icon: "GraduationCap",
      building: "Hôtel de Rochechouart",
      address: "110 Rue de Grenelle, 75007 Paris",
      budgetBillions: "63.5 Mds € (1er budget de l'État)",
      staffCount: "1 200 000 personnels (1er employeur de France)",
      currentMinister: {
        name: "Anne Genetet",
        title: "Ministre de l'Éducation Nationale",
        age: 61,
        sinceDate: "Septembre 2024",
        party: "Renaissance",
        biography: "Médecin de formation, députée des Français établis en Asie et Océanie depuis 2017, spécialiste des questions de défense et de politique publique d'éducation.",
        missions: [
          "Organisation de l'enseignement scolaire pour 12 millions d'élèves",
          "Gestion et formation des enseignants et personnels pédagogiques",
          "Programmes scolaires, organisation des examens (Baccalauréat, Brevet)",
          "Égalité des chances, inclusion scolaire et lutte contre le harcèlement"
        ]
      },
      predecessors: [
        { name: "Nicole Belloubet", period: "Février 2024 - Septembre 2024", party: "Divers gauche", highlight: "Mise en œuvre du 'Choc des savoirs' et groupes de niveaux" },
        { name: "Amélie Oudéa-Castéra", period: "Janvier 2024 - Février 2024", party: "Renaissance", highlight: "Mandat éclair de 28 jours" },
        { name: "Gabriel Attal", period: "Juillet 2023 - Janvier 2024", party: "Renaissance", highlight: "Interdiction de l'abaya à l'école, plan anti-harcèlement scolaire" },
        { name: "Pap Ndiaye", period: "2022 - 2023", party: "Universitaire", highlight: "Mixité sociale à l'école, revalorisation du socle enseignant" },
        { name: "Jean-Michel Blanquer", period: "2017 - 2022", party: "LREM", highlight: "Réforme du baccalauréat, dédoublement des classes de CP/CE1, école obligatoire dès 3 ans" },
        { name: "Najat Vallaud-Belkacem", period: "2014 - 2017", party: "PS", highlight: "Réforme du collège, première femme ministre de l'Éducation nationale" },
        { name: "Vincent Peillon", period: "2012 - 2014", party: "PS", highlight: "Réforme des rythmes scolaires (semaine de 4 jours et demi)" },
        { name: "Luc Chatel", period: "2009 - 2012", party: "UMP", highlight: "Création de l'autonomie des établissements scolaires" },
        { name: "Xavier Darcos", period: "2007 - 2009", party: "UMP", highlight: "Mise en place du service minimum d'accueil en cas de grève" }
      ]
    },
    {
      id: "sante",
      name: "Ministère de la Santé et de l'Accès aux soins",
      shortName: "Santé",
      category: "social_sante",
      categoryLabel: "Social & Santé",
      color: "#e11d48",
      icon: "HeartPulse",
      building: "Ministère des Solidarités et de la Santé",
      address: "14 Avenue Duquesne, 75007 Paris",
      budgetBillions: "Budget Sécurité Sociale : ~600 Mds € (ONDAM : 255 Mds €)",
      staffCount: "Hôpitaux publics : ~1 000 000 soignants",
      currentMinister: {
        name: "Geneviève Darrieussecq",
        title: "Ministre de la Santé et de l'Accès aux soins",
        age: 68,
        sinceDate: "Septembre 2024",
        party: "MoDem",
        biography: "Médecin allergologue de profession, ancienne maire de Mont-de-Marsan, secrétaire d'État aux Armées puis ministre déléguée chargée des Personnes handicapées (2022-2023).",
        missions: [
          "Pilotage de la santé publique et prévention des épidémies",
          "Gestion des hôpitaux publics, cliniques et établissements de soins",
          "Lutte contre les déserts médicaux et régulation de l'accès aux soins",
          "Politique du médicament, régulation de la Sécurité Sociale et Assurance Maladie"
        ]
      },
      predecessors: [
        { name: "Frédéric Valletoux", period: "Février 2024 - Septembre 2024", party: "Horizons", highlight: "Loi sur l'engagement des soignants et accès aux soins" },
        { name: "Agnès Firmin-Le Bodo", period: "Décembre 2023 - Janvier 2024", party: "Horizons", highlight: "Intérim suite au vote de la loi immigration" },
        { name: "Aurélien Rousseau", period: "Juillet 2023 - Décembre 2023", party: "Divers gauche", highlight: "Démission suite à son désaccord sur la loi immigration" },
        { name: "François Braun", period: "2022 - 2023", party: "Médecin urgentiste", highlight: "Mission flash sur les urgences hospitalières de l'été 2022" },
        { name: "Olivier Véran", period: "2020 - 2022", party: "LREM", highlight: "Gestion de la pandémie mondiale de Covid-19, Ségur de la santé (+8,2 Mds €/an)" },
        { name: "Agnès Buzyn", period: "2017 - 2020", party: "LREM", highlight: "Obligation vaccinale à 11 vaccins pour les nourrissons, plan 'Ma Santé 2022'" },
        { name: "Marisol Touraine", period: "2012 - 2017", party: "PS", highlight: "Généralisation du tiers payant, paquet de cigarettes neutre" },
        { name: "Xavier Bertrand", period: "2005 - 2007 & 2010 - 2012", party: "UMP", highlight: "Interdiction de fumer dans les lieux publics (2007)" },
        { name: "Roselyne Bachelot", period: "2007 - 2010", party: "UMP", highlight: "Loi Hôpital, patients, santé et territoires (HPST), crise grippe H1N1" },
        { name: "Simone Veil", period: "1974 - 1979 & 1993 - 1995", party: "UDF", highlight: "Loi historique dépénalisant l'interruption volontaire de grossesse (IVG 1975)" }
      ]
    },
    {
      id: "ecologie",
      name: "Ministère de la Transition Écologique, de l'Énergie et du Climat",
      shortName: "Écologie & Énergie",
      category: "ecologie_territoires",
      categoryLabel: "Écologie & Territoires",
      color: "#16a34a",
      icon: "Leaf",
      building: "Hôtel de Roquelaure",
      address: "246 Boulevard Saint-Germain, 75007 Paris",
      budgetBillions: "22.3 Mds €",
      staffCount: "35 000 agents",
      currentMinister: {
        name: "Agnès Pannier-Runacher",
        title: "Ministre de la Transition Écologique, de l'Énergie, du Climat et de la Prévention des risques",
        age: 51,
        sinceDate: "Septembre 2024",
        party: "Renaissance",
        biography: "Diplômée d'HEC et de l'ENA, inspectrice des finances, ancienne directrice générale déléguée de la Compagnie des Alpes, ministre déléguée à l'Industrie puis ministre de la Transition énergétique (2022-2024).",
        missions: [
          "Planification écologique et décarbonation de l'économie",
          "Politique énergétique (relance du nucléaire, essor des énergies renouvelables)",
          "Préservation de la biodiversité, des forêts et des ressources en eau",
          "Gestion des risques naturels majeurs (inondations, canicules)",
          "Rénovation énergétique des logements et transports propres"
        ]
      },
      predecessors: [
        { name: "Christophe Béchu", period: "2022 - 2024", party: "Horizons", highlight: "Planification écologique 'France Nation Verte', plan eau" },
        { name: "Amélie de Montchalin", period: "Mai 2022 - Juillet 2022", party: "Renaissance", highlight: "Début du second quinquennat Macron" },
        { name: "Barbara Pompili", period: "2020 - 2022", party: "En Commun / ex-EELV", highlight: "Loi Climat et Résilience issue de la Convention citoyenne sur le climat" },
        { name: "Élisabeth Borne", period: "2019 - 2020", party: "LREM", highlight: "Loi d'orientation des mobilités (LOM)" },
        { name: "François de Rugy", period: "2018 - 2019", party: "LREM", highlight: "Loi énergie-climat, fermeture programmée des centrales à charbon" },
        { name: "Nicolas Hulot", period: "2017 - 2018", party: "Écologiste", highlight: "Interdiction de nouveaux forages d'hydrocarbures, démission en direct sur France Inter" },
        { name: "Ségolène Royal", period: "2014 - 2017", party: "PS", highlight: "Loi sur la transition énergétique pour la croissance verte, COP21" },
        { name: "Jean-Louis Borloo", period: "2007 - 2010", party: "Parti Radical", highlight: "Grenelle de l'Environnement (création du premier grand ministère de l'Écologie)" }
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
      budgetBillions: "21.1 Mds €",
      staffCount: "12 000 agents (+ France Travail)",
      currentMinister: {
        name: "Astrid Panosyan-Bouvet",
        title: "Ministre du Travail et de l'Emploi",
        age: 54,
        sinceDate: "Septembre 2024",
        party: "Renaissance",
        biography: "Diplômée d'HEC, de Sciences Po et de Harvard, ancienne cadre dirigeante d'Unibail-Rodamco, cofondatrice d'En Marche en 2016, députée de Paris (2022-2024).",
        missions: [
          "Politique de l'emploi, apprentissage et formation professionnelle",
          "Supervision de l'opérateur 'France Travail' (ex-Pôle Emploi)",
          "Application et réformes du Code du travail, dialogue social",
          "Santé et sécurité au travail, inspection du travail"
        ]
      },
      predecessors: [
        { name: "Catherine Vautrin", period: "Janvier 2024 - Septembre 2024", party: "Divers droite", highlight: "Création du grand ministère Travail, Santé et Solidarités" },
        { name: "Olivier Dussopt", period: "2022 - 2024", party: "Territoires de Progrès (ex-PS)", highlight: "Réforme des retraites 2023 (passage à 64 ans), création de France Travail" },
        { name: "Élisabeth Borne", period: "2020 - 2022", party: "LREM", highlight: "Plan '1 jeune, 1 solution', gestion de l'activité partielle Covid" },
        { name: "Muriel Pénicaud", period: "2017 - 2020", party: "LREM", highlight: "Ordonnances Travail de 2017, réforme de l'apprentissage et du CPF" },
        { name: "Myriam El Khomri", period: "2015 - 2017", party: "PS", highlight: "Loi Travail de 2016 (Loi El Khomri)" },
        { name: "François Rebsamen", period: "2014 - 2015", party: "PS", highlight: "Création de la prime d'activité" },
        { name: "Michel Sapin", period: "2012 - 2014", party: "PS", highlight: "Emplois d'avenir et contrats de génération" },
        { name: "Éric Woerth", period: "Mars 2010 - Novembre 2010", party: "UMP", highlight: "Réforme des retraites de 2010 (passage de 60 à 62 ans)" }
      ]
    },
    {
      id: "culture",
      name: "Ministère de la Culture",
      shortName: "Culture",
      category: "culture_societe",
      categoryLabel: "Culture & Société",
      color: "#9333ea",
      icon: "Palette",
      building: "Palais-Royal",
      address: "3 Rue de Valois, 75001 Paris",
      budgetBillions: "4.4 Mds € (+ audiovisuel public)",
      staffCount: "10 000 agents",
      currentMinister: {
        name: "Rachida Dati",
        title: "Ministre de la Culture",
        age: 60,
        sinceDate: "Janvier 2024 (Reconduite)",
        party: "Divers droite / ex-LR",
        biography: "Magistrate, ancienne Garde des Sceaux sous Nicolas Sarkozy (2007-2009), députée européenne (2009-2019) et maire du 7e arrondissement de Paris depuis 2008.",
        missions: [
          "Préservation et restauration du patrimoine historique (Monuments nationaux)",
          "Soutien à la création artistique contemporaine (cinéma, théâtre, musique)",
          "Supervision de l'audiovisuel public (France Télévisions, Radio France)",
          "Démocratisation culturelle (Pass Culture pour les jeunes) et accès aux arts"
        ]
      },
      predecessors: [
        { name: "Rima Abdul Malak", period: "2022 - 2024", party: "Indépendante", highlight: "Chantier de reconstruction de Notre-Dame de Paris, Pass Culture" },
        { name: "Roselyne Bachelot", period: "2020 - 2022", party: "Divers droite", highlight: "Plan de soutien historique au monde du spectacle pendant le Covid" },
        { name: "Franck Riester", period: "2018 - 2020", party: "Agir", highlight: "Loi relative à la communication audiovisuelle, incendie de Notre-Dame" },
        { name: "Françoise Nyssen", period: "2017 - 2018", party: "Éditrice (Actes Sud)", highlight: "Lancement du Pass Culture et plan pour les bibliothèques" },
        { name: "Audrey Azoulay", period: "2016 - 2017", party: "Haut fonctionnaire", highlight: "Loi relative à la liberté de la création, actuelle directrice générale de l'UNESCO" },
        { name: "Fleur Pellerin", period: "2014 - 2016", party: "PS", highlight: "Loi création et patrimoine, soutien à la presse" },
        { name: "Aurélie Filippetti", period: "2012 - 2014", party: "PS", highlight: "Abrogation de la nomination des présidents de l'audiovisuel par l'Élysée" },
        { name: "Frédéric Mitterrand", period: "2009 - 2012", party: "Ouverture", highlight: "Loi Hadopi de protection des droits d'auteur sur internet" },
        { name: "Jack Lang", period: "1981 - 1986 & 1988 - 1993", party: "PS", highlight: "Fête de la Musique (1982), Prix unique du livre (Loi Lang), Grands Travaux (Pyramide du Louvre)" },
        { name: "André Malraux", period: "1959 - 1969", party: "Gaulliste", highlight: "Premier ministre des Affaires culturelles sous De Gaulle, création des Maisons de la Culture" }
      ]
    },
    {
      id: "agriculture",
      name: "Ministère de l'Agriculture et de la Souveraineté Alimentaire",
      shortName: "Agriculture",
      category: "ecologie_territoires",
      categoryLabel: "Écologie & Territoires",
      color: "#65a30d",
      icon: "Wheat",
      building: "Hôtel de Villeroy",
      address: "78 Rue de Varenne, 75007 Paris",
      budgetBillions: "5.8 Mds € (+ aides européennes PAC : ~9 Mds €/an)",
      staffCount: "30 000 agents",
      currentMinister: {
        name: "Annie Genevard",
        title: "Ministre de l'Agriculture, de la Souveraineté alimentaire et de la Forêt",
        age: 69,
        sinceDate: "Septembre 2024",
        party: "Les Républicains",
        biography: "Professeure certifiée de lettres classiques, députée du Doubs depuis 2012, ancienne vice-présidente de l'Assemblée nationale et figure reconnue des territoires ruraux.",
        missions: [
          "Soutien aux exploitations agricoles, élevages et filières viticoles",
          "Gestion des aides de la Politique Agricole Commune (PAC) européenne",
          "Sécurité sanitaire des aliments et protection phytosanitaire",
          "Préservation et exploitation durable des forêts françaises",
          "Gestion de l'enseignement agricole public et privé"
        ]
      },
      predecessors: [
        { name: "Marc Fesneau", period: "2022 - 2024", party: "MoDem", highlight: "Gestion de la crise agricole de l'hiver 2024, loi d'orientation agricole" },
        { name: "Julien Denormandie", period: "2020 - 2022", party: "LREM", highlight: "Plan de relance agricole, souveraineté protéique" },
        { name: "Didier Guillaume", period: "2018 - 2020", party: "Divers gauche", highlight: "Loi Égalim sur la juste rémunération des agriculteurs" },
        { name: "Stéphane Travert", period: "2017 - 2018", party: "LREM", highlight: "États généraux de l'alimentation" },
        { name: "Stéphane Le Foll", period: "2012 - 2017", party: "PS", highlight: "Loi d'avenir pour l'agriculture, promotion de l'agroécologie" },
        { name: "Bruno Le Maire", period: "2009 - 2012", party: "UMP", highlight: "Loi de modernisation de l'agriculture" },
        { name: "Michel Barnier", period: "2007 - 2009", party: "UMP", highlight: "Négociations du bilan de santé de la PAC européenne" }
      ]
    },
    {
      id: "enseignement_superieur",
      name: "Ministère de l'Enseignement Supérieur et de la Recherche",
      shortName: "Recherche & Universités",
      category: "education_recherche",
      categoryLabel: "Éducation & Recherche",
      color: "#0891b2",
      icon: "Atom",
      building: "Pavillon Boncourt",
      address: "21 Rue Descartes, 75005 Paris",
      budgetBillions: "26.3 Mds €",
      staffCount: "170 000 enseignants-chercheurs & agents",
      currentMinister: {
        name: "Patrick Hetzel",
        title: "Ministre de l'Enseignement Supérieur et de la Recherche",
        age: 61,
        sinceDate: "Septembre 2024",
        party: "Les Républicains",
        biography: "Professeur des universités en sciences de gestion, ancien recteur d'académie, ancien directeur général de l'enseignement supérieur (DGESIP) et député du Bas-Rhin depuis 2012.",
        missions: [
          "Gestion des 74 universités publiques et grandes écoles",
          "Orientation des bacheliers (Parcoursup) et vie étudiante (bourses CROUS, logements)",
          "Supervision des grands organismes de recherche (CNRS, INSERM, CEA, INRIA)",
          "Financement de la recherche spatiale, médicale et technologique"
        ]
      },
      predecessors: [
        { name: "Sylvie Retailleau", period: "2022 - 2024", party: "Universitaire", highlight: "Réforme des bourses étudiantes, déploiement de France 2030" },
        { name: "Frédérique Vidal", period: "2017 - 2022", party: "Universitaire", highlight: "Création de la plateforme Parcoursup, Loi de programmation de la recherche (LPR)" },
        { name: "Thierry Mandon", period: "2015 - 2017", party: "PS", highlight: "Simplification de l'accès aux masters universitaires" },
        { name: "Geneviève Fioraso", period: "2012 - 2014", party: "PS", highlight: "Loi sur l'enseignement supérieur et regroupements universitaires" },
        { name: "Laurent Wauquiez", period: "2011 - 2012", party: "UMP", highlight: "Rénovation des campus universitaires" },
        { name: "Valérie Pécresse", period: "2007 - 2011", party: "UMP", highlight: "Loi relative aux libertés et responsabilités des universités (LRU - autonomie des facs)" }
      ]
    },
    {
      id: "sports",
      name: "Ministère des Sports, de la Jeunesse et de la Vie Associative",
      shortName: "Sports & Jeunesse",
      category: "culture_societe",
      categoryLabel: "Culture & Société",
      color: "#ca8a04",
      icon: "Trophy",
      building: "Immeuble Le Galliéni",
      address: "95 Avenue de France, 75013 Paris",
      budgetBillions: "1.2 Md €",
      staffCount: "5 000 agents",
      currentMinister: {
        name: "Gil Avérous",
        title: "Ministre des Sports, de la Jeunesse et de la Vie Associative",
        age: 51,
        sinceDate: "Septembre 2024",
        party: "Divers droite / ex-LR",
        biography: "Maire de Châteauroux depuis 2014, président de l'Association des maires 'Villes de France', ville hôte des épreuves de tir des Jeux Olympiques de Paris 2024.",
        missions: [
          "Développement de la pratique sportive pour tous et héritage des Jeux Olympiques Paris 2024",
          "Soutien aux fédérations sportives et aux athlètes de haut niveau (INSEP)",
          "Politiques d'engagement de la jeunesse et Service Civique",
          "Soutien aux 1,5 million d'associations loi 1901 de France"
        ]
      },
      predecessors: [
        { name: "Amélie Oudéa-Castéra", period: "2022 - 2024", party: "Renaissance", highlight: "Organisation triomphale des Jeux Olympiques et Paralympiques de Paris 2024" },
        { name: "Roxana Maracineanu", period: "2018 - 2022", party: "Ancienne championne du monde", highlight: "Loi sport de 2022, Pass'Sport pour les jeunes" },
        { name: "Laura Flessel", period: "2017 - 2018", party: "Double championne olympique", highlight: "Obtention définitive des JO 2024 lors de la session CIO de Lima" }
      ]
    }
  ];

  /* ==========================================================================
     2. GESTIONNAIRE D'ICÔNES SVG VECTORIELLES
     ========================================================================== */

  const iconPaths = {
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

  function getIcon(name, options = {}) {
    const size = options.size || 16;
    const className = options.className ? ` class="${options.className}"` : '';
    const style = options.style ? ` style="${options.style}"` : '';
    const ariaHidden = options.ariaHidden !== false ? ' aria-hidden="true"' : '';
    const paths = iconPaths[name] || iconPaths['Landmark'] || [];
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${className}${style}${ariaHidden}>${paths.join('')}</svg>`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ==========================================================================
     3. ÉTAT RÉACTIF (STORE)
     ========================================================================== */

  const STORAGE_KEY_EXECUTIVE  = 'politiscope_custom_executive_v1';
  const STORAGE_KEY_MINISTRIES = 'politiscope_custom_ministries_v1';

  function loadInitialExecutive() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_EXECUTIVE);
      return saved ? JSON.parse(saved) : executiveData;
    } catch {
      return executiveData;
    }
  }

  function loadInitialMinistries() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_MINISTRIES);
      return saved ? JSON.parse(saved) : ministriesData;
    } catch {
      return ministriesData;
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

      // Chargement optionnel si lancé depuis un serveur HTTP
      if (window.location.protocol.startsWith('http') && !localStorage.getItem(STORAGE_KEY_EXECUTIVE)) {
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
        try {
          localStorage.removeItem(STORAGE_KEY_EXECUTIVE);
          localStorage.removeItem(STORAGE_KEY_MINISTRIES);
        } catch (e) {}
        this.setState({
          executive: executiveData,
          ministries: ministriesData
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

  const store = new Store();

  /* ==========================================================================
     4. COMPOSANT : CARTE NŒUD (NODE CARD)
     ========================================================================== */

  function createNodeCardHtml(item, type = 'ministry', isHighlighted = false, stepNumber = null) {
    const isPresident   = type === 'president';
    const isPM          = type === 'pm';
    const isInstitution = type === 'institution';

    const representative = isPresident
      ? item
      : isPM
        ? { name: item.currentHolder, age: item.age, party: item.party }
        : isInstitution
          ? item.currentLeader
          : item.currentMinister;

    const predecessorCount = item.predecessors ? item.predecessors.length : 0;

    const categoryLabel = item.categoryLabel
      || item.branch
      || (isPresident ? "Chef de l'État" : isPM ? 'Chef du Gouvernement' : 'Institution');

    const iconName = item.icon || 'Landmark';
    const displayName = item.shortName || item.title || item.name || '';

    const repInitials = representative?.name
      ? representative.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
      : 'RF';

    const itemId = item.id || (isPresident ? 'presidence' : isPM ? 'matignon' : '');

    return `
      <div
        role="button"
        tabindex="0"
        class="node-card card-clickable${isHighlighted ? ' node-highlighted' : ''}"
        data-node-id="${itemId}"
        data-node-type="${type}"
        aria-label="Consulter ${escapeHtml(displayName)}"
      >
        <div class="node-card-top">
          <div class="node-card-icon-wrap">
            <div class="node-icon${isHighlighted ? ' highlighted' : ''}" aria-hidden="true">
              ${getIcon(iconName, { size: 18 })}
            </div>
            <div>
              <span class="node-card-label">${escapeHtml(categoryLabel)}</span>
              <h3 class="node-card-name">${escapeHtml(displayName)}</h3>
            </div>
          </div>

          ${isHighlighted ? `
            <span class="sim-badge" aria-label="Étape active ${stepNumber ?? ''}">
              ${getIcon('Zap', { size: 11 })}
              ${stepNumber ? `Étape #${stepNumber}` : 'Active'}
            </span>
          ` : ''}
        </div>

        ${(item.building || item.budgetBillions || item.seats) ? `
          <div class="node-meta-chips">
            ${item.building ? `
              <span class="meta-chip">
                ${getIcon('Landmark', { size: 11 })}
                ${escapeHtml(item.building)}
              </span>
            ` : ''}
            ${item.budgetBillions ? `
              <span class="meta-chip budget">Budget : ${escapeHtml(item.budgetBillions)}</span>
            ` : ''}
            ${item.seats ? `
              <span class="meta-chip seats">
                ${escapeHtml(String(item.seats))} ${typeof item.seats === 'number' ? 'sièges' : ''}
              </span>
            ` : ''}
          </div>
        ` : ''}

        ${representative ? `
          <div class="node-rep">
            <div class="node-rep-avatar" aria-hidden="true">
              ${repInitials}
            </div>
            <div>
              <div class="node-rep-name">${escapeHtml(representative.name || '')}</div>
              <div class="node-rep-meta">
                ${representative.age ? `${representative.age} ans` : ''}
                ${representative.age && representative.party ? ' • ' : ''}
                ${representative.party ? escapeHtml(representative.party) : ''}
              </div>
            </div>
          </div>
        ` : ''}

        <div class="node-card-footer">
          <span class="node-footer-pred">
            ${getIcon('History', { size: 13 })}
            ${predecessorCount > 0
              ? `${predecessorCount} prédécesseur${predecessorCount > 1 ? 's' : ''}`
              : 'Fiche institutionnelle'}
          </span>
          <span class="node-footer-link">
            Consulter
            ${getIcon('ChevronRight', { size: 13 })}
          </span>
        </div>
      </div>
    `;
  }

  /* ==========================================================================
     5. COMPOSANT : EN-TÊTE (HEADER)
     ========================================================================== */

  const categories = [
    { id: 'all',                  label: 'Toutes' },
    { id: 'regalien',             label: 'Régalien' },
    { id: 'social_sante',         label: 'Social & Santé' },
    { id: 'education_recherche',  label: 'Éducation' },
    { id: 'ecologie_territoires', label: 'Écologie' },
    { id: 'culture_societe',      label: 'Culture & Sports' },
    { id: 'legislatif',           label: 'Parlement' },
    { id: 'controle',             label: 'Contrôle' },
  ];

  function renderHeader(container) {
    const state = store.getState();
    const { activeTab, searchQuery, selectedCategory, activePathway } = state;

    const html = `
      <header class="site-header">
        <div class="header-brand">
          <div class="container header-brand-inner">
            <div
              class="brand-block"
              id="brand-home-btn"
              role="link"
              tabindex="0"
            >
              <div class="marianne-flag" aria-hidden="true">
                <span class="f-blue"></span>
                <span class="f-white"></span>
                <span class="f-red"></span>
              </div>

              <div class="marianne-text">
                <span class="rf-name">République</span>
                <span class="rf-name">Française</span>
                <span class="rf-devise">Liberté • Égalité • Fraternité</span>
              </div>

              <div class="brand-separator" aria-hidden="true"></div>

              <div>
                <span class="brand-app-name">PolitiScope</span>
                <span class="brand-app-sub">Portail pédagogique des institutions de la République</span>
              </div>
            </div>

            <span class="badge-rf">Ve République</span>
          </div>
        </div>

        <nav class="header-nav" aria-label="Navigation principale">
          <div class="container header-nav-inner">
            <button
              id="nav-tree"
              class="nav-tab${activeTab === 'tree' ? ' active' : ''}"
              data-tab="tree"
            >
              ${getIcon('GitBranch', { size: 15 })}
              Organigramme
            </button>

            <button
              id="nav-simulator"
              class="nav-tab${activeTab === 'simulator' ? ' active' : ''}"
              data-tab="simulator"
            >
              ${getIcon('FileText', { size: 15 })}
              Parcours d'une Loi
              ${activePathway ? '<span class="nav-dot" aria-hidden="true"></span>' : ''}
            </button>

            <button
              id="nav-memos"
              class="nav-tab${activeTab === 'memos' ? ' active' : ''}"
              data-tab="memos"
            >
              ${getIcon('BookOpen', { size: 15 })}
              Fiches &amp; Quiz
            </button>

            <button
              id="nav-elections"
              class="nav-tab${activeTab === 'elections' ? ' active' : ''}"
              data-tab="elections"
            >
              ${getIcon('Vote', { size: 15 })}
              Présidentielle
            </button>

            <button
              id="nav-admin"
              class="nav-tab nav-settings${activeTab === 'admin' ? ' active' : ''}"
              data-tab="admin"
              title="Éditer les données"
            >
              ${getIcon('Settings', { size: 15 })}
              Éditeur
            </button>
          </div>
        </nav>

        ${activeTab === 'tree' ? `
          <div class="search-bar">
            <div class="container search-bar-inner">
              <div class="search-input-wrap">
                ${getIcon('Search', { size: 15, className: 'search-icon' })}
                <input
                  id="search-input"
                  type="search"
                  class="search-input"
                  value="${escapeHtml(searchQuery)}"
                  placeholder="Rechercher un ministre, ministère, prédécesseur…"
                  aria-label="Rechercher dans l'organigramme"
                />
                ${searchQuery ? `
                  <button
                    id="search-clear-btn"
                    class="search-clear"
                    aria-label="Effacer la recherche"
                  >
                    ✕
                  </button>
                ` : ''}
              </div>

              <div
                id="filter-chips-wrap"
                class="filter-chips"
                role="group"
                aria-label="Filtrer par catégorie"
              >
                <span class="filter-label">Filtrer :</span>
                ${categories.map(cat => `
                  <button
                    class="chip${selectedCategory === cat.id ? ' active' : ''}"
                    data-cat="${cat.id}"
                    aria-pressed="${selectedCategory === cat.id}"
                  >
                    ${cat.label}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}
      </header>
    `;

    container.innerHTML = html;
    attachHeaderEvents(container);
  }

  function attachHeaderEvents(container) {
    const brandBtn = container.querySelector('#brand-home-btn');
    if (brandBtn) {
      const goHome = () => {
        store.setState({
          activeTab: 'tree',
          currentStepIndex: 0,
          simLinkedToTree: false
        });
      };
      brandBtn.addEventListener('click', goHome);
      brandBtn.addEventListener('keydown', e => e.key === 'Enter' && goHome());
    }

    container.querySelectorAll('.nav-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab === 'simulator') {
          store.setState({ activeTab: 'simulator', simLinkedToTree: false });
        } else {
          store.setState({ activeTab: tab });
        }
      });
    });

    const searchInput = container.querySelector('#search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        store.setState({ searchQuery: e.target.value });
      });
    }

    const clearBtn = container.querySelector('#search-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        store.setState({ searchQuery: '' });
        if (searchInput) searchInput.focus();
      });
    }

    const chipsWrap = container.querySelector('#filter-chips-wrap');
    if (chipsWrap) {
      chipsWrap.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const catId = chip.dataset.cat;
          store.setState({ selectedCategory: catId });
          const btnLeft = chip.offsetLeft;
          const btnWidth = chip.offsetWidth;
          const contWidth = chipsWrap.offsetWidth;
          chipsWrap.scrollTo({
            left: btnLeft - contWidth / 2 + btnWidth / 2,
            behavior: 'smooth'
          });
        });
      });
    }
  }

  /* ==========================================================================
     6. COMPOSANT : ARBRE INSTITUTIONNEL (TREE VIEW)
     ========================================================================== */

  function renderTreeView(container) {
    const state = store.getState();
    const {
      executive,
      ministries,
      searchQuery,
      selectedCategory,
      activePathway,
      currentStepIndex,
      simLinkedToTree
    } = state;

    const institutions = institutionsData;
    const activeStep = (simLinkedToTree && activePathway?.steps?.[currentStepIndex]) ? activePathway.steps[currentStepIndex] : null;
    const highlightedNodeIds = activeStep ? (activeStep.highlightNodes || []) : [];
    const isHighlighted = (id) => highlightedNodeIds.includes(id);

    const matchesSearch = (item) => {
      if (!item) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      const matchName     = (item.name     || '').toLowerCase().includes(q);
      const matchTitle    = (item.title    || '').toLowerCase().includes(q);
      const matchShort    = (item.shortName|| '').toLowerCase().includes(q);
      const matchBuilding = (item.building || item.institution || '').toLowerCase().includes(q);
      const repName = (
        item.currentMinister?.name ||
        item.currentLeader?.name   ||
        item.currentHolder         || ''
      ).toLowerCase();
      const matchRep  = repName.includes(q);
      const matchPred = (item.predecessors || []).some(p =>
        p.name.toLowerCase().includes(q) ||
        (p.highlight && p.highlight.toLowerCase().includes(q))
      );
      return matchName || matchTitle || matchShort || matchBuilding || matchRep || matchPred;
    };

    const filteredMinistries = ministries.filter(m => {
      if (
        selectedCategory !== 'all' &&
        selectedCategory !== 'legislatif' &&
        selectedCategory !== 'controle' &&
        m.category !== selectedCategory
      ) return false;
      return matchesSearch(m);
    });

    const filteredInstitutions = institutions.filter(inst => {
      if (selectedCategory !== 'all' && selectedCategory !== inst.category) return false;
      return matchesSearch(inst);
    });

    const presidentMatches = matchesSearch(executive?.president);
    const pmMatches        = matchesSearch(executive?.primeMinister);

    const showMins  = selectedCategory === 'all' ||
                      (selectedCategory !== 'legislatif' && selectedCategory !== 'controle');
    const showInsts = selectedCategory === 'all' ||
                      selectedCategory === 'legislatif' ||
                      selectedCategory === 'controle';

    const html = `
      <div class="tree-wrap">

        ${activeStep ? `
          <div class="container" style="margin-bottom: 32px;">
            <div class="sim-banner">
              <div style="display: flex; align-items: flex-start; gap: 16px; flex: 1;">
                <div class="sim-banner-step-num" aria-hidden="true">
                  ${activeStep.stepNumber}
                </div>
                <div class="sim-banner-body">
                  <span class="sim-banner-label">
                    Simulation en cours • Étape ${activeStep.stepNumber}
                  </span>
                  <div class="sim-banner-title">${escapeHtml(activeStep.title)}</div>
                  <div class="sim-banner-desc">${escapeHtml(activeStep.description)}</div>
                </div>
              </div>
              <span class="sim-banner-count">
                ${highlightedNodeIds.length} institution(s) mobilisée(s)
              </span>
            </div>
          </div>
        ` : ''}

        ${((presidentMatches || pmMatches) && selectedCategory === 'all') ? `
          <div class="exec-section">
            <div class="exec-title">
              <h2>Le Pouvoir Exécutif</h2>
              <p>Présidence de la République &amp; Direction du Gouvernement</p>
            </div>

            ${presidentMatches ? `
              <div class="exec-card-wrap">
                ${createNodeCardHtml(
                  executive.president,
                  'president',
                  isHighlighted('presidence'),
                  activeStep?.stepNumber
                )}
              </div>
            ` : ''}

            ${(presidentMatches && pmMatches) ? `
              <div class="tree-connector">
                <div class="tree-vline" aria-hidden="true"></div>
                <span class="tree-connector-label">
                  Nomme le Premier ministre (Article 8) ↓
                </span>
                <div class="tree-vline" aria-hidden="true"></div>
              </div>
            ` : ''}

            ${pmMatches ? `
              <div class="exec-card-wrap">
                ${createNodeCardHtml(
                  executive.primeMinister,
                  'pm',
                  isHighlighted('matignon'),
                  activeStep?.stepNumber
                )}
              </div>
            ` : ''}

            <div class="tree-section-divider">
              <div class="tree-vline" aria-hidden="true"></div>
              <div class="tree-section-divider-line">
                <span class="tree-section-divider-text">
                  Action Gouvernementale &amp; Institutions de la République
                </span>
              </div>
              <div class="tree-vline" aria-hidden="true"></div>
            </div>
          </div>
        ` : ''}

        <div class="container">
          <div class="tree-body">

            ${showMins ? `
              <div>
                <div class="tree-col-header">
                  <div class="tree-col-header-left">
                    ${getIcon('Building2', { size: 20, className: 'tree-col-icon' })}
                    <h3>Les Ministères du Gouvernement</h3>
                  </div>
                  <span class="tree-count-badge">
                    ${filteredMinistries.length} ministères
                  </span>
                </div>

                ${filteredMinistries.length === 0 ? `
                  <div class="empty-state">
                    Aucun ministère ne correspond aux critères de recherche.
                  </div>
                ` : `
                  <div class="ministries-grid">
                    ${filteredMinistries.map(ministry => createNodeCardHtml(
                      ministry,
                      'ministry',
                      isHighlighted(ministry.id),
                      activeStep?.stepNumber
                    )).join('')}
                  </div>
                `}
              </div>
            ` : ''}

            ${showInsts ? `
              <div>
                <div class="tree-col-header">
                  <div class="tree-col-header-left">
                    ${getIcon('Landmark', { size: 20, className: 'tree-col-icon' })}
                    <h3>Parlement &amp; Contrôle</h3>
                  </div>
                  <span class="tree-count-badge">
                    ${filteredInstitutions.length} institutions
                  </span>
                </div>

                ${filteredInstitutions.length === 0 ? `
                  <div class="empty-state">
                    Aucune institution ne correspond à votre recherche.
                  </div>
                ` : `
                  <div class="institutions-list">
                    ${filteredInstitutions.map(institution => createNodeCardHtml(
                      institution,
                      'institution',
                      isHighlighted(institution.id),
                      activeStep?.stepNumber
                    )).join('')}
                  </div>
                `}
              </div>
            ` : ''}

          </div>
        </div>

      </div>
    `;

    container.innerHTML = html;
    attachTreeEvents(container, { executive, ministries, institutions });
  }

  function attachTreeEvents(container, { executive, ministries, institutions }) {
    container.querySelectorAll('.node-card').forEach(card => {
      const handleSelect = () => {
        const type = card.dataset.nodeType;
        const id = card.dataset.nodeId;
        let item = null;

        if (type === 'president') item = executive.president;
        else if (type === 'pm') item = executive.primeMinister;
        else if (type === 'institution') item = institutions.find(i => i.id === id);
        else item = ministries.find(m => m.id === id);

        if (item) {
          store.openDrawer(item, type);
        }
      };

      card.addEventListener('click', handleSelect);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') handleSelect();
      });
    });
  }

  /* ==========================================================================
     7. COMPOSANT : TIROIR LATÉRAL DE DÉTAILS (DETAIL DRAWER)
     ========================================================================== */

  function renderDetailDrawer(container) {
    const state = store.getState();
    const { selectedNode: item, selectedNodeType: type } = state;

    if (!item) {
      container.innerHTML = '';
      return;
    }

    const isPresident   = type === 'president';
    const isPM          = type === 'pm';
    const isInstitution = type === 'institution';

    const representative = isPresident
      ? item
      : isPM
        ? {
            name: item.currentHolder,
            age: item.age,
            party: item.party,
            sinceDate: item.sinceDate,
            biography: item.biography,
            keyPowers: item.keyPowers
          }
        : isInstitution
          ? {
              name: item.currentLeader?.name,
              title: item.currentLeader?.title,
              age: item.currentLeader?.age,
              party: item.currentLeader?.party,
              sinceDate: item.currentLeader?.sinceDate,
              biography: item.currentLeader?.biography,
              keyPowers: item.keyPowers
            }
          : {
              name: item.currentMinister?.name,
              title: item.currentMinister?.title,
              age: item.currentMinister?.age,
              party: item.currentMinister?.party,
              sinceDate: item.currentMinister?.sinceDate,
              biography: item.currentMinister?.biography,
              missions: item.currentMinister?.missions
            };

    const title        = item.name || item.title || '';
    const building     = item.building || item.institution;
    const address      = item.address;
    const budget       = item.budgetBillions;
    const staff        = item.staffCount || item.composition || (item.seats ? `${item.seats} sièges` : null);
    const predecessors = item.predecessors || [];
    const powers       = representative?.missions || representative?.keyPowers || item.keyPowers;

    const categoryLabel = item.categoryLabel
      || item.branch
      || (isPresident ? "Chef de l'État" : isPM ? 'Chef du Gouvernement' : 'Institution');

    const initials = (name) =>
      name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'RF';

    const html = `
      <div class="drawer-backdrop" role="dialog" aria-modal="true" aria-label="Détails : ${escapeHtml(title)}">
        <div class="drawer-backdrop-click" id="drawer-backdrop-bg" aria-hidden="true"></div>

        <div class="drawer-panel">
          <div class="drawer-header">
            <span class="drawer-header-tag">${escapeHtml(categoryLabel)}</span>
            <button class="drawer-close" id="drawer-close-btn" aria-label="Fermer le panneau">
              ${getIcon('X', { size: 18 })}
            </button>
          </div>

          <div class="drawer-body">
            <div class="drawer-title-card">
              <h2 class="drawer-title">${escapeHtml(title)}</h2>
              ${item.subtitle ? `
                <p class="drawer-subtitle">${escapeHtml(item.subtitle)}</p>
              ` : ''}

              ${(building || address) ? `
                <div class="drawer-meta-chips">
                  ${building ? `
                    <span class="drawer-chip">
                      ${getIcon('Landmark', { size: 13 })} ${escapeHtml(building)}
                    </span>
                  ` : ''}
                  ${address ? `
                    <span class="drawer-chip">
                      ${getIcon('MapPin', { size: 13 })} ${escapeHtml(address)}
                    </span>
                  ` : ''}
                </div>
              ` : ''}

              ${(budget || staff) ? `
                <div class="drawer-stats">
                  ${budget ? `
                    <div class="drawer-stat">
                      <span class="drawer-stat-label">Budget alloué</span>
                      <span class="drawer-stat-value">${escapeHtml(budget)}</span>
                    </div>
                  ` : ''}
                  ${staff ? `
                    <div class="drawer-stat">
                      <span class="drawer-stat-label">Effectifs / Composition</span>
                      <span class="drawer-stat-value">${escapeHtml(staff)}</span>
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            </div>

            ${representative ? `
              <div class="drawer-section">
                <div class="drawer-section-head">
                  <span class="drawer-section-title">
                    ${getIcon('User', { size: 15, style: 'color: var(--blue-rf);' })}
                    Représentant Actuel
                  </span>
                  ${representative.sinceDate ? `
                    <span class="drawer-since-badge">
                      En fonction depuis : ${escapeHtml(representative.sinceDate)}
                    </span>
                  ` : ''}
                </div>

                <div class="rep-card">
                  <div class="rep-avatar" aria-hidden="true">
                    ${initials(representative.name)}
                  </div>
                  <div>
                    <div class="rep-name">${escapeHtml(representative.name || '')}</div>
                    <div class="rep-title">
                      ${escapeHtml(
                        representative.title
                        || item.title
                        || (isPresident ? 'Président de la République'
                            : isPM ? 'Premier Ministre'
                            : 'Ministre')
                      )}
                    </div>
                    <div class="rep-chips">
                      ${representative.age ? `
                        <span class="badge badge-grey">${representative.age} ans</span>
                      ` : ''}
                      ${representative.party ? `
                        <span class="badge badge-blue">${escapeHtml(representative.party)}</span>
                      ` : ''}
                    </div>
                  </div>
                </div>

                ${representative.biography ? `
                  <div>
                    <span class="bio-label">Parcours &amp; Biographie</span>
                    <p class="bio-text">${escapeHtml(representative.biography)}</p>
                  </div>
                ` : ''}

                ${(powers && powers.length > 0) ? `
                  <div>
                    <span class="mission-label">
                      ${getIcon('Shield', { size: 13, style: 'display: inline; margin-right: 6px; color: var(--blue-rf);' })}
                      Missions &amp; Attributions officielles
                    </span>
                    <div class="missions-list">
                      ${powers.map(pow => `
                        <div class="mission-item">
                          ${getIcon('CheckCircle2', { size: 15, className: 'mission-check' })}
                          <span>${escapeHtml(pow)}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            ` : ''}

            <div class="drawer-section">
              <div class="drawer-section-head">
                <span class="drawer-section-title">
                  ${getIcon('History', { size: 15 })}
                  Historique des prédécesseurs à ce poste
                </span>
                <span class="badge badge-grey">${predecessors.length} répertoriés</span>
              </div>

              ${predecessors.length === 0 ? `
                <p class="text-muted" style="font-style: italic;">
                  Aucun prédécesseur répertorié.
                </p>
              ` : `
                <div class="preds-timeline">
                  ${predecessors.map(pred => `
                    <div class="pred-item">
                      <div class="pred-dot" aria-hidden="true"></div>
                      <div class="pred-card">
                        <div class="pred-header">
                          <span class="pred-name">${escapeHtml(pred.name)}</span>
                          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <span class="pred-period">${escapeHtml(pred.period)}</span>
                            ${pred.party ? `
                              <span class="pred-party">• ${escapeHtml(pred.party)}</span>
                            ` : ''}
                          </div>
                        </div>
                        ${pred.highlight ? `
                          <div class="pred-highlight">
                            <strong>Action clé :</strong> ${escapeHtml(pred.highlight)}
                          </div>
                        ` : ''}
                      </div>
                    </div>
                  `).join('')}
                </div>
              `}
            </div>
          </div>

          <div class="drawer-footer">
            <span class="drawer-source">
              Source : données institutionnelles de la République Française
            </span>
            <button class="btn btn-primary btn-sm" id="drawer-footer-close-btn">
              Fermer
            </button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const handleClose = () => store.closeDrawer();

    const backdropBg = container.querySelector('#drawer-backdrop-bg');
    if (backdropBg) backdropBg.addEventListener('click', handleClose);

    const closeBtn = container.querySelector('#drawer-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', handleClose);

    const footerCloseBtn = container.querySelector('#drawer-footer-close-btn');
    if (footerCloseBtn) footerCloseBtn.addEventListener('click', handleClose);
  }

  // Fermeture par touche Echap
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const state = store.getState();
      if (state.selectedNode) {
        store.closeDrawer();
      }
    }
  });

  /* ==========================================================================
     8. COMPOSANT : SIMULATEUR DE LOI (PROCESS SIMULATOR)
     ========================================================================== */

  let playTimer = null;
  let isPlaying = false;

  function cleanupProcessSimulator() {
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
    }
    isPlaying = false;
  }

  function renderProcessSimulator(container) {
    const state = store.getState();
    const pathways = pathwaysData;
    const selectedPath = state.activePathway || pathways[0];
    const steps = selectedPath.steps || [];
    const currentStepIndex = state.currentStepIndex || 0;
    const currentStep = steps[currentStepIndex] || steps[0];

    const html = `
      <div class="container sim-view">
        <div class="section-head">
          <h2>Comprendre le Parcours d'une Loi &amp; les Mécanismes Institutionnels</h2>
          <p>
            Sélectionnez une procédure pour suivre son déroulement officiel étape par étape
            et visualiser les institutions impliquées.
          </p>
        </div>

        <div class="sim-pathways-grid">
          ${pathways.map(path => {
            const isSelected = selectedPath.id === path.id;
            return `
              <div
                class="pathway-card${isSelected ? ' selected' : ''}"
                data-pathway-id="${path.id}"
                role="button"
                tabindex="0"
                aria-pressed="${isSelected}"
              >
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <span class="pathway-badge">${escapeHtml(path.badge)}</span>
                  <span class="pathway-steps-count">${path.steps.length} étapes</span>
                </div>
                <h3 class="pathway-title">${escapeHtml(path.title)}</h3>
                <p class="pathway-summary">${escapeHtml(path.summary)}</p>
                <div class="pathway-footer-text">
                  ${isSelected ? '● Sélectionné' : 'Consulter →'}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="stepper-card">
          <div class="stepper-header">
            <div>
              <span class="stepper-meta">
                Étape ${currentStepIndex + 1} sur ${steps.length} — ${escapeHtml(selectedPath.title)}
              </span>
              <h3 class="stepper-title">${escapeHtml(currentStep.title)}</h3>
            </div>

            <div class="stepper-controls">
              <button
                id="sim-play-toggle"
                class="btn btn-sm${isPlaying ? ' btn-danger' : ' btn-primary'}"
                aria-label="${isPlaying ? 'Mettre en pause' : 'Lecture automatique'}"
              >
                ${isPlaying
                  ? `${getIcon('Pause', { size: 14 })} Pause`
                  : `${getIcon('Play', { size: 14 })} Lecture auto`}
              </button>
              <button
                id="sim-reset-btn"
                class="btn-icon"
                aria-label="Recommencer depuis le début"
                title="Recommencer"
              >
                ${getIcon('RotateCcw', { size: 15 })}
              </button>
            </div>
          </div>

          <div class="steps-tracker" role="list" aria-label="Navigation par étape">
            ${steps.map((step, idx) => `
              <button
                class="step-dot${idx === currentStepIndex ? ' current' : idx < currentStepIndex ? ' done' : ''}"
                data-step-index="${idx}"
                title="Étape ${idx + 1} : ${escapeHtml(step.title)}"
                aria-label="Aller à l'étape ${idx + 1}"
                ${idx === currentStepIndex ? 'aria-current="step"' : ''}
                role="listitem"
              >
                ${idx + 1}
              </button>
            `).join('')}
          </div>

          <div class="step-body">
            <div>
              <div class="step-institution-tag">
                <span class="step-institution-label">Institution(s) :</span>
                <span class="step-institution-name">${escapeHtml(currentStep.institutionName)}</span>
              </div>

              <div class="step-desc-box">
                <div class="step-desc-head">
                  ${getIcon('Info', { size: 15, style: 'color: var(--blue-rf);' })}
                  Description officielle de la procédure
                </div>
                <p class="step-desc-text">${escapeHtml(currentStep.description)}</p>
              </div>

              ${currentStep.keyConcept ? `
                <div class="step-keyconcept">
                  <strong>💡 Point clé à retenir :</strong>
                  ${escapeHtml(currentStep.keyConcept)}
                </div>
              ` : ''}
            </div>

            <div>
              ${currentStep.legalRef ? `
                <div class="step-sidebar-card">
                  <span class="step-sidebar-label">Base constitutionnelle</span>
                  <p class="step-legalref">${escapeHtml(currentStep.legalRef)}</p>
                </div>
              ` : ''}

              <div class="step-tree-card">
                <span class="step-tree-label">Visualisation sur l'organigramme</span>
                <p class="step-tree-desc">
                  Cette étape mobilise ${currentStep.highlightNodes?.length ?? 0} institution(s)
                  mise(s) en valeur sur l'arbre.
                </p>
                <button id="sim-goto-tree-btn" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center;">
                  Afficher l'Organigramme ${getIcon('ArrowRight', { size: 13 })}
                </button>
              </div>
            </div>
          </div>

          <div class="stepper-footer">
            <button
              id="sim-prev-btn"
              class="btn btn-ghost btn-sm"
              ${currentStepIndex === 0 ? 'disabled' : ''}
            >
              ${getIcon('ChevronLeft', { size: 15 })} Étape précédente
            </button>

            <span class="stepper-progress">
              ${currentStepIndex + 1} / ${steps.length}
            </span>

            <button
              id="sim-next-btn"
              class="btn btn-primary btn-sm"
              ${currentStepIndex === steps.length - 1 ? 'disabled' : ''}
            >
              Étape suivante ${getIcon('ChevronRight', { size: 15 })}
            </button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    attachSimulatorEvents(container, { pathways, steps, currentStepIndex });
  }

  function attachSimulatorEvents(container, { pathways, steps, currentStepIndex }) {
    container.querySelectorAll('.pathway-card').forEach(card => {
      const handleSelect = () => {
        const id = card.dataset.pathwayId;
        const path = pathways.find(p => p.id === id);
        if (path) {
          cleanupProcessSimulator();
          store.setState({
            activePathway: path,
            currentStepIndex: 0
          });
        }
      };
      card.addEventListener('click', handleSelect);
      card.addEventListener('keydown', e => e.key === 'Enter' && handleSelect());
    });

    container.querySelectorAll('.step-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.stepIndex, 10);
        cleanupProcessSimulator();
        store.setState({ currentStepIndex: idx });
      });
    });

    const playBtn = container.querySelector('#sim-play-toggle');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (isPlaying) {
          cleanupProcessSimulator();
          renderProcessSimulator(container);
        } else {
          isPlaying = true;
          renderProcessSimulator(container);
          playTimer = setInterval(() => {
            const state = store.getState();
            const curr = state.currentStepIndex || 0;
            const maxSteps = state.activePathway?.steps?.length || 0;
            if (curr < maxSteps - 1) {
              store.setState({ currentStepIndex: curr + 1 });
            } else {
              cleanupProcessSimulator();
              renderProcessSimulator(container);
            }
          }, 4000);
        }
      });
    }

    const resetBtn = container.querySelector('#sim-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        cleanupProcessSimulator();
        store.setState({ currentStepIndex: 0 });
      });
    }

    const prevBtn = container.querySelector('#sim-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStepIndex > 0) {
          cleanupProcessSimulator();
          store.setState({ currentStepIndex: currentStepIndex - 1 });
        }
      });
    }

    const nextBtn = container.querySelector('#sim-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStepIndex < steps.length - 1) {
          cleanupProcessSimulator();
          store.setState({ currentStepIndex: currentStepIndex + 1 });
        }
      });
    }

    const gotoTreeBtn = container.querySelector('#sim-goto-tree-btn');
    if (gotoTreeBtn) {
      gotoTreeBtn.addEventListener('click', () => {
        cleanupProcessSimulator();
        store.setState({
          simLinkedToTree: true,
          activeTab: 'tree'
        });
      });
    }
  }

  /* ==========================================================================
     9. COMPOSANT : FICHES MÉMOS & QUIZ (MEMO CENTER)
     ========================================================================== */

  let selectedMemoId = memosData[0].id;
  const userAnswers = {};
  const showExplanations = {};

  function renderMemoCenter(container) {
    const memos = memosData;
    const selectedMemo = memos.find(m => m.id === selectedMemoId) || memos[0];
    const isAnswered = userAnswers[selectedMemo.id] !== undefined;
    const userAnswerIdx = userAnswers[selectedMemo.id];

    const html = `
      <div class="container" style="padding-top: 8px;">
        <div class="section-head">
          <h2>Fiches Pratiques &amp; Compréhension de la Ve République</h2>
          <p>
            Des synthèses claires, objectives et pédagogiques pour comprendre
            le fonctionnement institutionnel.
          </p>
        </div>

        <div class="memos-layout">
          <aside>
            <div class="memos-sidebar-label">
              Sommaire des fiches (${memos.length})
            </div>
            <div class="memos-sidebar">
              ${memos.map(memo => {
                const isSelected = selectedMemo.id === memo.id;
                const answered = userAnswers[memo.id] !== undefined;
                const wasCorrect = answered && userAnswers[memo.id] === memo.quiz.correctIndex;

                return `
                  <div
                    class="memo-list-item${isSelected ? ' selected' : ''}"
                    data-memo-id="${memo.id}"
                    role="button"
                    tabindex="0"
                    aria-pressed="${isSelected}"
                  >
                    <div class="memo-list-icon" aria-hidden="true">
                      ${getIcon('BookOpen', { size: 16 })}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                      <span class="memo-list-cat">${escapeHtml(memo.category)}</span>
                      <div class="memo-list-title">${escapeHtml(memo.title)}</div>
                      <div class="memo-list-sub">${escapeHtml(memo.subtitle)}</div>
                    </div>
                    ${answered ? `
                      <span class="memo-score-badge ${wasCorrect ? 'score-ok' : 'score-err'}">
                        ${wasCorrect ? '✓' : '✗'}
                      </span>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </aside>

          <main>
            <div class="memo-detail">
              <div class="memo-detail-head">
                <div class="memo-detail-icon" aria-hidden="true">
                  ${getIcon('BookOpen', { size: 20 })}
                </div>
                <div>
                  <span class="memo-detail-cat">
                    Fiche thématique • ${escapeHtml(selectedMemo.category)}
                  </span>
                  <h3 class="memo-detail-title">${escapeHtml(selectedMemo.title)}</h3>
                  <p class="memo-detail-subtitle">${escapeHtml(selectedMemo.subtitle)}</p>
                </div>
              </div>

              <p class="memo-summary">${escapeHtml(selectedMemo.summary)}</p>

              <div class="memo-content-blocks">
                ${selectedMemo.content.map(block => `
                  <div class="memo-block">
                    <h4>${escapeHtml(block.heading)}</h4>
                    <p>${escapeHtml(block.text)}</p>
                  </div>
                `).join('')}

                ${selectedMemo.funFact ? `
                  <div class="memo-funfact">
                    <strong>💡 Repère historique / Le saviez-vous ?</strong>
                    ${escapeHtml(selectedMemo.funFact)}
                  </div>
                ` : ''}
              </div>

              <div class="quiz-box">
                <div class="quiz-header">
                  <div class="quiz-title">
                    ${getIcon('Award', { size: 15, style: 'color: var(--blue-rf);' })}
                    Questionnaire d'auto-évaluation citoyenne
                  </div>
                  ${isAnswered ? `
                    <button class="btn btn-ghost btn-sm" id="quiz-reset-btn">
                      ${getIcon('RotateCcw', { size: 13 })} Recommencer
                    </button>
                  ` : ''}
                </div>

                <p class="quiz-question">${escapeHtml(selectedMemo.quiz.question)}</p>

                <div class="quiz-options">
                  ${selectedMemo.quiz.options.map((option, idx) => {
                    const isSelected = userAnswerIdx === idx;
                    const isCorrect  = idx === selectedMemo.quiz.correctIndex;

                    let cls = 'quiz-option';
                    if (isAnswered) {
                      if (isCorrect)        cls += ' q-correct';
                      else if (isSelected)  cls += ' q-wrong';
                      else                  cls += ' q-faded';
                    }

                    return `
                      <button
                        class="${cls}"
                        data-option-index="${idx}"
                        ${isAnswered ? 'disabled' : ''}
                      >
                        <span>${escapeHtml(option)}</span>
                        ${isAnswered && isCorrect ? getIcon('CheckCircle2', { size: 15, style: 'flex-shrink: 0;' }) : ''}
                        ${isAnswered && isSelected && !isCorrect ? getIcon('XCircle', { size: 15, style: 'flex-shrink: 0;' }) : ''}
                      </button>
                    `;
                  }).join('')}
                </div>

                ${showExplanations[selectedMemo.id] ? `
                  <div class="quiz-feedback">
                    <strong>
                      ${userAnswerIdx === selectedMemo.quiz.correctIndex
                        ? '✓ Réponse exacte :'
                        : 'Explication :'}
                    </strong>
                    ${escapeHtml(selectedMemo.quiz.explanation)}
                  </div>
                ` : ''}
              </div>
            </div>
          </main>
        </div>
      </div>
    `;

    container.innerHTML = html;
    attachMemoEvents(container, selectedMemo);
  }

  function attachMemoEvents(container, selectedMemo) {
    container.querySelectorAll('.memo-list-item').forEach(item => {
      const handleSelect = () => {
        selectedMemoId = item.dataset.memoId;
        renderMemoCenter(container);
      };
      item.addEventListener('click', handleSelect);
      item.addEventListener('keydown', e => e.key === 'Enter' && handleSelect());
    });

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (userAnswers[selectedMemo.id] !== undefined) return;
        const optIdx = parseInt(btn.dataset.optionIndex, 10);
        userAnswers[selectedMemo.id] = optIdx;
        showExplanations[selectedMemo.id] = true;
        renderMemoCenter(container);
      });
    });

    const resetBtn = container.querySelector('#quiz-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        delete userAnswers[selectedMemo.id];
        delete showExplanations[selectedMemo.id];
        renderMemoCenter(container);
      });
    }
  }

  /* ==========================================================================
     10. COMPOSANT : ÉLECTION PRÉSIDENTIELLE (ELECTIONS VIEW)
     ========================================================================== */

  function renderElectionsView(container) {
    const html = `
      <div class="container" style="padding-top: 8px;">
        <div class="section-head">
          <h2>Guide de l'Élection Présidentielle</h2>
          <p>
            Règles constitutionnelles, parrainages d'élus et suivi
            des échéances électorales de la République.
          </p>
        </div>

        <div class="card" style="margin-bottom: 32px;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid var(--grey-200); margin-bottom: 20px; flex-wrap: wrap;">
            <div>
              <span class="badge badge-blue" style="margin-bottom: 8px; display: inline-block;">
                Cadre constitutionnel officiel
              </span>
              <h3 style="font-size: 20px; font-weight: 800; color: var(--grey-900);">
                Modalités du scrutin présidentiel
              </h3>
            </div>
            <span class="badge badge-grey">Articles 6 &amp; 7 de la Constitution</span>
          </div>

          <p style="font-size: 14px; color: var(--grey-700); line-height: 1.7; background: var(--grey-100); border: 1px solid var(--grey-200); border-radius: var(--radius-md); padding: 18px 20px; margin-bottom: 24px;">
            ${escapeHtml(electionsData.ruleDescription)}
          </p>

          <div class="rules-grid">
            ${electionsData.rules.map(rule => `
              <div class="rule-card">
                <div class="rule-card-head">
                  ${getIcon('CheckCircle2', { size: 14 })}
                  ${escapeHtml(rule.title)}
                </div>
                <p>${escapeHtml(rule.desc)}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; border-bottom: 2px solid var(--grey-200); padding-bottom: 16px; margin-bottom: 20px; flex-wrap: wrap;">
            <div>
              <h3 style="font-size: 18px; font-weight: 800; color: var(--grey-900);">
                Espace Candidatures &amp; Programmes (Évolutif)
              </h3>
              <p style="font-size: 13px; color: var(--grey-500); margin-top: 4px;">
                Section prête pour l'intégration des candidatures déclarées et comparateurs de propositions
              </p>
            </div>
            <span class="badge badge-blue" style="align-self: flex-start;">Échéance 2027</span>
          </div>

          <div class="candidates-grid">
            ${electionsData.sampleCandidates.map(cand => `
              <div class="cand-card">
                <div class="cand-top">
                  <span class="cand-party">${escapeHtml(cand.party)}</span>
                  <span class="cand-status">${escapeHtml(cand.status)}</span>
                </div>
                <h4 class="cand-name">${escapeHtml(cand.name)}</h4>
                <p class="cand-bio">${escapeHtml(cand.bio)}</p>
                <div class="cand-pillars">
                  <span class="cand-pillars-label">Axes programmatiques :</span>
                  ${cand.keyPillars.map(pil => `
                    <div class="cand-pillar">
                      <span class="cand-pillar-dot" aria-hidden="true"></span>
                      <span>${escapeHtml(pil)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div style="display: flex; align-items: center; gap: 10px; padding-bottom: 16px; border-bottom: 1px solid var(--grey-200); margin-bottom: 20px;">
            ${getIcon('History', { size: 16, style: 'color: var(--grey-500);' })}
            <h3 style="font-size: 15px; font-weight: 800; color: var(--grey-900);">
              Historique des Résultats Présidentiels sous la Ve République
            </h3>
          </div>

          <div style="overflow-x: auto;">
            <table class="elections-table">
              <thead>
                <tr>
                  <th>Année</th>
                  <th>Élu (2nd tour)</th>
                  <th>Second finaliste</th>
                  <th>Participation</th>
                </tr>
              </thead>
              <tbody>
                ${electionsData.historicalElections.map(elec => `
                  <tr>
                    <td>${escapeHtml(elec.year)}</td>
                    <td>${escapeHtml(elec.winner)}</td>
                    <td style="color: var(--grey-600);">${escapeHtml(elec.finalist)}</td>
                    <td>${escapeHtml(elec.turnout)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  /* ==========================================================================
     11. COMPOSANT : ÉDITEUR D'ADMINISTRATION (ADMIN EDITOR)
     ========================================================================== */

  let selectedEntityId = 'presidence';
  let localExecutive = null;
  let localMinistries = null;
  let saveNotification = '';
  let notificationTimer = null;

  function resetAdminLocalData() {
    const state = store.getState();
    localExecutive = JSON.parse(JSON.stringify(state.executive));
    localMinistries = JSON.parse(JSON.stringify(state.ministries));
  }

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

  function renderAdminEditor(container) {
    const state = store.getState();

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

        <div class="admin-warning" style="margin-bottom: 24px;">
          <strong>⚠ Espace administrateur :</strong> Les modifications sont sauvegardées dans votre
          navigateur (localStorage). Exportez le JSON et placez-le dans <code>public/data/gouvernement.json</code>
          pour que les changements soient visibles publiquement sur GitHub Pages.
        </div>

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

        ${saveNotification ? `
          <div style="display: flex; align-items: center; gap: 10px; background: #f0fdf4; border: 1px solid #a0e4b7; border-radius: var(--radius-md); padding: 12px 18px; color: var(--green-ok); font-size: 13px; font-weight: 600; margin-bottom: 24px;">
            ${getIcon('CheckCircle2', { size: 16 })}
            ${escapeHtml(saveNotification)}
          </div>
        ` : ''}

        <div class="admin-grid" style="display: grid; grid-template-columns: 1fr; gap: 32px;">
          <style>
            @media (min-width: 1024px) {
              .admin-grid { grid-template-columns: 280px 1fr !important; }
            }
          </style>

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

          <div>
            ${activeEntity ? `
              <div class="card" style="display: flex; flex-direction: column; gap: 24px;">
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
    const handleSave = () => {
      store.saveData(localExecutive, localMinistries);
      setSaveNotification('Modifications enregistrées avec succès.', container);
    };

    const saveBtn = container.querySelector('#admin-save-btn');
    if (saveBtn) saveBtn.addEventListener('click', handleSave);

    const saveFormBtn = container.querySelector('#admin-save-form-btn');
    if (saveFormBtn) saveFormBtn.addEventListener('click', handleSave);

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

    container.querySelectorAll('.admin-entity-item').forEach(item => {
      const handleSelect = () => {
        selectedEntityId = item.dataset.entityId;
        renderAdminEditor(container);
      };
      item.addEventListener('click', handleSelect);
      item.addEventListener('keydown', e => e.key === 'Enter' && handleSelect());
    });

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

  /* ==========================================================================
     12. POINT D'ENTRÉE PRINCIPAL (INITIALISATION DE L'APPLICATION)
     ========================================================================== */

  function initApp() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
      <div style="min-height: 100vh; display: flex; flex-direction: column;">
        <div id="header-container"></div>
        <main id="main-content" class="main-content" style="flex: 1;"></main>

        <footer class="site-footer">
          <div class="container footer-inner">
            <div class="footer-brand">
              <div class="marianne-flag" aria-hidden="true">
                <span class="f-blue"></span>
                <span class="f-white"></span>
                <span class="f-red"></span>
              </div>
              <div>
                <strong style="font-size: 13px; color: var(--grey-900);">
                  PolitiScope • République Française
                </strong>
                <p style="font-size: 12px; color: var(--grey-500); margin-top: 2px;">
                  Portail citoyen d'information et d'apprentissage des institutions
                </p>
              </div>
            </div>

            <nav class="footer-links" aria-label="Liens de navigation secondaires">
              <button class="footer-link-btn" data-tab="tree">
                Organigramme
              </button>
              <span class="footer-sep">•</span>
              <button class="footer-link-btn" data-tab="simulator">
                Parcours d'une Loi
              </button>
              <span class="footer-sep">•</span>
              <button class="footer-link-btn" data-tab="memos">
                Fiches &amp; Quiz
              </button>
              <span class="footer-sep">•</span>
              <button class="footer-link-btn" data-tab="elections">
                Présidentielle
              </button>
              <span class="footer-sep">•</span>
              <button class="footer-link-btn" data-tab="admin" style="color: var(--blue-rf);">
                Mode Éditeur
              </button>
            </nav>
          </div>
        </footer>

        <div id="drawer-container"></div>
      </div>
    `;

    const headerContainer = root.querySelector('#header-container');
    const mainContent = root.querySelector('#main-content');
    const drawerContainer = root.querySelector('#drawer-container');

    root.querySelectorAll('.footer-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        store.setState({ activeTab: tab });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    let currentRenderedTab = null;

    function renderCurrentView(state, changedKeys = []) {
      const { activeTab } = state;

      if (currentRenderedTab === 'simulator' && activeTab !== 'simulator') {
        cleanupProcessSimulator();
      }
      currentRenderedTab = activeTab;

      renderHeader(headerContainer);

      switch (activeTab) {
        case 'tree':
          renderTreeView(mainContent);
          break;
        case 'simulator':
          renderProcessSimulator(mainContent);
          break;
        case 'memos':
          renderMemoCenter(mainContent);
          break;
        case 'elections':
          renderElectionsView(mainContent);
          break;
        case 'admin':
          resetAdminLocalData();
          renderAdminEditor(mainContent);
          break;
        default:
          renderTreeView(mainContent);
      }

      renderDetailDrawer(drawerContainer);
    }

    store.subscribe((state, changedKeys) => {
      if (
        changedKeys.length > 0 &&
        changedKeys.every(k => k === 'selectedNode' || k === 'selectedNodeType')
      ) {
        renderDetailDrawer(drawerContainer);
        return;
      }

      if (
        state.activeTab === 'tree' &&
        changedKeys.length > 0 &&
        changedKeys.every(k => k === 'searchQuery' || k === 'selectedCategory')
      ) {
        renderTreeView(mainContent);
        const chips = headerContainer.querySelectorAll('.chip');
        chips.forEach(chip => {
          const isActive = chip.dataset.cat === state.selectedCategory;
          chip.classList.toggle('active', isActive);
          chip.setAttribute('aria-pressed', isActive);
        });
        return;
      }

      renderCurrentView(state, changedKeys);
    });

    renderCurrentView(store.getState());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
