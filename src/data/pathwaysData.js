// Scénarios interactifs d'itinéraires institutionnels avec mise en surbrillance de l'arbre
export const pathwaysData = [
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
