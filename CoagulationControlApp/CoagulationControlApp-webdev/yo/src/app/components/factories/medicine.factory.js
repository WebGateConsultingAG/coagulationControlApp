(function() {
  'use strict';

  angular
      .module('coagAngular')
      .factory('medicine', MedFactory);

  /** @ngInject */
  function MedFactory($resource) {
	  
    var defaultValues = {
			type : "medi",
	};
	
	var methods = {
			save: {	
				method: 'POST',
				params: { 
					action : 'save'}
			}
	};
	
	return $resource('/coag/api/coag', defaultValues, methods); 
  }

})();