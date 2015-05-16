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

 	$scope.reply = {
 		name: '',
 		receiver: '',
 		original_message: '',
 		message:''
 	}

 	var reset = function() {
 		$scope.modal = false;
 		$scope.reply.name = '';
 		$scope.reply.receiver = '';
 		$scope.reply.original_message = '';
 		$scope.reply.message = '';
 	};

 	$scope.modal = false;
 	$scope.receiver = '';
 	$scope.showModal = function(f) {
 		if (!f) {
 			reset();
 			return false
 		};
 		$scope.modal = true;
 		$scope.reply.name = f.name;
 		$scope.reply.receiver = f.email;
 		$scope.reply.original_message = f.message;
 	};

 	$scope.sendReply = function(reply) {
 		reply.csrf_test_name = $cookies['XSRF-TOKEN'];
 		// reply.name = 'Fahad Billah';
 		// reply.receiver = 'fahadbillah@yahoo.com';
 		// reply.original_message = 'old test message';
 		// reply.message = 'test message';
 		reply = $.param(reply);
 		$http.post('api/index.php/user/reply_to_feedback',reply,{headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (!!data.success) {
 				reset();
 				alert('Email send successfully!');
 			};
 		});
 	};
 }]);
