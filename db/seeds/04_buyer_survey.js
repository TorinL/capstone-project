'use strict';

exports.seed = function(knex) {
  return knex('buyers_survey')
    .then(() => {
      return knex('buyers_survey').insert([
      {
        id: 1,
        location: 'Ballard',
        square_footage: '1000-1500 square feet',
        home_value: '501k-750k',
        bedrooms: '2',
        bathrooms: '1',
        user_id: 3,
      },
      {
        id: 2,
        location: 'Ballard',
        square_footage: '1000-1500 square feet',
        home_value: '501k-750k',
        bedrooms: '2',
        bathrooms: '1',
        user_id: 6,
      },
      {
        id: 3,
        location: 'Ballard',
        square_footage: '1000-1500 square feet',
        home_value: '501k-750k',
        bedrooms: '2',
        bathrooms: '1',
        user_id: 7,
      },
      {
        id: 4,
        location: 'Ballard',
        square_footage: '1000-1500 square feet',
        home_value: '501k-750k',
        bedrooms: '2',
        bathrooms: '1',
        user_id: 9,
      },
    ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('buyers_survey_id_seq', (SELECT MAX(id) FROM buyers_survey));"
    )
  })
};
