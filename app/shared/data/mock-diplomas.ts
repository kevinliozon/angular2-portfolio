import { Diploma } from '../../models/diploma';

export let DIPLOMAS: Diploma[] = [{
  'id': '#diploma6',
  'name': 'Certification UX NNG',
  'category': 'certification',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/nng.png',
    'image': '../../../assets/img/png/diplomas/nng.png'
  },
  'subjects': [
    {'name': 'Interaction Design', 'spe': true},
    {'name': 'Webdesign', 'spe': true},
    {'name': 'UX management', 'spe': false},
    {'name': 'Mobile Design', 'spe': false}
  ],
  'school': {
    'name': 'Nielsen & Norman Group',
    'image': '../../../assets/img/svg/education/nng.svg',
    'place': 'Seattle - London',
    'country': 'USA - UK',
    'url': 'https://www.nngroup.com/'
  },
  'dates': {
    'start': '2016-08-15',
    'end': '2016-11-14'
  },
  'projects': null,
},
{
  'id': '#diploma5',
  'name': 'Certifications CodeSchool',
  'category': 'certification',
  'images': {
    'thumb': '../../../assets/img/svg/education/codeschool.svg',
    'image': '../../../assets/img/svg/education/codeschool.svg',
  },
  'subjects': [
    {'name': 'Javascript', 'spe': true},
    {'name': 'Angular', 'spe': true},
    {'name': 'Sass', 'spe': true}
  ],
  'school': {
    'name': 'CodeSchool',
    'image': '../../../assets/img/svg/education/codeschool.svg',
    'place': 'Online',
    'country': 'Online',
    'url': 'https://www.codeschool.com/'
  },
  'dates': {
    'start': '2016-03-01',
    'end': '2017-01-01'
  },
  'projects': null
},
{
  'id': '#diploma4',
  'name': 'Bachelor\'s Degree (Licence Pro)',
  'category': 'degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/lp.png',
    'image': '../../../assets/img/png/diplomas/lp.png'
  },
  'subjects': [
    {'name': 'Web Dev', 'spe': true},
    {'name': 'UX Design', 'spe': true},
    {'name': 'Project Management', 'spe': true}
  ],
  'school': {
    'name': 'University of Burgundy - Franche-Comté',
    'place': 'Montbéliard',
    'country': 'France',
    'image': '../../../assets/img/svg/education/ubfc.svg',
    'url': 'https://en.wikipedia.org/wiki/University_of_Burgundy_-_Franche-Comt%C3%A9'
  },
  'dates': {
    'start': '2015-09-01',
    'end': '2016-06-20'
  },
  'projects': [
    {
      'name': 'E-Ukiyo',
      'image': '../../../assets/img/svg/projects/c2i.svg',
      'url': ''
    },
    {
      'name': 'C2I Reseaux',
      'image': '../../../assets/img/svg/projects/eukiyo.svg',
      'url': ''
    }
  ]
},
{
  'id': '#diploma3',
  'name': 'Two years university degree in technology (DUT)',
  'category': 'degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/mmi.png',
    'image': '../../../assets/img/png/diplomas/mmi.png'
  },
  'subjects': [
    {'name': 'Web Dev', 'spe': true},
    {'name': 'Visual Design', 'spe': true},,
    {'name': 'Human-computer interactions', 'spe': true},
    {'name': 'Information System', 'spe': true}
  ],
  'school': {
    'name': 'Institute of Technology',
    'place': 'Béziers',
    'country': 'France',
    'image': '../../../assets/img/svg/education/um.svg',
    'url': 'https://en.wikipedia.org/wiki/University_of_Montpellier'
  },
  'dates': {
    'start': '2013-09-01',
    'end': '2015-06-01'
  },
  'projects': [
    {
      'name': 'Portfolio',
      'image': '../../../assets/img/svg/projects/portfolio1.svg',
      'url': ''
    }
  ]
},
{
  'id': '#diploma2',
  'name': 'University Degree (DU)',
  'category': 'degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/du.png',
    'image': '../../../assets/img/png/diplomas/du.png'
  },
  'subjects': [
    {'name': 'Web Dev', 'spe': true},
    {'name': 'Mathematics', 'spe': false},
    {'name': 'Visual Design', 'spe': false}
  ],
  'school': {
    'name': 'Institute of Technology',
    'place': 'Montpellier',
    'country': 'France',
    'image': '../../../assets/img/svg/education/um.svg',
    'url': 'https://en.wikipedia.org/wiki/University_of_Montpellier'
  },
  'dates': {
    'start': '2012-09-01',
    'end': '2013-06-01'
  },
  'projects': null
},
{
  'id': '#diploma1',
  'name': 'High-School Degree',
  'category': 'degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/bac.png',
    'image': '../../../assets/img/png/diplomas/bac.png'
  },
  'subjects': [
    {'name': 'Biology', 'spe': true},
    {'name': 'Physics/chemistry', 'spe': true},
    {'name': 'Mathematics', 'spe': false}
  ],
  'school': {
    'name': 'Louis Feuillade Highschool',
    'place': 'Lunel',
    'country': 'France',
    'image': '../../../assets/img/svg/education/lf.svg',
    'url': 'http://www.louis-feuillade.com/'
  },
  'dates': {
    'start': '2007-09-01',
    'end': '2010-07-01'
  },
  'projects': null
}];
