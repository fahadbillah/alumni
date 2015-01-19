'use strict';

describe('Filter: utility', function () {

  // load the filter's module
  beforeEach(module('alumniApp'));

  // initialize a new instance of the filter before each test
  var utility;
  beforeEach(inject(function ($filter) {
    utility = $filter('utility');
  }));

  it('should return the input prefixed with "utility filter:"', function () {
    var text = 'angularjs';
    expect(utility(text)).toBe('utility filter: ' + text);
  });

});
