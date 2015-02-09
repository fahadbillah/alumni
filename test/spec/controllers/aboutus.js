'use strict';

describe('Controller: AboutusCtrl', function () {

  // load the controller's module
  beforeEach(module('alumniApp'));

  var AboutusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutusCtrl = $controller('AboutusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
