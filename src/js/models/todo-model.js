define([
		'backbone'
	],
	function(Backbone) {
		"use strict";
		
		return Backbone.Model.extend({
			initialize : function(attributes) {
				
			},
			
			toggleComplete : function() {
				this.set('completed', !this.get('completed'));
			}
		});
	}
);