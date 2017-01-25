'use strict';

(function() {

  /**
   * @ngdoc function
   * @type k010App.controller:PeopleCtrl
   * @description
   * # PeopleCtrl
   * Controller of the k010App
   */
  var PeopleCtrl = function($scope, $rootScope, PeopleFactory, NgMap) {

    if (PeopleFactory.hasUUID()) {
      $scope.logged = true;
    } else {
      $scope.logged = false;
    }

    var normalizeCoordinates = function(coordinates) {
      return "POINT (" + coordinates.lat + " " + coordinates.lon + ")";
    };

    var normalizeInventory = function(inventory) {
      return "Water:" + inventory.water +
        ";Food:" + inventory.food +
        ";Medication:" + inventory.medication +
        ";Ammunition:" + inventory.ammunition + ";";
    };

    $scope.newSurvivor = function() {
      PeopleFactory.getPeople($scope.ctrl.name,
        $scope.ctrl.age, $scope.ctrl.gender,
          normalizeCoordinates($scope.ctrl.coordinates),
            normalizeInventory($scope.ctrl.inventory)).then(function(data) {
        PeopleFactory.setUUID(data.id);
        PeopleFactory.setUser($scope.ctrl.name,$scope.ctrl.age, $scope.ctrl.gender);
        $scope.logged = true;
      });
    };

    var ctrl = this;
    NgMap.getMap().then(function(map) {
      ctrl.map = map;
    });
    ctrl.callbackFunc = function() {
      setTimeout(function () {
        $scope.ctrl.coordinates = {
          lat: ctrl.map.center.lat(),
          lon: ctrl.map.center.lng()
        };
      }, 700);
    };

  };

  PeopleCtrl.$inject = ['$scope', '$rootScope', 'PeopleFactory', 'NgMap'];

  angular
    .module('k010App')
    .controller('PeopleCtrl', PeopleCtrl);
})();
