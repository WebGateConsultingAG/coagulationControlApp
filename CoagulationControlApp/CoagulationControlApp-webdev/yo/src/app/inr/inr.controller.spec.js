(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('coagulationControlAppWebdev'));

    it('should have an initialised date', inject(function($controller) {
      var vm = $controller('InrController');

      expect(vm.inrDate).toBeTruthy();
    }));
  });
})();
