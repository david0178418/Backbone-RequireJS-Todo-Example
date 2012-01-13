(function() {
	"use strict";
	
	define([
			'underscore',
			'backbone',
			'models/todo'
		],
		function(_, Backbone, Todo) {
			
			return Backbone.Collection.extend({
				url : 'data.json',
				
				model : Todo,
				
				initialize : function() {
					
				},
				
				comparator : function(todo) {
					return todo.get('order');
				},
				
				notCompletedCount : function() {
					
					return _.reject(this.toArray(), function(todo) {
						return todo.get('completed');
					}, this).length;
				}
			});
		}
	);
})();
