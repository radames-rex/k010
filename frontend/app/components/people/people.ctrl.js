'use strict';

(function() {

  /**
   * @ngdoc function
   * @type k010App.controller:PeopleCtrl
   * @description
   * # PeopleCtrl
   * Controller of the k010App
   */
  var PeopleCtrl = function($scope, $rootScope, PeopleService, ToastService, $state, lodash) {

    $scope.newName = [];
    $scope.newEmail = [];
    $scope.editing = [];

    $scope.list = function(){
      $rootScope.loading = true;
      PeopleService.listPeoples().then(function(data){
        $scope.peoples = data;
        $rootScope.loading = false;
      });
    };

    $scope.create = function(){
      $rootScope.loading = true;
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
      $rootScope.loading = true;
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
      $rootScope.loading = true;
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

    $scope.draft = function() {
      $rootScope.loading = true;
      var arrDraft = [];
      angular.forEach($scope.peoples, function(value){
        arrDraft.push(value);
      });
      arrDraft = lodash.shuffle(arrDraft);
      for (var i = 0; i < arrDraft.length; i++) {
        if(i === arrDraft.length-1){//ultimo
          arrDraft[i].friend = arrDraft[0].name;
        }else{
          arrDraft[i].friend = arrDraft[i+1].name;
        }
      }
      PeopleService.sendMail(arrDraft).then(function(data){
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

  PeopleCtrl.$inject = ['$scope', '$rootScope', 'PeopleService', 'ToastService', '$state', 'lodash'];

  angular
    .module('k010App')
    .controller('PeopleCtrl', PeopleCtrl);
})();
