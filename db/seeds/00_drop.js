exports.seed = (knex) => {
  const tables = ['buyerHomes', 'homes', 'users']
  const clearIDs = tables.map(table => {
    return knex.raw(
      `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
    )
  })

  return knex('buyerHomes').del()
    .then(() => knex('homes').del())
    .then(() => knex('users').del())
    .then(() => Promise.all(clearIDs))
}
