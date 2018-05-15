export const LANG_ENG_NAME = 'eng';

const titles = {
  'homePage': [
    'Some brands I have worked for',
    'Main skills',
    'Last projects',
    'Milestones'
  ],
  'aboutPage': [
    'An enthusiasm for frontend techs',
    'An awareness for design',
    'Why do I care about UX',
    'Ways to reach me',
    'Notable works',
    'Toolbox',
    'Hobbies'
  ]
}

export const LANG_ENG_TRANS = {
  /*** COMMON ***/
  'at': 'at',
  'in': 'in',
  'for': 'for',
  'to': 'to',
  'as': 'as',
  'present': 'present',
  'some': 'Some',
  'subjects': 'Subjects',

  /*** Main Titles ***/
  'Home': 'Home',
  'About me': 'About me',
  'Projects': 'Projects',
  'Education': 'Education',
  'Experience': 'Experience',
  'Skills': 'Skills',
  'Details': 'Details',
  'Cookie policy': 'Cookie policy',
  'Terms & conditions': 'Terms & conditions',

  /*** RECURRENT TITLES ***/
  'skills': 'Skills',
  'projects': 'Projects',
  'subjects': 'Subjects',
  'gallery': 'Gallery',
  
  /*** BUTTONS ***/
  'agree': 'I agree',
  'why': 'Why',
  'more-info': 'More Info',
  'more': 'More',
  'url': 'Link',

  /*** DISCLAIMERS ***/
  'confidential': 'This project is under confidentiality clause. Images, Prototypes and Docs cannot be disclosed.',
  'cookie': `I use cookies to ease your journey and experience on this portfolio.
            However I need your consent beforehand.`,
  
  /*** HOME ***/
  // Titles
  'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
  'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
  // Texts
  'homeText0': `Hi! My name is Kevin. I am a Front-End developer specialised into Angular and Ionic technologies.
                I am also a NN/g certified UX designer specialised into the field of Interaction as well as UI Design.`,
  'homeText1': `My expertise as a developer and as a designer are both issued from my academic background and
                especially my professional experiences in these fields.`,
  'homeText2': `I live in London since February 2016. Here, I had the opportunity to work
                with great professionals from all around the world while sharpening my business acumen.`,
  'homeText3': 'Want to hear more about my:',
  //Buttons
  'homeBtn0': 'Dev Practices',
  'homeBtn1': 'UX Practices',
  'homeBtn2': 'Projects',
  'homeBtn3': 'Details',


  /*** ABOUT ME ***/
  // Titles
  'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
  'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
  'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
  'aboutTitle6': titles.aboutPage[6], 'aboutTitle7': 'Some related skills:',
  // Texts
  'aboutText0': `The first techs I learned were HTML, CSS, JavaScript, SQL and PHP. I slightly decided 
                to focus more on frontend technologies and to lean towards sophisticated JS frameworks as well as CSS
                pre-processors like Sass. I usually rely on the official documentation of Angular and Ionic to stay
                up to date. When I need to learn a new technology, CodeSchool is my go to
                solution as a starting point.`,
  'aboutText1': `I try to keep informed about the latest UX reports and practices.
                The ones advocated by the Nielsen & Norman Group are my main reference.
                I follow also the documentations from UXPin and Smashing Magazine.
                My favorite fields are definitely Interaction and Interface Design.
                I use these skills to build user-centred and consistent interfaces.`,
  'aboutText2': `It dates back from when I was software support technician at the University Hospital of Montpellier.
                The change from a previous Hospital Information System software to a new one
                had seriously slowed down the productivity of the different medical staffs.
                Mainly because of the messy and inconsistent new interface. That is why I give so much
                importance to the detail as well as the user experience since.`,


  /*** PROJECTS ***/
  // Descs
  '#projectDescHce': `Showcase WordPress website for an association of southern France hairdressers and estheticians. 
                      I served as UI designer, producing zonings, mockups and UI assets with Illustrator and Photoshop.
                      I had a lot of autonomy and could even work remotely from time to time.`,
  '#projectDescPortfolioV1': `First portfolio realised during my first year at the institute of technology. It was 
                              made with Flash and CSS3. Flash was not already "dead" at the time and I always 
                              wanted to create a website entirely based on it. Today the design may sound awkward
                              but at least I managed to make it through!`,
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
                      It was built on Wordpress but has unfortunately been cancelled because of the merging of
                      the regions Burgundy and Franche-Comté and therefore of their respective universities.`,
  '#projectDescImakr': `Rebuilding iMakr's E-Commerce platform has been my very first project after I arrived in London.
                        This website is selling 3D printing industry related products and they wanted to revamp
                        the overall design to make it more accessible to newcomers in this industry. Also it was 
                        necessary to make the navigation and checkout process easier for the professionals.
                        My role has been to create a new design and present my ideas via complete mockups for each pages
                        and components. Then turning them into prototypes by using local HTML/CSS/jQuery pages.
                        Once agreed I ended up starting to develop.`,
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
  '#projectDescSurely': `Regarding an upcoming event in which my company was due to participate I had to to work
                        on its new website. Albeit the project was already running for 3 months before I started being 
                        involved, it had become necessary to finish it within a short scope. As a result I took
                        had to finish the project and match the deadline. I ended up adding the missing
                        contents and styles for the pages. I also reorganised the way the info was displayed
                        (everything was hard coded, no usage of posts). Finally I installed the plugins for SEO and
                        migrations, as well as created one for the Analytics.`,
  '#projectDescIutMtp': `My first web project as a student. The purpose was to create a new website dedicated to
                        presenting the institute of technology of Montpellier. I was in first year of computing sciences
                        and it was around 2 years before the release of HTML 5 and we were a group of 3. This may
                        look a bit old and basic by today standards but it was a great achievement for us at the time.`,


  /*** ROLES ***/
  // Descs
  '#roleDescSurely': `As Frontend Developer and interaction designer, my role is first and foremost to produce 
                      prototypes of applications as well as UI assets. Then implementing these designs, once validated,
                      thanks to the hybrid mobile framework Ionic,
                      built upon Cordova and Angular.`,
  '#roleDescDoxy': `I have been hired as consultant to review their existing Ionic 1 app and to give guidelines
                    about what could be done to make the project more maintainable .`,
  '#roleDescMmf': `MyMiniFactory is the subsidiary of iMakr, which I worked for
                  previously. My role this time was to implement the design I
                  produced earlier into its Symfony platform with Foundation and jQuery.
                  From time to time I had to create/improve UI contents.`,
  '#roleDescImakr': `During my time as Frontend developer and UX designer in iMakr,
                    I had to produce the new designs for the websites of the
                    company and its subsidiary MyMiniFactory. Then implementing the
                    iMakr's one into its Prestashop platform with Bootstrap and jQuery.`,
  '#roleDescDigitela': `My first professional experience as a developer and a designer.
                      I was mostly working on the mockups and the conception of our
                      clients' websites with Wordpress. My main task has been to
                      define the graphical identity of my company's website.`,
  '#roleDescMedasys': `I helped the medical staffs of the University Hospital of
                      Montpellier (France), during the deployment of the new HIS
                      software DxCare. It has been one of my first awareness about how
                      user experience could have an impact on the workflow of a team.`,


  /*** HOBBIES ***/
  // Names
  '#hobbyCollect': `Collectibles`,
  '#hobbyModding': `Modding`,
  '#hobbyScuba': `Scuba-Diving`,
  '#hobbyCulture': `Cultural Stuffs`,
  '#hobbyWindsurf': `Windsurf`,
  '#hobbyHockey': `Ice Hockey`,
  // Descs
  '#hobbyDescCollect': `Collecting in various domains for many years, especially trading cards.`,
  '#hobbyDescModding': `First steps as a dev by creating event scripts via toolsets.`,
  '#hobbyDescScuba': `Practicing for a long time. My favorite spot has been Malta.`,
  '#hobbyDescCulture': `Knowing the past and the present helps getting properly into the future.`,
  '#hobbyDescWindsurf': `Quite difficult to practice in London though...`,
  '#hobbyDescHockey': `NHL follower since my childhood. Red Wings fan despite their terrible results.`,


  /*** DIPLOMAS ***/
  // Names
  '#diplomaNng': `NNG UX Certification`,
  '#diplomaCs': `CodeSchool Certifications`,
  '#diplomaLp': `Webdesign Bachelor's Degree`,
  '#diplomaDut': `Web & Multimedia Technologies Two-years University Degree`,
  '#diplomaDu': `Webmaster University Degree`,
  '#diplomaBac': `High-School Degree of Science`,
};
