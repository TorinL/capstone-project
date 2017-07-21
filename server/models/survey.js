const db = require('../../db/index.js')
const ResourceFactory = require('./_Resource')
const Resource =  ResourceFactory()

class Survey {
  constructor(){
  }

  static newBuyerSurvey(body){
    const { location, square_footage, home_value, bedrooms, bathrooms } = body
    console.log(body);

    if (!location || !square_footage || !home_value || !bedrooms || !bathrooms)

      return Promise.reject({status: 422, message: 'One or more fields missing, please complete the survey before submitting.'})


    return Resource.createBuyerSurvey({ location, square_footage, home_value, bedrooms, bathrooms })
  }
}

module.exports = Survey
