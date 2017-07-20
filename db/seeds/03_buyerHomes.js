exports.seed = function(knex) {
  return knex('buyer_homes')
    .then(() => {
      return knex('buyer_homes').insert([
      {
       home_id: 1,
       buyer_id: 8,
      },
      {
       home_id: 2,
       buyer_id: 14,
      },
      {
       home_id: 3,
       buyer_id: 13,
      },
      {
       home_id: 4,
       buyer_id: 11,
      },
      {
       home_id: 5,
       buyer_id: 9,
      },
      {
       home_id: 6,
       buyer_id: 8,
      },
      {
       home_id: 7,
       buyer_id: 12,
      },
      {
       home_id: 8,
       buyer_id: 14,
      },
      {
       home_id: 9,
       buyer_id: 10,
      },
      {
       home_id: 10,
       buyer_id: 7,
      },
      {
       home_id: 11,
       buyer_id: 5,
      }
      ,
     ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('buyer_homes_id_seq', (SELECT MAX(id) FROM buyer_homes));"
    )
  })

};
