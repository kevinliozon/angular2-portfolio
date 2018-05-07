import { Diploma } from '../../models/diploma';

export let DIPLOMAS: Diploma[] = [{
  'id': '#diploma6',
  'name': '#diplomaNng',
  'category': 'Certification',
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
    'country': 'USA & UK',
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
  'name': '#diplomaCs',
  'category': 'Certification',
  'images': {
    'thumb': '../../../assets/img/svg/education/codeschool.svg',
    'image': '../../../assets/img/svg/education/codeschool.svg',
  },
  'subjects': [
    {'name': 'Javascript', 'spe': false},
    {'name': 'Angular', 'spe': false},
    {'name': 'Sass', 'spe': false},
    {'name': 'PHP', 'spe': false},
    {'name': 'RegEx', 'spe': false},
    {'name': 'UX', 'spe': false}
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
  'name': '#diplomaLp',
  'category': 'Bachelor\'s Degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/lp.png',
    'image': '../../../assets/img/png/diplomas/lp.png'
  },
  'subjects': [
    {'name': 'Front-End Dev', 'spe': true},
    {'name': 'UX Design', 'spe': true},
    {'name': 'UI Design', 'spe': true},
    {'name': 'IT Management', 'spe': true},
    {'name': 'Back-End Dev', 'spe': false},
    {'name': 'Visual Design', 'spe': false},
    {'name': 'Communication', 'spe': false}
  ],
  'school': {
    'name': 'University of Burgundy - Franche-Comté',
    'place': 'Montbéliard',
    'country': 'France',
    'image': '../../../assets/img/svg/education/ubfc.svg',
    'url': 'http://www.ubfc.fr/'
  },
  'dates': {
    'start': '2015-09-01',
    'end': '2016-06-20'
  },
  'projects': [
    {
      'id': '#project5',
      'name': 'E-Ukiyo',
      'image': '../../../assets/img/svg/projects/c2i.svg',
      'url': 'https://kevinliozon.com/c2i_reseau/'
    },
    {
      'id': '#project6',
      'name': 'C2I Reseaux',
      'image': '../../../assets/img/svg/projects/eukiyo.svg',
      'url': 'https://kevinliozon.com/e_ukiyo/en/'
    },
    {
      'id': '#project7',
      'name': 'Portfolio V2',
      'image': '../../../assets/img/svg/projects/portfoliov2.svg',
      'url': 'https://kevinliozon.com/portfolio2'
    }
  ]
},
{
  'id': '#diploma3',
  'name': '#diplomaDut',
  'category': 'University Degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/mmi.png',
    'image': '../../../assets/img/png/diplomas/mmi.png'
  },
  'subjects': [
    {'name': 'Front-End Dev', 'spe': true},
    {'name': 'Back-End Dev', 'spe': true},
    {'name': 'UI Design', 'spe': true},
    {'name': 'IT management', 'spe': true},
    {'name': 'Interaction Design', 'spe': false},
    {'name': 'Visual Design', 'spe': false},
    {'name': 'Software Dev', 'spe': false},
    {'name': 'Motion Design & FX', 'spe': false},
    {'name': 'Communication', 'spe': false}
  ],
  'school': {
    'name': 'Institute of Technology',
    'place': 'Béziers',
    'country': 'France',
    'image': '../../../assets/img/svg/education/um.svg',
    'url': 'https://www.umontpellier.fr/'
  },
  'dates': {
    'start': '2013-09-01',
    'end': '2015-06-01'
  },
  'projects': [
    {
      'id': '#project1',
      'name': 'Portfolio V1',
      'image': '../../../assets/img/svg/projects/portfoliov1.svg',
      'url': 'https://kevinliozon.com/portfolio1'
    }
  ]
},
{
  'id': '#diploma2',
  'name': '#diplomaDu',
  'category': 'University Degree',
  'images': {
    'thumb': '../../../assets/img/thumb/diplomas/du.png',
    'image': '../../../assets/img/png/diplomas/du.png'
  },
  'subjects': [
    {'name': 'Front-End Dev', 'spe': true},
    {'name': 'Back-End Dev', 'spe': true},
    {'name': 'Maths', 'spe': false},
    {'name': 'Visual Design', 'spe': false},
    {'name': 'Management', 'spe': false},
    {'name': 'Communication', 'spe': false}
  ],
  'school': {
    'name': 'Institute of Technology',
    'place': 'Montpellier',
    'country': 'France',
    'image': '../../../assets/img/svg/education/um.svg',
    'url': 'https://www.umontpellier.fr/'
  },
  'dates': {
    'start': '2012-09-01',
    'end': '2013-06-01'
  },
  'projects': [
    {
      'id': '#project0',
      'name': 'IUT Montpellier',
      'image': '../../../assets/img/png/projects/iut_montpellier.png',
      'url': 'https://kevinliozon.com/iut_montpellier'
    }
  ]
},
{
  'id': '#diploma1',
  'name': '#diplomaBac',
  'category': 'Highschool Degree',
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
