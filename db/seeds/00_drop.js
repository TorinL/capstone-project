exports.seed = (knex) => {
  return knex('buyer_homes').del()
    .then(() => knex('homes').del())
    .then(() => knex('users').del())
}
