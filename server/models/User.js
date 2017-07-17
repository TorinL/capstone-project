const db = require('../../db/index.js')
const bcrypt = require('bcrypt-as-promised')
const ResourceFactory = require('./_Resource')
const Resource =  ResourceFactory()

class User extends Resource {
  static create(body) {
    debugger
    const { first_name, last_name, email, password, phone_number, seller } = body

    if (!first_name || !last_name || !email || !password ||  !phone_number)

      return Promise.reject({status: 422, message: 'Email and password required.'})


    return bcrypt.hash(password).then(password => {
      debugger
      return Resource.create({ first_name, last_name, email, password, phone_number, seller })
    })

  }
  static findByEmail (email) {
    return db('users').where({ email }).first()
  }
}


module.exports = User
