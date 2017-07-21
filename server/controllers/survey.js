const survey = require('../models/survey.js')

function postSurvey(req, res, next){
  let body = req.body
  console.log(req.body);
 survey.newBuyerSurvey(body).then((survey) => {
   console.log('checking new home entry');
   res.json(survey)
 })
 .catch((err) => {
   console.error(err)
 })
}


module.exports = {
  postSurvey
}
