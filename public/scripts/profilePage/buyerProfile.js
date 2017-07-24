(function(){

  angular.module('app')
  .component('buyerProfile', {
    controller: controller,
    templateUrl: './scripts/survey/buyerProfile.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'SurveyService']
  function controller (baseUrl, $http, $state, SurveyService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my buyerProfile component')
    }

  }
})()
