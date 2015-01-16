'use strict';

/**
 * @ngdoc service
 * @name alumniApp.Session
 * @description
 * # Session
 * Service in the alumniApp.
 */
 angular.module('alumniApp')
 .service('Session', function () {
 	this.create = function (sessionId, userId, userRole) {
 		this.id = sessionId;
 		this.userId = userId;
 		this.userRole = userRole;
 	};
 	this.destroy = function () {
 		this.id = null;
 		this.userId = null;
 		this.userRole = null;
 	};
 	return this;
 })
 .service('Xsrf',['$http',function($http) {
 	this.getCSRF = function() {
 		$http.get('api/index.php/auth')
 		.success(function(data, status, headers, config) {
 			console.log(data);
 			if (data.csrf_test_name === false) {
 				this.getCSRF();
 			};
 			return data.csrf_test_name;
 		})
 		.error(function(data, status, headers, config) {
 			console.log('error occured!!!')
 			console.log(data)
 		});
 	}
 	return this;
 }]);
