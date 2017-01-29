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

  it('should ...', function () {
    expect(true).toBe(true);
  });
});
