(function(){

  angular.module('app')
  .component('bottomPage', {
    controller: controller,
    templateUrl: './scripts/footer/footer.html',
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


    function $onInit () {
      vm.user = SessionsService.user
      console.log('inside my footer');
    }
  }
})()
