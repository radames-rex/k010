'use strict';

(function() {

  /**
   * @ngdoc function
   * @type k010App.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the k010App
   */
  var MainCtrl = function($scope, $mdDialog) {

    var DialogController = function($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    };

    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/views/People.html',
      parent: angular.element(document.body),
      clickOutsideToClose: false,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });

  };

  MainCtrl.$inject = ['$scope', '$mdDialog'];

  angular
    .module('k010App')
    .controller('MainCtrl', MainCtrl);
})();
