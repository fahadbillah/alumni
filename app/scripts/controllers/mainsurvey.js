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

 	$scope.loader = true;

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
 			$scope.loader = false;

 			// console.log(data);
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
 			// console.log(data);
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
 			// console.log(data);
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
 			// console.log(data);
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
 			// console.log(data);
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

 	$scope.lag1 = function(k) {
 		var tempKey = [];
 		var tempValue = [];
 		var counter = 0;
 		var tempValueFull = [];

 		$scope.lagResult = {
 			'totalCounter': 0,
 			'answerTrue': 0,
 			'answerFalse': 0,
 			'important': 0,
 		}
 		angular.forEach($scope.surveyData,function(e,i) {

 			if(e.question_name == k){
 				$scope.lagResult.totalCounter++;
 				if (e.question_answer == 'true') {
 					$scope.lagResult['answerTrue']++;
 				}else{
 					$scope.lagResult['answerFalse']++;
 				}
 				// console.log(e);
 			}

 			if(e.question_answer.toLowerCase() == k.toLowerCase()){
 				$scope.lagResult['important']++;
 			}


 			// switch(e.question_name){
 			// 	case 'label_1':
 			// 	case 'workingFullTime':
 			// 	case 'workingPartTime' :
 			// 	case 'startJobNextMonth' :
 			// 	case 'furthurStudyTrainingResearch' :
 			// 	case 'partTimeStudyTrainingResearch' :
 			// 	case 'travelTime' : 
 			// 	case 'unemployed' : 
 			// 	case 'doElse' : 
 			// 	case 'important' :
 			// 	case 'jobNumber' :
 			// 	case 'jobTitle' : 
 			// 	case 'jobResponsibility' :
 			// 	case 'jobRelationToStudy' :
			// console.log(e);
			// if(tempKey.indexOf(e.question_name) < 0){
			// 	tempKey.push(e.question_name);
			// 	tempValueFull.push(e);
			// 	tempValue[e.question_name] = 1;
			// }else{
			// 	tempValue[e.question_name]++;
			// }
			// break;
 			// }
 		});
 		// console.log(tempKey);
 		// console.log(tempValue);
 		// $scope.resultArraySearch = [];
 		// angular.forEach(tempKey, function(e,i) {

 		// 	$scope.resultArraySearch.push({
 		// 		'question_name': e,
 		// 		'question_answer': tempValueFull[i],
 		// 		'count': tempValue[e]
 		// 	});

 		// })
console.log($scope.lagResult);
}

$scope.getQuestionStat = function(id) {
	console.log(id);
	$scope.resultArray =[];
	$scope.groupResult =[];
	$scope.resultArrayMain = [];
	$scope.resultArraySearch = [];
	$scope.resultCount = 0;


	if (id === 'afterGraduationInfo' || id === 'jobDecision') {
		return false;
	};

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
	// $scope.groupResult =[];
	// console.log(tempKey);
	// console.log(tempValue);
	$scope.resultArray = [];
	angular.forEach(tempKey, function(e,i) {

		$scope.resultArray.push({
			'question_answer': e,
			'count': tempValue[e]
		});

	})
	$scope.groupResult = $scope.resultArray;
}

$scope.seachByKey = function(key) {
	// console.log(key);
	$scope.resultArray = $scope.groupResult;

	if (key.trim() === '') {
		return false;
	};
	var temp = [];
	key = $.trim(key);
	var rgx = new RegExp(key,"gi");
	var tokenized = key.split(' ');
	angular.forEach($scope.resultArray, function(elm,idx) {
		if (elm.question_answer.match(rgx)!==null && elm.question_answer.match(rgx).length>0) {
			temp.push(elm);
		};
	})
	$scope.resultArray = temp;
}


$scope.camelCaseToHuman = function(key) {
	key = key.replace(/([A-Z])/g, ' $1')
	key = key.replace(/^./, function(str){ 
		return str.toUpperCase();
	});
	return key;
}



$scope.getTotal = function(arr) {
	var total = 0;
	angular.forEach(arr, function(e,i) {
		total += e.count;
	});
	return total;
};

}]);
