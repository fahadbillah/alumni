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
   'ngTouch',
   'td.easySocialShare'
   ])
 .config(['$routeProvider','$locationProvider','USER_ROLES', function ($routeProvider,$locationProvider,USER_ROLES) {
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
     controller: 'SurveyCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user, USER_ROLES.guest]
     }
   })
   .when('/survey/:referralLink', {
     templateUrl: 'views/survey.html',
     controller: 'SurveyCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user, USER_ROLES.guest]
     }
   })
   .when('/profile', {
     templateUrl: 'views/profile.html',
     controller: 'ProfileCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
     }
   })
   .when('/profile/:userId', {
     templateUrl: 'views/profile.html',
     controller: 'ProfileCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
     }
   })
   .when('/login', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl',
     data: {
       authorizedRoles: [USER_ROLES.guest]
     }
   })
   .when('/logout', {
     templateUrl: 'views/logout.html',
     controller: 'LogoutCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
     }
   })
   .otherwise({
     redirectTo: '/'
   });
 }])
.run(function ($rootScope, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$routeChangeStart ', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    console.log(authorizedRoles);
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        // user is not allowed
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
});
