'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:EarningCtrl
 * @description
 * # EarningCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('EarningCtrl', function ($scope) {
    $scope.data = $scope.data || {};
    $scope.data.charges = $scope.data.charges || [];

    $scope.tipTotal = $scope.data.charges.reduce( function(total, charge) {
      return total + Number(charge.tipAmount);
    }, 0);

    $scope.mealCount = $scope.data.charges.length;

    $scope.averageTip = $scope.tipTotal / $scope.mealCount || 0;

  });
