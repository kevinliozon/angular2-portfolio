export const LANG_FRA_NAME = 'fra';

const titles = {
  'homePage': [
    'Quelques marques pour lesquelles j\'ai travaillé',
    'Compétences clés',
    'Derniers projets',
    'Progression'
  ],
  'aboutPage': [
    'Une veille technologique constante',
    'Un œil pour le design',
    'Pourquoi l\'UX m\'importe'  ,
    'Prendre contact?',
    'Travaux notables',
    'Outils de travail',
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
  'url': 'Lien',

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
  'homeText1': `Je vis sur Londres depuis Février 2016. Sur place, j'ai eu l'opportunité de
                travailler avec des personnes venues des quatre coins du globe en même temps que j'affûtais
                mon relationnel avec les clients et mes collègues.`,
  'homeText2': 'En savoir plus à propos de mes:',
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
  '#projectDescHce': `Site vitrine pour une association de coiffeurs et esthéticiens basés dans le Sud de la France.
                      Mon rôle était celui de designer d'interface, consistant à produire des zonings, maquettes et
                      éléments graphiques avec Illustrator et Photoshop. J'ai eu beaucoup d'autonomie et pouvais même
                      avancer en télétravail quelquefois.`,
  '#projectDescPortfolioV1': `Premier portfolio réalisé durant ma première année à l'IUT fait avec Flash et HTML/CSS.
                              Flash n'était pas encore une technologie obsolète à l'époque et j'avais toujours souhaité
                              créer un site entiérement basé dessus. Aujourd'hui le design peut paraître quelque peu
                              non-orthodoxe mais j'aurais atteint mon objectif au moins!`,
  '#projectDescPortfolioV2': `My second portfolio, made during my year as bachelor with Edge Animate and CSS3. At the 
                              time Edge was an attempt by Adobe to replace Flash by a jQuery based technology. It is 
                              still working pretty well on every browsers. Unfortunately the reason why they stopped 
                              developing Edge was mostly related to marketing and learning curve reasons. However I 
                              really liked using it and made me realise of all the possibilities offered by jQuery at 
                              the time`,
  '#projectDescPortfolio3': `This portfolio has been realised with Angular 2, Bootstrap 3 and Gulp.js. It has been a 
                             long and enlightening side project because I was using it for training at Angular best 
                             practices. Most of the UI assets are mine and done in SVG format. When I started it, 
                             Angular was still in Beta RC2 version. Bootstrap 3 was the "safest" option as CSS framework. 
                             Next step will be to migrate the project to the latest Angular version and to use 
                             Angular Material instead of bootstrap.`,
  '#projectDescDigitela':  `Corporate website of my first company. I was working on it in parallel of the clients' 
                            projects when I had spare time. It was based on wordpress and the design was pretty basic 
                            without that much of content. My role has been to rebuild the information architecture. 
                            Then create a graphical identity to the site via the conception of UI assets with 
                            Illustrator and Photoshop. Before implementing everything in the WordPress platform.`,
  '#projectDescApags': `Website for an association related to cancer research. It has been my first web project for an 
                        external client. It was for my internship during my sophomore year at the institute of 
                        technology. I had a lot of autonomy for the design and the communication with my employer and 
                        the client has been great. Unfortunately the association has been dismantled for financial 
                        reasons and the website does not exist anymore. I just have the mockups left.`,
  '#projectDescEukiyo': `E-Ukiyo is an artistic/media contents sharing platform I created as an individual student project during 
                        my bachelor year in Webdesign. I first presented the designs to a jury, composed of my teachers.
                        Then I developed it with Wordpress. The platform offers many profiles of users and artists
                        can upload their works. The name refers to the japanese artworks called ukiyo-e and the aim
                        was to attract mostly designers specialised into japanese and japonist art. However I prefered
                        to cancel this project due to personal reasons.`,
  '#projectDescC2I': `C2I Réseaux is an educational contents sharing platform made for student project in group.
                      It was supposed to allow teachers involved into the C2I (Internet & Computing Certicate)
                      to share their contents (courses, videos conference, podcasts) between themselves and
                      with the students. I cumulated both the roles of project manager and front-end dev in this project.
                      The project was buil on Wordpress but has unfortunately been cancelledbecause of budget
                      restrictions.`,
  '#projectDescImakr': `Rebuilding iMakr's E-Commerce platform has been my very first project after I arrived in London.
                        This website is selling 3D printing industry related products and they wanted to revamp
                        the overall design to make it more accessible to newcomers in this industry. Also it was 
                        necessary to make the navigation and checkout process easier for the professionals.
                        My role has been first and foremost to create a new design and present my ideas via
                        complete mockups for each pages and components. Then turning them into prototypes by using
                        local HTML/CSS/jQuery pages. Once agreed I ended up starting to develop.`,
  '#projectDescMMF': `MyMiniFactory, a subsidiary of iMakr, aims to provide 3D printed contents/models sharing platform 
                      for 3D designers and passionates. This application was more complex than iMakr's one because
                      the site is supposed to offer lot more interactions with the different contents and user
                      profiles. My role has been similar to my contribution to iMakr. Creating new designs,
                      mocking-up/prototyping my ideas for each page and component. Before starting the development.`,
  '#projectDescDoxy': `Doxy.me is an innovative telemedecine solution of which the company is based 
                      in Provo (USA - Utah). This app aims to offer the best possible experience to the patient and 
                      doctors. I have worked remotely for them as an Angular/Ionic consultant.`,
  '#projectDescDnG': `An iOS ERP app for a Central London Real Estate Agent. The app is built with the framework Ionic 
                      in a way it communicates with their desktop ERP through a common API. It has been developed in way 
                      to handle different user profiles and rights. I had to intervene into the design process, 
                      especially the latest phases and obviously in taking the responsability of building the front-end 
                      structure (templates, components, stylesheets) from scratch.`,
  '#projectDescLloyds': `An IoT app for iOS. It has been my first mobile app project built with the framework Ionic.
                         Its purpose is offering the possibility to gather the data from many connected objects
                         and display them within one hub application. It offers also the ability to scan many online
                         items such as tablets, wifi routers and so on in the aim to register them and pre-filling the 
                         relevant info: photo, notes, mac address and value. Offline items can also be added.`,
  '#projectDescEis': `Endeavour Insurance Services is a specialist in placement of delegated authority and open
                      market business in North America and Europe. My role had to serve three purposes. First 
                      implementing a new design for their portal dedicated to brokers and underwriters. Then fixing 
                      many issues related to the old front-end implementation (misuse of bootstrap and stylesheets). 
                      Finally I had to keep on with the evolutions required by the client.`,
  '#projectDescMsa': `MS Amlin is an important commercial insurer operating in the Lloyd's of London and part of the
                      japanese MS & AD holding. My role on this project has mostly been to fix UI issues, refactoring
                      some templates as well as creating new ones.`,
  '#projectDescSurely': `Regarding an upcoming Hackathon in which my company was due to participate I had to to work
                        on its new website. Albeit the project was already running for 3 months before I started being 
                        involved, it had become necessary to finish it within a short scope. As a result I took
                        the responsability to finish the project. However I not only ended up adding the missing
                        contents and styling the pages but also reorganising the way the info were displayed
                        (everything was hard coded, no usage of posts). I also installed the plugins for SEO (Yoast) and
                        migrations (All-In-One) as well as created one for the Analytics.`,

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
  '#hobbyCulture': `Histoire & Litterature`,
  '#hobbyWindsurf': `Planche à Voile`,
  '#hobbyHockey': `Hockey sur glace`,
  // Descs
  '#hobbyDescCollect': `Collectionne dans plusieurs domaines depuis mon enfance et surtout les cartes à échanger.`,
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
