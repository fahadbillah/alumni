'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:QuicksurveyCtrl
 * @description
 * # QuicksurveyCtrl
 * Controller of the alumniApp
 */
 angular.module('alumniApp')
 .controller('QuicksurveyCtrl',['$scope', function ($scope) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];


 	$scope.questionSet = [
 	[
 	{
 		'id':'q_494',
 		'question' : 'what up?',
 		'type' : 'text',
 	},
 	{
 		'id':'q_495',
 		'question' : 'whats up?',
 		'type' : 'radio',
 		'answers' : {
 			'a_1' : 'yo',
 			'a_2' : 'sup',
 			'a_3' : 'dig'
 		},
 		'hasOther' : true,
 	},
 	{
 		'id':'q_496',
 		'question' : 'whatsss up?',
 		'type' : 'checkbox',
 		'answers' : {
 			'a_1' : 'yo',
 			'a_2' : 'sup',
 			'a_3' : 'dig'
 		},
 		'hasOther' : true,
 	},
 	],
 	[
 	{
 		'id':'f_494',
 		'question' : 'what up?',
 		'type' : 'text',
 	},
 	{
 		'id':'f_495',
 		'question' : 'whats up?',
 		'type' : 'radio',
 		'answers' : ['yo','sup','dig'],
 		'hasOther' : true,
 	},
 	{
 		'id':'f_496',
 		'question' : 'whatsss up?',
 		'type' : 'checkbox',
 		'answers' : ['yo','sup','dig'],
 		'hasOther' : true,
 	},
 	]
 	]
 	console.log($scope.questionSet);

 	$scope.formSubmit = function() {
 		console.log('wow')
 	}
 }]);
