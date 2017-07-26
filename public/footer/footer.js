(function(){

  angular.module('app')
  .component('footer', {
    controller: controller,
    templateUrl: './scripts/footer/footer.html',
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this


    function $onInit () {
      console.log('inside my footer');
    }
}
})()
