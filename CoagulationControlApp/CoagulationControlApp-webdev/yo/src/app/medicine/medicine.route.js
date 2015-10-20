(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('medicine', {
        url: '/medicine',
        templateUrl: 'app/medicine/medicine.html',
        controller: 'MedicineController',
        controllerAs: 'MedCtrl'
        	
      });
  }

})();