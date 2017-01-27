'use strict';

/**
 * @ngdoc overview
 * @name k010App
 * @description
 * # k010App
 *
 * Main module of the application.
 */
angular
  .module('k010App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngMaterial',
    'ngMap'
  ])
  .constant('PATH', {
    main: '/main',
    people: '/people'
  })
  .constant('REQUEST', {
    api: {
      url: 'http://localhost:8080/api',
      smtp: '???',
      add: '/people',
      edit: '/people/',
      delete: '/people/',
      fetch: '/people/',
      list: '/peoples'
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH, $mdThemingProvider) {

    /* Configuração do provider de universalização e da linguagem padrão. */
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    // $translateProvider.preferredLanguage('en');
    $translateProvider.preferredLanguage(navigator.language);

    /*Configuração dos Temas. */
    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('green');
    $mdThemingProvider.theme('success-toast')
      .primaryPalette('blue')
      .accentPalette('brown');
    $mdThemingProvider.theme('error-toast')
      .primaryPalette('red')
      .accentPalette('brown');


    /* Configuração dos estados e rotas da aplicação */
    $stateProvider.state('main', {
      abstract: true,
      url: PATH.main,
      templateUrl: 'views/main.html'
    }).state('main.people', {
      url: PATH.people,
      templateUrl: 'views/people.html',
      controller: 'PeopleCtrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/main/people';
    });

  });
