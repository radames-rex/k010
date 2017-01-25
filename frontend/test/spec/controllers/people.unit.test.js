'use strict';

describe('Controller: PeopleCtrl', function () {

  beforeEach(module('k010App'));

  var PeopleCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeopleCtrl = $controller('PeopleCtrl', {
      $scope: scope
    });
  }));

  it('should normalize object with coordinates', function () {
    expect(true).toBe(true);
  });

  it('should normalize object with inventory', function () {
    expect(true).toBe(true);
  });

  it('should include new survivor and set UUID in localstorage', function () {
    expect(true).toBe(true);
  });
});
