'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('FeedbackCtrl',['$scope', '$http', function ($scope,$http) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

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
 		console.log($scope.allFeedbackCount);
 		return new Array(Math.floor($scope.allFeedbackCount/$scope.limit)+1);   
 	}
 }]);
