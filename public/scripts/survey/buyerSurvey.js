(function(){

  angular.module('app')
  .component('buyerSurvey', {
    controller: controller,
    templateUrl: './scripts/survey/buyerSurvey.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'SurveyService']
  function controller (baseUrl, $http, $state, SurveyService){
    const vm = this
    vm.$onInit = $onInit

    vm.reset = function () {
      vm.sellerOpts = {}
    }

    function $onInit () {
      console.log('inside my survey component')
    }

    vm.postSurvey = function(survey) {
      console.log('survey');
      SurveyService.create(survey)
      .then(function() {
      $state.go('dashboard')
      })
    }

  }
})()
