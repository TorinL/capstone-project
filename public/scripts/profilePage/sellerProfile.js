(function(){

  angular.module('app')
  .component('sellerProfile', {
    controller: controller,
    templateUrl: './scripts/survey/sellerProfile.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'SurveyService']
  function controller (baseUrl, $http, $state, SurveyService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my sellerProfile component')
    }

  }
})()
