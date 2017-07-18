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

function destroy (req, res, next) {
  req.session.destroy((err) => err ? next(err) : res.json(true))
}

module.exports = {
  create, destroy
}
