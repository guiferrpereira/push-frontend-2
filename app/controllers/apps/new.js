import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createApp: function() {
			var self = this;
			var app = this.store.createRecord('app', this.get('fields'));
			app.save().then(function() {
				self.transitionToRoute('apps.index');
			});
		},
		cancel: function() {
			this.transitionToRoute('apps');
		}
	}
});