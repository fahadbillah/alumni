'use strict';

  /**
   * @ngdoc function
   * @name alumniApp.controller:SurveyCtrl
   * @description
   * # SurveyCtrl
   * Controller of the alumniApp
   */
   angular.module('alumniApp')
   .controller('SurveyCtrl', ['$rootScope','$scope','$http','$routeParams','$parse','$location','$cookies','Session','AUTH_EVENTS', function ($rootScope,$scope,$http,$routeParams,$parse,$location,$cookies,Session,AUTH_EVENTS) {
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
      $http.get('api/index.php/survey')
      .success(function(data, status, headers, config) {
       console.log(data);
       if (data.csrf_test_name === false) {
        getCookie();
    };
    $scope.csrf_test_name = data.csrf_test_name;
})
      .error(function(data, status, headers, config) {
        console.log('error occured!!!')
        console.log(data)
    });
  }

  getCookie();


  $scope.group = 1;

  $scope.survey = {};

  $scope.userAnswer  = [];

  $scope.initFieldModels = function () {
      angular.forEach($scope.allQuestions,function(e,i) {
        if(e.group == $scope.group){
          var the_string = '';
          the_string += 'survey.q_'+e.survey_question_id;
          if (e.type === 'checkbox') {
            angular.forEach(e.answers, function(el,id) {
              the_string += '_a_'+el.survey_answer_id;
              var model = $parse(the_string);
          })
        }else{
            var model = $parse(the_string);
        }
        $scope.$apply();
    }
})
  };


  $scope.userRegistration = function() {

     var registrationData = $.param({
      'csrf_test_name': $cookies['XSRF-TOKEN'],
      'first_name' : registration.first_name.value,
      'last_name' : registration.last_name.value,
      'nsu_id' : registration.nsu_id.value,
      'email' : registration.email.value,
      'phone' : registration.phone.value,
      'work_type' : registration.workType.value.toLowerCase() === 'other' ? 'not available' : registration.workType.value,
      'other_work_type' : registration.otherWorkType === undefined ? 'not available' : registration.otherWorkType.value,
      'designation' : registration.designation.value.toLowerCase() === 'other' ? 'not available' : registration.designation.value,
      'other_designation' : registration.otherDesignation === undefined ? 'not available' : registration.otherDesignation.value,
      'referer' : $scope.referralLink === undefined ? 'not available' : $scope.referralLink,
  })

     $http.post('api/index.php/auth/registration',registrationData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
     .success(function(data) {
      console.log(data);
      if (data.success === true) {
       $scope.registrationDone = true;


       Session.create(data,data.user.id,data.user.role);


       $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
       $scope.setCurrentUser(data.user);
   }else{
   }
   alert(data.message);
})
     .error(function(data) {
      console.log('http error occured!');
      console.log(data);
  });
 }

 $scope.submitSurvey = function() {

    var formField = document.querySelectorAll('input,textarea,select');
    var readyForNextQuestion = true;
    var continueLoop = true;
    $scope.currentAnswerNumber = 0;
    angular.forEach(formField,function(e, i){
      if (continueLoop) {
        if (e.value.trim() === '') {
          alert("Please fill the form first!");
          continueLoop = false;
          return false;
      };

      if (e.checked === false && (e.type === 'radio' || e.type === 'checkbox')) {
          $scope.currentAnswerNumber++;
          return false;
      };


      var answerData = $.param({
          'csrf_test_name': $scope.csrf_test_name,
          'fieldName': e.getAttribute("name"),
          'fieldValue': e.value,
          'fieldType': e.type,
      })

      $http.post('api/index.php/survey/insert_answer',answerData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
      .success(function(data) {
          console.log(data);
          if (data.success === false) {
            readyForNextQuestion = false;
        }else{
            $scope.currentAnswerNumber++;
            $scope.questionPicked = true;
            getAllUserAnswers();
        }
        if ($scope.currentAnswerNumber === formField.length) {
            readyForNext(readyForNextQuestion);
        };
    })
      .error(function(data) {
          console.log('http error occured!');
          console.log(data);
      });
  };
});
}

$scope.questionPicked = true;
$scope.showQuestionId = 0;

$scope.currentQuestion = function() {
    var allQuestionsDone = true;
    angular.forEach($scope.allQuestions,function(e,i) {
        if ($scope.userAnswer[e.survey_question_id] != undefined && $scope.questionPicked && ($scope.userAnswer[e.survey_question_id][0].survey_answer_id == '' && $scope.userAnswer[e.survey_question_id][0].survey_answer_id == '')) {
          $scope.showQuestionId = parseInt(e.survey_question_id);
          $scope.questionPicked = false;
          var allQuestionsDone = false;
      };
      console.log($scope.showQuestionId);
  })
    if (allQuestionsDone) {
      $location.path('/profile');
  };
}

$scope.check = function(g) {
  return g == $scope.group ? true : false;
}

var readyForNext = function(readyForNextQuestion) {
  if (readyForNextQuestion === false) {
    return false;
}else{
    $scope.group++;
    if ($scope.last_group_no < $scope.group) {
      $location.path('/profile');
  };
}
}

$scope.allQuestions = [];

$http.get('api/index.php/survey/get_all_questions')
.success(function(data, status, headers, config) {
 $scope.allQuestions = data.questions;
 $scope.currentQuestion();
 console.log($scope.allQuestions);
 $scope.last_group_no = parseInt(data.last_group_no);
})
.error(function(data, status, headers, config) {
});


var getAllUserAnswers = function() {
    $http.get('api/index.php/survey/get_all_user_answers')
    .success(function(data, status, headers, config) {
     $scope.userAnswer = data;
     $scope.currentQuestion();
 })
    .error(function(data, status, headers, config) {
    });
}

getAllUserAnswers();

$scope.isAnswerdAlready = function(q) {
  return $scope.userAnswer[q] !== undefined ? true : false;
  // if($scope.userAnswer[q] !== undefined){
  //   return true;
  // }else{

  // }
  // return true;
}

$scope.startPoint = function() {
  angular.forEach($scope.allQuestions,function(e,i) {
    // angular.forEach($scope.userAnswer, function(el,id) {
      if($scope.userAnswer[e.survey_question_id] == undefined){
        $scope.group = parseInt(e.group);
        return false;
    }
    // })
});
}



$scope.allOccupations = [];
$scope.allDesignations = [];

$http.get('api/index.php/survey/get_all_occupations')
.success(function(data, status, headers, config) {
 $scope.allOccupations = data.occupations;
})
.error(function(data, status, headers, config) {
  console.log(data);
});


$http.get('api/index.php/survey/get_all_designations')
.success(function(data, status, headers, config) {
  $scope.allDesignations = data.designations;
})
.error(function(data, status, headers, config) {
  console.log(data);
});

$scope.last_group_no = 0;

function getSessionData() {

  $http.get('api/index.php/user/get_session_data')
  .success(function(data, status, headers, config) {
    console.log(data);
    if (data.is_logged_in === true) {
     $scope.registrationDone = true;
 };
      // this callback will be called asynchronously
      // when the response is available
  })
  .error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });
}
getSessionData()

$scope.showOther = function(value) {
  if (value === undefined) {
    return false;
};
if (value.toLowerCase() == 'other') {
    return true;
}else{
    return false;
}
}

}]);
