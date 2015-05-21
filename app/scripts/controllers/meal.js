'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MealCtrl
 * @description
 * # MealCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('MealCtrl', function ($scope) {

    $scope.createCharge = function(form) {
      if (form.$valid) {
        $scope.data.charges.push({
          baseMealPrice: $scope.baseMealPrice,
          taxRate: $scope.taxRate,
          tipPercentage: $scope.tipPercentage
        });

        $scope.resetForm(form);
      }
    };

    $scope.resetForm = function(form) {
      form.$setPristine();
      form.$setUntouched();

      delete $scope.baseMealPrice;
      delete $scope.taxRate;
      delete $scope.tipPercentage;
    };

    $scope.$watchGroup(['baseMealPrice', 'taxRate', 'tipPercentage'], function(values) {
      $scope.subtotal = Number(values[0]) * (1 + Number(values[1])/100);
      if (isNaN($scope.subtotal)) {
        $scope.subtotal = 0.00;
      }

      $scope.tipAmount = $scope.subtotal * $scope.tipPercentage / 100;
      if (isNaN($scope.tipAmount)) {
        $scope.tipAmount = 0.00;
      }

      $scope.total = $scope.subtotal + $scope.tipAmount;
      if (isNaN($scope.total)) {
        $scope.total = 0.00;
      }

    });

  });
