'use strict';

(function() {

  /**
   * @ngdoc function
   * @type k010App.controller:PeopleCtrl
   * @description
   * # PeopleCtrl
   * Controller of the k010App
   */
  var PeopleCtrl = function($scope, $rootScope, PeopleFactory) {

    $scope.peoples = [{
      id: '1',
      name: 'ruan',
      email: 'ruan@gmail.com',
      friend: 'e'
    },{
      id: '2',
      name: 'matheus',
      email: 'matheus@gmail.com',
      friend: 'f'
    }];

  };

  PeopleCtrl.$inject = ['$scope', '$rootScope', 'PeopleFactory'];

  angular
    .module('k010App')
    .controller('PeopleCtrl', PeopleCtrl);
})();
