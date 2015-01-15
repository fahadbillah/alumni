'use strict';

/**
 * @ngdoc service
 * @name alumniApp.AUTHEVENTS
 * @description
 * # AUTHEVENTS
 * Constant in the alumniApp.
 */
 angular.module('alumniApp')
 .constant('AUTH_EVENTS',  {
 	loginSuccess: 'auth-login-success',
 	loginFailed: 'auth-login-failed',
 	logoutSuccess: 'auth-logout-success',
 	sessionTimeout: 'auth-session-timeout',
 	notAuthenticated: 'auth-not-authenticated',
 	notAuthorized: 'auth-not-authorized'
 })
 .constant('USER_ROLES', {
 	all: '*',
 	admin: 'admin',
 	user: 'user',
 	guest: 'guest'
 });
