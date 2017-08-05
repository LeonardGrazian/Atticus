'use strict';

angular.module('myApp')
  .config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        // landing page
        .when('/landing', {
          templateUrl: 'landing_view/landing_view.html',
          controller: 'LandingCtrl'
        })
        // about page
        .when('/about', {
          templateUrl: 'about_view/about_view.html',
          controller: 'AboutCtrl'
        })
        // login page
        .when('/login', {
          templateUrl: 'login_view/login_view.html',
          controller: 'LoginCtrl'
        })
        // else
        .otherwise('/landing');
  }
]);
