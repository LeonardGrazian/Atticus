'use strict';

angular.
  module('atticus').
    config(['$locationProvider, $routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          // landing page
          when('/', {
            templateURL: 'view1/view1.html'
          }).
          // login page
          when('/login', {
            template: 'view1/view1.html'
          }).
          //about page
          when('/about', {
            template: 'view2,view2.html'
          }),
          // else default to landing page
          otherwise('/')
      }]);
