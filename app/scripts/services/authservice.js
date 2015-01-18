'use strict';

/**
 * @ngdoc service
 * @name alumniApp.AuthService
 * @description
 * # AuthService
 * Service in the alumniApp.
 */
 angular.module('alumniApp')
 .factory('AuthService', ['$http','$cookies','Session', function ($http,$cookies,Session) {
 	var authService = {};

 	authService.login = function (credentials) {
 		console.log(credentials);
 		credentials.csrf_test_name = $cookies['XSRF-TOKEN'];

 		var loginData = $.param(credentials);

 		return $http
 		.post('api/index.php/auth/login', loginData, {headers : {'Content-Type': 'application/x-www-form-urlencoded'}})
 		.then(function (res) {
 			if (res.data.success) {
 				Session.create(res.data, res.data.user.id,res.data.user.role);
 			}
 			return res.data;
 		});
 	};

 	authService.isAuthenticated = function () {
 		return !!Session.userId;
 	};

 	authService.isAuthorized = function (authorizedRoles) {
 		if (!angular.isArray(authorizedRoles)) {
 			authorizedRoles = [authorizedRoles];
 		}
 		return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
 	};

 	return authService;
 }]);

 /*

  .service('AuthService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
*/
