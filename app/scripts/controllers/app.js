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

    $scope.data = { charges: [] };

    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);

      return page === current ? 'active' : '';
    };
  });
