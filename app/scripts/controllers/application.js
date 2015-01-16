'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('ApplicationCtrl', ['$scope','USER_ROLES','AuthService', function ($scope,USER_ROLES,AuthService) {
 	$scope.currentUser = null;
 	$scope.userRoles = USER_ROLES;
 	$scope.isAuthorized = AuthService.isAuthorized;

 	$scope.isLoginPage

 	$scope.setCurrentUser = function (user) {
 		$scope.currentUser = user;
 	};
 }]);
