'use strict';

describe('Controller: EarningCtrl', function () {

  // load the controller's module
  beforeEach(module('waitstaffApp'));

  var EarningCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EarningCtrl = $controller('EarningCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
