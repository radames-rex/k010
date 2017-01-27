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
      ToastService.showSuccessToast("OK");
    });

    $scope.create = function(){
      var body = {
        "name": $scope.name,
        "email": $scope.email
      };
      PeopleService.addPeople(body).then(function(data){
        if(data){
          ToastService.showSuccessToast("OK");
        }else{
          ToastService.showSuccessToast("NOT OK");
        }
      });
    };

    $scope.edit = function(id){
      var body = {};
      PeopleService.editPeople(id, body).then(function(data){
        if(data){
          ToastService.showSuccessToast("OK");
        }else{
          ToastService.showSuccessToast("NOT OK");
        }
      });
    };

    $scope.delete = function(id){
      PeopleService.deletePeople(id).then(function(data){
        if(data){
          ToastService.showSuccessToast("OK");
        }else{
          ToastService.showSuccessToast("NOT OK");
        }
      });
    };

  };

  PeopleCtrl.$inject = ['$scope', '$rootScope', 'PeopleService', 'ToastService'];

  angular
    .module('k010App')
    .controller('PeopleCtrl', PeopleCtrl);
})();
