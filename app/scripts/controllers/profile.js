'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('ProfileCtrl', ['$rootScope','$scope','$http','$location','$routeParams','$cookies','USER_ROLES','AUTH_EVENTS','Session','AuthService','FileUploader', function ($rootScope,$scope,$http,$location,$routeParams,$cookies,USER_ROLES,AUTH_EVENTS,Session,AuthService,FileUploader) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	if (AuthService.isAuthorized([USER_ROLES.guest])) {
 		// alert('you are not allowed here')
 		$location.path('/login');
 		return false;
 	};

  $scope.check = function() {
   $http.get('api/index.php/auth/test')
   .success(function(data, status, headers, config){
    console.log(data);
  })
   .error(function(data, status, headers, config) {
    console.log(data);
  });
 }

 var uploader = $scope.uploader = new FileUploader({
  url: 'api/index.php/user/upload_profile_picture',
  queueLimit: 1,
  alias: 'upload',
  formData: [{'csrf_test_name': $cookies['XSRF-TOKEN']}]
});

        // FILTERS

        uploader.filters.push({
        	name: 'customFilter',
        	fn: function(item /*{File|FileLikeObject}*/, options) {
        		return this.queue.length < 10;
        	}
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        	console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
        	console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
        	console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
          $scope.disableButton = true;
          console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
         console.info('onProgressItem', fileItem, progress);
       };
       uploader.onProgressAll = function(progress) {
         console.info('onProgressAll', progress);
       };
       uploader.onSuccessItem = function(fileItem, response, status, headers) {
         console.info('onSuccessItem', fileItem, response, status, headers);
       };
       uploader.onErrorItem = function(fileItem, response, status, headers) {
         console.info('onErrorItem', fileItem, response, status, headers);
       };
       uploader.onCancelItem = function(fileItem, response, status, headers) {
         console.info('onCancelItem', fileItem, response, status, headers);
       };
       uploader.onCompleteItem = function(fileItem, response, status, headers) {
         console.info('onCompleteItem', fileItem, response, status, headers);
          // $scope.defaultPic = 'api/uploads/profile_pictures/'+response.upload_data.file_name;
          $scope.disableButton = false;
          getUserInfo();
          // uploader.clearQueue();
          uploader.removeFromQueue(0);
          // uploader.destroy();
        };
        uploader.onCompleteAll = function() {
         console.info('onCompleteAll');
       };

       console.info('uploader', uploader);


       $scope.sessionUserId;


       $scope.user_data;

       var user_id = $routeParams.userId;

       $scope.referralLinks = {
         'facebook': '',
         'twitter': '',
         'linkedIn': '',
         'email': '',
       }

       $scope.disableButton = false;
       $scope.defaultPic = 'default.png';

       var getUserInfo = function() {

        $http.get('api/index.php/user/get_user_info/'+user_id)
        .success(function(data) {
         console.log(data);
         if (data.success === true) {
          $scope.user_data = data.user_data;
          $scope.sessionUserId = $scope.currentUser.id;


          $scope.sessionUserId = $scope.currentUser.id;
          $scope.sessionUserId = $scope.currentUser.id;



        } else{

        };
      })
        .error(function(data) {
         console.log(data);
       });
      }

      getUserInfo();

      $scope.toggleDropZone = function(showDropZone) {
       $scope.showDropZone = showDropZone ? false : true;
     }

     $scope.showDropZone = false;

     $scope.showReferral = false;

     $http.get('api/index.php/referral/show_referral/'+user_id)
     .success(function(data) {
       console.log(data);
       if (data.success === true) {
        $scope.showReferral = true;
      } else{
        $scope.showReferral = false;
      };
    })
     .error(function(data) {
       console.log(data);
     });

     $scope.openExplorer = function() {
       document.getElementById('link').click();
     }

   }]);
