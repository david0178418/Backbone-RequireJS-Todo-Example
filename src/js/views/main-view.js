(function() {
	"use strict";
	
	define([
			'jqueryLoader',
			'underscore',
			'backbone',
			'collections/todo-list',
			'views/todo-list-view',
			'views/remaining-view',
			'text!templates/main.html'
		],
		function($, _, Backbone, TodoList, TodoListView, RemainingView, MainTemplate) {
			
			return Backbone.View.extend({
				template : _.template(MainTemplate),
				
				events : {
					'click #add-item' : 'newItem',
					'click #new-item .save' : 'saveNewTodo',
					'click #new-item .cancel' : 'closeNewTodo',
				},
				
				initialize : function() {
					this.collection = new TodoList();
					
					this.render();
					
					this.collection.fetch();
				},
				
				render : function() {
					var todoListView = new TodoListView({
							collection: this.collection
						}),
						remainingView = new RemainingView({
							collection : this.collection
						});
					$(this.el).html(this.template(MainTemplate));
					
					this.$('#list').append(todoListView.el);
					this.$('#remaining').append(remainingView.el);
					
					return this;
				},
				
				newItem : function() {
					this.$('#new-item').show();
					this.$('#add-item').hide();
				},
				
				closeNewTodo : function() {
					this.$('#new-item-label').val('')
					
					this.$('#new-item').hide();
					this.$('#add-item').show();
				},
				
				saveNewTodo : function() {
					if($.trim(this.$('#new-item-label').val())) {
						this.collection.add({
							label : $.trim(this.$('#new-item-label').val()),
							completed : false,
							order : (this.collection.length + 1)
						});
					}
					
					this.closeNewTodo();
				}
			});
		}
	);
})();
