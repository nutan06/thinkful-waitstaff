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

    // $scope.data = {
    //   counter: 0
    // };

    $scope.increment = function() {
      $scope.data.counter++;
    };

  });
