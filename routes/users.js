const express = require('express');
const router = express.Router();

const authorize = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/')
  }

  next()
}

router.get('/edit', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId

  knex('users').select('*').where({ id }).first()
  .then(user => {
    res.render('users/edit', { user })
  })
})

router.get('/', authorize, (req, res, next) => {
  const { userId } = req.session
  const id = userId
  console.log(res.locals);

  knex('users').select('*').where({ id }).then(userData => {

    res.render('users/profile', { userData })
  })
})

  router.put('/', (req, res, next) => {
    const { userId } = req.session
    const id = userId

    let user = {
      seller: req.body.seller,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_url,
      profile_url: req.body.profile_url,
    }
    knex('users').update(user, '*').where({ id }).then(user => {
      res.redirect('/users')
    })
  })

  router.post('/', (req, res, next) => {
  if (req.body.password !== req.body.confirm) {
    res.send('Password fields are not matching!')
  }

  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: hashed_password
      }, '*');
    })
    .then((users) => {
      const user = users[0]

      delete user.hashed_password
      req.session.userId = user.id

      res.redirect(`/users`)
    })
})


module.exports = router;
