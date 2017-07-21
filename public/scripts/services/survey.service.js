(function() {
  angular.module('app')
    .service('SurveyService', service)

  service.$inject = ['$http']
  function service ($http) {
    this.create = function (buyers_survey) {
      var body = { location: buyers_survey.location, square_footage: buyers_survey.square_footage, home_value: buyers_survey.home_value, bedrooms: buyers_survey.bedrooms, bathrooms: buyers_survey.bathrooms }

      return $http.post('/api/buyers_survey', body)
    }

    this.show = function (id) {
      return $http.get(`/api/buyers_survey/${id}`)
    }
  }
}());
