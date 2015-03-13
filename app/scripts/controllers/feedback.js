'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('FeedbackCtrl',['$http', '$scope', '$cookies', '$rootScope', '$location', 'USER_ROLES', 'AUTH_EVENTS', 'AuthService', function ($http, $scope, $cookies, $rootScope, $location, USER_ROLES, AUTH_EVENTS, AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	if (!AuthService.isAuthorized([USER_ROLES.admin])) {
 		$location.path('/login');
 		return false;
 	}

 	$scope.limit = 5;
 	$scope.offset = 0;

 	$scope.allFeedback = [];
 	$scope.currentFeedback = [];

 	$scope.getFeedback = function(offset) {
 		$scope.offset = offset;
 		$http.get('api/index.php/user/get_all_feedbacks/'+$scope.limit+'/'+offset)
 		.success(function(data) {
 			console.log(data);

 			$scope.allFeedbackCount = data['all_count'];
 			$scope.currentFeedback = data['filtered'];

 		})
 		.error(function(data) {
 			console.log(data);
 		});
 	}

 	$scope.getFeedback($scope.offset);

 	$scope.getArrayToNumber = function() {
 		if ($scope.allFeedbackCount === undefined) {
 			return false;
 		};
 		// console.log($scope.allFeedbackCount);
 		// console.log($scope.allFeedbackCount%$scope.limit);
 		// console.log(Math.floor($scope.allFeedbackCount/$scope.limit)+1);

 		if ($scope.allFeedbackCount % $scope.limit == 0) {
 			return new Array(Math.floor($scope.allFeedbackCount/$scope.limit));   
 		} else{
 			return new Array(Math.floor($scope.allFeedbackCount/$scope.limit)+1);   
 		};
 	}
 }]);
