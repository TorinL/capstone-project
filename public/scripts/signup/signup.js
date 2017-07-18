(function(){
  angular.module('app')
  .component('signup', {
    controller: controller,
    templateUrl: './scripts/signup/signup.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$stateParams', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, $stateParams, SessionsService, UsersService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my signup component')
    }

    vm.reset = function () {
      vm.response = vm.notification = ''
      vm.errors = []
      vm.signupOpts = {}
    }

    vm.reset()
    vm.notification = $stateParams.notification || ''
    vm.session = SessionsService

    vm.signup = function (user) {
      console.log(user);
      UsersService.create(user)
      .then(function () {
        return SessionsService.login(user)
      })
      .then(function () {
        vm.reset()
        vm.response = 'You successfully created an account and are logged in!'
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
