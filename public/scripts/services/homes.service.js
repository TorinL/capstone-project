(function() {
  angular.module('app')
    .service('HomesService', service)

  service.$inject = ['$http']
  function service ($http) {
    this.create = function (home) {
      var body = { location: home.location, address: home.address, zip_code: home.zip_code, square_footage: home.square_footage, bedrooms: home.bedrooms, bathrooms: home.bathrooms, home_value: home.home_value, description: home.description }

      return $http.post('/api/homes', body)
    }

    this.show = function (id) {
      return $http.get(`/api/homes/${id}`)
    }
  }
}());
