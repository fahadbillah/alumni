'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:SurveyCtrl
 * @description
 * # SurveyCtrl
 * Controller of the alumniApp
 */
angular.module('alumniApp')
  .controller('SurveyCtrl', ['$scope','$http', '$routeParams', function ($scope,$http,$routeParams) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

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


    $scope.userRegistration = function() {

    	var registrationData = $.param({
    	    		'csrf_test_name': $scope.csrf_test_name,
    	    		'first_name' : registration.first_name.value,
    	    		'last_name' : registration.last_name.value,
    	    		'nsu_id' : registration.nsu_id.value,
    	    		'email' : registration.email.value,
    	    		'phone' : registration.phone.value,
    	    	})

    	$http.post('api/index.php/survey/registration',registrationData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.success(function(data) {
 			console.log(data);
 			if (data.success === false) {
 				// $scope.error.className = 'alert-danger';
 				// $scope.error.title = data.message.title;
 				// $scope.error.body = data.message.body;
 				// setTimeout(function(){
 				// 	$scope.error.className = 'hidden';
 				// 	$scope.error.title = '';
 				// 	$scope.error.body = '';
 				// },2000);
 			}else{
 				window.location.replace(data.action.url);
 			}
 		})
 		.error(function(data) {
 			console.log('http error occured!');
 			console.log(data);
 		});
    }

    $http.get('api/index.php/survey/get_all_questions')
	  .success(function(data, status, headers, config) {
	  	console.log(data);
	    // this callback will be called asynchronously
	    // when the response is available
	  })
	  .error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

    }]);
