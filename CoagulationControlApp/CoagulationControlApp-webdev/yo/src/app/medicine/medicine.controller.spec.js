(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('coagAngular'));

    it('should have an initialised date', inject(function($controller) {
      var vm = $controller('MediController');

      expect(vm.MediDate).toBeTruthy();
    }));
  });
})();
