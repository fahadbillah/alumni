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
 			var name = 'q_'+fieldType.survey_question_id;
 			template = '<input class="form-control" type="text" value="" ng-model="'+name+'" name="'+name+'">';
 			break;
 			case 'textarea':
 			var name = 'q_'+fieldType.survey_question_id;
 			template = '<textarea class="form-control" value="" ng-model="'+name+'" name="'+name+'"></textarea>';
 			break;
 			case 'radio':
 			template+='<div class="radio">';
 			angular.forEach(fieldType.answers, function(e,i) {
 				var name = 'q_'+e.survey_question_id;
 				template+='<label><input type="radio" value="'+e.survey_answer_id+'" ng-value="'+e.survey_answer_id+'" ng-model="'+name+'" name="'+name+'">'+e.answer+'</label><br>';
 			});
 			template+='</div>';
 			break;
 			case 'checkbox':
 			template+='<div class="checkbox">';
 			angular.forEach(fieldType.answers, function(e,i) {	
 				var name = 'q_'+e.survey_question_id+'_a_'+e.survey_answer_id;
 				template+='<label><input type="checkbox" value="'+e.survey_answer_id+'" ng-value="'+e.survey_answer_id+'" ng-model="'+name+'" name="'+name+'">'+e.answer+'</label><br>';
 			});
 			template+='</div>';
 			break;
 		}

 		return template;
 	}


 	var linker = function(scope, element, attrs) {
 		element.html(getTemplate(scope.data,scope.userAnswer)).show();
 		$compile(element.contents())(scope);
 	}


 	return {
 		restrict: 'E',
 		link: linker,
 		scope: {
 			data: '='
 		},
 	};
 }])
.directive('customField', ['$compile', function ($compile) {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {
			// console.log(scope.data);

			switch(scope.data.type){
				case 'text':
				var html  = '';
				html  = '<textarea class="form-control" name=""></textarea>';

				iElement.html(html).show();
				$compile(iElement.contents())(scope);
				break;
				
				case 'textarea':
				var html  = '';
				html  = '<textarea></textarea>';
				iElement.html(html).show();
				$compile(iElement.contents())(scope);
				break;
				
				case 'radio':
				var html  = '';

				var scope_name = 'scope_'+Math.floor((Math.random() * 1000) + 1);
				var name = 'radio_'+scope.data.id;
				var name_other = 'other_radio_'+scope.data.id;

				angular.forEach(scope.data.answers,function(e,i) {
					html += '<label><input type="radio" name="'+scope.data.id+'" value="'+e+'"> '+e+'</label> <br>';
				})
				scope[scope_name] = scope_name;

				console.log(scope[scope.data]);
				console.log(scope_name);
				if (scope.data.hasOther) {
					html += '<label><input type="radio" ng-model="'+scope[scope_name]+'" name="'+name+'" value="Other"> Other </label> <br>';
					html += '<textarea class="form-control" name="'+name_other+'" ng-show="!'+scope[scope_name]+'"></textarea>'
				};

				
				iElement.html(html).show();
				$compile(iElement.contents())(scope);
				break;
				
				case 'checkbox':
				var html  = '';

				angular.forEach(scope.data.answers,function(e,i) {
					var name = 'radio_'+Math.floor((Math.random() * 1000) + 1);
					html  += '<label> <input type="checkbox" name="'+i+'" value="'+e+'"> '+e+'</label>  <br>';
				})

				if (scope.data.other) {
					html += '<textarea class="form-control"></textarea>'
				};
				iElement.html(html).show();
				$compile(iElement.contents())(scope);
				break;
			}

			// console.log(iElement);
			// console.log(iAttrs);
		},
		scope: {
			data: '='
		}
	};
}])
;