
(function() {
  'use strict';

  angular
    .module('coagulationControlAppWebdev')
    .controller('ChartController', ChartController);

  /** @ngInject */
  function ChartController( inr ) {
	  var self = this;
	  //hole INR
	  var displayInrs = [];
	  var allInrs = [];
	  self.labels = [];
	  self.data = [];
	  
	  inr.query({}, function(inrs){
			allInrs = inrs.inrentries;
			displayInrs = allInrs.splice(0, 6);
			
			self.labels = displayInrs.map(function(val){
				  return dateFormatter(new Date(val.measuredate));
				});

			self.data.push(displayInrs.map(function(val){return val.inrvalue}));
			
		},function(err){console.log(err)});
	  
	  
	  self.series = ['INR value'];
	  self.onClick = function (points, evt) {
		console.log(points, evt);
	  };
	  
	}
	
	function dateFormatter(d){
		var day = d.getDate();
		var monthIndex = d.getMonth();
		var year = d.getFullYear();
		return  day + "." + monthIndex + "." + year;
	}
    
    
    
}
)();
