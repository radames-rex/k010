'use strict';

(function() {

  /**
   * @ngdoc function
   * @type k010App.controller:PeopleCtrl
   * @description
   * # PeopleCtrl
   * Controller of the k010App
   */
  var PeopleCtrl = function($scope, $rootScope, PeopleService, ToastService, $state) {

    $scope.newName = [];
    $scope.newEmail = [];
    $scope.editing = [];

    $scope.list = function(){
      PeopleService.listPeoples().then(function(data){
        $scope.peoples = data;
      });
    };

    $scope.create = function(){
      var body = {
        "name": $scope.name,
        "email": $scope.email
      };
      PeopleService.addPeople(body).then(function(data){
        if(data.status === 200){
          ToastService.showSuccessToast("Success");
          location.reload();
          // $state.reload();
        }else{
          ToastService.showSuccessToast("Try Again!");
        }
      });
    };

    $scope.edit = function(id){
      var body = {
        "name": $scope.newName[id],
        "email": $scope.newEmail[id]
      };
      PeopleService.editPeople(id, body).then(function(data){
        if(data.status === 200){
          ToastService.showSuccessToast("Success");
          location.reload();
          // $state.reload();
        }else{
          ToastService.showSuccessToast("Try Again!");
        }
      });
    };

    $scope.delete = function(id){
      PeopleService.deletePeople(id).then(function(data){
        if(data.status === 200){
          ToastService.showSuccessToast("Success");
          location.reload();
          // $state.reload();
        }else{
          ToastService.showSuccessToast("Try Again!");
        }
      });
    };

    $scope.list();

  };

  PeopleCtrl.$inject = ['$scope', '$rootScope', 'PeopleService', 'ToastService', '$state'];

  angular
    .module('k010App')
    .controller('PeopleCtrl', PeopleCtrl);
})();
