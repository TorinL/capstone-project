exports.seed = function(knex) {
  return knex('buyer_homes')
    .then(() => {
      return knex('buyer_homes').insert([
      {
       home_id: 1,
       seller_id: 8,
      },
      {
       home_id: 2,
       seller_id: 14,
      },
      {
       home_id: 3,
       seller_id: 13,
      },
      {
       home_id: 4,
       seller_id: 11,
      },
      {
       home_id: 5,
       seller_id: 9,
      },
      {
       home_id: 6,
       seller_id: 8,
      },
      {
       home_id: 7,
       seller_id: 12,
      },
      {
       home_id: 8,
       seller_id: 14,
      },
      {
       home_id: 9,
       seller_id: 10,
      },
      {
       home_id: 10,
       seller_id: 7,
      },
      {
       home_id: 11,
       seller_id: 5,
      }
      ,
     ])
    }).then(() => {
    return knex.raw(
      "SELECT setval('buyer_homes_id_seq', (SELECT MAX(id) FROM buyer_homes));"
    )
  })

};
