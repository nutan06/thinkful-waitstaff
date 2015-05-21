'use strict';

describe('Controller: MealCtrl', function () {

  // load the controller's module
  beforeEach(module('waitstaffApp'));

  var MealCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MealCtrl = $controller('MealCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
