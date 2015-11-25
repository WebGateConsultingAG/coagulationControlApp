(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(user){
    	
    	this.getOne = function(){
    		// valid id: 4cedf550-50ca-478a-99f8-623d2a9523d0
    		user.get({unid: 'd2d1f534-f174-4c5a-9a52-01291e7f2dab'},
    				function(result){
    					console.dir(result);
    				});	
    	};
    	
        this.name = "";
        this.surname = "";
        this.bday = null;
        this.sex = true;
      this.address = "";
      this.zip="";
      this.country="";
      this.city="";
      
                this.norm = {
            min : 0,
            max : 6
        };
        
       this.msgGreeting = null;
       this.nickname = null;
       var currentUser = null;
      var userAddress = null;
       this.saveUser = function(){
    	   userAddress = {
                address: this.address,
                zip: this.zip,
                country: this.country,
                city: this.city,
                orderdate: new Date()
        	};
        	currentUser = {
                gender: 	!!this.sex,
			    birthDate : this.bday,
			    welcomemsg: +this.msgGreeting,
			    firstName: 	this.name,
			    lastName: 	this.surname,
                nickname:	(this.nickname !== null && this.msgGreeting === "3") ? this.nickname : ""    
            };
                
           
               
                user.save(userAddress, function(promise){
                  userAddress.unid = promise.unid;
                  		  console.dir(promise);  
                });
        	
        	   user.save(currentUser, function(promise){
        		  currentUser.unid = promise.unid;
                  		  console.dir(promise);
                  
			}); 
            
            
        };
        this.checkNicknameInput = function(){
          return this.msgGreeting !== 'nickname';  
            
        };
        
      this.isEmpty = function (obj) {
            for (var i in obj){ 
                if (obj.hasOwnProperty(i)){ 
                    return false;
                 }
            }
            return true;
      }; 
      
      this.ownname = function() {
      };
      
    	self.getAddress = function() {
			user.get({
				zip: 5727
			}, function(addressResult) {
				console.dir(addressResult);
			});

		};
      self.getAddress();
       
    }
})();