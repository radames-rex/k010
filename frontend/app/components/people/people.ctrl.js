'use strict';

(function() {

  /**
   * @ngdoc function
   * @type k010App.controller:PeopleCtrl
   * @description
   * # PeopleCtrl
   * Controller of the k010App
   */
  var PeopleCtrl = function($scope, $rootScope, PeopleService, ToastService) {

    PeopleService.listPeoples().then(function(data){
      $scope.peoples = data;
    });

    $scope.create = function(){
      PeopleService.addPeople().then(function(data){
        if(data){
          console.log('TOAST');
        }else{
          console.log('ERROR');
        }
      });
    };

    $scope.edit = function(id){
      PeopleService.editPeople(id).then(function(data){
        if(data){
          console.log('TOAST');
        }else{
          console.log('ERROR');
        }
      });
    };

    $scope.delete = function(id){
      PeopleService.deletePeople(id).then(function(data){
        if(data){
          console.log('TOAST');
        }else{
          console.log('ERROR');
        }
      });
    };

  };

  PeopleCtrl.$inject = ['$scope', '$rootScope', 'PeopleService', 'ToastService'];

  angular
    .module('k010App')
    .controller('PeopleCtrl', PeopleCtrl);
})();
