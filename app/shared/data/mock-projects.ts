import { Project } from '../../models/project';

export let PROJECTS: Project[] = [{
  'id': '#project15',
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
  'images': [''],
  'dates': {
    'start': '2017-01-01',
    'end': null
  },
  'url': 'https://kevinliozon.com/',
  'github': 'https://github.com/kevinliozon/angular2-portfolio'
},
{
  'id': '#project14',
  'name': 'EIS Broker Portal',
  'image': '../../../assets/img/png/projects/eis.png',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
      'name': 'Surely Group',
      'logo': '',
      'url': 'https://services.surelygroup.com/'
  },
  'client': {
      'name': 'Endeavour Insurance Service',
      'logo': '../../../assets/img/png/projects/eis.png',
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
          'name': 'Jquery',
          'logo': '../../../assets/img/svg/skills/jquery.svg'
      },
      {
          'name': 'SASS',
          'logo': '../../../assets/img/svg/skills/sass.svg'
      },
      {
          'name': 'Gulp',
          'logo': '../../../assets/img/svg/skills/gulp.svg'
      }
  ],
  'images': [''],
  'dates': {
      'start': '2017-11-15',
      'end': null
  },
  'url': 'https://www.eisportal.com/login',
  'github': null
},
{
  'id': '#project13',
  'name': 'MS Amlin',
  'image': '../../../assets/img/png/projects/msamlin.png',
  'featured': false,
  'active': false,
  'category': 'Mobile App',
  'company': {
      'name': 'Surely Group',
      'logo': '',
      'url': 'https://services.surelygroup.com/'
  },
  'client': {
      'name': 'MS Amlin',
      'logo': '../../../assets/img/png/projects/msamlin.png',
      'url': 'https://www.msamlin.com/en/index.html',
      'featured': true
  },
  'desc': '#projectDescMsa',
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
          'name': 'Jquery',
          'logo': '../../../assets/img/svg/skills/jquery.svg'
      },
      {
          'name': 'SASS',
          'logo': '../../../assets/img/svg/skills/sass.svg'
      },
      {
          'name': 'Gulp',
          'logo': '../../../assets/img/svg/skills/gulp.svg'
      }
  ],
  'images': [''],
  'dates': {
      'start': '2017-10-15',
      'end': '2017-11-15'
  },
  'url': 'https://www.msamlin.com/en/index.html',
  'github': null
},
{
  'id': '#project12',
  'name': 'Douglas & Gordon',
  'image': '../../../assets/img/svg/projects/dng.svg',
  'featured': true,
  'active': false,
  'category': 'Mobile App',
  'company': {
    'name': 'Surely Group',
    'logo': '',
    'url': 'https://services.surelygroup.com/'
  },
  'client': {
    'name': 'Douglas & Gordon',
    'logo': '../../../assets/img/svg/projects/dng.svg',
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
  ],
  'images': [''],
  'dates': {
    'start': '2017-01-05',
    'end': null
  },
  'url': null,
  'github': null
},
{
  'id': '#project11',
  'name': 'Lloyds Bank - Connect & Protect',
  'image': '../../../assets/img/svg/projects/lloyds.svg',
  'featured': true,
  'active': false,
  'category': 'Mobile App',
  'company': {
    'name': 'Surely Group',
    'logo': '../../../assets/img/svg/companies/surely.svg',
    'url': 'https://services.surelygroup.com/'
  },
  'client': {
    'name': 'Lloyds Banking Group',
    'logo': '../../../assets/img/svg/projects/lloyds.svg',
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
      'name': 'Draw.io',
      'logo': '../../../assets/img/svg/skills/drawio.svg'
    }
  ],
  'images': [''],
  'dates': {
    'start': '2016-11-14',
    'end': null
  },
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
    'url': 'https://doxy.me/'
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
  'images': [''],
  'dates': {
    'start': '2016-12-01',
    'end': '2017-01-14'
  },
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
    'url': 'https://www.myminifactory.com/'
  },
  'client': {
    'name': 'My Mini Factory',
    'logo': '../../../assets/img/svg/companies/mmf.svg',
    'url': 'https://www.myminifactory.com/',
    'featured': true
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
      'name': 'Jquery',
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
  'images': [''],
  'dates': {
    'start': '2016-04-01',
    'end': '2016-11-14'
  },
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
    'url': 'https://www.imakr.com/'
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
      'name': 'Jquery',
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
  'images': [''],
  'dates': {
    'start': '2016-02-14',
    'end': '2016-03-31'
  },
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
  'images': [''],
  'dates': {
    'start': '2014-12-10',
    'end': '2015-03-01'
  },
  'url': 'https://kevinliozon.com/portfoliov2',
  'github': null
},
{
  'id': '#project6',
  'name': 'C2I Réseaux',
  'image': '../../../assets/img/svg/education/ubfc.svg',
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': null,
  'client': {
    'name': 'Université de Bourgogne-Franche-Comté',
    'logo': '../../../assets/img/svg/education/ubfc.svg',
    'featured': true
  },
  'desc': '#projectDescC2I',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wordpress.svg'
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
  'images': [''],
  'dates': {
    'start': '2015-11-01',
    'end': '2016-01-20'
  },
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
      'logo': '../../../assets/img/svg/skills/wordpress.svg'
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
  'images': [''],
  'dates': {
    'start': '2015-11-01',
    'end': '2016-01-20'
  },
  'url': 'https://kevinliozon.com/e-ukiyo',
  'github': null
},
{
  'id': '#project4',
  'name': 'HCE',
  'image': '../../../assets/img/png/projects/hce.png',
  'featured': false,
  'active': false,
  'category': 'Web App',
  'company': {
    'name': 'Digitela',
    'logo': '../../../assets/img/svg/companies/digitela.svg',
    'url': 'http://www.digitela.fr/'
  },
  'client': {
    'name': 'Haute Coiffure et Esthétique',
    'logo': '../../../assets/img/png/projects/hce.png',
    'featured': false
  },
  'desc': '#projectDescHce',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wordpress.svg'
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
  'images': [''],
  'dates': {
    'start': '2015-04-01',
    'end': '2015-06-14'
  },
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
    'url': 'http://www.digitela.fr/'
  },
  'client': {
    'name': 'Association Pour l\'Amélioration Globale de la Santé',
    'logo': '../../../assets/img/svg/projects/apags.svg',
    'featured': false
  },
  'desc': '#projectDescApags',
  'techs': [
    {
      'name': 'Wordpress',
      'logo': '../../../assets/img/svg/skills/wordpress.svg'
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
  'images': [''],
  'dates': {
    'start': '2015-04-01',
    'end': '2015-06-14'
  },
  'url': 'link',
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
    'url': 'http://www.digitela.fr/'
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
      'logo': '../../../assets/img/svg/skills/wordpress.svg'
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
  'images': [''],
  'dates': {
    'start': '2015-04-01',
    'end': '2015-06-14'
  },
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
  'images': [''],
  'dates': {
    'start': '2014-12-10',
    'end': '2015-03-01'
  },
  'url': 'https://kevinliozon.com/portfoliov1',
  'github': null
}];
