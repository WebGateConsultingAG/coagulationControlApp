(function() {
  'use strict';

  angular
    .module('coagAngular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('inr', {
        url: '/inr',
        templateUrl: 'app/inr/inr.html',
        controller: 'InrController',
        controllerAs: 'inrCtrl'
      });
  }

})();
