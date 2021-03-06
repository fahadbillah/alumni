'use strict';

describe('Controller: QuicksurveyCtrl', function () {

  // load the controller's module
  beforeEach(module('alumniApp'));

  var QuicksurveyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuicksurveyCtrl = $controller('QuicksurveyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
