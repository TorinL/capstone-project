(function(){

  angular.module('app')
  .component('sellerSurvey', {
    controller: controller,
    templateUrl: './scripts/survey/sellerSurvey.html'
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
