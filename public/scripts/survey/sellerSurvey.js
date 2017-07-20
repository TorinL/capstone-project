(function(){

  angular.module('app')
  .component('sellerSurvey', {
    controller: controller,
    templateUrl: './scripts/survey/sellerSurvey.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', '$stateParams', 'SessionsService', 'HomesService']
  function controller (baseUrl, $http, $state, $stateParams, SessionsService, HomesService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my survey component')
    }

    vm.reset = function () {
      vm.sellerOpts = {}
    }

   vm.reset()
   vm.session = SessionsService

   vm.postHome = function(home) {
     console.log('home');
     HomesService.create(home)
     .then(function() {
     $state.go('dashboard')
     })
   }
  }
})()
