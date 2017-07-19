(function() {
  angular.module('app')
    .service('SessionsService', service)

  service.$inject = ['$http']
  function service ($http) {
    var sessionService = this
    sessionService.user = {}

    sessionService.refresh = function () { // new
      return $http.get(`/api/sessions/refresh`).then(function (result) {
        var response = result.data
        console.log('response:', response);
        response ? sessionService.user = response.user : sessionService.user = {}
      })
    }

    sessionService.login = function (user) {
      var body = { email: user.email, password: user.password }

      return $http.post('/api/sessions', body)
        .then(function (result) {
          sessionService.user = result.data.user
          return sessionService.user
        })
        .catch((err) => {
          console.error(err);
        })
    }

    sessionService.logout = function () {
      sessionService.user = {}

      return $http.delete('/api/sessions')
    }
  }
}());
