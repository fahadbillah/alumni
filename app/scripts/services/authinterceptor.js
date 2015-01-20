'use strict';

/**
 * @ngdoc service
 * @name alumniApp.AuthInterceptor
 * @description
 * # AuthInterceptor
 * Factory in the alumniApp.
 */
 angular.module('alumniApp')
 .config(function ($httpProvider) {
  $httpProvider.interceptors.push(['$injector',function ($injector) {
    return $injector.get('AuthInterceptor');
  }
  ]);
})
 // .factory('AuthInterceptor',['$q','$rootScope','$location','AUTH_EVENTS','SESSION','AuthService', function ($q,$rootScope,$location,AUTH_EVENTS,SESSION,AuthService) {
  .factory('AuthInterceptor',['$q','$rootScope','$location','AUTH_EVENTS','Session', function ($q,$rootScope,$location,AUTH_EVENTS,Session) {
   return {
     responseError: function (response) { 
       $rootScope.$broadcast({
         401: AUTH_EVENTS.notAuthenticated,
         403: AUTH_EVENTS.notAuthorized,
         419: AUTH_EVENTS.sessionTimeout,
         440: AUTH_EVENTS.sessionTimeout
       }[response.status], response);


       if (response.status === 401) {
        Session.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        $rootScope.currentUser = null;

        var currentUrl = $location.url();
        if (currentUrl.search('profile') >=0 || currentUrl.search('admin') >=0) {
          $location.path('/login');
        };

      };


      return $q.reject(response);
    }
  };
}]);
