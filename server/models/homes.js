const db = require('../../db/index.js')
const ResourceFactory = require('./_Resource')
const Resource =  ResourceFactory()

class Homes {
  constructor(){
  }
  static getHomes() {
    return db('homes')
    .select('*').limit(3)
  }

  static displayAllHomes() {
    return db('homes')
  }

  static displayMatchedHomes(id) {
    return db('buyer_survey')
  }

  static findHomeById (id) {
    return db('homes').where({ id }).first()
  }

  static insertHome(body){
    const { location, address, zip_code, square_footage, bedrooms, bathrooms, home_value, description, img_url } = body
    console.log(body);

    if (!location || !address || !zip_code || !square_footage || !bedrooms || !bathrooms || !home_value || !description)

      return Promise.reject({status: 422, message: 'One or more fields missing, please complete the survey before submitting.'})


    return Resource.createHome({ location, address, zip_code, square_footage, bedrooms, bathrooms, home_value, description, img_url })
    }

  }


module.exports = Homes
