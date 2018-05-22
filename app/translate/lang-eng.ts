export const LANG_ENG_NAME = 'eng';

const titles = {
  'homePage': [
    'Some brands I have worked for',
    'Main skills',
    'Overview of my experiences',
    'Want to reach me?'
  ],
  'aboutPage': [
    'Performant frontend techs serve the user',
    'A design driven approach',
    'Toolbox',
    'Workflow and process',
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
  'live': 'See Live',

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
  'homeText1': `My expertise as a developer and as a designer comes from my academic background and
                especially my professional experiences in these fields.`,
  'homeText2': `I live in London since February 2016, where I got the opportunity to sharpen my skills as well as my
                business acumen.`,
  'homeText3': 'Want to hear more about my:',
  'homeText4': `I worked with clients from various industries: banking, insurance, 3D printing, healthcare, real
               estate... I know the expectations in terms of design may vary a lot from one to another
               regarding their respective cultures (corporate, national…). I have also been involved into the conception
               of products related to IoT, insurtech, e-commerce and content-sharing among others. The diversity of
               these experiences helped me for broadening my ability to adapt to any kind of project.`,
  'homeText5': `I am available in London area. For any request, the best way to contact me is via LinkedIn or Email:`,
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
                up to date. When I need to learn a new technology, CodeSchool is my go to solution as a starting point.`,
  'aboutText1': `I try to keep informed about the latest UX reports and practices. The ones advocated by the Nielsen &
                Norman Group are my main reference. I follow also the documentations from UXPin and Smashing Magazine.
                My favorite fields are definitely Interaction and Interface Design. I use these skills to build
                user-centred and consistent interfaces.`,
  'aboutText2': `I believe having an tested and agreed design (as much as possible) before any implementation is key.
                Assumptions and guessings based on a proper interpretation of a client’s need can help in certain
                situations and if they are not overused. I also consider having the right tools for any task or project
                is an investment worth if we aim to deliver a product of quality and to avoid delays.`,


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
                              the time.`,
  '#projectDescPortfolio3': `This portfolio has been realised with Angular 2, Bootstrap and Gulp. It has been a
                             long and enlightening side project because I was using it for training at Angular best 
                             practices. Most of the UI assets are mine and done in SVG format. When I started it, 
                             Angular was still in Beta RC2 version, Bootstrap 3 was the safest option as CSS framework
                             because bootstrap 4 was still in Alpha. Next step will be to migrate the project to the
                             latest Angular version and to use Angular Material instead of bootstrap.`,
  '#projectDescDigitela':  `Corporate website of my first company. I was working on it in parallel of the clients' 
                            projects when I had spare time. It was based on wordpress and the design was pretty basic 
                            without that much of content. My role has been to rebuild the information architecture. 
                            Then create a graphical identity to the site via the conception of UI assets with 
                            Illustrator and Photoshop before implementing everything in the WordPress platform.`,
  '#projectDescApags': `Website for an association related to cancer research. It has been my first web project for an 
                        external client. It was for my internship during my sophomore year at the institute of 
                        technology. I had a lot of autonomy for the design and the communication with my employer and 
                        the client has been great. Unfortunately the association has been dismantled since
                        reasons and the website does not exist anymore.`,
  '#projectDescEukiyo': `E-Ukiyo is an artistic contents sharing platform I created as an individual student project during
                        my bachelor year in Webdesign. I first presented the designs to a jury, composed of my teachers.
                        Then I developed it with Wordpress. The platform offers many profiles of users and artists
                        can upload their works. The name refers to the japanese artworks called ukiyo-e and the aim
                        was to attract mostly designers specialised into japonist art.`,
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
  '#projectDescMMF': `MyMiniFactory, a subsidiary of iMakr, aims to provide a 3D printed contents/models sharing platform
                      for 3D designers and passionates. This application was more complex than iMakr's one because
                      the site is supposed to offer lot more interactions with the different contents and user
                      profiles. My role has been similar to my contribution to iMakr. Creating new designs,
                      mocking-up/prototyping my ideas for each page and component before starting the development.`,
  '#projectDescDoxy': `Doxy.me is an innovative telemedecine solution of which the company is based 
                      in Provo (USA - Utah). This app aims to offer the best possible experience to the patient and 
                      doctors. I have worked remotely for them as an Angular/Ionic consultant.`,
  '#projectDescDnG': `An iOS ERP app for a Central London Real Estate Agent. The app is built with the framework Ionic 
                      in a way it communicates with their desktop ERP through a common API. It has been developed in a
                      way to handle different user profiles and rights. I had to intervene into the design process,
                      especially the latest phases and obviously in taking the responsibility of building the front-end
                      structure (templates, components, stylesheets) from scratch.`,
  '#projectDescLloyds': `An IoT app for iOS. It has been my first mobile app project built with the framework Ionic.
                         Its purpose is to offer the possibility to gather the data from many connected objects, display
                         and interact with them within one hub application. I have been involved in the design and
                         development process. I built all the frontend architecture from top to bottom.`,
  '#projectDescEis': `My role had to serve three purposes. First  creating and implementing a new design for their
                      portal dedicated to brokers and underwriters. Then fixing many issues related to the old front-end
                      implementation (misuse of bootstrap and Sass). Finally I had to keep on with the evolutions
                      required by the client.`,
  '#projectDescMsa': `My role on this project has mostly been to fix UI issues, refactoring some templates as well as
                      creating new ones.`,
  '#projectDescSurely': `Regarding an upcoming event in which my company was due to participate I had to to work
                        on its new website. Albeit the project was already running for three months before I started being
                        involved, it had become necessary to wrap it up it within a short scope. I ended up adding the
                        missing contents and styles for the pages. I also reorganised the way the info was displayed
                        (everything was hard coded, no usage of posts). Finally I installed the plugins for SEO and
                        migration. As well as created one for the Analytics.`,
  '#projectDescIutMtp': `My first web project as a student. The purpose was to create a new website dedicated to
                        presenting the institute of technology of Montpellier. I was in first year of computing sciences
                        and it was around two years before the release of HTML 5. We were a group of three student
                        working on it. This may look a bit old and basic by today standards but it was a great
                        achievement for us at the time.`,


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
  '#hobbyCulture': `Travelling & History`,
  '#hobbyWindsurf': `Windsurf`,
  '#hobbyHockey': `Ice Hockey`,
  // Descs
  '#hobbyDescCollect': `Collecting in various domains for many years, especially trading cards games. I never got to
                        really play them and most of the time I got new cards they ended up straight in a binder.
                        I especially collect the ones with interesting artworks. This passion for collectibles has
                        always been a family thing.`,
  '#hobbyDescModding': `First steps as a dev by creating event scripts via toolsets. I always liked to see a visual
                        result to my code and it is mostly the reason one I decided to become frontend dev.`,
  '#hobbyDescScuba': `Practicing for a long time and I have a 3rd degree CMAS. Scuba-diving taught me the importance of
                      a team work regarding the risk at diving all alone. Under water we have to look after each other
                      to prevent any danger and always give attention to a lot of parameters. My favorite spot has been
                      Malta.`,
  '#hobbyDescCulture': `I love visiting countries with a deep historical background, interesting architecture and
                        monuments. I am not really travelling to rest but rather to discover as much as I can from
                        the place I visit and its culture.`,
  '#hobbyDescWindsurf': `I used to practice a lot when I was living in the south of France. However, it has become
                         quite difficult to keep up since I moved in London...`,
  '#hobbyDescHockey': `NHL follower since my childhood. Red Wings fan despite their terrible results for a few years now.`,
  
  
  /*** Skills ***/
  '#skillAngular': `One of the main Javascript Front-End frameworks. I really like the way it has evolved since the 1st
                    version. It is obviously the Javascript framework I decided to make my speciality of.`,
  '#skillIonic': `Hybrid mobile app framework I started to get my hand on after joining Surely Group. It is based upon
                  Angular and Cordova.`,
  '#skillCordova': `Hybrid mobile app framework upon which Ionic is built. I had to learn it to implement some
                    native functionalities.`,
  '#skillTypescript': `Javascript superset I had to learn when I moved from Angular 1 to Angular 2. I really like how
                      clean and how object oriented friendly this language is.`,
  '#skillJquery': `Javascript library I use quite a lot for many projects. I started to learn it at university.
                  It is also quite useful for high fidelity HTML/CSS prototypes.`,
  '#skillSymfony': `A PHP framework on which many projects I worked on are based.`,
  '#skillSass': `My favorite CSS pre-processor. I built the stylesheets of many projects from scratch thanks to it.
                It really eases the management of stylesheets thanks to the mechanics of mixins, class extensions and so...`,
  '#skillLess': `Another CSS pre-processor I learned by curiosity.`,
  '#skillBootstrap': `The CSS framework I am the most used to. The release of the 4th version had been long awaited.`,
  '#skillFoundation': `Another CSS framework I worked on a lot while working on MyMiFactory platform.`,
  '#skillGulp': `My go to code compiler. I use it mostly for Sass compilation, minification and linting javascript.`,
  '#skillCompass': `A Sass compiler which has been abandoned since. I moved to Gulp since.`,
  '#skillAxure': `An useful tool for quick prototyping & wireframing. I used it on many projects and learned it at
                  university.`,
  '#skillCreator': `Prototyping tool based on Ionic I used a few times.`,
  '#skillXd': `Prototyping tool I mostly got my hand on by curiosity.`,
  '#skillIllus': `My favourite vector graphics tool. It is my best solution to build high fidelity and scalable
                  mockups or UI assets as quickly as possible.`,
  '#skillPhotoshop': `I was using this tool way before Illustrator and today I use it to edit raster graphics mostly`,
  '#skillIndesign': `A good tool to create brochure and documentation of high quality.`,
  '#skillEdge': `It was supposed to succeed to Flash. Unfortunately the requirement for javascript experience
                    did not attract Flash users. However I found it really interesting and scalable.`,
  '#skillFlash': `A technology that always fascinated me. A lot of people were making fun about it at the very end but
                  I believe it really brought webdesign standards of quality to a next level in the past.`,
  '#skillDrawio': `Helps for creating diagrams and technical design documentation. Probably one of the few free
                  solutions I would suggest. Its implementation with Google Drive is pretty neat.`,
  '#skillWp': `The CMS I am the most used to. Based upon PHP and MySQL.`,
  '#skillPresta': `A CMS for E-Commerce I used mostly at iMakr for my first project in UK.`,
  '#skillJs': `This popular async language has become an everyday one for me. ES 6 has brought great things.`,
  '#skillCss': `This stylesheet language has been my first step into frontend.`,
  '#skillHtml': `The inevitable markup language everybody (believe to) know.`,
  '#skillPhp': `Even though I am frontend I already had my hand on it and this experience helped a lot when moving to
                Typescript who has a quite similar syntax.`,
  '#skillSql': `One of the most popular database language I used alongside of PHP.`,
  '#skillSketch': `Simplified version of Illustrator using a great ecosystem of third party plugins.`,
  '#skillAws': `Cloud services platform I used to implement storage and analytics to an Ionic app.`,
  '#skillIonCloud': `Cloud services platform offering a great library of API, services and test tools for Ionic apps.`,
  '#skillD3': `A javascript library offering many chart interfaces (pie/bar chart...) to display data. I especially
              learned it to use dc.js which combines d3.js and crossfilters.js.`,
  '#skillGdev': `Suite of API & tools from Google. I mostly used Google Analytics/Charts/Fonts in previous projects`,


  /*** DIPLOMAS ***/
  // Names
  '#diplomaNng': `NNG UX Certification`,
  '#diplomaCs': `CodeSchool Certifications`,
  '#diplomaLp': `Webdesign Bachelor's Degree`,
  '#diplomaDut': `Web & Multimedia Technologies Two-years University Degree`,
  '#diplomaDu': `Webmaster University Degree`,
  '#diplomaBac': `High-School Degree of Science`,
};
