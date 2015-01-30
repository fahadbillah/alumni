'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:NsualumnisurveyCtrl
 * @description
 * # NsualumnisurveyCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('NsualumnisurveyCtrl', ['$rootScope','$scope','$http','$routeParams','$parse','$location','$cookies','Session','AUTH_EVENTS', function ($rootScope, $scope, $http, $routeParams, $parse, $location, $cookies, Session, AUTH_EVENTS) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.buttonClicked = false;

 	$scope.personalInfo = {
 		'personalInfoCompleted' : false,
 		'name' : 'Fahad Billah',
 		'nsuId' : '0930527542',
 		'country' : '',
 		'address' : '',
 		'ugTitle' : '',
 		'ugNsuOrOther' : '',
 		'gTitle' : '',
 		'gNsuOrOther' : '',
 		'methodOfContact':''
 	}


 	$scope.personalInfoSubmit = function() {
 		console.log($scope.personalInfo)

 		$scope.personalInfo.completed = true;
 		var personalInfo = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'personalInfo' : $scope.personalInfo
 		})

 		$scope.buttonClicked = true;

 		$http.post('api/index.php/survey/personalInfo',personalInfo, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (data.success === true) {
 			}else{
 			}
 			$scope.afterGraduationInfo.afterGraduationInfoCompleted = false;
 			$scope.buttonClicked = false;
 		})
 		.error(function(data) {
 			$scope.personalInfo.completed = false;
 			console.log('http error occured!');
 			console.log(data);
 			$scope.buttonClicked = false;
 		});
 	}


 	$scope.afterGraduationInfo = {
 		'afterGraduationInfoCompleted' : false,
 		'workingFullTime' : false,
 		'workingPartTime' : false,
 		'startJobNextMonth' : false,
 		'furthurStudyTrainingResearch' : false,
 		'partTimeStudyTrainingResearch' : false,
 		'travelTime' : false,
 		'unemployed' : false,
 		'doElse' : false,
 		'important' : '',
 	}


 	$scope.afterGraduationInfoSubmit = function() {
 		$scope.afterGraduationInfo.afterGraduationInfoCompleted = true;
 		console.log($scope.afterGraduationInfo);


 		$scope.personalInfo.completed = true;
 		var afterGraduationInfo = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'afterGraduationInfo' : $scope.afterGraduationInfo
 		})

 		$scope.buttonClicked = true;

 		$http.post('api/index.php/survey/after_graduation_info',afterGraduationInfo, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (data.success === true) {
 			}else{
 			}
 			$scope.buttonClicked = false;
 		})
 		.error(function(data) {
 			$scope.afterGraduationInfo.afterGraduationInfoCompleted = false;
 			console.log('http error occured!');
 			console.log(data);
 			$scope.buttonClicked = false;
 		});
 	}



 	$scope.afterGraduationInfoPart2 = {
 		'afterGraduationInfoPart2CompletedPart2' : false,
 		'workingFullTime' : false,
 		'workingPartTime' : false,
 		'startJobNextMonth' : false,
 		'furthurStudyTrainingResearch' : false,
 		'partTimeStudyTrainingResearch' : false,
 		'travelTime' : false,
 		'unemployed' : false,
 		'doElse' : false,
 		'important' : '',
 	}


 	$scope.afterGraduationInfoPart2Submit = function() {
 		$scope.afterGraduationInfoPart2.afterGraduationInfoCompleted = true;
 		console.log($scope.afterGraduationInfoPart2);


 		$scope.personalInfo.completed = true;
 		var afterGraduationInfoPart2 = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'afterGraduationInfoPart2' : $scope.afterGraduationInfoPart2
 		})

 		$scope.buttonClicked = true;

 		$http.post('api/index.php/survey/after_graduation_info_part_2',afterGraduationInfoPart2, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (data.success === true) {
 			}else{
 			}
 			$scope.buttonClicked = false;
 		})
 		.error(function(data) {
 			$scope.afterGraduationInfoPart2.afterGraduationInfoPart2Completed = false;
 			console.log('http error occured!');
 			console.log(data);
 			$scope.buttonClicked = false;
 		});
 	}

 }]);
