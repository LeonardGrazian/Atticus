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
        // view 1
        .when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
        })
        // view 2
        .when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
        })
        // else
        .otherwise('/landing');
  }
]);
