'use strict';

(function() {

  /**
   * @ngdoc function
   * @name k010App.service:PeopleService
   * @description
   * # PeopleService
   * Service of the k010App
   */
  var PeopleService = function(REQUEST, RequestService, $q) {
    var PeopleService = this;

    PeopleService.listPeoples = function() {
      var defer = $q.defer();
      RequestService.get(REQUEST.api.url + REQUEST.api.list).then(function(data) {
        data = data.data;
        if (data !== undefined) {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    PeopleService.addPeople = function(body) {
      var defer = $q.defer();
      RequestService.postFull(REQUEST.api.url + REQUEST.api.add, body).then(function(data) {
        if (data !== undefined) {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    PeopleService.editPeople = function(id, body) {
      var defer = $q.defer();
      RequestService.put(REQUEST.api.url + REQUEST.api.edit + id, body).then(function(data) {
        if (data !== undefined) {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    PeopleService.deletePeople = function(id) {
      var defer = $q.defer();
      RequestService.delete(REQUEST.api.url + REQUEST.api.delete + id).then(function(data) {
        if (data !== undefined) {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };
  };

  PeopleService.$inject = ['REQUEST', 'RequestService', '$q'];

  angular
    .module('k010App')
    .service('PeopleService', PeopleService);
})();
