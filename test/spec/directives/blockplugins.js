'use strict';

describe('Directive: blockPlugins', function () {

  // load the directive's module
  beforeEach(module('alumniApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<block-plugins></block-plugins>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the blockPlugins directive');
  }));
});
