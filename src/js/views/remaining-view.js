(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'underscore',
			'backbone',
			'text!templates/remaining.html'
		],
		function($, _, Backbone, remainingTemplate) {
			
			return Backbone.View.extend({
				template : _.template(remainingTemplate),
				
				initialize : function() {
					this.collection.bind('reset', this.render, this);
					this.collection.bind('add', this.render, this);
					this.collection.bind('remove', this.render, this);
					this.collection.bind('change', this.render, this);
					
					this.render();
				},
				
				render : function() {
					$(this.el).html(this.template({
						count : this.collection.length,
						notCompleted : this.collection.notCompletedCount()
					}));
					
					return this;
				},
			});
		}
	);
})();
