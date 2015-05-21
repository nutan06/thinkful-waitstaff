'use strict';

/**
 * @ngdoc overview
 * @name waitstaffApp
 * @description
 * # waitstaffApp
 *
 * Main module of the application.
 */
angular
  .module('waitstaffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/meal', {
        templateUrl: 'views/meal.html',
        controller: 'MealCtrl'
      })
      .when('/earnings', {
        templateUrl: 'views/earnings.html',
        controller: 'EarningCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
