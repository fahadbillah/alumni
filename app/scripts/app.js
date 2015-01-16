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
 .config(function ($routeProvider,$locationProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
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
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl'
  })
  .when('/profile/:userId', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
