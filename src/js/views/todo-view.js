define([
		'underscore',
		'backbone',
		'text!templates/todo.html'
	],
	function(_, Backbone, todoTemplate) {
		"use strict";
		
		return Backbone.View.extend({
			tagName : 'li',
			
			template : _.template(todoTemplate),
			
			events : {
				'click .remove' : 'remove',
				'click input.complete' : 'toggleComplete',
				'click .label' : 'openEdit',
				'click .cancel' : 'closeEdit',
				'click .save' : 'saveEdit'
			},
			
			initialize : function() {
				this.render();
			},
			
			render : function() {
				this.$el.append(this.template(this.model.toJSON()));
				
				return this;
			},
			
			remove : function() {
				this.$el.remove();
				this.model.destroy();
			},
			
			toggleComplete : function() {
				this.model.toggleComplete();
				
				if(this.model.get('completed')) {
					this.$('.label').addClass('completed');
				}
				else {
					this.$('.label').removeClass('completed');
				}
			},
			
			openEdit : function() {
				this.$('.todo-item').addClass('edit');
			},
			
			closeEdit : function() {
				this.$('.todo-item').removeClass('edit');
			},
			
			saveEdit : function() {
				var newLabel = this.$('.label-edit').val();
				
				this.model.set('label', newLabel);
				
				this.$('.label').html(newLabel)
				
				this.closeEdit();
			}
		});
	}
);
