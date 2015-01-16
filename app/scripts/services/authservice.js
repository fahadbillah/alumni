'use strict';

/**
 * @ngdoc service
 * @name alumniApp.AuthService
 * @description
 * # AuthService
 * Service in the alumniApp.
 */
 angular.module('alumniApp')
 .factory('AuthService', ['$http','Session', function ($http, Session) {
 	var authService = {};

 	authService.login = function (credentials) {
 		console.log(credentials);

 		return $http.get('api/index.php/auth')
 		.success(function(data, status, headers, config) {
 			console.log(data);
 			if (data.csrf_test_name === false) {
 				this.login();
 			};
 			credentials.csrf_test_name = data.csrf_test_name;
 			var loginData = $.param(credentials);

 			// var loginData = $.param({
 			// 	'csrf_test_name': $scope.credentials.csrf_test_name,
 			// 	'nsu_id' : $scope.credentials.nsu_id,
 			// 	'password' : $scope.credentials.password,
 			// })


 		return $http
 		.post('api/index.php/auth/login', loginData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.then(function (res) {
 			Session.create(res.data.id, res.data.user.id,
 				res.data.user.role);
 			return res.data.user;
 		});
 	})
 		.error(function(data, status, headers, config) {
 			console.log('error occured!!!')
 			console.log(data)
 		});


 	};

 	authService.isAuthenticated = function () {
 		return !!Session.userId;
 	};

 	authService.isAuthorized = function (authorizedRoles) {
 		if (!angular.isArray(authorizedRoles)) {
 			authorizedRoles = [authorizedRoles];
 		}
 		return (authService.isAuthenticated() &&
 			authorizedRoles.indexOf(Session.userRole) !== -1);
 	};

 	return authService;
 }]);

 /*

  .service('AuthService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
*/
