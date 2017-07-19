(function() {
  angular.module('app').run(run)

  run.$inject = ['$state', '$transitions']
  function run ($state, $transitions) {
    $transitions.onStart({}, function (transition) {
      var SessionsService = transition.injector().get('SessionsService')

      SessionsService.refresh().then(() => {
        var user = SessionsService.user
        transition.promise.then(function (result) {
          if (result.requiresLogin && !user.id) {
            var notification = 'You cannot access that page without logging in.'
            return $state.go('login', { notification: notification });
          }
        })
      })
    });
  }
}());
