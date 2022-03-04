//list Menu's items
export const menus = [
  {
    name: 'A propos',
    cls:' dropbtn1 ',
    link: '/a-propos/',
  }, {
    name: 'Chirurgiens',
    cls:' dropbtn1 ',
    link: '/chirurgiens/',
  },{
    name: 'Tarifs',
    cls:' dropbtn1 ',
    link: '/tarifs/',   
  },{
    name: 'Procédure',
    cls:' dropbtn1 dropdown-toggle',
    link: '/procedure/',
    link1: '/procedure/',

    children: [
      {
        name: 'Hôtel',
        cls:'dropbtn1 p-3',
        link: '/hotel/',
      }, {
        name: 'Clinique',
        cls:'dropbtn1 p-3',
        link: '/clinique/',
      }, {
        name: 'Séjour Médical',
        cls:'dropbtn1 p-3',
        link: '/sejour-medical/',
      }
    ]
  },{
    name: 'Blog',
    cls:' dropbtn1 ',
    link: '/actualites/1',

  
  },{
    name: 'Contact',
    cls:' dropbtn1 ',
    link: '/contact/',
  },

  

  
];