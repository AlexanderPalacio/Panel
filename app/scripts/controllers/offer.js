'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:OfferCtrl
 * @description
 * # OfferCtrl
 * Provides rudimentary offer management functions.
 */
angular.module('panelApp')
  .controller('OfferCtrl', ["$scope", "auth", "currentAuth", function (
    $scope,
    auth,
    currentAuth
  , $timeout 
  ) {

  $scope.user = {
    uid: currentAuth.uid,
    name: currentAuth.displayName,
    photo: currentAuth.photoURL,
    email: currentAuth.email
  };

    $scope.authInfo = currentAuth;
  
  }]);
