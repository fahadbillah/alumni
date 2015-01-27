'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('LoginCtrl', ['$http', '$scope', '$cookies', '$rootScope', '$location', 'USER_ROLES', 'AUTH_EVENTS', 'AuthService', function ($http, $scope, $cookies, $rootScope, $location, USER_ROLES, AUTH_EVENTS, AuthService) {


  if (AuthService.isAuthorized([USER_ROLES.admin,USER_ROLES.user])) {
    // alert('you are not allowed here')
    $location.path('/home');
    return false;
  };

  $scope.buttonClicked = false;

  $scope.loginFailed = false;

  $scope.credentials = {
    nsu_id: '',
    password: ''
  };
  $scope.login = function (credentials) {
    $scope.buttonClicked = true;
    AuthService.login(credentials).then(function (user) {
      if(user.success){
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user.user);
        $location.path('/profile');
      }else{
        $scope.loginFailed = true;
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      }
      $scope.buttonClicked = false;
    }, function(){
     $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
     $scope.buttonClicked = false;
   });
  };
}]);
