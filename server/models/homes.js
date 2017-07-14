const db = require('../../db/index.js')

class Homes {
  constructor(){
  }
  static getHomes() {
    return db('homes')
    .select('*').limit(3)
  }
}

module.exports = Homes
