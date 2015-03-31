'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:MainsurveyCtrl
 * @description
 * # MainsurveyCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('MainsurveyCtrl', ['$http', '$scope', '$cookies', '$rootScope', '$location', 'USER_ROLES', 'AUTH_EVENTS', 'AuthService', function ($http, $scope, $cookies, $rootScope, $location, USER_ROLES, AUTH_EVENTS, AuthService) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];


 	if (!AuthService.isAuthorized([USER_ROLES.admin])) {
 		$location.path('/login');
 		return false;
 	}

 	$scope.surveyData = [];
 	$scope.totalAlumni = 0;
 	$scope.completionStatistics = [];
 	$scope.completionStat = [];

 	var getMainSurvey = function() {
 		$http.get('api/index.php/survey/get_all_user_survey')
 		.success(function(data) {
 			if (data.success === false) {
 				alert(data.message);
 			};
 			console.log(data);
 			$scope.surveyData = data.data;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});

 	}
 	var getSurveyCompletionStat = function() {
 		$http.get('api/index.php/survey/get_survey_completion_stat')
 		.success(function(data) {
 			if (data.success === false) {
 				alert(data.message);
 			};
 			console.log(data);
 			$scope.completionStatistics = data.completionStatistics;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});

 	}
 	var getTotalAlumni = function() {
 		$http.get('api/index.php/user/total_alumni_count')
 		.success(function(data) {
 			if (data.success === false) {
 				alert(data.message);
 			};
 			console.log(data);
 			$scope.totalAlumni = data.totalAlumni;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});

 	}
 	var fullPartialStat = function() {
 		$http.get('api/index.php/survey/completed_type')
 		.success(function(data) {
 			if (data.success === false) {
 				alert(data.message);
 			};
 			console.log(data);
 			$scope.completionStat = data;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});

 	}
 	getTotalAlumni();
 	getMainSurvey();
 	getSurveyCompletionStat();
 	fullPartialStat();

 }]);
