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
 		'jobNumber' : null,
 		'jobTitle' : '',
 		'jobResponsibility' : '',
 		'jobRelationToStudy' : '',
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

 	$scope.LAG2 = {
 		'LAG2Completed' : false,
 		'currentPositionStatus' : '',
 		'currentPositionStatusOther' : '',
 		'jobQualification' : '',
 		'jobDecisionA1' : false,
 		'jobDecisionA2' : false,
 		'jobDecisionA3' : false,
 		'jobDecisionA4' : false,
 		'jobDecisionA5' : false,
 		'jobDecisionA6' : false,
 		'jobDecisionA7' : false,
 		'jobDecisionA8' : false,
 		'jobSource' : '',
 		'jobSourceOther' : '',
 		'nsuPrep' : '',
 	}


 	$scope.LAG2Submit = function() {
 		$scope.LAG2.LAG2Completed = true;
 		console.log($scope.LAG2);


 		var LAG2 = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'LAG2' : $scope.LAG2
 		})

 		$scope.buttonClicked = true;

 		$http.post('api/index.php/survey/after_graduation_info_part_2',LAG2, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (data.success === true) {
 			}else{
 			}
 			$scope.buttonClicked = false;
 		})
 		.error(function(data) {
 			$scope.LAG2.LAG2Completed = false;
 			console.log('http error occured!');
 			console.log(data);
 			$scope.buttonClicked = false;
 		});
 	}

 	$scope.eExp = {
 		'eExpCompleted' : false,
 		'writing' : null,
 		'teamwork' : null,
 		'punctuality' : null,
 		'ideas' : null,
 		'skill' : null,
 		'newSkill' : null,
 		'activityPrepA1' : null,
 		'activityPrepA1DnA' : false,
 		'activityPrepA2' : null,
 		'activityPrepA2DnA' : false,
 		'activityPrepA3' : null,
 		'activityPrepA3DnA' : false,
 		'activityPrepA4' : null,
 		'activityPrepA4DnA' : false,
 		'activityPrepA5' : null,
 		'activityPrepA5DnA' : false,
 		'activityPrepA6' : null,
 		'activityPrepA6DnA' : false,
 		'activityPrepA7' : null,
 		'activityPrepA7DnA' : false,
 		'activityPrepA8' : null,
 		'activityPrepA8DnA' : false,
 		'coCurriculam' : '',
 		'yearGap' : null,
 	};


 	$scope.eExpSubmit = function() {
 		$scope.eExp.eExpCompleted = true;
 		console.log($scope.eExp);


 		var eExp = $.param({
 			'csrf_test_name': $cookies['XSRF-TOKEN'],
 			'eExp' : $scope.eExp
 		})

 		$scope.buttonClicked = true;


 		$http.post('api/index.php/survey/after_graduation_info_part_2',eExp, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (data.success === true) {
 			}else{
 			}
 			$scope.buttonClicked = false;
 		})
 		.error(function(data) {
 			$scope.eExp.eExpCompleted = false;
 			console.log('http error occured!');
 			console.log(data);
 			$scope.buttonClicked = false;
 		});
 	}


 	$scope.comment = {
 		'q1' : '',
 		'q2' : '',
 		'q3' : '',
 	}

 }]);
