(function(){

  angular.module('app')
  .component('buyerMatches', {
    controller: controller,
    templateUrl: './scripts/matches/buyerMatches.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, SessionsService, UsersService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      $http.get(`${baseUrl}/api/homes`).then((allHomes) => {
        vm.allHomes = allHomes.data
      })
    }

    UsersService.show(SessionsService.user.id)
    .then(function (result) {
      vm.user = result.data.user
    })
    .catch(function (result) {
      console.error('No user logged in');
      $state.go('/login', { notification: 'You do not have access to that page.' })
    })

    this.showHome = function (id) {
      return $http.get(`/api/homes/${id}`)
    }
  }
})()
