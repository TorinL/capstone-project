(function(){

  angular.module('app')
  .component('ownerMatches', {
    controller: controller,
    templateUrl: './scripts/matches/ownerMatches.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, SessionsService, UsersService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      $http.get(`${baseUrl}/api/users`).then((users) => {
        vm.users = users.data.users
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
  }
})()
