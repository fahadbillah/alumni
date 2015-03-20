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


 	if (!AuthService.isAuthorized([USER_ROLES.admin])) {
 		$location.path('/login');
 		return false;
 	}

 	$scope.allAlumni = [];

 	$scope.limit = 100;
 	$scope.offset = 0;

 	$scope.getAlumni = function(offset) {
 		$scope.offset = offset;
 		$http.get('api/index.php/user/get_alumni_list/'+$scope.limit+'/'+offset)
 		.success(function(data) {
 			console.log(data);
 			$scope.allAlumniCount = data.total_count;
 			$scope.allAlumni = data.list;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});

 	}
 	$scope.getAlumni($scope.offset);


 	$scope.goToProfile = function(userId) {
 		$location.path('/profile/'+userId);
 	}

 	$scope.getArrayToNumber = function() {
 		if ($scope.allAlumniCount === undefined) {
 			return false;
 		};
 		if ($scope.allAlumniCount % $scope.limit == 0) {
 			return new Array(Math.floor($scope.allAlumniCount/$scope.limit));   
 		} else{
 			return new Array(Math.floor($scope.allAlumniCount/$scope.limit)+1);   
 		};
 	}
 }]);
