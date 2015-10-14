'use strict';



/**

 * @ngdoc function

 * @name alumniApp.controller:LoginCtrl

 * @description

 * # LoginCtrl

 * Controller of the alumniApp

 */

 angular.module('alumniApp')

 .controller('LoginCtrl', ['$http', '$scope', '$cookies', '$rootScope', '$location', 'USER_ROLES', 'AUTH_EVENTS', 'AuthService', function ($http, $scope, $cookies, $rootScope, $location, USER_ROLES, AUTH_EVENTS, AuthService) {





  if (AuthService.isAuthorized([USER_ROLES.admin,USER_ROLES.user])) {

    // alert('you are not allowed here')

    $location.path('/home');

    return false;

  };

  $scope.recoveryEmail = '';



  $scope.showForgetPassword = false;

  $scope.toggleForm = function() {

    $scope.showForgetPassword = $scope.showForgetPassword == false ? true : false;

  }



  $scope.buttonClicked = false;



  $scope.loginFailed = false;



  $scope.credentials = {

    nsu_id: '',

    password: ''

  };

  $scope.login = function (credentials) {

    $scope.buttonClicked = true;

    AuthService.login(credentials).then(function (user) {

      if(user.success){

        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

        $scope.setCurrentUser(user.user);

        $location.path('/profile');

      }else{

        $scope.loginFailed = true;

        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

      }

      $scope.buttonClicked = false;

    }, function(){

     $rootScope.$broadcast(AUTH_EVENTS.loginFailed);

     $scope.buttonClicked = false;

   });

  };



  $scope.result = {

    success: false,

    failed: false,

    message: ''

  }; 



  $scope.resendPassword = function() {

    $scope.buttonClicked = true;



    $scope.result = {

      success: false,

      failed: false,

      message: ''

    }; 

    var userData = $.param({

      'csrf_test_name': $cookies['XSRF-TOKEN'],

      'nsu_id' : recovery.nsuId.value

    });

    $http({
      method: 'POST',
      url: 'api/index.php/auth/resend_password',
      data: $.param(userData),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data) {

      console.log(data);

      $scope.buttonClicked = false;



      if(data.success){



        $scope.result = {

          success: true,

          message: data.message

        }; 

      }else{



        $scope.result = {

          failed: true,

          message: data.message

        }; 

      }

      recovery.nsuId.value = '';

      // $scope.recovery.success = data.success;

      // $scope.recovery.message = data.message;

    })

    .error(function(data) {

      $scope.buttonClicked = false;

      console.log(data);

    });



  }

}]);

