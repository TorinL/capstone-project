(function() {
  angular.module('app')
    .service('UsersService', service)

  service.$inject = ['$http']
  function service ($http) {
    this.create = function (user) {
      var body = { first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password, phone_number: user.phone_number, seller: user.seller }

      return $http.post('/api/users', body)
    }

    this.show = function (id) {
      return $http.get(`/api/users/${id}`)
    }
  }
}());
