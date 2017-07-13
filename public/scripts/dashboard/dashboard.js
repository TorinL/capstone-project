(function(){

  angular.module('app')
  .component('dashboard', {
    controller: controller,
    templateUrl: './scripts/dashboard/dashboard.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my dashboard component')
    }

  }
})()
