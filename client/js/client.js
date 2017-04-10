var MyApp = angular.module('MovieApp', ['ngRoute']);

MyApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: '',
      templateUrl: 'views/index.html'
    })
    .when('/search', {
      controller: '',
      templateUrl: '',
    })
    .when('/favorites', {
      controller: '',
      templateUrl: '',
    })
    .otherwise({
      redirectTo: '/'
    });
});
