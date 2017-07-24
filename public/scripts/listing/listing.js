(function(){

  angular.module('app')
  .component('singleListing', {
    controller: controller,
    templateUrl: './scripts/listing/listing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'homesService']
  function controller (baseUrl, $http, $state, $homesService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my listing component')
      this.show = function (id) {
        return $http.get(`/api/homes/${id}`)
      }
    }

  }
})()
