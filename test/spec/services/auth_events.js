'use strict';

describe('Service: AUTHEVENTS', function () {

  // load the service's module
  beforeEach(module('alumniApp'));

  // instantiate service
  var AUTHEVENTS;
  beforeEach(inject(function (_AUTHEVENTS_) {
    AUTHEVENTS = _AUTHEVENTS_;
  }));

  it('should do something', function () {
    expect(!!AUTHEVENTS).toBe(true);
  });

});
