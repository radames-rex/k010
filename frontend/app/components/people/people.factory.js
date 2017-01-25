'use strict';

(function() {

  /**
   * @ngdoc function
   * @name k010App.factory:PeopleFactory
   * @description
   * # PeopleFactory
   * Factory of the k010App
   */
  var PeopleFactory = function(REQUEST, RequestFactory, $q) {
    var PeopleFactory = {};

    PeopleFactory.getPeople = function(name, age, gender, coordinates, inventory) {
      var defer = $q.defer(),
        params = '?person[name]=' + name +
        '&person[age]=' + age +
        '&person[gender]=' + gender +
        '&person[lonlat]=' + coordinates +
        '&items=' + inventory;
      RequestFactory.post(REQUEST.api.url + REQUEST.api.survivor.new, params).then(function(data) {
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

    PeopleFactory.setUUID = function(UUID) {
      localStorage.setItem('UUID',UUID);
    };

    PeopleFactory.setUser = function(name, age, gender) {
      localStorage.setItem('user.name',name);
      localStorage.setItem('user.age',age);
      localStorage.setItem('user.gender',gender);
    };

    PeopleFactory.getUUID = function() {
      var UUID = localStorage.getItem('UUID');
      return UUID;
    };

    PeopleFactory.hasUUID = function() {
      return PeopleFactory.getUUID() != undefined;
    };

    return PeopleFactory;
  };

  PeopleFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('k010App')
    .factory('PeopleFactory', PeopleFactory);
})();
