'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('k010App'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(true).toBe(true);
  });
});
