'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('AppCtrl', function ($scope, $location) {

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

    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);

      return page === current ? 'active' : '';
    };
  });
