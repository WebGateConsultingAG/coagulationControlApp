(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'UserCtrl'
      });
  }

})();
