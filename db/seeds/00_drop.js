exports.seed = (knex) => {
  return knex('buyer_homes').del()
    .then(() => knex('buyers_survey').del())
    .then(() => knex('homes').del())
    .then(() => knex('users').del())
}
