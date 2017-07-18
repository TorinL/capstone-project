const User = require('../models/User.js')

function index (req, res, next) {
  User.all().then(users => res.json({ users })).catch(next)
}

function show (req, res, next) {
  const id = req.params.id
  User.findById(id).then(user => res.json({ user })).catch(next)
}

function create (req, res, next) {
  const body = req.body
  User.create(body).then((user) => {
    res.json({ user }
    )}).catch((err) =>{
      next(err)
    })
}


module.exports = {
  index, show, create
 }
