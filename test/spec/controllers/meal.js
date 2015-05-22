'use strict';

describe('Controller: MealCtrl', function () {

  // load the controller's module
  beforeEach(module('waitstaffApp'));

  var mainScope,
    mealScope,
    earningScope,
    currencyFilter,
    mealForm;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $filter, $compile) {
    mainScope = $rootScope.$new();
    mealScope = mainScope.$new();
    earningScope = mainScope.$new();
    currencyFilter = $filter('currency');


    $controller('MainCtrl', {
      $scope: mainScope
    });

    $controller('MealCtrl', {
      $scope: mealScope
    });

    $controller('EarningCtrl', {
      $scope: earningScope
    });

    var formElem = angular.element('<form name="form"></form>');
    $compile(formElem)(mealScope);
    mealForm = mealScope.form;

  }));

  it('should show the correct customer charges', function() {
    mealScope.baseMealPrice = 20;
    mealScope.taxRate = 7;
    mealScope.tipPercentage = 15;

    mealScope.$apply();

    expect(currencyFilter(mealScope.subtotal)).toEqual('$21.40');
    expect(currencyFilter(mealScope.tipAmount)).toEqual('$3.21');
    expect(currencyFilter(mealScope.total)).toEqual('$24.61');
  });

  it('should create the charges', function() {
    mealScope.baseMealPrice = 20;
    mealScope.taxRate = 7;
    mealScope.tipPercentage = 15;

    mealScope.$apply(mealScope.createCharge(mealForm));

    expect(mainScope.data.charges.length).toEqual(1);
  });

  it('should cumulate the charges', function() {
    mealScope.baseMealPrice = 20;
    mealScope.taxRate = 7;
    mealScope.tipPercentage = 15;

    mealScope.createCharge(mealForm);
    mealScope.createCharge(mealForm);
    mealScope.createCharge(mealForm);
    expect(mainScope.data.charges.length).toEqual(3);
  });

  it('should reset the data', function() {
    mealScope.baseMealPrice = 20;
    mealScope.taxRate = 7;
    mealScope.tipPercentage = 15;

    mealScope.resetForm(mealForm);

    expect(mealScope.baseMealPrice).toBeUndefined();
    expect(mealScope.taxRate).toBeUndefined();
    expect(mealScope.tipPercentage).toBeUndefined();
  });

});
