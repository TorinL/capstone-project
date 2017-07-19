(function(){

  angular.module('app')
  .component('singleListing', {
    controller: controller,
    templateUrl: './scripts/listing/listing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my listing component')
    }

  }
})()
