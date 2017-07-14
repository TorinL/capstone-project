const homes = require('../models/homes.js')

function getFeaturedHomes(req, res){
  console.log('here');
  homes.getHomes().then((featuredHomes) => {
    res.json(featuredHomes)
  }).catch((err) => {
    console.error(err);
  })
}

module.exports = { getFeaturedHomes }
