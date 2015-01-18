'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('ApplicationCtrl', ['$scope','$http','$rootScope','Session','AUTH_EVENTS','USER_ROLES','AuthService', function ($scope,$http,$rootScope,Session,AUTH_EVENTS,USER_ROLES,AuthService) {
 	$scope.currentUser = null;
 	$scope.userRoles = USER_ROLES;
 	$scope.isAuthorized = AuthService.isAuthorized;


 	$scope.setCurrentUser = function (user) {
 		$scope.currentUser = user;
 	};
 	$scope.isLoginPage = true;

 	function checkIfLoggedIn() {
 		
 		$http.get('api/index.php/auth/check_if_logged_in')
 		.success(function(data, status, headers, config) {
 			console.log(data);
 			if (data.success === false) {
 				Session.destroy();
 				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
 				$scope.setCurrentUser(null);
 				$rootScope.$broadcast($scope.currentUser);
 			}else{
 				$scope.isLoginPage = false;
 				Session.create(data,data.user.id,data.user.role);

 				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
 				$scope.setCurrentUser(data.user);
 				$rootScope.$broadcast($scope.currentUser);
 			}
 		})
 		.error(function(data, status, headers, config) {
 			console.log('error occured!!!')
 			console.log(data)
 		});
 	}

 	checkIfLoggedIn();
 }]);
