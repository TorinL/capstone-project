(function() {
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$locationProvider']
  function config($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)
    $stateProvider

    .state({
      name: 'base',
      url: '/',
      component: 'homepage'
    })

    .state({
      name: 'dashboard',
      url:'/dashboard',
      component:'dashboard'
    })
  }
})()
