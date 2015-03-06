import Ember from 'ember';

var AppEditRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('app', params.id);
	},

	deactivate: function() {
		this.currentModel.rollback();
	},

	actions: {
		save: function() {
			var route = this;

			this.currentModel.save().then(function(app) {
				route.transitionTo('apps.app', app);
			});
		},

		cancel: function() {
			this.transitionTo('apps.app', this.currentModel);
		}
	}
});

export default AppEditRoute;