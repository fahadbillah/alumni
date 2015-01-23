'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('LogoutCtrl', ['$scope','$http','$location','$rootScope','Session','AUTH_EVENTS',function ($scope,$http,$location,$rootScope,Session,AUTH_EVENTS) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];



 	$http.get('api/index.php/Auth/logout')
 	.success(function(data) {
 		console.log(data);
 		if (data.success === true) {

 		} else{
 		};

 		Session.destroy();
 		$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
 		$scope.setCurrentUser(null);
 		// $location.replace('/login');
 	})
 	.error(function(data) {
 		console.log(data);
 	});
 }]);
