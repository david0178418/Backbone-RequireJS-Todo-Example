define([
		'underscore',
		'backbone',
		'models/todo-model'
	],
	function(_, Backbone, TodoModel) {
		"use strict";
		
		return Backbone.Collection.extend({
			url : 'data.json',
			
			model : TodoModel,
			
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