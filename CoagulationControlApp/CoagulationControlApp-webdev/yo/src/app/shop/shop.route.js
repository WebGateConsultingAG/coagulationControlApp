(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('shop', {
        url: '/shop',
        templateUrl: 'app/shop/shop.html',
        controller: 'ShopController',
        controllerAs: 'ShopCtrl'
      });
  }

})();
