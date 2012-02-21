define([
		'jqueryLoader',
		'underscore',
		'backbone',
		'views/todo-view'
	],
	function($, _, Backbone, TodoView) {
		"use strict";
		
		return Backbone.View.extend({
			tagName : 'ul',
			
			initialize : function() {
				_.bindAll(this, 'addTodo');
				this.collection.bind('add', this.addTodo, this);
				this.collection.bind('reset', this.render, this);
				
				this.render();
			},
			
			render : function() {
				this.$el.empty();
				
				this.collection.each(this.addTodo);
				
				return this;
			},
			
			addTodo : function(todo) {
				var todoView = new TodoView({
					model : todo
				});
					
				this.$el.append(todoView.el)
			}
		});
	}
);