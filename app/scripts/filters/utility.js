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
 }])
 .filter("formatToDate",[ function(){
 	return function(date) {
 		var formattedDate = new Date(date.replace(/-/g,"/"));

 		var allMonths = ['January','February','March','April','May','June','July','August','September','October','November','December']; 

 		return formattedDate.getDate()+'-'+ allMonths[formattedDate.getMonth()].substring(0,3) +'-'+formattedDate.getFullYear();
 	};
 }]);
