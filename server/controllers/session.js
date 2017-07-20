const  User  = require('../models/User.js')
const bcrypt = require('bcrypt-as-promised')

function create (req, res, next) {
  const { email, password } = req.body
  const err = { status: 401, message: 'Email and password are required' }

  if (!email || !password) return next(err)

  User.findByEmail(email)
    .then(user => {
      return bcrypt.compare(password, user.password)
        .then(() => {
          req.session.userId = user.id

          res.json({ user: { id: user.id, email: user.email }})
        })
    })
    .catch((e) => next({ status: 401, message: e }))
}

function refresh (req, res, next) {
  const id = req.session.userId

  if (id) {
    User.findById(id)
      .then(user => res.json({ user: { id: user.id, email: user.email }}))
      .catch(next)
  } else {
    res.json(false)
  }
}

function destroy (req, res, next) {
  req.session.destroy((err) => err ? next(err) : res.json(true))
}

module.exports = {
  create, destroy, refresh
}
