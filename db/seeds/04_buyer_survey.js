'use strict';

exports.seed = function(knex) {
  return knex('buyers_survey')
    .then(() => {
      return knex('buyers_survey').insert([
      {
        id: 1,
        location: 'Ballard',
        square_footage: '100-1500 square feet',
        home_value: '501k-750k',
        bedrooms: '2',
        bathrooms: '1',
      },
    ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('buyers_survey_id_seq', (SELECT MAX(id) FROM buyers_survey));"
    )
  })
};
