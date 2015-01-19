'use strict';

/**
 * @ngdoc filter
 * @name alumniApp.filter:utility
 * @function
 * @description
 * # utility
 * Filter in the alumniApp.
 */
 angular.module('alumniApp')
 .filter('utility',[ function () {
 	return function (input) {
 		return 'utility filter: ' + input;
 	};
 }])
 .filter("toArray",[ function(){
 	return function(obj) {
 		var result = [];
 		angular.forEach(obj, function(val, key) {
 			result.push(val);
 		});
 		return result;
 	};
 }]);;
