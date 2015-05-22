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
          tipPercentage: $scope.tipPercentage,
          subtotal: $scope.subtotal,
          tipAmount: $scope.tipAmount,
          total: $scope.total
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
      var subtotal = Number(values[0]) * (1 + Number(values[1])/100);
      $scope.subtotal = isNaN(subtotal) ? 0.00 : subtotal;

      var tipAmount = $scope.subtotal * $scope.tipPercentage / 100;
      $scope.tipAmount = isNaN(tipAmount) ? 0.00 : tipAmount;

      var total = $scope.subtotal + $scope.tipAmount;
      $scope.total = isNaN(total) ? 0.00 : total;

    });
  });
