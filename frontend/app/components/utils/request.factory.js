'use strict';

(function() {

  /**
   * Definição do Factory para todas as Requisições.
   * @Peopleor Rádames Santiago <radames@infoway-pi.com.br>
   * @class RequestFactory
   */
  var RequestFactory = function($rootScope, $http) {

    var RequestFactory = {};

    /**
     * Verifica se o browser do usuário tem conexão com a Internet.
     * @Peopleor Rádames Santiago <radames@infoway-pi.com.br>
     * @name isOnline
     * @function
     * @returns {boolean} Está online ou não.
     * @memberof RequestFactory
     */
    var isOnline = function() {
      var onLine = window.navigator.onLine;
      return onLine;
    };

    /**
     * Monta uma requisição Get.
     * @Peopleor Rádames Santiago <radames@infoway-pi.com.br>
     * @name get
     * @function
     * @param {string} url Url da requisição.
     * @param {object} data Parâmetros.
     * @param {boolean} withoutLoader Sem Loader.
     * @param {boolean} withFilterLoader Com Loader do Filtro.
     * @returns {object} Promessa da requisição.
     * @memberof RequestFactory
     */
    RequestFactory.get = function(url) {
      if (isOnline()) {
        return $http.get(url);
      }
    };

    /**
     * Monta uma requisição Post.
     * @Peopleor Rádames Santiago <radames@infoway-pi.com.br>
     * @name post
     * @function
     * @param {string} url Url da requisição.
     * @param {object} data Parâmetros.
     * @param {boolean} withoutLoader Sem Loader.
     * @param {boolean} withFilterLoader Com Loader do Filtro.
     * @returns {object} Promessa da requisição.
     * @memberof RequestFactory
     */
    RequestFactory.post = function(url,params) {
      if (isOnline()) {
        return $http.post(url+params);
      }
    };

    /**
     * Monta uma requisição Patch.
     * @Peopleor Rádames Santiago <radames@infoway-pi.com.br>
     * @name post
     * @function
     * @param {string} url Url da requisição.
     * @param {object} data Parâmetros.
     * @param {boolean} withoutLoader Sem Loader.
     * @param {boolean} withFilterLoader Com Loader do Filtro.
     * @returns {object} Promessa da requisição.
     * @memberof RequestFactory
     */
    RequestFactory.patch = function(url,params) {
      if (isOnline()) {
        return $http.patch(url+params);
      }
    };

    /**
     * Monta uma requisição Post Completa.
     * @Peopleor Rádames Santiago <radames@infoway-pi.com.br>
     * @name get
     * @function
     * @param {string} url Url da requisição.
     * @param {object} data Parâmetros.
     * @param {boolean} withoutLoader Sem Loader.
     * @param {boolean} withFilterLoader Com Loader do Filtro.
     * @returns {object} Promessa da requisição.
     * @memberof RequestFactory
     */
    RequestFactory.postFull = function(url, body) {
      if (isOnline()) {
        return $http({
          url: url,
          dataType: 'json',
          method: 'POST',
          data: body,
          headers: {
            "Content-Type": "application/json"
          }
        });
      }
    };


    return RequestFactory;
  };

  RequestFactory.$inject = ['$rootScope', '$http'];

  angular
    .module('k010App')
    .factory('RequestFactory', RequestFactory);

})();
