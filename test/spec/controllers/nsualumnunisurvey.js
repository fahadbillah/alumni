'use strict';

describe('Controller: NsualumnunisurveyCtrl', function () {

  // load the controller's module
  beforeEach(module('alumniApp'));

  var NsualumnunisurveyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NsualumnunisurveyCtrl = $controller('NsualumnunisurveyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
