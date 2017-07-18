(function(){

  angular.module('app')
  .component('login', {
    controller: controller,
    templateUrl: './scripts/login/login.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$stateParams', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, $stateParams, SessionsService, UsersService){
    const vm = this
    vm.$onInit = $onInit




    function $onInit () {
      console.log('inside my login component')
    }

    vm.reset = function () {
    vm.response = vm.notification = ''
    vm.errors = []
    vm.loginOpts = {}
    }

    vm.reset()
    vm.notification = $stateParams.notification || ''
    vm.session = SessionsService

    vm.login = function (user) {
      debugger
      SessionsService.login(user)
        .then(function (returned) {
          vm.reset()
          vm.response = 'You successfully logged in!'
          console.log(returnedUser);
        })
        .catch(function (result) {
          vm.errors.push(result.data.err)
        })
    }

    vm.logout = function () {
      SessionsService.logout().then(function () {
        vm.reset()
        vm.response = 'You successfully logged out.'
      })
    }

  }
})()
