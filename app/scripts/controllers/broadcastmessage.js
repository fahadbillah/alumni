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
 		if ($scope.subject == '' || $scope.subject == undefined) {
 			alert('Please Fill subject');
 			return false;
 		};

 		if ($scope.htmlMessage == '' || $scope.htmlMessage == undefined) {
 			alert('Please Fill Message');
 			return false;
 		};

 		var message = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'message_id': $scope.id,
 			'subject': $scope.subject,
 			'message': $scope.htmlMessage,
 			'recepients': JSON.stringify($scope.messageGroup)
 		});

 		$http.post('api/index.php/user/admin_message_save',message, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			alert(data.message)
 			if (data.redirect_to !== undefined) {
 				$location.path('/broadcastMessage/'+data.redirect_to)
 			}

 		})
 		.error(function(data) {
 			console.log(data);
 		});
 	}


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


 	$scope.allMessages = [];

 	$scope.limitMessages = 100;
 	$scope.offsetMessages = 0;
 	$scope.getAllMessages = function(offset) {
 		$scope.offsetMessages = offset;

 		$http.get('api/index.php/user/get_all_broadcast_message/'+$scope.limitMessages+'/'+offset)
 		.success(function(data) {
 			console.log(data);
 			$scope.allMessagesCount = data.count;
 			$scope.allMessages = data.list;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});
 	}
 	$scope.getAllMessages(0);

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

 	$scope.messageGroup = [];
 	$scope.messageGroupDetails = [];

 	$scope.toggleGroupMember = function(id) {
 		var insert = true;
 		angular.forEach($scope.messageGroup, function(e,i) {
 			if (e === id){
 				$scope.messageGroup.splice(i, 1);
 				$scope.messageGroupDetails.splice(i, 1);
 				insert = false;
 				return false;
 			}
 		})
 		if(insert){
 			$scope.messageGroup.push(id)


 			$scope.messageGroupDetails.push(getAlumniById(id));
 		} 
 		console.log($scope.messageGroup);
 		console.log($scope.messageGroupDetails);
 	}

 	var getAlumniById = function (id) {
 		var user;
 		angular.forEach($scope.allAlumni,function(e,i) {
 			if (e.user_id == id) {
 				user = {
 					'user_id' : e.user_id,
 					'name' : e.first_name +' '+ e.last_name,
 					'nsu_id' : e.nsu_id,
 					'message_sent' : 'not_sent',
 				}
 				return false;
 			};
 		});
 		return user;
 	}

 	$scope.allChecked = false;

 	$scope.toggleAllMemberSelect = function(allChecked) {
 		console.log(allChecked);
 		$scope.messageGroup = [];
 		$scope.messageGroupDetails = [];
 		if (allChecked) {
 			angular.forEach($scope.allAlumni, function(e,i) {
 				$scope.messageGroup.push(parseInt(e.user_id))
 				$scope.messageGroupDetails.push(getAlumniById(id));
 			})
 		}
 		console.log($scope.messageGroup);
 		console.log($scope.messageGroupDetails);
 	}

 	$scope.goToMessageDetails  = function(id) {
 		$location.path('/broadcastMessage/'+id)
 	}

 	$scope.getBroadcastList = function() {

 		$http.get('api/index.php/user/get_all_broadcast_user_list')
 		.success(function(data) {
 			console.log(data);
 			$scope.messageGroupDetails = data;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});
 	}

 }]);