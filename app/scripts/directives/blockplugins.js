'use strict';

/**
 * @ngdoc directive
 * @name alumniApp.directive:blockPlugins
 * @description
 * # blockPlugins
 */
 angular.module('alumniApp')
 .directive('blockPlugins',['$http','$location', function ($http,$location) {
 	return {
 		template: '<table class="table table-condensed table-bordered table-striped"><tr><th>Name</th><th>Point</th></tr><tr ng-if="key < 10" ng-repeat="(key, value) in topTenList | orderBy:order:reverse" ng-click="goToProfile({{value.user_id}})"><td>{{value.first_name}} {{value.last_name}}</td><td>{{value.total_point}}</td></tr></table>',
 		restrict: 'E',
 		controller: function($scope,$element) {
 			$scope.topTenList = [];
 			$scope.order = '-total_point';
 			$http.get('api/index.php/user/top_referer')
 			.success(function(data) {
 				$scope.topTenList = data;
 				console.log(data);
 			})
 			.error(function(data) {
 				console.log(data);
 			});

 			$scope.goToProfile = function(userId) {
 				$location.path('/profile/'+userId);
 			}
 		},
 	};
 }]);
