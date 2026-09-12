// Fiches mémo pédagogiques et vulgarisation des rouages de la Ve République
export const memosData = [
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
