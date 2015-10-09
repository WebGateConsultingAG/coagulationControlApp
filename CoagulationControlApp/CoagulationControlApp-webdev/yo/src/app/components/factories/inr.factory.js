(function() {
  'use strict';

  angular
      .module('coagulationControlAppWebdev')
      .factory('inr', inrFactory);

  /** @ngInject */
  function inrFactory($resource) {
	  
    var defaultValues = {
			type : "inr",
	};
	
	var methods = {
			save: {	
				method: 'POST',
				params: { 
					action : 'save'}
			},
			query: {
				isArray: false
			}
	};
	
	return $resource('/coag/api/coag', defaultValues, methods); 
  }

})();