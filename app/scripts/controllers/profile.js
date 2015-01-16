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

 	$scope.referralLinks = {
 		'facebook': '',
 		'twitter': '',
 		'linkedIn': '',
 		'email': '',
 	}

 	var makeReferralLink = function(argument) {
 		$scope.facebook = '//www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fstaging.nsuschoolofbusiness.org%2F%23%2Fsurvey%2F{{$scope.user_data.referral_link}}&amp;layout=button&amp;appId=485258221589254';
 	}

 	$http.get('api/index.php/user/get_user_info/'+user_id)
 	.success(function(data) {
 		console.log(data);
 		if (data.success === true) {
 			$scope.user_data = data.user_data;
 			makeReferralLink();
 		} else{

 		};
 	})
 	.error(function(data) {
 		console.log(data);
 	});

 }]);
