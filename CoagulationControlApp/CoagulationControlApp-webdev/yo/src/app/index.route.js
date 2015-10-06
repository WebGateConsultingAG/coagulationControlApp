(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    
	  
	  
	  $urlRouterProvider.otherwise('/inr');
  }

})();
