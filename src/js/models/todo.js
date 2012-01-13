(function() {
	"use strict";
	
	define([
			'backbone'
		],
		function(Backbone) {
			
			return Backbone.Model.extend({
				initialize : function(attributes) {
					if(attributes.completed == 'true') {
						this.set('completed', true);
					}
					
					else {
						this.set('completed', false);
					}
				},
				
				toggleComplete : function() {
					this.set('completed', !this.get('completed'));
				}
			});
		}
	);
})();
