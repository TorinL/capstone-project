(function(){

  angular.module('app')
  .component('matches', {
    controller: controller,
    templateUrl: './scripts/matches/matches.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my matches component')
    }

  }
})()
