(function(){

  angular.module('app')
  .component('homepage', {
    controller: controller,
    templateUrl: './scripts/homepage/homepage.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      $http.get(`${baseUrl}/api/homepage`).then((featuredHomes) => {
        vm.featuredHomes = featuredHomes.data
        console.log(featuredHomes)
      })
    }
  }
})()
