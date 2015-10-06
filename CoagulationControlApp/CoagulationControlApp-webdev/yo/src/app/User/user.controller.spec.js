(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('coagAngular'));

    it('should have an initialised date', inject(function($controller) {
      var vm = $controller('UserController');

      expect(vm.UserDate).toBeTruthy();
    }));
  });
})();
