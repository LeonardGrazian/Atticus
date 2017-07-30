'use strict';

angular.
  module('atticus').
    config(['$locationProvider, $routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          // landing page
          when('/', {
            templateURL: 'landing_view/landing_view.html'
          }).
          // login page
          when('/login', {
            template: 'login_view/login_view.html'
          }).
          //about page
          when('/home', {
            template: 'home_view/home_view.html'
          }),
          // else default to landing page
          otherwise('/');
      }]);
