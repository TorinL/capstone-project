'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        seller: true,
        first_name: 'Mike',
        last_name: 'Smith',
        email: 'mikesmith4455@gmail.com',
        phone_number: '2063445677',
        profile_url: '',
        hashed_password: ''
      },
      {
        id: 2,
        seller: true,
        first_name: 'Adele',
        last_name: 'Logan',
        email:'nottheadele@gmail.com',
        phone_number:'6149943434',
        profile_url: '',
        hashed_password: '',

      },
      {
        id: 3,
        seller: false,
        first_name: 'Sarah',
        last_name: 'Ewing',
        email: 'sarahewing@msn.com',
        phone_number: '2065546777',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 4,
        seller: true,
        first_name: 'Mason',
        last_name: 'Higgins',
        email: 'mphiggins04@gmail.com',
        phone_number: '2069456655',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 5,
        seller: true,
        first_name: 'Francis',
        last_name: 'Myers',
        email: 'francismeyers@yahoo.com',
        phone_number: '2067722294',
        profile_url: '',
        hashed_password: '',

      },
      {
        id: 6,
        seller: false,
        first_name: 'Tyler',
        last_name: 'Johnson',
        email: 'tylerryanjohnson@msn.com',
        phone_number: '2065231209',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 7,
        seller: false,
        first_name: 'James',
        last_name: 'Jones',
        email: 'jamesjones123321@gmail.com',
        phone_number: '4256573956',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 8,
        seller: true,
        first_name: 'Taylor',
        last_name: 'O\'Neal',
        email: 'tayoneal1@gmail.com',
        phone_number: '',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 9,
        seller: false,
        first_name: 'Yani',
        last_name: 'Alexander',
        email: 'yanialexander@msn.com',
        phone_number: '2064557878',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 10,
        seller: true
        first_name: 'Hans',
        last_name: 'Lictenstein',
        email: 'Hanslictenstein@gmail.com',
        phone_number: '2061188453',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 11,
        seller: true,
        first_name: 'Hector',
        last_name: 'Rodriguez',
        email: 'hectorprod@gmail.com',
        phone_number: '2068329949',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 12,
        seller: true,
        first_name: 'Jasmine',
        last_name: 'Brown',
        email: 'jasminebrown@gmail.com',
        phone_number: '2067745442',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 13,
        seller: true,
        first_name: 'Tyreek',
        last_name: 'Hill',
        email: 'tyreekhill4@gmail.com',
        phone_number: '4253476492',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 14,
        seller: true,
        first_name: 'Ryan',
        last_name: 'Miles',
        email: 'ryanmiles55@gmail.com',
        phone_number: '',
        profile_url: '',
        hashed_password: '',
      },
      {
        id: 15,
        seller: false,
        first_name: 'Emma',
        last_name: 'King',
        email: 'emmatking23@gmail.com',
        phone_number: '2067542143',
        profile_url: '',
        hashed_password: '',
      }
    ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
};
