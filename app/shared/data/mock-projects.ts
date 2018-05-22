import { Project } from '../../interfaces/project.interface';

export let PROJECTS: Project[] = [{
  'id': '#project16',
  'name': 'This Portfolio',
  'image': '../../../assets/img/svg/projects/portfoliov3.svg',
  'featured': true,
  'active': true,
  'category': 'Portfolio',
  'company': null,
  'client': null,
  'desc': '#projectDescPortfolio3',
  'techs': [
    {
      'name': 'Angular',
      'logo': '../../../assets/img/svg/skills/angular.svg'
    },
    {
      'name': 'Sass',
      'logo': '../../../assets/img/svg/skills/sass.svg'
    },
    {
      'name': 'Gulp',
      'logo': '../../../assets/img/svg/skills/gulp.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2017-01-01',
    'end': null
  },
  'confidentiality': null,
  'url': 'https://kevinliozon.com/',
  'github': 'https://github.com/kevinliozon/angular2-portfolio'
},
{
  'id': '#project15',
  'name': 'Surely Group',
  'image': '../../../assets/img/svg/companies/surely.svg',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Surely Group Ltd',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://surelygroup.com/',
    'role': 'Front-End Developer & UI Designer'
  },
  'client': {
    'name': 'Surely Group Ltd',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://surelygroup.com/',
    'featured': true
  },
  'desc': '#projectDescSurely',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wp.svg'
    },
    {
      'name': 'PHP',
      'logo': '../../../assets/img/svg/skills/php.svg'
    },
    {
      'name': 'Javascript',
      'logo': '../../../assets/img/svg/skills/javascript.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2018-04-13',
    'end': '2018-04-20'
  },
  'confidentiality': null,
  'url': 'https://surelygroup.com/',
  'github': null
},
{
  'id': '#project14',
  'name': 'EIS Broker Portal',
  'image': '../../../assets/img/svg/projects/insurance.svg',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Surely Group',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://surelygroup.com/',
    'role': 'Front-End Developer & UI Designer'
  },
  'client': {
    'name': 'Endeavour Insurance Service',
    'logo': '../../../assets/img/svg/projects/insurance.svg',
    'url': 'https://www.endeavouris.com/',
    'featured': true
  },
  'desc': '#projectDescEis',
  'techs': [
    {
      'name': 'Symfony',
      'logo': '../../../assets/img/svg/skills/symfony.svg'
    },
    {
      'name': 'Bootstrap',
      'logo': '../../../assets/img/svg/skills/bootstrap.svg'
    },
    {
      'name': 'jQuery',
      'logo': '../../../assets/img/svg/skills/jquery.svg'
    },
    {
      'name': 'SASS',
      'logo': '../../../assets/img/svg/skills/sass.svg'
    },
    {
      'name': 'Gulp',
      'logo': '../../../assets/img/svg/skills/gulp.svg'
    },
    {
      'name': 'D3.js',
      'logo': '../../../assets/img/svg/skills/d3.svg'
    },
    {
      'name': 'Google Developers',
      'logo': '../../../assets/img/svg/skills/googledev.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2017-11-15',
    'end': null
  },
  'confidentiality': 'A Lloyd\'s of London insurer',
  'url': null, //'https://www.eisportal.com/login'
  'github': null
},
{
  'id': '#project13',
  'name': 'MS Amlin',
  'image': '../../../assets/img/svg/projects/insurance.svg',
  'featured': false,
  'active': false,
  'category': 'Web App',
  'company': {
    'name': 'Surely Group',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://surelygroup.com/',
    'role': 'Front-End Developer'
  },
  'client': {
    'name': 'MS Amlin',
    'logo': '../../../assets/img/svg/projects/insurance.svg',
    'url': 'https://www.msamlin.com/en/index.html',
    'featured': true
  },
  'desc': '#projectDescMsa',
  'techs': [{
    'name': 'Symfony',
    'logo': '../../../assets/img/svg/skills/symfony.svg'
  },
  {
    'name': 'Bootstrap',
    'logo': '../../../assets/img/svg/skills/bootstrap.svg'
  },
  {
    'name': 'jQuery',
    'logo': '../../../assets/img/svg/skills/jquery.svg'
  },
  {
    'name': 'SASS',
    'logo': '../../../assets/img/svg/skills/sass.svg'
  },
  {
    'name': 'Gulp',
    'logo': '../../../assets/img/svg/skills/gulp.svg'
  }],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
      'start': '2017-10-15',
      'end': '2017-11-15'
  },
  'confidentiality': 'A Lloyd\'s of London insurer',
  'url': null, //'https://www.msamlin.com/en/index.html'
  'github': null
},
{
  'id': '#project12',
  'name': 'Douglas & Gordon',
  'image': '../../../assets/img/svg/projects/real_estate.svg',
  'featured': true,
  'active': false,
  'category': 'Mobile App',
  'company': {
    'name': 'Surely Group',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://surelygroup.com/',
    'role': 'Front-End Developer & UX Designer'
  },
  'client': {
    'name': 'Douglas & Gordon',
    'logo': '../../../assets/img/svg/projects/real_estate.svg',
    'url': 'http://www.douglasandgordon.com/',
    'featured': true
  },
  'desc': '#projectDescDnG',
  'techs': [
    {
      'name': 'Ionic',
      'logo': '../../../assets/img/svg/skills/ionic.svg'
    },
    {
      'name': 'Typescript',
      'logo': '../../../assets/img/svg/skills/typescript.svg'
    },
    {
      'name': 'Sass',
      'logo': '../../../assets/img/svg/skills/sass.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Sketch',
      'logo': '../../../assets/img/svg/skills/sketch.svg'
    },
    {
      'name': 'Axure RP',
      'logo': '../../../assets/img/svg/skills/axurerp.svg'
    },
    {
      'name': 'Cordova',
      'logo': '../../../assets/img/svg/skills/cordova.svg'
    },
    {
      'name': 'Draw.io',
      'logo': '../../../assets/img/svg/skills/drawio.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2017-01-05',
    'end': null
  },
  'confidentiality': 'A Central London real estate agency',
  'url': null,
  'github': null
},
{
  'id': '#project11',
  'name': 'Lloyds Bank - Connect & Protect',
  'image': '../../../assets/img/svg/projects/bank.svg',
  'featured': true,
  'active': false,
  'category': 'Mobile App',
  'company': {
    'name': 'Surely Group',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://services.surelygroup.com/',
    'role': 'Front-End Developer & UX Designer'
  },
  'client': {
    'name': 'Lloyds Banking Group',
    'logo': '../../../assets/img/svg/projects/bank.svg',
    'url': 'http://www.lloydsbank.com/',
    'featured': true
  },
  'desc': '#projectDescLloyds',
  'techs': [
    {
      'name': 'Ionic',
      'logo': '../../../assets/img/svg/skills/ionic.svg'
    },
    {
      'name': 'Typescript',
      'logo': '../../../assets/img/svg/skills/typescript.svg'
    },
    {
      'name': 'Sass',
      'logo': '../../../assets/img/svg/skills/sass.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'Axure RP',
      'logo': '../../../assets/img/svg/skills/axurerp.svg'
    },
    {
      'name': 'Cordova',
      'logo': '../../../assets/img/svg/skills/cordova.svg'
    },
    {
      'name': 'AWS',
      'logo': '../../../assets/img/svg/skills/aws.svg'
    },
    {
      'name': 'Ionic Creator',
      'logo': '../../../assets/img/svg/skills/ioniccreator.svg'
    },
    {
      'name': 'Ionic Pro',
      'logo': '../../../assets/img/svg/skills/ioniccloud.svg'
    },
    {
      'name': 'Draw.io',
      'logo': '../../../assets/img/svg/skills/drawio.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2016-11-14',
    'end': null
  },
  'confidentiality': 'An UK\'s Big Four Bank',
  'url': null,
  'github': null
},
{
  'id': '#project10',
  'name': 'Doxy.me',
  'image': '../../../assets/img/svg/companies/doxyme.svg',
  'featured': false,
  'active': false,
  'category': 'Mobile App',
  'company': {
    'name': 'Doxy.me',
    'logo': '../../../assets/img/svg/companies/doxyme.svg',
    'url': 'https://doxy.me/',
    'role': 'Front-End Consultant'
  },
  'client': {
    'name': 'Doxy.me',
    'logo': '../../../assets/img/svg/companies/doxyme.svg',
    'url': 'https://doxy.me/',
    'featured': false
  },
  'desc': '#projectDescDoxy',
  'techs': [
    {
      'name': 'Ionic',
      'logo': '../../../assets/img/svg/skills/ionic.svg'
    },
    {
      'name': 'Sass',
      'logo': '../../../assets/img/svg/skills/sass.svg'
    },
    {
      'name': 'Gulp',
      'logo': '../../../assets/img/svg/skills/gulp.svg'
    },
    {
      'name': 'Cordova',
      'logo': '../../../assets/img/svg/skills/cordova.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2016-12-01',
    'end': '2017-01-14'
  },
  'confidentiality': null,
  'url': null,
  'github': null
},
{
  'id': '#project9',
  'name': 'My Mini Factory',
  'image': '../../../assets/img/svg/companies/mmf.svg',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'My Mini Factory',
    'logo': '../../../assets/img/svg/companies/mmf.svg',
    'url': 'https://www.myminifactory.com/',
    'role': 'Front-End Developer & UX Designer'
  },
  'client': {
    'name': 'My Mini Factory',
    'logo': '../../../assets/img/svg/companies/mmf.svg',
    'url': 'https://www.myminifactory.com/',
    'featured': false
  },
  'desc': '#projectDescMMF',
  'techs': [
    {
      'name': 'Symfony',
      'logo': '../../../assets/img/svg/skills/symfony.svg'
    },
    {
      'name': 'Foundation',
      'logo': '../../../assets/img/svg/skills/foundation.svg'
    },
    {
      'name': 'jQuery',
      'logo': '../../../assets/img/svg/skills/jquery.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/mmf/mmf_header1.png',
    'name': 'Header V1',
    'alt': 'Image of first version for header',
  },
  {
    'image': '../../../assets/img/png/projects/mmf/mmf_header2.png',
    'name': 'Header V2',
    'alt': 'Image of second version for header',
  },
  {
    'image': '../../../assets/img/png/projects/mmf/mmf_logo.png',
    'name': 'Logo',
    'alt': 'Image of logo',
  },
  {
    'image': '../../../assets/img/png/projects/mmf/mmf_sections.png',
    'name': 'Random Sections',
    'alt': 'Image of random sections',
  }],
  'prototypes': [{
    'name': 'Home Page',
    'url': 'https://kevinliozon.com/prototypes/mmf_homepage_alpha/index.html',
  },
  {
    'name': 'Grid',
    'url': 'https://kevinliozon.com/prototypes/mmf_bootstrap_grid/index.html',
  }],
  'docs': null,
  'dates': {
    'start': '2016-04-01',
    'end': '2016-11-14'
  },
  'confidentiality': null,
  'url': 'https://www.myminifactory.com/',
  'github': null
},
{
  'id': '#project8',
  'name': 'iMakr',
  'image': '../../../assets/img/svg/companies/imakr.svg',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'iMakr',
    'logo': '../../../assets/img/svg/companies/imakr.svg',
    'url': 'https://www.imakr.com/',
    'role': 'Front-End Developer & UX Designer'
  },
  'client': {
    'name': 'iMakr',
    'logo': '../../../assets/img/svg/companies/imakr.svg',
    'url': 'https://www.imakr.com/',
    'featured': true
  },
  'desc': '#projectDescImakr',
  'techs': [
    {
      'name': 'Prestashop',
      'logo': '../../../assets/img/svg/skills/prestashop.svg'
    },
    {
      'name': 'Bootstrap',
      'logo': '../../../assets/img/svg/skills/bootstrap.svg'
    },
    {
      'name': 'jQuery',
      'logo': '../../../assets/img/svg/skills/jquery.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/imakr/imakr_home.png',
    'name': 'Home Page',
    'alt': 'Image of home page',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_home_top.png',
    'name': 'Home Page top section',
    'alt': 'Image of top section of home',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_home_bottom.png',
    'name': 'Home Page bottom section',
    'alt': 'Image of bottom section of home',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_home_full.png',
    'name': 'Full Home Page',
    'alt': 'Image of full home page',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_home_zoning.png',
    'name': 'Zoning Home Page',
    'alt': 'Image of zoning for home page',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_buy.png',
    'name': 'Products Page',
    'alt': 'Image of products page',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_checkout.png',
    'name': 'Checkout Page',
    'alt': 'Image of checkout page',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_mockup_cart.png',
    'name': 'Cart',
    'alt': 'Image of cart section',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_mockup_menu.jpg',
    'name': 'Mockup Menu',
    'alt': 'Image of mockup for menu',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_mockup_menu_hovered.jpg',
    'name': 'Mockup Menu Hovered',
    'alt': 'Image of mockup for menu hovered',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_menu.png',
    'name': 'Menu',
    'alt': 'Image of Menu',
  },
  {
    'image': '../../../assets/img/png/projects/imakr/imakr_mockup_grid.png',
    'name': 'Mockup Grid',
    'alt': 'Image of mockup of grid',
  }],
  'prototypes': [{
    'name': 'Home Page',
    'url': 'https://kevinliozon.com/prototypes/imakr_homepage_alpha/index.html',
  }],
  'docs': [{
    'name': 'Mockup Homepage',
    'url': '../../../assets/docs/imakr/homepage.pdf',
  }],
  'dates': {
    'start': '2016-02-14',
    'end': '2016-03-31'
  },
  'confidentiality': null,
  'url': 'https://www.imakr.com/',
  'github': null
},
{
  'id': '#project7',
  'name': 'Portfolio V2',
  'image': '../../../assets/img/svg/projects/portfoliov2.svg',
  'featured': false,
  'active': true,
  'category': 'Portfolio',
  'company': null,
  'client': null,
  'desc': '#projectDescPortfolioV2',
  'techs': [
    {
      'name': 'Edge Animate',
      'logo': '../../../assets/img/svg/skills/flash.svg'
    },
    {
      'name': 'jQuery',
      'logo': '../../../assets/img/svg/skills/jquery.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    },
    {
      'name': 'HTML',
      'logo': '../../../assets/img/svg/skills/html.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/portfolio2/background.png',
    'name': 'Background',
    'alt': 'Image of background',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/bulb.png',
    'name': 'Bulb asset',
    'alt': 'Image of bulb asset',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/engine_order_telegraph_adobe.png',
    'name': 'Design skills',
    'alt': 'Image of design skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/engine_order_telegraph_web.png',
    'name': 'Dev skills',
    'alt': 'Image of dev skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/engine_order_telegraph_others.png',
    'name': 'Other skills',
    'alt': 'Image of other skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/gears_pendulum.png',
    'name': 'Gears and pendulum asset',
    'alt': 'Image of gears and pendulum asset',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/gears.png',
    'name': 'Gears & fans assets',
    'alt': 'Image of gears and fans assets',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/modding.png',
    'name': 'Modding asset',
    'alt': 'Image of modding asset',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/printed_portfolio.png',
    'name': 'Printed portfolio asset',
    'alt': 'Image of printed portfolio asset',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/sonar.png',
    'name': 'Sonar asset',
    'alt': 'Image of sonar asset',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio2/video.png',
    'name': 'Video asset',
    'alt': 'Image of video asset',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'CV',
    'url': '../../../assets/docs/portfolio2/cv.pdf',
  }],
  'dates': {
    'start': '2014-12-10',
    'end': '2015-03-01'
  },
  'confidentiality': null,
  'url': 'https://kevinliozon.com/projects/portfolio2',
  'github': null
},
{
  'id': '#project6',
  'name': 'C2I Réseaux',
  'image': '../../../assets/img/svg/education/ubfc.svg',
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Université de Bourgogne-Franche-Comté',
    'logo': '../../../assets/img/svg/education/ubfc.svg',
    'url': 'https://kevinliozon.com/c2i_reseau',
    'role': 'Project Manager & Front-End Dev'
  },
  'client': {
    'name': 'Université de Bourgogne-Franche-Comté',
    'logo': '../../../assets/img/svg/education/ubfc.svg',
    'featured': true,
    'url': 'http://www.ubfc.fr/',
  },
  'desc': '#projectDescC2I',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wp.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'InDesign',
      'logo': '../../../assets/img/svg/skills/indesign.svg'
    },
    {
      'name': 'Axure RP',
      'logo': '../../../assets/img/svg/skills/axurerp.svg'
    },
    {
      'name': 'Sass',
      'logo': '../../../assets/img/svg/skills/sass.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/c2i/logoc2i.png',
    'name': 'Logo',
    'alt': 'Image of logo',
  },
  {
    'image': '../../../assets/img/png/projects/c2i/icones.png',
    'name': 'Icones',
    'alt': 'Image of icones',
  },
  {
    'image': '../../../assets/img/png/projects/c2i/logo_picto.png',
    'name': 'Visuals',
    'alt': 'Image of visuals',
  },
  {
    'image': '../../../assets/img/png/projects/c2i/sitemap.png',
    'name': 'Sitemap',
    'alt': 'Image of sitemap',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'Mockup',
    'url': '../../../assets/docs/c2i/mockup_c2i.pdf',
  },
  {
    'name': 'Specs',
    'url': '../../../assets/docs/c2i/specs_c2i.pdf',
  },
  {
    'name': 'Slides',
    'url': '../../../assets/docs/c2i/slides_project_group.pdf',
  }],
  'dates': {
    'start': '2015-11-01',
    'end': '2016-01-20'
  },
  'confidentiality': null,
  'url': 'https://kevinliozon.com/c2i_reseau',
  'github': null
},
{
  'id': '#project5',
  'name': 'E-Ukiyo',
  'image': '../../../assets/img/svg/projects/eukiyo.svg',
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': null,
  'client': null,
  'desc': '#projectDescEukiyo',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wp.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'InDesign',
      'logo': '../../../assets/img/svg/skills/indesign.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_bg1.png',
    'name': 'Background Samourai',
    'alt': 'Background with samourai',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_bg2.png',
    'name': 'Background Tokugawas Mons',
    'alt': 'Background with Tokugawas Mons',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_bg3.jpg',
    'name': 'Background Castles Abstract',
    'alt': 'Background with castles arranged in an abstract way',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_mockup_home.png',
    'name': 'Mockup Home Page',
    'alt': 'Image of mockup for home page',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_mockup_images.png',
    'name': 'Mockup Images Page',
    'alt': 'Image of Mockup for images Page',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_mockup_menu_mobile.png',
    'name': 'Mockup menu mobile',
    'alt': 'Image of Mockup for menu on mobile',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_mockup_mobile.png',
    'name': 'Mockup page mobile',
    'alt': 'Image of Mockup for page on mobile',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_mockup_login.png',
    'name': 'Mockup login page',
    'alt': 'Image of mockup for login page',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_mockup_uploads.png',
    'name': 'Mockup uploads page',
    'alt': 'Image of mockup for uploads page',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_zoning_home.png',
    'name': 'Zoning home page',
    'alt': 'Image of zoning for home page',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_zoning_page.png',
    'name': 'Zoning regular page',
    'alt': 'Image of zoning for regular page',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_zoning_page_mobile.png',
    'name': 'Zoning regular page mobile',
    'alt': 'Image of zoning for regular page on mobile',
  },
  {
    'image': '../../../assets/img/png/projects/eukiyo/eukiyo_zoning_menu_mobile.png',
    'name': 'Zoning menu mobile',
    'alt': 'Image of zoning for menu on mobile',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'Mockups',
    'url': '../../../assets/docs/eukiyo/mockup_eukiyo.pdf',
  },
  {
    'name': 'Slides',
    'url': '../../../assets/docs/eukiyo/slides_eukiyo.pdf',
  }],
  'dates': {
    'start': '2015-11-01',
    'end': '2016-01-20'
  },
  'confidentiality': null,
  'url': 'https://kevinliozon.com/e_ukiyo',
  'github': null
},
{
  'id': '#project4',
  'name': 'HCE',
  'image': '../../../assets/img/png/projects/hce/hce.png',
  'featured': false,
  'active': false,
  'category': 'Web App',
  'company': {
    'name': 'Digitela',
    'logo': '../../../assets/img/svg/companies/digitela.svg',
    'url': 'http://www.digitela.fr/',
    'role': 'UI Designer'
  },
  'client': {
    'name': 'Haute Coiffure et Esthétique',
    'logo': '../../../assets/img/png/projects/hce/hce.png',
    'featured': false,
    'url': 'http://reseau-beaute.com/',
  },
  'desc': '#projectDescHce',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wp.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/hce/hce_mockup.png',
    'name': 'Zoning',
    'alt': 'Image of zoning',
  },
  {
    'image': '../../../assets/img/png/projects/hce/hce_home.png',
    'name': 'Home Page',
    'alt': 'Image of home page',
  },
  {
    'image': '../../../assets/img/png/projects/hce/hce_header1.png',
    'name': 'Header Background',
    'alt': 'Image of Header Background',
  },
  {
    'image': '../../../assets/img/png/projects/hce/hce_header2.png',
    'name': 'Header Background',
    'alt': 'Image of Header Background',
  }],
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2015-04-01',
    'end': '2015-06-14'
  },
  'confidentiality': null,
  'url': 'http://reseau-beaute.com/',
  'github': null
},
{
  'id': '#project3',
  'name': 'APAGS',
  'image': '../../../assets/img/svg/projects/apags.svg',
  'featured': false,
  'active': false,
  'category': 'Web App',
  'company': {
    'name': 'Digitela',
    'logo': '../../../assets/img/svg/companies/digitela.svg',
    'url': 'http://www.digitela.fr/',
    'role': 'Front-End Developer & UX Designer'
  },
  'client': {
    'name': 'Association Pour l\'Amélioration Globale de la Santé',
    'logo': '../../../assets/img/svg/projects/apags.svg',
    'featured': false,
    'url': null,
  },
  'desc': '#projectDescApags',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wp.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/apags/apags_mockup_home.png',
    'name': 'Mockup Home Page',
    'alt': 'Image of mockup for home page',
  },
  {
    'image': '../../../assets/img/png/projects/apags/apags_mockup_page.png',
    'name': 'Mockup Regular Page',
    'alt': 'Image of mockup for regular page',
  },
  {
    'image': '../../../assets/img/png/projects/apags/apags_zoning_home1.png',
    'name': 'Zoning Home Page 1',
    'alt': 'Image of zoning for home page',
  },
  {
    'image': '../../../assets/img/png/projects/apags/apags_zoning_home2.png',
    'name': 'Zoning Home Page 2',
    'alt': 'Image of zoning for home page',
  },
  {
    'image': '../../../assets/img/png/projects/apags/apags_zoning_page1.png',
    'name': 'Zoning Regular Page 1',
    'alt': 'Image of zoning for regular page',
  },
  {
    'image': '../../../assets/img/png/projects/apags/apags_zoning_page2.png',
    'name': 'Zoning Regular Page 2',
    'alt': 'Image of zoning for regular page',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'Mockups',
    'url': '../../../assets/docs/apags/mockup_apags.pdf',
  }],
  'dates': {
    'start': '2015-04-01',
    'end': '2015-06-14'
  },
  'confidentiality': null,
  'url': null,
  'github': null
},
{
  'id': '#project2',
  'name': 'Digitela',
  'image': '../../../assets/img/svg/companies/digitela.svg',
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Digitela',
    'logo': '../../../assets/img/svg/companies/digitela.svg',
    'url': 'http://www.digitela.fr/',
    'role': 'Front-End Developer & UI Designer'
  },
  'client': {
    'name': 'Digitela',
    'logo': '../../../assets/img/svg/companies/digitela.svg',
    'url': 'http://www.digitela.fr/',
    'featured': false
  },
  'desc': '#projectDescDigitela',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wp.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/digitela/digitela_home.png',
    'name': 'Home Page',
    'alt': 'Image of home page',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_home_full.png',
    'name': 'Full Home Page',
    'alt': 'Image of full home page',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_pancart.png',
    'name': 'Pancart',
    'alt': 'Image of pancart',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_subsc.png',
    'name': 'Subscription Offer',
    'alt': 'Image of subscription offer',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_subsc2.png',
    'name': 'Subscription Offer',
    'alt': 'Image of subscription offer',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_resp.jpg',
    'name': 'Responsive Design',
    'alt': 'Image of responsive design',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_resp2.png',
    'name': 'Responsive Design',
    'alt': 'Image of responsive design',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_training.png',
    'name': 'Training offer',
    'alt': 'Image of training offer',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_services.png',
    'name': 'Services',
    'alt': 'Image of services',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_slogan.png',
    'name': 'Slogan',
    'alt': 'Image of slogan',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_webmarketing1.png',
    'name': 'Webmarketing offer',
    'alt': 'Image of webmarketing offer',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_webmarketing2.png',
    'name': 'Webmarketing offer',
    'alt': 'Image of webmarketing offer',
  },
  {
    'image': '../../../assets/img/png/projects/digitela/digitela_crm.png',
    'name': 'CRM offer',
    'alt': 'Image of crm offer',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'Sliders',
    'url': '../../../assets/docs/digitela/sliders_digitela.pdf',
  }],
  'dates': {
    'start': '2015-04-01',
    'end': '2015-06-14'
  },
  'confidentiality': null,
  'url': 'http://www.digitela.fr/',
  'github': null
},
{
  'id': '#project1',
  'name': 'Portfolio V1',
  'image': '../../../assets/img/svg/projects/portfoliov1.svg',
  'featured': false,
  'active': true,
  'category': 'Portfolio',
  'company': null,
  'client': null,
  'desc': '#projectDescPortfolioV1',
  'techs': [
    {
      'name': 'Flash',
      'logo': '../../../assets/img/svg/skills/flash.svg'
    },
    {
      'name': 'Illustrator',
      'logo': '../../../assets/img/svg/skills/illustrator.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/portfolio1/background.png',
    'name': 'Background',
    'alt': 'Image of brackground',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio1/ability_development.png',
    'name': 'Dev skills',
    'alt': 'Image of dev skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio1/ability_infographics.png',
    'name': 'Design skills',
    'alt': 'Image of design skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio1/ability_video.png',
    'name': 'Motion design skills',
    'alt': 'Image of motion design skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio1/ability_other.png',
    'name': 'Other skills',
    'alt': 'Image of other skills',
  },
  {
    'image': '../../../assets/img/png/projects/portfolio1/coming_soon.png',
    'name': 'Coming soon disclaimer',
    'alt': 'Image of coming soon disclaimer',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'Printed',
    'url': '../../../assets/docs/portfolio1/portfolio.pdf',
  }],
  'dates': {
    'start': '2014-12-10',
    'end': '2015-03-01'
  },
  'confidentiality': null,
  'url': 'https://kevinliozon.com/projects/portfolio1',
  'github': null
},
{
  'id': '#project0',
  'name': 'IUT Montpellier',
  'image': '../../../assets/img/svg/education/iutmtp.svg',
  'featured': false,
  'active': false,
  'category': 'Web App',
  'company': {
    'name': 'Institute of Technology of Montpellier',
    'logo': '../../../assets/img/svg/education/iutmtp.svg',
    'url': 'http://iut-montpellier-sete.edu.umontpellier.fr/',
    'role': 'Full Stack Dev'
  },
  'client': {
    'name': 'Institute of Technology of Montpellier',
    'logo': '../../../assets/img/svg/education/iutmtp.svg',
    'featured': false,
    'url': 'http://iut-montpellier-sete.edu.umontpellier.fr/'
  },
  'desc': '#projectDescIutMtp',
  'techs': [
    {
      'name': 'HTML',
      'logo': '../../../assets/img/svg/skills/html.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    },
    {
      'name': 'PHP',
      'logo': '../../../assets/img/svg/skills/php.svg'
    },
    {
      'name': 'Photoshop',
      'logo': '../../../assets/img/svg/skills/photoshop.svg'
    }
  ],
  'gallery': [{
    'image': '../../../assets/img/png/projects/iut_montpellier/iut_montpellier.png',
    'name': 'Logo',
    'alt': 'Image of logo',
  },
  {
    'image': '../../../assets/img/png/projects/iut_montpellier/sitemap.png',
    'name': 'Sitemap',
    'alt': 'Image of sitemap',
  }],
  'prototypes': null,
  'docs': [{
    'name': 'Specs',
    'url': '../../../assets/docs/iut_montpellier/iut_specs.pdf',
  },
  {
    'name': 'Slides',
    'url': '../../../assets/docs/iut_montpellier/iut_slides.pdf',
  }],
  'dates': {
    'start': '2014-12-10',
    'end': '2015-03-01'
  },
  'confidentiality': null,
  'url': 'https://kevinliozon.com/projects/iut_montpellier/Accueil.html',
  'github': null
}];
