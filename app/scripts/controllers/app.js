'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('AppCtrl', function ($scope) {

    $scope.data = {};

    $scope.data.charges = [
      {
        baseMealPrice: 9.99,
        taxRate: 7,
        tipPercentage: 20
      },
      {
        baseMealPrice: 23.44,
        taxRate: 7,
        tipPercentage: 10
      },
      {
        baseMealPrice: 19.89,
        taxRate: 7,
        tipPercentage: 25
      }
    ];

  });
