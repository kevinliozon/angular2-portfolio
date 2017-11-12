export const LANG_FRA_NAME = 'fra';
const titles = {
  'homePage': [
    'J\'ai travaillé pour eux',
    'Mes compétences principales',
    'Mes outils favoris',
    'Jalons'
  ],
  'aboutPage': [
    'Mes débuts',
    'Dévelopeur Front-End',
    'UX Designer',
    'Mes principaux challenges',
    'Où me trouver',
    'Mes outils favoris',
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
    /*** HOME ***/
    // Titles
    'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
    'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
    'homeText0': `Bonjour! Mon nom est Kévin, Front-End Developer & UX Designer.
                  En tant que dévelopeur les technologies Angular et Ionic sont ma
                  spécialité. En tant que designer, le Design d'interaction (IxD)
                  est mon domaine de prédilection.`,
    /*** ABOUT ME ***/
    // Titles
    'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
    'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
    'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
    'aboutTitle6': titles.aboutPage[6],
    // Texts
    'aboutText0': `Ce qui m'a ammené à me diriger vers la voie de la conception et du design
                  d'applications remonte à quand j'étais technicien support de terrain
                  au CHU de Montpellier, durant le déploiement de leur nouveau logiciel de
                  gestion patient. Le passage brutal d'une interface à une autre a entraîné
                  énormément de problèmes et sérieusement endommagé la productivité
                  des différents personnels médicaux; forcés à s'adapter à un nouveau
                  logiciel par conséquent. C'est la raison pour laquelle j'accorde tant
                  d'importance à l'expérience utilisateur.`,
    'aboutText1': `Vu que mes premières technologies étaient le HTML, CSS, JavaScript
                  ainsi que le PHP. J'ai depuis évolué vers l'utilisation de pré-processeurs CSS
                  ainsi que de framework et librairies JavaScript. Même si j'ai auparavant eu
                  des expériences liées à l'aspect backend (PHP, SQL); j'ai décidé de me
                  dédier essentiellement aux technologies frontend. Me servant de mes
                  compétences de designer pour créer des interfaces ergonomiques et consistates.`,
    'aboutText2': `J'essais autant que possible de rester à jour en ce qui concerne
                  les dernières études et méthodologies en termes d'UX. Le Nielsen & Norman Group
                  est ma référence principale d'ailleurs. Mon domaine favoris est clairement
                  le Design d'Interaction (IxD). Parce qu'il me semble évident, en tant
                  que dévelopeur, de tester la viabilité des interaction en premier,
                  au travers de prototypes, avant d'implémenter quoique ce soit.`,
    /*** PROJECTS ***/
    // Descs
    '#projectDescHce': `Site vitrine réalisé sous WordPress pour une association de
                        coiffeuses et esthéticiennes du Sud de la France. J'ai réalisé
                        l'interface (zonings) mais je ne l'ai pas développé.`,
    '#projectDescPortfolioV1': `Premier portfolio, réalisé durant ma première année d'IUT.
                                Réalisé sous Flash et CSS3 pour les animations.
                                (Il se peut que vous ayez à activer Flash en fonction
                                de votre navigateur).`,
    '#projectDescPortfolio2': `Portfolio animé avec Edge Animate (basé sur jQuery) et CSS3.
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
    '#hobbyHistLit': `Histoire & Litterature`,
    '#hobbyWindsurf': `Planche à Voile`,
    '#hobbyHockey': `Hockey sur glace`,
    /*** DIPLOMAS ***/
    // Names
    '#diplomaNng': `Certification UX NNG`,
    '#diplomaCs': `Certifications CodeSchool`,
    '#diplomaLp': `Licence professionelle Webdesign`,
    '#diplomaDut': `DUT Métiers du Multimedia et de l'Internet`,
    '#diplomaDu': `Diplôme Universitaire Webmaster`,
    '#diplomaBac': `Bac Scientifique`,
};
