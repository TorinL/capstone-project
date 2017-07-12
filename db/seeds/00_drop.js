exports.seed = (knex) => {
  const tables = ['buyer_homes', 'homes', 'users']
  const clearIDs = tables.map(table => {
    return knex.raw(
      `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
    )
  })

  return knex('buyer_homes').del()
    .then(() => knex('homes').del())
    .then(() => knex('users').del())
    .then(() => Promise.all(clearIDs))
}
