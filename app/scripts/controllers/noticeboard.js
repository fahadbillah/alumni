'use strict';

/**
 * @ngdoc function
 * @name alumniApp.controller:NoticeboardCtrl
 * @description
 * # NoticeboardCtrl
 * Controller of the alumniApp
 */
angular.module('alumniApp')
  .controller('NoticeboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
