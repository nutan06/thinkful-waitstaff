'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.data = { charges: [] };

    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);

      return page === current ? 'active' : '';
    };
  });
