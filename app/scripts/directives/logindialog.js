'use strict';

/**
 * @ngdoc directive
 * @name alumniApp.directive:Form
 * @description
 * # Form
 */
 angular.module('alumniApp')
 .directive('loginDialog',['AUTH_EVENTS', function (AUTH_EVENTS) {
 	return {
 		restrict: 'A',
 		template: '<div ng-if="visible" ng-include="\'views/loginform.html\'">',
 		link: function (scope) {
 			var showDialog = function () {
 				scope.visible = true;
 			};

 			scope.visible = false;
 			scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
 			scope.$on(AUTH_EVENTS.sessionTimeout, showDialog)
 		}
 	};
 }]);
