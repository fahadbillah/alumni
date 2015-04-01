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


 	// if (!AuthService.isAuthorized([USER_ROLES.admin])) {
 	// 	$location.path('/login');
 	// 	return false;
 	// }

 	$scope.surveyData = [];
 	$scope.totalAlumni = 0;
 	$scope.completionStatistics = [];
 	$scope.completionStat = [];
 	$scope.allQuestions = [];
 	$scope.questionNo = '';
 	$scope.search = '';

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
 	var allSurveyQuestions = function() {
 		$http.get('api/index.php/survey/get_all_user_survey_question')
 		.success(function(data) {
 			if (data.success === false) {
 				alert(data.message);
 			};
 			console.log(data);
 			$scope.allQuestions = data.data;
 		})
 		.error(function(data, status, headers, config) {
 			console.log(data);
 		});

 	}
 	getTotalAlumni();
 	getMainSurvey();
 	getSurveyCompletionStat();
 	fullPartialStat();
 	allSurveyQuestions();


 	$scope.getQuestionStat = function(id) {
 		console.log(id);
 		$scope.resultArray =[];
 		$scope.resultArrayMain = [];
 		$scope.resultArraySearch = [];
 		$scope.resultCount = 0;
 		angular.forEach($scope.surveyData,function(e,i) {
 			if (e.question_name == id) {
 				$scope.resultArray.push(e);
 				$scope.resultArrayMain.push(e);
 				$scope.resultArraySearch.push(e)
 			};
 		});
 		$scope.resultCount = $scope.resultArray.length;
 		groupBy();
 	}

 	var groupBy = function() {
 		var tempKey = [];
 		var tempValue = [];
 		angular.forEach($scope.resultArray,function(e,i) {
 			if(tempKey.indexOf(e.question_answer) < 0){
 				tempKey.push(e.question_answer);
 				tempValue[e.question_answer] = 1;
 			}else{
 				tempValue[e.question_answer]++;
 			}
 		});
 		console.log(tempKey);
 		console.log(tempValue);
 		$scope.resultArray = [];
 		angular.forEach(tempKey, function(e,i) {

 			$scope.resultArray.push({
 				'question_answer': e,
 				'count': tempValue[e]
 			});

 		})
 	}

 	$scope.seachByKey = function(key) {
 		console.log(key);

 		if (key.trim() === '') {
 			$scope.resultArraySearch = $scope.resultArrayMain;
 			return false;
 		};
 		var temp = [];

 		key = $.trim(key);
 		var rgx = new RegExp(key,"gi");
 		var tokenized = key.split(' ');
 		angular.forEach($scope.resultArraySearch, function(elm,idx) {
 			if (elm.question_answer.match(rgx)!==null && elm.question_answer.match(rgx).length>0) {
 				temp.push(elm);
 			};
 		})


 		// angular.forEach($scope.resultArraySearch,function(e,i) {
 		// 	if(e.question_answer == key){
 		// 		temp.push(e);
 		// 	}
 		// })
 		$scope.resultArraySearch = temp;
 	}

 }]);
