'use strict';

/**
 * @ngdoc overview
 * @name alumniApp
 * @description
 * # alumniApp
 *
 * Main module of the application.
 */
 angular
 .module('alumniApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/survey', {
    templateUrl: 'views/survey.html',
    controller: 'SurveyCtrl'
  })
  .when('/survey/:referralLink', {
    templateUrl: 'views/survey.html',
    controller: 'SurveyCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
