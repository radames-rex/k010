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
    'ngMap',
    'ngLodash'
  ])
  .constant('PATH', {
    main: '/main',
    people: '/people'
  })
  .constant('REQUEST', {
    api: {
      // url: 'http://localhost:5000/api',
      url: 'https://k010-api.herokuapp.com/api',
      add: '/people',
      edit: '/people/',
      delete: '/people/',
      fetch: '/people/',
      list: '/peoples',
      email: '/draft'
    },
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
      .accentPalette('green')
      .warnPalette('orange');
    $mdThemingProvider.theme('success-toast')
      .primaryPalette('blue')
      .accentPalette('brown')
      .warnPalette('orange');
    $mdThemingProvider.theme('error-toast')
      .primaryPalette('red')
      .accentPalette('brown')
      .warnPalette('orange');


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
