'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('LoginCtrl', ['$http', '$scope', '$cookies', '$rootScope', 'AUTH_EVENTS', 'AuthService', function ($http, $scope, $cookies, $rootScope, AUTH_EVENTS, AuthService) {
  	$scope.credentials = {
  		nsu_id: '',
  		password: ''
  	};
  	$scope.login = function (credentials) {
  		AuthService.login(credentials).then(function (user) {
  			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
  			$scope.setCurrentUser(user);
  		}, function () {
  			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
  		});
  	};
  }]);
 // .controller('LoginCtrl', ['$scope','$location','$http', function ($scope,$location,$http) {
 // 	$scope.awesomeThings = [
 // 	'HTML5 Boilerplate',
 // 	'AngularJS',
 // 	'Karma'
 // 	];


 // 	$scope.csrf_test_name = '';

 // 	function getCookie() {
 // 		$http.get('api/index.php/survey')
 // 		.success(function(data, status, headers, config) {
 // 			console.log(data);
 // 			if (data.csrf_test_name === false) {
 // 				getCookie();
 // 			};
 // 			$scope.csrf_test_name = data.csrf_test_name;
 // 		})
 // 		.error(function(data, status, headers, config) {
 // 			console.log('error occured!!!')
 // 			console.log(data)
 // 		});
 // 	}

 // 	getCookie();


 // 	// $scope.nsuId = null;
 // 	// $scope.password = '';
 // 	$scope.login = function() {
 // 		console.log($scope.nsuId);
 // 		console.log($scope.password);


 // 		var loginData = $.param({
 // 			'csrf_test_name': $scope.csrf_test_name,
 // 			'nsu_id' : $scope.nsuId,
 // 			'password' : $scope.password,
 // 		})

 // 		$http.post('api/index.php/auth/login',loginData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 // 		.success(function(data) {
 // 			console.log(data);
 // 			if (data.success === false) {

 // 			}else{
 // 				$location.path(data.redirect_to);
 // 			}
 // 			alert(data.message);
 // 		})
 // 		.error(function(data) {
 // 			console.log('http error occured!');
 // 			console.log(data);
 // 		});

 // 	}

 // }]);
