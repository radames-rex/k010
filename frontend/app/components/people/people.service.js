'use strict';

(function() {

  /**
   * @ngdoc function
   * @name k010App.factory:PeopleService
   * @description
   * # PeopleService
   * Service of the k010App
   */
  var PeopleService = function(REQUEST, RequestService, $q) {
    var PeopleService = this;

    PeopleService.getPeople = function(id) {
      var defer = $q.defer(),
        params = '?person[name]=' + name +
        '&person[age]=' + age +
        '&person[gender]=' + gender +
        '&person[lonlat]=' + coordinates +
        '&items=' + inventory;
      RequestService.post(REQUEST.api.url + REQUEST.api.survivor.new, params).then(function(data) {
        data = data.data;
        if (data.id !== undefined) {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    PeopleService.setUUID = function(UUID) {
      localStorage.setItem('UUID',UUID);
    };

    PeopleService.setUser = function(name, age, gender) {
      localStorage.setItem('user.name',name);
      localStorage.setItem('user.age',age);
      localStorage.setItem('user.gender',gender);
    };

    PeopleService.getUUID = function() {
      var UUID = localStorage.getItem('UUID');
      return UUID;
    };

    PeopleService.hasUUID = function() {
      return PeopleService.getUUID() != undefined;
    };
  };

  PeopleService.$inject = ['REQUEST', 'RequestService', '$q'];

  angular
    .module('k010App')
    .service('PeopleService', PeopleService);
})();
