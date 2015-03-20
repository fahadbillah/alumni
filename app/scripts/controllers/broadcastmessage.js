'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:BroadcastmessageCtrl
 * @description
 * # BroadcastmessageCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('BroadcastmessageCtrl',['$scope','$http','$cookies','$rootScope','$routeParams','$location','Session','AUTH_EVENTS','USER_ROLES','AuthService', function ($scope,$http,$cookies,$rootScope,$routeParams,$location,Session,AUTH_EVENTS,USER_ROLES,AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	if ($routeParams.messageId == undefined) {

 		$scope.messageId = 'New Message';
 		$scope.id = '';
 	} else{

 		$http.get('api/index.php/user/get_admin_message/'+$routeParams.messageId)
 		.success(function(data) {
 			// body...
 			console.log(data);

 			$scope.id = data[0].admin_message_id;
 			$scope.subject = data[0].subject;
 			$scope.htmlMessage = data[0].html_message;
 		})
 		.error(function(data) {
 			// body...
 		});

 		$scope.messageId = 'Message ID: '+$routeParams.messageId ;
 		$scope.id = $routeParams.messageId ;
 	};



 	$scope.saveMessage  = function() {
 		var message = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'message_id': $scope.id,
 			'subject': $scope.subject,
 			'message': $scope.htmlMessage,
 		});

 		$http.post('api/index.php/user/admin_message_save',message, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);

 			if (data.redirect_to !== undefined) {
 				$location.path('#/broadcastMessage/'+data.redirect_to)
 			}

 		})
 		.error(function(data) {
 			console.log(data);
 		});
 	}

 }]);