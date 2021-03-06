'use strict';

describe('Controller: MainsurveyCtrl', function () {

  // load the controller's module
  beforeEach(module('alumniApp'));

  var MainsurveyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainsurveyCtrl = $controller('MainsurveyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
