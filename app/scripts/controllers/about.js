'use strict';

/**
 * @ngdoc function
 * @name waitstaffApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the waitstaffApp
 */
angular.module('waitstaffApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
