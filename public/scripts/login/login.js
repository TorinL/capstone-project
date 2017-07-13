(function(){

  angular.module('app')
  .component('login', {
    controller: controller,
    templateUrl: './scripts/login/login.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my login component')
    }

  }
})()
