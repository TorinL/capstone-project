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

    .state({
      name: 'login',
      url:'/login',
      component:'login'
    })

    .state({
      name: 'signup',
      url:'/signup',
      component:'signup'
    })

    .state({
      name: 'buyerSurvey',
      url:'/buyerSurvey',
      component:'buyerSurvey'
    })

    .state({
      name: 'sellerSurvey',
      url:'/sellerSurvey',
      component:'sellerSurvey'
    })

    .state({
      name: 'matches',
      url:'/matches',
      component:'matches'
    })

    .state({
      name: 'listing',
      url:'/listing',
      component:'listing'
    })
  }
})()
