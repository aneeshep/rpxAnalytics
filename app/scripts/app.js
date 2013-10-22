'use strict';

angular.module('WorksApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/models/:id', {
        templateUrl: 'views/models.html',
        controller: 'ModelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
