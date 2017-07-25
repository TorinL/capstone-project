(function(){

  angular.module('app')
  .component('singleListing', {
    controller: controller,
    templateUrl: './scripts/listing/listing.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'HomesService', 'UsersService', '$stateParams']
  function controller (baseUrl, $http, $state, HomesService, UsersService, $stateParams){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      console.log('inside my listing component')
      HomesService.show($stateParams.id)
      .then(home => {
        console.log(home);
        vm.home = home.home
      })
      .catch(err => {
        console.error(err);
      })
      this.showHome = function (id) {
        return $http.get(`/api/homes/${id}`)
      }
    }
  }
})()
