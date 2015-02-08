'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('ApplicationCtrl', ['$scope','$http','$cookies','$rootScope','Session','AUTH_EVENTS','USER_ROLES','AuthService', function ($scope,$http,$cookies,$rootScope,Session,AUTH_EVENTS,USER_ROLES,AuthService) {
 	$scope.currentUser = null;
 	$scope.userRoles = USER_ROLES;
 	$scope.isAuthorized = AuthService.isAuthorized;

 	$scope.visitorCount = 0;

 	$scope.setCurrentUser = function (user) {
 		$scope.currentUser = user;
 	};
 	$scope.isLoginPage = true;

 	function checkIfLoggedIn() {
 		
 		$http.get('api/index.php/auth/check_if_logged_in')
 		.success(function(data, status, headers, config) {
 			console.log(data);
 			$scope.visitorCount = data.visitor_count;
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

 	$scope.returnedData = {};

 	$scope.showFeedbackForm = '';

 	$scope.toggleFeedback = function() {
 		$scope.showFeedbackForm = !!$scope.showFeedbackForm ? false : true;
 	}

 	$scope.clicked = false;
 	$scope.feedback = {
 		'name' : '',
 		'email' : '',
 		'message' : ''
 	};

 	$scope.feedbackSubmit = function() {

 		var feedback = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'name' : $scope.feedback.name,
 			'email' : $scope.feedback.email,
 			'message' : $scope.feedback.message
 		});
 		$scope.clicked = true;

 		$http.post('api/index.php/auth/feedback',feedback, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			$scope.returnedData = data;
 			console.log(data);

 			var original = $scope.feedback;

 			$scope.feedback= angular.copy(original)
 			$scope.feedbackForm.$setPristine()

 			if (data.success === false) {
 			}else{

 				$scope.feedback = {
 					'name' : '',
 					'email' : '',
 					'message' : ''
 				};
 			}
 			$scope.clicked = false;
 		})
 		.error(function(data) {
 			console.log('http error occured!');
 			console.log(data);
 			$scope.clicked = false;
 		});
 	}
 }]);
