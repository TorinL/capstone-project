(function(){

  angular.module('app')
  .component('matches', {
    controller: controller,
    templateUrl: './scripts/matches/matches.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'SessionsService', 'UsersService']
  function controller (baseUrl, $http, $state, SessionsService, UsersService){
    const vm = this
    vm.$onInit = $onInit


    function $onInit () {
      $http.get(`${baseUrl}/api/homes`).then((allHomes) => {
        console.log('these are homes', allHomes);
        vm.allHomes = allHomes.data
      })

      $http.get(`${baseUrl}/api/users`).then((users) => {
        console.log('these are users', users);
        vm.users = users.data.users
      })


    }

    UsersService.show(SessionsService.user.id)
    .then(function (result) {
      console.log(' im a cool dude and im derek' , result.data);
      vm.user = result.data.user
    })
    .catch(function (result) {
      console.error('No user logged in');
      $state.go('/login', { notification: 'You do not have access to that page.' })
    })
  }
})()
