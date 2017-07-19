(function(){

  angular.module('app')
  .component('login', {
    controller: controller,
    templateUrl: './scripts/login/login.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$stateParams', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, $stateParams, SessionsService, UsersService){
    const vm = this

    vm.reset = function () {
    vm.response = vm.notification = ''
    vm.errors = []
    vm.loginOpts = {}
    }

    vm.reset()
    vm.notification = $stateParams.notification || ''
    vm.session = SessionsService

    vm.login = function (user) {
      SessionsService.login(user)
        .then(function () {
          vm.reset()
          vm.response = 'You successfully logged in!'
          $state.go('dashboard')
        })
        .catch(function (result) {
          vm.errors.push(result.data.err)
        })
    }

  }
})()
