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
    'Why do I care about UX?',
    'My main achievements',
    'Where I live',
    'My usual tools',
    'My hobbies'
  ]
}

export const LANG_ENG_TRANS = {
    /*** COMMON ***/
    'more': 'More',
    'skills': 'Skills',
    'git': 'Git Repo',
    'url': 'Link',
    'at': 'at',
    'for': 'for',
    'to': 'to',
    'present': 'present',


    /*** HOME ***/
    // Titles
    'homeTitle0': titles.homePage[0], 'homeTitle1': titles.homePage[1],
    'homeTitle2': titles.homePage[2], 'homeTitle3': titles.homePage[3],
    // Texts
    'homeText0': `Hi! My name is Kevin. As a developer, Angular and Ionic technologies are my speciality.
                  While as a designer, it would be the field of Interaction as well as UI Design.`,
    'homeText1': `I live in London since February 2016. Here, I had the opportunity to work
                  with great professionals from all around the world while sharpening my business acumen.`,
    'homeText2': 'Want to hear more about my:',
    //Buttons
    'homeBtn0': 'Dev Practices',
    'homeBtn1': 'UX Practices',
    'homeBtn2': 'Projects',


    /*** ABOUT ME ***/
    // Titles
    'aboutTitle0': titles.aboutPage[0], 'aboutTitle1': titles.aboutPage[1],
    'aboutTitle2': titles.aboutPage[2], 'aboutTitle3': titles.aboutPage[3],
    'aboutTitle4': titles.aboutPage[4], 'aboutTitle5': titles.aboutPage[5],
    'aboutTitle6': titles.aboutPage[6], 'aboutTitle7': 'Some related skills:',
    // Texts
    'aboutText0': `The first techs I learned were HTML, CSS, JavaScript, SQL and PHP. I slightly decided 
                  to focus more on frontend technologies and to lean towards sophisticated JS frameworks as well as CSS
                  pre-processors like Sass.`,
    'aboutText1': `I try to keep updated about the latest UX reports and practices.
                  The ones advocated by the Nielsen & Norman Group are my main reference.
                  My favorite fields are definitely Interaction and Interface Design.
                  I use these skills to build user-centred and consistent interfaces.`,
    'aboutText2': `It dates back from when I was support technician at the University Hospital of Montpellier.
                  The change from a previous Hospital Information System software to a new one
                  had seriously damaged the productivity of the different medical staffs.
                  Mainly because of the messy and inconsistent new interface. That is why I give so much
                  importance to the detail as well as the user experience since.`,


    /*** PROJECTS ***/
    // Descs
    '#projectDescHce': `Showcase WordPress website for a consortium of southern
                        France hairdressers and estheticians. I only designed the interface
                        (zonings, mockups).`,
    '#projectDescPortfolioV1': `First portfolio realised during my first year at the
                              institute of technology. It is animated with Flash and CSS3.
                              Flash was not already "dead" at the time and I always wanted to
                              create a website entirely based on flash. Today I would not reuse such design
                              but it has been an exciting experience though!
                              Note: You may have to activate Flash depending on your browser`,
    '#projectDescPortfolioV2': `Animated portfolio with Edge Animate and CSS3 and realised during my year as bachelor. 
                              Edge has been the failed attempt from Adobe to replace Flash by a jQuery based
                              technology. Indeed it was surprisingly working well on every browser since it was
                              using Javascript. Unfortunately the failure of this tech was mostly related to marketing 
                              and learning curve reasons.
                              However I really liked using it and made me realise of all the possibilities offered
                              by Javascript at the time (2015)`,
    '#projectDescPortfolio3': `This portfolio has been realised on Angular 2 with Bootstrap 3 and Gulp.js. 
                              It has been a very long and enlightening project because I was using it for training 
                              at Angular best practices. Practices I was later applying within the scope of my 
                              full-time role's projects. Most of the UI assets are mine, especially
                              the ones not related to any company/software logos. When I started (Oct 2016), Angular
                              was still under Beta Release Candidate version. Bootstrap 3 was the only stable option
                              as CSS framework. Next version step will be to migrate the project to the latest
                              Angular and to use Angular Material instead of bootstrap.`,
    '#projectDescDigitela': `Corporate website.`,
    '#projectDescApags': `Website for an association related to cancer research. It has been my first web project
                         for an external client. It was for my internship during my sophomore year at the institute of
                         technology. I had a lot of autonomy for the design and the communication with my employer and
                         the client has been great. Unfortunately the association has been dismantled for financial
                         reasons and the website does not exist anymore. I just have the mockups left.`,
    '#projectDescEukiyo': `Artistic contents sharing platform - Student project.`,
    '#projectDescC2I': `Educational contents sharing platform - Student project`,
    '#projectDescImakr': `E-Commerce platform for 3D printing industry related products`,
    '#projectDescMMF': `A 3D printed contents/models sharing platform for 3D designers
                        and enthusiasts`,
    '#projectDescDoxy': `Doxy.me is an innovative telemedecine based in Provo (USA - Utah) aiming to offer
                         the best possible experience to the patient and doctors using this solution.
                         I have been under contract as an Angular/Ionic consultant.`,
    '#projectDescDnG': `An internal CRM mobile app for a West London Real Estate Agent (UAT)`,
    '#projectDescLloyds': `IoT mobile app for connected objects (UAT)`,
    '#projectDescEis': `Endeavour Insurance Services is a specialist in placement of delegated authority and open
                        market business in North America and Europe.
                        My role in this projects has to serve three purposes. First and foremost implementing a new
                        design for their portal dedicated to brokers and underwriters. Then refactoring many issues
                        related to the front-end architecture of the project (misuse of bootstrap and inefficient
                        stylesheets). These changes have a long term goal of being reused client's portal projects. 
                        Finally I have to pursue the evolutions required by the client.`,
    '#projectDescMsa': `MS Amlin is an important commercial insurer operating in the Lloyd's of London and part of the
                        japanese MS & AD holding.
                        My role on this project has mostly been to fix UI issues, refactoring some templates as well as
                        creating new ones.`,


    /*** ROLES ***/
    // Descs
    '#roleDescSurely': `As Frontend Developer and interaction designer, my role is
                        first and foremost to produce prototypes of applications
                        as well as UI assets. Then implementing these designs, once validated,
                        thanks to the hybrid mobile framework Ionic,
                        built upon Cordova and Angular.`,
    '#roleDescDoxy': `My role was to fix frontend and Xcode related issues as well
                      as setting up Cordova plugins.`,
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
    '#hobbyModding': `Modding`,
    '#hobbyScuba': `Scuba-Diving`,
    '#hobbyCulture': `Cultural Stuffs`,
    '#hobbyWindsurf': `Windsurf`,
    '#hobbyHockey': `Ice Hockey`,
    // Descs
    '#hobbyDescModding': `First steps as a dev by creating event scripts via toolsets.`,
    '#hobbyDescScuba': `Practicing for a long time. My favorite spot has been Malta.`,
    '#hobbyDescCulture': `Knowing the past and the present helps getting properly into the future.`,
    '#hobbyDescWindsurf': `Quite difficult to practice in London though...`,
    '#hobbyDescHockey': `NHL follower since my childhood. Red Wings fan despite they are actually terrible.`,


    /*** DIPLOMAS ***/
    // Names
    '#diplomaNng': `NNG UX Certification`,
    '#diplomaCs': `CodeSchool Certifications `,
    '#diplomaLp': `Webdesign Bachelor's Degree`,
    '#diplomaDut': `Web & Multimedia Technologies two-years University Degree`,
    '#diplomaDu': `Webmaster University Degree`,
    '#diplomaBac': `Science High-School Degree`,
};
