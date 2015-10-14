'use strict';



/**

 * @ngdoc function

 * @name alumniApp.controller:ContactusCtrl

 * @description

 * # ContactusCtrl

 * Controller of the alumniApp

 */

 angular.module('alumniApp')

 .controller('ContactusCtrl', function ($scope,$http,$cookies) {

 	$scope.awesomeThings = [

 	'HTML5 Boilerplate',

 	'AngularJS',

 	'Karma'

 	];

 	var cookies = $cookies['XSRF-TOKEN'];

 	$scope.contactSubmit = function(contact) {
 		if (contact.interest == 'Other') {
 			contact.interest = contact.other;
 			delete contact.other;
 		};
 		$scope.buttonClicked = true;
 		contact.csrf_test_name = cookies;
 		$http({
 			method: 'POST',
 			url: "api/index.php/auth/contactus",
 			data: $.param(contact),
 			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
 		})
 		.then(function(data) {
 			$scope.buttonClicked = false;
 			console.log(data);
 			alert(data.data.message);
 			$scope.contact = {};
 			$scope.contactForm.$setPristine();
 		}, function(data) {
 			$scope.buttonClicked = false;
 			console.log(data);
 		});
 	};

 });

