'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('ProfileCtrl', ['$scope','$http','$location','$routeParams', function ($scope,$http,$location,$routeParams) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.user_data;

 	var user_id = $routeParams.userId;

 	$http.get('api/index.php/user/get_user_info/'+user_id)
 	.success(function(data) {
 		console.log(data);
 		if (data.success === true) {
 			$scope.user_data = data.user_data[0];
 		} else{

 		};
 	})
 	.error(function(data) {
 		console.log(data);
 	});

 }]);
