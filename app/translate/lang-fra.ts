export const LANG_FRA_NAME = 'fra';

const titles = {
  'homePage': [
    'Quelques marques pour lesquelles j\'ai travaillé',
    'Compétences clés',
    'Derniers projets',
    'Progression'
  ],
  'aboutPage': [
    'Motivé à rester à jour',
    'Une conscience pour le design',
    'Pourquoi l\'UX m\'importe'  ,
    'Mes principaux challenges',
    'Où je vis',
    'Mes outils habituels',
    'Mes hobbies'
  ]
}


export const LANG_FRA_TRANS = {
    /*** COMMON ***/
    'more': 'Détails',
    'skills': 'Compétences',
    'git': 'Dépôt Git',
    'url': 'Lien',
    'at': 'à',
    'for': 'pour',
    'to': 'à',
    'present': 'aujourd\'hui',


    /*** HOME ***/
    // Titles
    'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
    'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
    // Texts
    'homeText0': `Salut! Je m'appelle Kevin. En tant que dévelopeur, les technologies 
                  Angular et Ionic sont ma spécialité. Alors qu'en tant que designer, les domaines du 
                  design d'interaction et d'interface sont mes domaine de prédilection.`,
    'homeText1': `Je vis sur Londres depuis Février 2016. Sur place, j'ai eu l'opportunité de
                  travailler avec des personnes venues des quatre coins du globe en même temps que j'affûtais
                  mon relationnel avec les clients et mes collègues.`,
    'homeText2': 'En savoir plus à propos de mes:',
    //Buttons
    'homeBtn0': 'Pratiques Dev',
    'homeBtn1': 'Pratiques UX',
    'homeBtn2': 'Projets',


    /*** ABOUT ME ***/
    // Titles
    'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
    'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
    'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
    'aboutTitle6': titles.aboutPage[6], 'aboutTitle7': 'Quelques compétences associées:',
    // Texts
    'aboutText0': `Les premières technologies que j'ai apprises étaient le HTML, CSS, JavaScript, SQL ainsi que le PHP. 
                  J'ai depuis décidé de me focaliser sur les technologies frontend ainsi que sur l'utilisation de
                  frameworks Javascript sophistiqués et de pré-processeurs CSS comme Sass.`,
    'aboutText1': `J'essais autant que possible de rester à jour en ce qui concerne
                  les dernières études et pratiques en termes d'UX. Celles prônées par le Nielsen & Norman Group
                  sont mes références principales d'ailleurs. Mes domaines favoris sont clairement
                  le Design d'Interaction et d'Interface. J'utilise ces compétences afin de produire des interfaces
                  consistentes et centrées utilisateur.`,
    'aboutText2': `Cela remonte à quand j'étais technicien support au CHU de Montpellier.
                  Le changement de logiciel de gestion patient avait sérieusement réduit la productivité des
                  différents personnels médicaux. principalement à cause d'une interface désordonnée et inconstante.
                  C'est la raison pour laquelle j'accorde autant d'importance au détail
                  et à l'expérience utilisateur aujourd'hui.`,


    /*** PROJECTS ***/
    // Descs
    '#projectDescHce': `Site vitrine réalisé sous WordPress pour une association de
                        coiffeuses et esthéticiennes du Sud de la France. J'ai réalisé
                        l'interface (zonings) mais je ne l'ai pas développé.`,
    '#projectDescPortfolioV1': `Premier portfolio, réalisé durant ma première année d'IUT.
                                Réalisé sous Flash et CSS3 pour les animations.
                                (Il se peut que vous ayez à activer Flash en fonction
                                de votre navigateur).`,
    '#projectDescPortfolioV2': `Portfolio animé avec Edge Animate (basé sur jQuery) et CSS3.
                              A été réalisé durant mon année de licence professionnelle.`,
    '#projectDescPortfolio3': `Ce portfolio a été réalisé sur Angular, Bootstrap 3 et Gulp.js.`,
    '#projectDescDigitela': `Site d'entreprise.`,
    '#projectDescApags': `Site pour une association liée à la recherche contre le cancer.`,
    '#projectDescEukiyo': `Plate-forme de partage de contenus artistiques -  Projet étudiant`,
    '#projectDescC2I': `Plate-forme de partage de contenus éducatifs -  Projet étudiant`,
    '#projectDescImakr': `Plate-forme E-Commerce pour produits liés à l'industrie de
                          l'imprimerie 3D`,
    '#projectDescMMF': `Plate-forme de partage de contenus et modèles liés à l'imprimerie 3D
                        pour designers et passionnés.`,
    '#projectDescDoxy': `Solution télé-médicale.`,
    '#projectDescDnG': `Application mobile CRM interne pour une agence immobilière de
                        l'Ouest de Londres (En cours de test utilisateur).`,
    '#projectDescLloyds': `Application mobile d'objets connectés (En cours de test utilisateur).`,
    /*** ROLES ***/
    // Descs
    '#roleDescSurely': `En tant que développeur frontend et designer d'interaction, mon rôle est
                        de produire des prototypes d'applications ainsi que des éléments
                        graphiques. Puis implémenter ces designs, une fois validés,
                        grâce au framework mobile hybrid Ionic. Basé sur les technologies
                        Cordova et Angular.`,
    '#roleDescDoxy': `Mon rôle était de corrigés certains problèmes liés à l'aspect
                      frontend et Xcode, ainsi qu'installer certains plugins Cordova.`,
    '#roleDescMmf': `MyMiniFactory est la filiale d'iMakr, pour lesquels j'ai travaillé
                    précédement. Mon rôle cette fois a été d'intégrer le design que j'ai produits
                    quelques temps auparavant dans la plate-forme Symfony grâce aux technologies
                    Foundation et jQuery. J'étais aussi chargé de la création et optimisation
                    des contenus graphiques.`,
    '#roleDescImakr': `Durant ma période comme Frontend developer et UX designer à iMakr,
                      j'ai eu à produire les nouveaux designs pour les sites de
                      l'entreprise et de sa filiale MyMiniFactory. Puis implémenter celui
                      d'iMakr dans sa plate-forme Prestashop dédiée grâce aux technologies
                      Bootstrap et jQuery.`,
    '#roleDescDigitela': `Ma première experience professionelle en tant que développeur
                        et designer. Je travaillais essentiellement sur les maquettes
                        ainsi que la conception des sites de nos clients avec Wordpress.
                        Ma tâche principale aura été de définir l'identité graphique
                        du site de mon employeur.`,
    '#roleDescMedasys': `Ma mission était de répondre aux problématiques rencontrées
                        par le personnel médical du CHU de Montpellier lors du déploiement
                        du nouveau SIH DxCare. Cela aura été ma première prise de conscience
                        à propos du dégré d'impact que peut avoir l'UX sur la
                        productivité d'une équipe.`,


    /*** HOBBIES ***/
    // Names
    '#hobbyModding': `Modding`,
    '#hobbyScuba': `Plongée`,
    '#hobbyCulture': `Histoire & Litterature`,
    '#hobbyWindsurf': `Planche à Voile`,
    '#hobbyHockey': `Hockey sur glace`,
    // Descs
    '#hobbyDescModding': `Premiers pas en tant que dev en créant des scripts grâce aux toolsets`,
    '#hobbyDescScuba': `Pratique depuis longtemps. Mes plongées favorites ont eu lieu à Malte.`,
    '#hobbyDescCulture': `Connaître le passé et le présent aide à entrependre le futur.`,
    '#hobbyDescWindsurf': `Plutôt difficile à pratiquer sur Londres...`,
    '#hobbyDescHockey': `Suis la NHL depuis mon enfance. Fan des Red Wings malgré qu'ils ne soient plus ce qu'ils étaient.`,


    /*** DIPLOMAS ***/
    // Names
    '#diplomaNng': `Certification UX NNG`,
    '#diplomaCs': `Certifications CodeSchool`,
    '#diplomaLp': `Licence professionelle Webdesign`,
    '#diplomaDut': `DUT Métiers du Multimedia et de l'Internet`,
    '#diplomaDu': `Diplôme Universitaire Webmaster`,
    '#diplomaBac': `Bac Scientifique`,
};
