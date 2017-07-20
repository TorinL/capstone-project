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
   console.log('checking new home entry');
   res.json(home)
 })
 .catch((err) => {
   console.error(err)
 })
}

module.exports = { getFeaturedHomes, newHomes }
