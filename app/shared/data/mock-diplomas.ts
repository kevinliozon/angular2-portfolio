import { Diploma } from '../../interfaces/diploma.interface';

export let DIPLOMAS: Diploma[] = [{
  'id': '#diploma6',
  'name': '#diplomaNng',
  'category': 'Certification',
  'gallery': [{
    'image': '../../../assets/img/png/diplomas/nng.png',
    'name': 'NNG Certification Diploma',
    'alt': 'Image of Nielsen and Norman Group certification diploma',
  },
  {
    'image': '../../../assets/img/png/diplomas/nngcertif.png',
    'name': 'NNG Certification Diploma',
    'alt': 'Image of Nielsen and Norman Group certification diploma',
  }],
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
  'gallery': [{
    'image': '../../../assets/img/svg/education/codeschool.svg',
    'name': 'Codeschool Logo',
    'alt': 'Image of Codeschool logo',
  }],
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
  'gallery': [{
    'image': '../../../assets/img/png/diplomas/lp.png',
    'name': 'Bachelor\'s Degree Diploma',
    'alt': 'Image of bachelor\'s degree diploma',
  }],
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
  'projects': [{
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
    'url': 'https://kevinliozon.com/projects/portfolio2'
  }]
},
{
  'id': '#diploma3',
  'name': '#diplomaDut',
  'category': 'University Degree',
  'gallery': [{
    'image': '../../../assets/img/png/diplomas/mmi.png',
    'name': 'Diploma of Higher Education',
    'alt': 'Image of diploma of higher education',
  }],
  'subjects': [
    {'name': 'Front-End Dev', 'spe': true},
    {'name': 'Back-End Dev', 'spe': true},
    {'name': 'UI Design', 'spe': true},
    {'name': 'IT management', 'spe': true},
    {'name': 'Interaction Design', 'spe': false},
    {'name': 'Visual Design', 'spe': false},
    {'name': 'Software Dev', 'spe': false},
    {'name': 'Motion Design', 'spe': false},
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
      'url': 'https://kevinliozon.com/projects/portfolio1'
    }
  ]
},
{
  'id': '#diploma2',
  'name': '#diplomaDu',
  'category': 'University Degree',
  'gallery': [{
    'image': '../../../assets/img/png/diplomas/du.png',
    'name': 'University Degree Diploma',
    'alt': 'Image of university degree diploma',
  }],
  'subjects': [
    {'name': 'Front-End Dev', 'spe': true},
    {'name': 'Back-End Dev', 'spe': true},
    {'name': 'Visual Design', 'spe': false},
    {'name': 'Management', 'spe': false},
    {'name': 'Communication', 'spe': false}
  ],
  'school': {
    'name': 'Institute of Technology of Montpellier',
    'place': 'Montpellier',
    'country': 'France',
    'image': '../../../assets/img/svg/education/iutmtp.svg',
    'url': 'https://www.umontpellier.fr/'
  },
  'dates': {
    'start': '2012-09-01',
    'end': '2013-06-01'
  },
  'projects': [{
    'id': '#project0',
    'name': 'IUT Montpellier',
    'image': '../../../assets/img/svg/education/iutmtp.svg',
    'url': 'https://kevinliozon.com/projects/iut_montpellier/Accueil.html'
  }]
},
{
  'id': '#diploma1',
  'name': '#diplomaBac',
  'category': 'Highschool Degree',
  'gallery': [{
    'image': '../../../assets/img/png/diplomas/bac.png',
    'name': 'Baccalauréat Diploma',
    'alt': 'Image of Baccalauréat Diploma',
  }],
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
