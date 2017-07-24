(function(){
  angular.module('app')
  .component('edit', {
    controller: controller,
    templateUrl: './scripts/edit/edit.html'
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
      vm.editOpts = {}
    }

    vm.reset()
    vm.notification = $stateParams.notification || ''
    vm.session = SessionsService

    vm.edit = function (user) {
      console.log(user);
      UsersService.create(user)
      .then(function () {
        return SessionsService.login(user)
      })
      .then(function () {
        vm.reset()
        vm.response = 'You successfully created an account and are logged in!'
        $state.go('dashboard')
      })
      .catch(function (result) {
        vm.errors.push(result.data.err)
      })
    }

    }
  })()
