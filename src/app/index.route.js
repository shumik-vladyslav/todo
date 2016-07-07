(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('main.messages', {
        url: ':messagesId',
        controller: 'MessagesController',
        controllerAs: 'messages'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
