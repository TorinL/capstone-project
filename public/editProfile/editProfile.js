(function(){

  angular.module('app')
  .component('editProfile', {
    controller: controller,
    templateUrl: './scripts/editProfile/editProfile.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state','SessionsService', 'UsersService']
  function controller (API_BASE_URL, $http, $state, SessionsService, UsersService){
    const vm = this
    vm.user = {}


    UsersService.show(SessionsService.user.id)
    .then(function (result) { vm.user = result.data.user })
    .catch(function (result) {
      $state.go('/login', { notification: 'You do not have access to that page.' })
    })
  }
})()
