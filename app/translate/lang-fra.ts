export const LANG_FRA_NAME = 'fra';

const titles = {
  'homePage': [
    'Quelques marques pour lesquelles j\'ai travaillé',
    'Compétences clés',
    'Résumé de mes expériences',
    'Prendre contact?'
  ],
  'aboutPage': [
    'Une veille technologique constante',
    'Le design en premier plan',
    'Outils de travail',
    'Méthodes de travail et approche',
    'Centres d\'intérêt'
  ]
}

export const LANG_FRA_TRANS = {
  /*** COMMON ***/
  'at': 'à',
  'in': 'en',
  'for': 'pour',
  'to': 'à',
  'as': 'comme',
  'present': 'aujourd\'hui',
  'some': 'Quelques',

  /*** Main Titles ***/
  'Home': 'Accueil',
  'About me': 'Bio',
  'Projects': 'Projets',
  'Education': 'Dîplomes',
  'Experience': 'Expérience',
  'Skills': 'Compétences',
  'Details': 'Détails',
  'Cookie policy': 'Politique de cookies',
  'Terms & conditions': 'Termes & conditions',

  /*** RECURRENT TITLES ***/
  'skills': 'Compétences',
  'projects': 'Projets',
  'subjects': 'Matières',
  'gallery': 'Gallerie',
  
  /*** BUTTONS ***/
  'agree': 'J\'accepte',
  'why': 'Pourquoi',
  'more-info': 'Infos',
  'more': 'Détails',
  'live': 'Voir Live',

  /*** DISCLAIMERS ***/
  'confidential': `Ce projet est soumis à une clause de confidentialité. 
                   Aucune image, prototype ou documentation ne peut être dévoilée.`,
  'cookie': `J'utilise les cookies afin d'améliorer votre navigation et votre expérience sur mon portfolio.
             Cependant j'ai besoin de votre permission en premier.`,

  /*** HOME ***/
  // Titles
  'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
  'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
  // Texts
  'homeText0': `Salut! Je m'appelle Kevin. En tant que dévelopeur, les technologies 
                Angular et Ionic sont ma spécialité. Alors qu'en tant que designer, les domaines du 
                design d'interaction et d'interface sont mes domaine de prédilection.`,
  'homeText1': `Mon expertise en tant que développeur et designer est issue de mon background académique mais aussi et
                surtout de mes expériences professionnelles dans ces domaines.`,
  'homeText2': `Je vis sur Londres depuis Février 2016. Sur place, j'ai eu l'opportunité de développer mes compétences
                ainsi que mon relationnel avec les clients et mes collègues.`,
  'homeText3': 'En savoir plus à propos de mes:',
  'homeText4': `J’ai eu la chance de travailler avec des clients issus de différents secteurs: bancaire, assurance,
                imprimerie 3D, santé, immobilier… Je suis conscient que les attentes en termes de design peuvent varier
                de l’un à l’autre  en fonction de leur culture respective (d’entreprise, nationale…). J’ai aussi été
                impliqué dans la conception de produits liés aux objets connectés, l’insurtech, l’e-commerce, le partage
                de contenus parmi tant d’autres. La diversité de ces expériences m’a aidé à élargir ma capacité à
                m’adapter à tout type de projet.`,
  'homeText5': `Je suis disponible dans les alentours de Londres. Pour toutes requêtes, les meilleurs moyens de me
                contacter sont soit via LinkedIn, soit via email:`,
  //Buttons
  'homeBtn0': 'Pratiques Dev',
  'homeBtn1': 'Pratiques UX',
  'homeBtn2': 'Projets',
  'homeBtn3': 'Coordonnées',


  /*** ABOUT ME ***/
  // Titles
  'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
  'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
  'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
  'aboutTitle6': titles.aboutPage[6], 'aboutTitle7': 'Quelques compétences associées:',
  // Texts
  'aboutText0': `Les premières technologies que j'ai apprises étaient le HTML, CSS, JavaScript, SQL ainsi que PHP.
                J'ai depuis décidé de me focaliser sur les technologies frontend ainsi que sur l'utilisation de
                frameworks Javascript sophistiqués et de pré-processeurs CSS comme Sass. Je me réfère essentiellement
                aux documentations d’Angular et Ionic pour rester à jour. Quand j’ai besoin d’apprendre une nouvelle
                technologie, Codeschool est souvent mon point de départ.`,
  'aboutText1': `J'essaie autant que possible de rester à jour en ce qui concerne
                les dernières études et pratiques en termes d'UX. Celles prônées par le Nielsen & Norman Group
                sont mes références principales d'ailleurs. Je suis aussi les documentations d’UXPin et de Smashing
                Magazine. Mes domaines favoris sont clairement le Design d'Interaction et d'Interface. J'utilise ces
                compétences afin de produire des interfaces consistentes et centrées utilisateur.`,
  'aboutText2': `Je pense qu’avoir un design approuvé et testé (autant que possible) avant toute phase de développement
                 est nécessaire. Supposer et deviner peut aider si et seulement si le besoin du client est correctement
                 interprété et si ces approches ne se révèlent pas trop souvent récurrentes. Je considère aussi qu’avoir
                 les outils adéquates pour toute tâche ou projet est un investissement obligatoire si notre objectif et
                 de délivrer un produit de qualité et d’éviter les retards.`,


  /*** PROJECTS ***/
  // Descs
  '#projectDescHce': `Site vitrine pour une association de coiffeurs et esthéticiens basés dans le Sud de la France.
                      Mon rôle était celui de designer d'interface, consistant à produire des zonings, maquettes et
                      éléments graphiques avec Illustrator et Photoshop. J'ai eu beaucoup d'autonomie et pouvais même
                      avancer en télétravail quelquefois.`,
  '#projectDescPortfolioV1': `Premier portfolio réalisé durant ma première année à l'IUT fait avec Flash et HTML/CSS.
                              Flash n'était pas encore une technologie obsolète à l'époque et j'avais toujours souhaité
                              créer un site entiérement basé dessus. Aujourd'hui le design peut paraître quelque peu
                              non-orthodoxe mais j'aurais atteint mon objectif au moins!`,
  '#projectDescPortfolioV2': `Mon deuxième portfolio, réalisé pendant mon année de licence pro avec Edge Animate
                              et CSS3. A cette époque, Edge était une tentative par Adobe pour remplacer Flash par une
                              technologie basée sur jQuery. Cela fonctionne toujours sur tous les navigateurs.`,
  '#projectDescPortfolio3': `Ce portfolio a été réalisé avec Angular 2, Bootstrap et Gulp. Cela a été un projet long et
                            intéressant car il m’aura aussi servi de terrain d’apprentissage pour Angular. La majorité
                            des éléments graphiques m'appartiennent et sont en format SVG. Quand je l’ai démarré,
                            Angular était encore en version beta RC2. Bootstrap 3 était l’option la plus sûre car la
                            version 4 était encore en Alpha. La prochaine étape sera la migration vers la dernière
                            version d’Angular et vers Angular Material au lieu de Bootstrap. `,
  '#projectDescDigitela':  `Le site vitrine de mon premier employeur. Je travaillais dessus en parallèle des projets de
                            nos clients sur mon temps libre. Il s'agissait d'un site Wordpress et le design était plutôt
                            basique sans trop de contenus. Mon rôle a été de revoir l'architecture de l'information, puis
                            créer une identité graphique via la conception d'éléments graphiques avec Illustrator et
                            Photoshop avant toute implémentation avec Wordpress.`,
  '#projectDescApags': `Site pour une association associée à la recherche contre le cancer. Cela aura été mon premier
                        projet destiné à un client extérieur et aura fait l’objet de mon stage de dernière année d’IUT.
                        J’ai eu beaucoup d’autonomie en ce qui concerne le design et la communication avec mon employeur
                        ainsi que le client était super. Malheureusement l’association n’existe plus depuis et de même
                        pour le site web.`,
  '#projectDescEukiyo': `E-Ukiyo est une platform de partage de contenus artistiques que j’ai conçue pour mon projet
                        individuel étudiant durant mon année de licence en webdesign. J’ai en premier lieu présenté mes
                        designs à un jury composé de mes professeurs avant de démarrer le développement avec wordpress.
                        Le site offre plusieurs profils d’utilisateur et les artistes peuvent uploader leurs
                        réalisations. Le nom fait référence aux artworks japonais appelés ukiyo-e et le but est
                        d’attirer les designers spécialistes en art japoniste. `,
  '#projectDescC2I': `C2I Réseaux est une plate-forme de partage de contenus éducatifs ayant fait l’objet d’un projet
                      étudiant de groupe. Elle était supposée permettre aux professeurs impliqués dans le C2I de
                      partager leurs contenus (leçons, vidéos conférences, podcasts) entre eux et avec les étudiants.
                      J’ai cumulé les rôles de chef de projet et d’intégrateur web dans ce projet. Ce dernier était
                      construit avec Wordpress mais a malheureusement dû être annulé dû à la fusion des région de
                      Bourgogne et de Franch-Comté et de leurs universités respectives à l’époque.`,
  '#projectDescImakr': `Refondre la plate-forme e-commerce d’iMakr a été mon premier projet après mon arrivé à Londres.
                        Ce site est dédié à la vente de produits associés à l’imprimerie 3D et il fallait revoir
                        entièrement la charte graphique afin de le rendre plus accessibles pour les néophytes. Il était
                        aussi nécessaire de rendre la navigation et la procédure de paiement plus aisée pour les
                        professionnels. Mon rôle aura été de concevoir le nouveau design ainsi que présenter mes idées
                        au travers de maquettes pour chaque page et composante. Après quoi je devais les convertir en
                        prototypes HTML/CSS/jQuery. Une fois validés j’ai pu démarrer le développement.`,
  '#projectDescMMF': `MyMiniFactory, une filiale d’iMakr, a pour but de fournir une plate-forme de partage de contenus
                      et modèles 3D à imprimer pour les designers 3D et les passionnés. Ce projet était légèrement plus
                      complexe que celui d’iMakr car il était supposé offrir plus de possibilités d'interaction avec les
                      différents contenus et les profils des autres utilisateurs. Mon rôle était similaire à celui que
                      j’occupais avec iMakr. Consistant à créer de nouveaux designs, maquettes et prototypes avant de
                      démarrer le développement.`,
  '#projectDescDoxy': `Doxy.me est une solution de télémédecine innovante dont le siège social est basé à Provo
                      (USA - Utah). Cette application a pour but d’offrir la meilleure expérience possible aux patients
                      et aux docteurs. Je télé-travaillais pour eux en tant que consultant Angular/Ionic.`,
  '#projectDescDnG': `Une application iOS ERP pour une agence immobilière du centre de Londres. Elles est construite à
                      partir du framework Ionic de manière à communiquer avec leurs postes clients À travers une API.
                      Elle a aussi été développée de manière à gérer plusieurs profils utilisateurs et droits. Je suis
                      intervenu dans les phases de designs (tardivement) et ai pris la responsabilité de construire la
                      structure frontend  (templates, components, stylesheets) à partir de zéro.`,
  '#projectDescLloyds': `Une application d’objets connectés pour iOS. Cela aura été mon premier projet d’application
                        mobile avec le framework Ionic. Sa finalité est d’offrir la possibilité de rassembler les
                        données envoyées par divers objets connectés, les afficher et interagir avec via une seule
                        application. J’ai été impliqué dans les processus de design et de développement. J’ai construit
                        toute l’architecture frontend du début à la fin.`,
  '#projectDescEis': `Mon rôle aura servi 3 buts. Tout d’abord de créer implémenter un nouveau design pour leur portail
                      dédié aux courtiers et assureurs. Ensuite corriger certains problèmes issus à une précédente
                      mauvaise implémentation frontend (mauvaise utilisation de bootstrap et de Sass). Finalement j’ai
                      dû poursuivre les évolutions futures du site.`,
  '#projectDescMsa': `Ici, ma fonction aura principalement été de corriger certaines erreurs relatives au frontend,
                      reconstruire et créer certaines pages.`,
  '#projectDescSurely': `En regard d’un événement imminent auquel mon entreprise allait prendre part, j’ai eu à
                        travailler sur son nouveau site vitrine. Bien que le projet eut été déjà en cours pour plus de
                        trois mois avant que je sois impliqué dedans, il était devenu nécessaire de le boucler au plus
                        vite. J’ai alors dû ajouter les contenus et styles manquants pour chaque page. J’ai aussi
                        réorganisé la façon dont l’information était intégrée. Enfin J’ai installé les plugins pour le
                        SEO et la migration. J’ai aussi créé un plugin afin d’intégrer Google Analytics.`,
  '#projectDescIutMtp': `Mon premier projet en tant qu'étudiant. Le but était de créer un nouveau site de présentation
                        de l’IUT de Montpellier. Ce site a été conçu 2 ans avant la standardisation d’HTML5 en groupe de
                        trois. Par conséquent il paraîtra sûrement dépassé et basique selon les standards actuels mais
                        cela aura été un grand pas en avant pour notre groupe à l’époque.`,

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
  '#hobbyCollect': `Collections`,
  '#hobbyModding': `Modding`,
  '#hobbyScuba': `Plongée`,
  '#hobbyCulture': `Voyages & Histoire`,
  '#hobbyWindsurf': `Planche à Voile`,
  '#hobbyHockey': `Hockey sur glace`,
  // Descs
  '#hobbyDescCollect': `Collectionne dans plusieurs domaines depuis mon enfance et surtout les cartes à échanger. Je ne
                        les ai jamais réellement jouées car la plupart du temps que j’en avais des nouvelles elles
                        atterrissaient directement dans un album. I collectionne surtout celles avec une illustration
                        intéressante. Cette passion pour les collections a toujours été un truc de famille.`,
  '#hobbyDescModding': `Premiers pas en tant que dev en créant des scripts grâce aux toolsets. J’ai toujours aimé avoir
                        un rendu visuel inhérent à mon code et c’est la raison principale pour laquelle j’ai décidé de
                        devenir développeur frontend.`,
  '#hobbyDescScuba': `Pratique depuis longtemps et je suis détenteur d’un niveau 3 CMAS. La plongée m’a appris
                      l’importance du travail d’équipe considérant le risque relatif au fait de plonger seul. Sous l’eau
                      nous devons veiller les uns sur les autres afin de nous prémunir de tout danger. Nous devons aussi
                      accorder de notre attention à plusieurs paramètres. Mes plongées favorites ont eu lieu à Malte.`,
  '#hobbyDescCulture': `J’aime visiter des pays dotés d’une riche histoire, architecture et de plusieurs monuments. Je
                        ne voyage pas vraiment pour me reposer mais plus pour découvrir autant que je peux de ce que
                        l’endroit que je visite a à m’offrir et de sa culture.`,
  '#hobbyDescWindsurf': `J’avais l’habitude d’en faire souvent quand je vivais dans le sud de la France. Cependant c’est
                         devenu plutôt difficile de continuer à pratiquer depuis que j’ai bougé sur Londres...`,
  '#hobbyDescHockey': `Je suis la NHL depuis mon enfance. Fan des Red Wings malgré qu'ils ne soient plus ce qu'ils
                       étaient depuis quelques années maintenant.`,
  
  
  /*** Skills ***/
  '#skillAngular': `Un des principaux frameworks frontend Javascript. J'aime la façon dont il a évolué depuis la
                    version 1. J'ai bien évidement décidé d'en faire ma spécialité.`,
  '#skillIonic': `Un framework mobile hybride auquel j'ai été introduit en joignant Surely. Basé
                  sur les technologies Ionic et Angular`,
  '#skillCordova': `Un framework mobile hybride à partir duquel Ionic est construit. M'a permis d'implémenter certaines
                    fonctionnalités natives`,
  '#skillTypescript': `Un superset Javascript que j'ai appris pour transiter d'Angular 1 à Angular 2. Je trouve ce langage
                      relativement propre and favorable au développement orienté object`,
  '#skillJquery': `Une librairie Javascript que j'utilise dans plusieurs projets et que j'ai commencé à apprendre à
                  l'université. Se révèle aussi utile pour produire des prototypes HTML/CSS.`,
  '#skillSymfony': `Un framework PHP à partir duquel plusieurs de mes projets sont basés.`,
  '#skillSass': `Mon pre-processeur CSS favoris. J'ai construit les feuilles de styles de plusieurs projets grâce à lui.`,
  '#skillLess': `Un autre pre-processeur CSS que j'ai appris par curiosité.`,
  '#skillBootstrap': `Le framework CSS auquel je suis le plus habitué. J'ai attendu avec impatience La sortie de la version 4.`,
  '#skillFoundation': `Un autre framework CSS avec lequel j'ai travaillé pour la plateforme de MyMiFactory.`,
  '#skillGulp': `Mon compilateur de code favoris. Je l'utilise essentiellement pour compiler, minifier et linter mes
                fichiers Javascript et Sass.`,
  '#skillCompass': `Un compilateur Sass dont le développement a cessé. J'utilise Gulp depuis.`,
  '#skillAxure': `Un outil de prototypage et de maquettage rapide. Je l'au utilisé pour plusieurs projet et je le maîtrise
                  depuis l'université.`,
  '#skillCreator': `Un outil de prototypage basé sur Ionic que j'ai quelquefois utilisé.`,
  '#skillXd': `Un outil de prototypage que j'ai appris par curiosité.`,
  '#skillIllus': `Mon outil de graphisme vectoriem favoris. Parfait pour créer des maquettes et des éléments d'interface
                  de qualité, modulables et de façon productive.`,
  '#skillPhotoshop': `J'utilisais cet outil bien avant Illustrator. Aujourd'hui je l'utilise essentiellement pour éditer
                      des éléments graphiques pixellisés.`,
  '#skillIndesign': `Un excellent logiciel pour créer des brochures etd es documentations de qualité.`,
  '#skillEdge': `Ce logiciel était censé succéder à Flash. Malheureusement le fait qu'il nécessite une certaine maîtrise
                du javascript n'était pas du goût des utilisateurs de Flash.`,
  '#skillFlash': `Une technologie qui m'a toujours fasciné. Beaucoup l'ont tourné en dérision vers la fin mais
                  je pense qu'elle a réellement porté le webdesign vers un autre niveau de qualité à l'époque`,
  '#skillDrawio': `Permet de créer des diagrammes et des documentations techniques. Probablement une des rares solutions
                  gratuites que je pourrais suggèrerer de par sa combinaison avec Google Drive..`,
  '#skillWp': `Le CMS auquel je suis le plus habitué. Basé sur PHP et MySQL.`,
  '#skillPresta': `Un CMS pour l'E-Commerce que j'ai surtout utilisé à iMakr pour mon premier projet à Londres.`,
  '#skillJs': `Ce langage asynchrone est devenu une langue de tous les jours pour moi. ES 6 a beaucoup apporté.`,
  '#skillCss': `Ce langage pour feuilles de styles ma accompagné durant mes premiers pas d'intégrateur web.`,
  '#skillHtml': `Le langage de balisage que tout le monde connaît.`,
  '#skillPhp': `Même si je suis intégrateur web, j'ai déjà été amené à utiliser ce langage à plusieurs reprises et cela
                m'a servi quand j'ai eu à apprendre Typescript qui a une syntaxe similaire.`,
  '#skillSql': `Un des langages de base de données les plus populaire.`,
  '#skillSketch': `Une version simplifée d'Illustrator exploitant une vaste librairie de plugins tiers.`,
  '#skillAws': `Plate-forme de services cloud que j'ai utilisée pour intégrer des services de stockage de données et
                d'analytics dans une application Ionic`,
  '#skillIonCloud': `Plate-forme de services cloud offrant une librairie de services et d'outils de test pour
                    applications Ionic.`,
  '#skillD3': `Une librairies Javascript permettant d'afficher des données tiers sous plusieurs formats graphiques
              (camemberts, graphs...). J'ai dû apprendre à m'en servir pour pouvoir utiliser la librairie dc.js qui
              repose sur les librairie d3.js et crossfilters.js.`,
  '#skillGdev': `Éventail d'API et d'outils mis à disposition par Google. J'ai surtout été amené à utiliser Google
                Analytics/Charts/Fonts dans mes projets.`,


  /*** DIPLOMAS ***/
  // Names
  '#diplomaNng': `Certification UX NNG`,
  '#diplomaCs': `Certifications CodeSchool`,
  '#diplomaLp': `Licence professionelle Webdesign`,
  '#diplomaDut': `DUT Métiers du Multimedia et de l'Internet`,
  '#diplomaDu': `Diplôme Universitaire Webmaster`,
  '#diplomaBac': `Bac Scientifique`,
};
