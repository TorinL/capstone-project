(function(){

  angular.module('app')
  .component('signup', {
    controller: controller,
    templateUrl: './scripts/signup/signup.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my signup component')
    }

  }
})()
