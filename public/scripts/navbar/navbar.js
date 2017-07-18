(function(){

  angular.module('app')
  .component('navbar', {
    controller: controller,
    templateUrl: './scripts/navbar/navbar.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state']
  function controller (baseUrl, $http, $state){
    const vm = this
    vm.$onInit = $onInit
    vm.auth = auth


    function $onInit () {
      console.log('navbar is tight')
    }

  }

  vm.logout = function() {
    vm.auth.logout();
  }
})()



// angular.module('app.navbar', []).component('navBar', {
//   templateUrl: 'components/navbar/navbar.html',
//   controllerAs: 'vm',
//   controller: ['Auth', '$rootRouter', function(Auth, $rootRouter) {
//     var vm = this;
//
//     vm.Auth = Auth;
//
//     vm.logout = function() {
//       vm.Auth.logout();
//       $rootRouter.navigate(['/Home']);
//     }
//   }]
// });
