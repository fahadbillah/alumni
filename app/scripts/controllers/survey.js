'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:SurveyCtrl
 * @description
 * # SurveyCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('SurveyCtrl', ['$scope','$http', '$routeParams', '$parse', function ($scope,$http,$routeParams,$parse) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.referralLink = $routeParams.referralLink;
 	console.log('referral link '+$scope.referralLink);

 	$scope.registrationDone = false;

 	$scope.csrf_test_name = '';

 	function getCookie() {
		// body...
		$http.get('api/index.php/survey')
		.success(function(data, status, headers, config) {
			console.log(data);
			if (data.csrf_test_name === false) {
				getCookie();
			};
			$scope.csrf_test_name = data.csrf_test_name;
		    // this callback will be called asynchronously
		    // when the response is available
      })
		.error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
      });
	}

	getCookie();

    // $scope.first_name = '';
    // $scope.last_name = '';
    // $scope.nsu_id = null;
    // $scope.email = '';
    // $scope.phone = '';

    $scope.group = 1;

    $scope.userAnswer  = [];

    $scope.initFieldModels = function () {

      angular.forEach($scope.allQuestions,function(e,i) {
        if(e.group == $scope.group){

          var the_string = '';
          the_string += 'q_'+e.survey_question_id;

          if (e.type === 'checkbox') {
            angular.forEach(e.answers, function(el,id) {
              the_string += '_a_'+el.survey_answer_id;
              var model = $parse(the_string);
              $scope.$apply();
            })
          }else{
            var model = $parse(the_string);
            $scope.$apply();
          }

                // Get the model

                // Assigns a value to it
                // model.assign($scope, 42);

              }
            })

        // Apply it to the scope
        // console.log($scope.life.meaning);
      }


      $scope.userRegistration = function() {

       var registrationData = $.param({
        'csrf_test_name': $scope.csrf_test_name,
        'first_name' : registration.first_name.value,
        'last_name' : registration.last_name.value,
        'nsu_id' : registration.nsu_id.value,
        'email' : registration.email.value,
        'phone' : registration.phone.value,
        'referer' : $scope.referralLink === undefined ? 'not available' : $scope.referralLink,
      })

       $http.post('api/index.php/survey/registration',registrationData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
       .success(function(data) {
        console.log(data);
        if (data.success === false) {

        }else{
         $scope.registrationDone = true;
       }
       alert(data.message);
     })
       .error(function(data) {
        console.log('http error occured!');
        console.log(data);
      });
     }

     $scope.submitSurvey = function() {
       console.log('wow');
     }

     $scope.allQuestions = [];

     $http.get('api/index.php/survey/get_all_questions')
     .success(function(data, status, headers, config) {
       $scope.allQuestions = data.questions;
       console.log($scope.allQuestions);
       $scope.initFieldModels();
	    // this callback will be called asynchronously
	    // when the response is available
   })
     .error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
   });

   }]);
