(function() {
  angular.module('app')
    .service('SessionsService', service)

  service.$inject = ['$http']
  function service ($http) {
    const sessionService = this
    this.getUserId = getUserId;


    sessionService.user = {}

    sessionService.refresh = function () {
      console.log('?');
      return $http.get(`/api/sessions/refresh`).then(function (result) {
        var response = result.data
        response ? Object.assign(sessionService.user, response.user) : Object.assign(sessionService.user, {})
      })
    }

    function getUserId() {
      let userId = window.localStorage.getItem("housefinder-userId");
      console.log(typeof userId);

      return userId;
    }
    sessionService.login = function (user) {
      var body = { email: user.email, password: user.password }

      return $http.post('/api/sessions', body)
        .then(function (result) {
          console.log('login stuff',result.data.user);
          Object.assign(sessionService.user, result.data.user)
          window.localStorage.setItem("housefinder-userId",result.data.user.id);
          return sessionService.user
        })
        .catch((err) => {
          console.error(err);
        })
    }

    sessionService.logout = function () {
      for (var key in sessionService.user) {
        delete sessionService.user[key]
      }
      
      window.localStorage.setItem("housefinder-userId", undefined)
      return $http.delete('/api/sessions')
    }
  }
}());
