const homes = require('../models/homes.js')

function getFeaturedHomes(req, res){
  homes.getHomes().then((featuredHomes) => {
    res.json(featuredHomes)
  }).catch((err) => {
    console.error(err);
  })
}

function newHomes(req, res, next){
  let body = req.body
  console.log(req.body);
 homes.insertHome(body).then((home) => {
   res.json(home)
 })
 .catch((err) => {
   console.error(err)
 })
}

function getHomes(req, res, next){
  homes.displayAllHomes().then((allHomes) => {
    res.json(allHomes)
  })
  .catch((err) => {
    console.error(err);
  })
}

function showHome (req, res, next) {
  const id = req.params.id
  homes.findHomeById(id).then(user => res.json({ home })).catch(next)
}


module.exports = { getFeaturedHomes, newHomes, getHomes, showHome }
