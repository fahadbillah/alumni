'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('ListCtrl',['$http', '$scope', '$cookies', '$rootScope', '$location', 'USER_ROLES', 'AUTH_EVENTS', 'AuthService', function ($http, $scope, $cookies, $rootScope, $location, USER_ROLES, AUTH_EVENTS, AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];


 	// if (!AuthService.isAuthorized([USER_ROLES.admin,USER_ROLES.user])) {
 	// 	$location.path('/login');
 	// 	return false;
 	// }

 	$scope.allAlumni = [];

 	$http.get('api/index.php/user/get_alumni_list')
 	.success(function(data) {
 		console.log(data);
 		$scope.allAlumni = data.list;
 	})
 	.error(function(data, status, headers, config) {
 		console.log(data);
 	});


 	$scope.goToProfile = function(userId) {
 		$location.path('/profile/'+userId);
 	}
 }]);
