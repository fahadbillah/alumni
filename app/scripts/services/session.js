'use strict';

/**
 * @ngdoc service
 * @name alumniApp.Session
 * @description
 * # Session
 * Service in the alumniApp.
 */
 angular.module('alumniApp')
 .service('Session',[ function () {
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
 }]);
