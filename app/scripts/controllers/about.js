'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('AboutCtrl',['$scope', function ($scope) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 }]);
