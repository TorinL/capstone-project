const db = require('../../db/index.js')

function ResourceFactory (table) {
  class Resource {
    constructor () {}

    static all () {
      return db('users')
    }

    static findById (id) {
      return db('users').where({ id }).first()
    }

    static create (body) {
      return db('users').insert(body).returning('*')
    }

    static update (id, body) {
      return db('users').update(body).where({ id }).returning('*')
    }

    static destroy (id) {
      return db('users').del().where({ id }).returning('*')
    }
  }

  return Resource
}

module.exports = ResourceFactory
