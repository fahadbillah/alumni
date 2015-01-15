'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the alumniApp
 */
angular.module('alumniApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
