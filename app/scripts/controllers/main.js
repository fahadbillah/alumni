'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alumniApp
 */
angular.module('alumniApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
