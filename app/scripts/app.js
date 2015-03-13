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
   'angularFileUpload'
   ])
 .config(['$routeProvider','$locationProvider','USER_ROLES', function ($routeProvider,$locationProvider,USER_ROLES) {
   // $locationProvider.html5Mode(true).hashPrefix('!');
   $routeProvider
   .when('/', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user, USER_ROLES.guest]
     }
   })
   .when('/about', {
     templateUrl: 'views/about.html',
     controller: 'AboutCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user, USER_ROLES.guest]
     }
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
   .when('/list', {
     templateUrl: 'views/list.html',
     controller: 'ListCtrl',
     data: {
      authorizedRoles: [USER_ROLES.admin]
    }
  })
   .when('/nsuAlumniSurvey', {
     templateUrl: 'views/nsualumnisurvey.html',
     controller: 'NsualumnisurveyCtrl',
     data: {
       authorizedRoles: [USER_ROLES.admin, USER_ROLES.user, USER_ROLES.guest]
     }
   })
   .when('/contactus', {
     templateUrl: 'views/contactus.html',
     controller: 'ContactusCtrl'
   })
   .when('/aboutus', {
     templateUrl: 'views/aboutus.html',
     controller: 'AboutusCtrl'
   })
   .when('/feedback', {
     templateUrl: 'views/feedback.html',
     controller: 'FeedbackCtrl'
   })
   .when('/noticeboard', {
     templateUrl: 'views/noticeboard.html',
     controller: 'NoticeboardCtrl'
   })
   .when('/quicksurvey/:surveyId', {
     templateUrl: 'views/quicksurvey.html',
     controller: 'QuicksurveyCtrl'
   })
   .otherwise({
     redirectTo: '/'
   });

 }])
.run(['$rootScope', '$http', '$cookies', 'AUTH_EVENTS', 'AuthService', function ($rootScope, $http, $cookies, AUTH_EVENTS, AuthService) {
  $rootScope.$on('$routeChangeStart ', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    console.log(authorizedRoles);
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();
      if (AuthService.isAuthenticated()) {
        // user is not allowed
        console.log('user is not allowed from app.js')
        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      } else {
        // user is not logged in
        console.log('user is not logged from app.js')
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      }
    }
  });
}]);
