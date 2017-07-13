(function(){

  angular.module('app')
  .component('survey', {
    controller: controller,
    templateUrl: './scripts/survey/survey.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my survey component')
    }

  }
})()
