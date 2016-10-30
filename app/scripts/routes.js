'use strict';
/**
 * @ngdoc overview
 * @name panelApp:routes
 * @description
 * # routes.js
 * 
 *   resolve: {
 *     user: ['Auth', function($firebaseAuth) {
 *       return Auth.$getAuth();
 *     }]
 *   }
 *
 */
angular.module('panelApp')

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          "currentAuth": ["auth", function (auth) {
            return auth.$waitForSignIn();
          }]
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        resolve: {
          "currentAuth": ["auth", function (auth) {
            return auth.$requireSignIn();
          }]
        }
      })
      .when('/offer', {
        templateUrl: 'views/offer.html',
        controller: 'OfferCtrl',
        resolve: {
          "currentAuth": ["auth", function (auth) {
            return auth.$requireSignIn();
          }]
        }
      }) 
      .otherwise({
        redirectTo: '/'
      });

  }])

  .run(['$rootScope', '$location', 'loginRedirectPath',
    function ($rootScope, $location, loginRedirectPath, event, next, previous, error) {

      $rootScope.$on("$routeChangeError", function (event, next, previous, error) {
        if (error === "AUTH_REQUIRED") {
          $location.path(loginRedirectPath);
        }
      });
    }
  ]);