(function(){

  angular.module('app')
  .component('navbar', {
    controller: controller,
    templateUrl: './scripts/navbar/navbar.html',
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$stateParams', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, $stateParams, SessionsService, UsersService){
    const vm = this
    vm.$onInit = $onInit

    vm.reset = function () {
      vm.response = vm.notification = ''
      vm.errors = []
      vm.loginOpts = {}
      vm.signupOpts = {}
    }

    vm.reset()
    vm.notification = $stateParams.notification || ''
    // userId = SessionsService.getUserId();


    function $onInit () {
      vm.user = SessionsService.user
    }



  vm.logout = function () {
    SessionsService.logout().then(function () {
      vm.reset()
      vm.response = 'You successfully logged out.'
      $state.go('base')
    })
  }
}
})()
