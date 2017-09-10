import { Project } from '../../models/project';

export let PROJECTS: Project[] = [{
  'id': '#project12',
  'name': 'This Portfolio',
  'featured': true,
  'active': true,
  'category': 'Portfolio',
  'company': null,
  'client': null,
  'desc': 'Portfolio realised with Angular 2, Sass and Gulp',
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
    'end': ''
  },
  'url': 'https://kevinliozon.com/',
  'github': 'https://github.com/kevinliozon/angular2-portfolio'
},
{
  'id': '#project11',
  'name': 'Douglas & Gordon',
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
    'url': 'http://www.douglasandgordon.com/'
  },
  'desc': 'An internal CRM mobile app for a West London Real Estate Agent (coming soon)',
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
  'id': '#project10',
  'name': 'Lloyds Bank - Connect & Protect',
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
    'url': 'http://www.lloydsbank.com/'
  },
  'desc': 'IoT mobile app for connected objects (coming soon on iOS)',
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
  'id': '#project9',
  'name': 'Doxy.me',
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
    'url': 'https://doxy.me/'
  },
  'desc': 'Telemedecine solution',
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
  'id': '#project8',
  'name': 'My Mini Factory',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'My Mini Factory (iMakr subsidiary)',
    'logo': '../../../assets/img/svg/companies/mmf.svg',
    'url': 'https://www.myminifactory.com/'
  },
  'client': {
    'name': 'My Mini Factory (iMakr subsidiary)',
    'logo': '../../../assets/img/svg/companies/mmf.svg',
    'url': 'https://www.myminifactory.com/'
  },
  'desc': 'A social sharing platform for 3D designers',
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
  'id': '#project7',
  'name': 'iMakr',
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
    'url': 'https://www.imakr.com/'
  },
  'desc': 'E-Commerce platform for 3D printing related products',
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
  'id': '#project6',
  'name': 'C2I Réseaux',
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': null,
  'client': {
    'name': 'Université de Bourgogne-Franche-Comté',
    'logo': '../../../assets/img/svg/education/ubfc.svg',
  },
  'desc': 'Educational contents sharing platform - Student project',
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
  'url': null,
  'github': null
},
{
  'id': '#project5',
  'name': 'E-Ukiyo',
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': null,
  'client': null,
  'desc': 'Artistic contents sharing platform - Student project',
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
  'url': null,
  'github': null
},
{
  'id': '#project4',
  'name': 'HCE',
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
  },
  'desc': 'Artistic contents sharing platform',
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
  'id': '#project3',
  'name': 'APAGS',
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
  },
  'desc': 'Artistic contents sharing platform',
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
  'featured': false,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Digitela',
    'logo': '../../../assets/img/svg/companies/digitela.svg',
    'url': 'http://www.digitela.fr/'
  },
  'client': null,
  'desc': 'Corporate website',
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
  'featured': false,
  'active': true,
  'category': 'Portfolio',
  'company': null,
  'client': null,
  'desc': 'First portfolio realised during my first year at the institute of technology (may not work because of Flash)',
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
  'url': 'link',
  'github': 'string'
}];
