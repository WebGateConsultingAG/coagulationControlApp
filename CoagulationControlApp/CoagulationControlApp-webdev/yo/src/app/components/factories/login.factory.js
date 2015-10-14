(function() {
  'use strict';

  angular
      .module('coagulationControlAppWebdev')
      .factory('login', loginFactory);

  /** @ngInject */
  function inrFactory($resource) {
	  
    var defaultValues = {
			type : "login",
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