'use strict';

/**
 * @ngdoc directive
 * @name alumniApp.directive:formFields
 * @description
 * # formFields
 */
 angular.module('alumniApp')
 .directive('formFields', ['$compile', function ($compile) {
 	var inputTemplate = '<input class="form-control" type="text" name="wow_{{scope.data.answer_id}}">';
 	var textareaTemplate = '<textarea class="form-control" name="wow_{{scope.data.answer_id}}"></textarea>';
 	var radioTemplate = '';
 	var checkboxTemplate = '';


 	var getTemplate = function(fieldType,userAnswer) {
 		var template = '';

 		switch(fieldType.type) {
 			case 'input':
 			var name = 'survey_question_id_'+fieldType.survey_question_id;
 			userAnswer[name] = '';
 			template = '<input class="form-control" type="text" value="" name="'+name+'">';
 			break;
 			case 'textarea':
 			var name = 'survey_question_id_'+fieldType.survey_question_id;
 			userAnswer[name] = '';
 			template = '<textarea class="form-control" value="" name="'+name+'"></textarea>';
 			break;
 			case 'radio':
 			template+='<div class="radio">';
 			angular.forEach(fieldType.answers, function(e,i) {
 				var name = 'survey_question_id_'+e.survey_question_id;
 				userAnswer.push({
 					'name': name,
 					'value': '',
 					'type': ''
 				})
 				userAnswer[name] = 'survey_question_id_'+e.survey_question_id+'_survey_answer_id'+e.survey_answer_id;
 				template+='<label><input type="radio" value="'+e.survey_answer_id+'" ng-model="'+name+'" name="survey_question_id_'+e.survey_question_id+'">'+e.answer+'</label><br>';
 			});
 			template+='</div>';
 			break;
 			case 'checkbox':
 			template+='<div class="checkbox">';
 			angular.forEach(fieldType.answers, function(e,i) {	
 				var name = 'survey_question_id_'+e.survey_question_id;
 				
 				userAnswer.push({
 					'name': name,
 					'value': '',
 					'type': ''
 				})
 				userAnswer[name] = 'survey_question_id_'+e.survey_question_id+'_survey_answer_id'+e.survey_answer_id;
 				template+='<label><input type="checkbox" value="'+e.survey_answer_id+'" ng-model="'+name+'" name="survey_question_id_'+e.survey_question_id+'">'+e.answer+'</label><br>';
 			});
 			template+='</div>';
 			break;
 		}

 		return template;
 	}


 	var linker = function(scope, element, attrs) {
 		element.html(getTemplate(scope.data),scope.userAnswer).show();
 		console.log(scope.userAnswer);
 		$compile(element.contents())(scope);
 	}


 	return {
 		restrict: 'E',
 		link: linker,
 		scope: {
 			data: '='
 		},
 	};
 }]);