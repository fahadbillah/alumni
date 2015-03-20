'use strict';

describe('Controller: BroadcastmessageCtrl', function () {

  // load the controller's module
  beforeEach(module('alumniApp'));

  var BroadcastmessageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BroadcastmessageCtrl = $controller('BroadcastmessageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
