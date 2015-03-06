import Ember from 'ember';

var AppRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('app', params.id);
	},

	actions: {
		deleteApp: function() {
			var app = this.currentModel,
					route = this;

			app.deleteRecord();
			app.save().then(function() {
				route.transitionTo('apps');
			});

		}
	}
});

export default AppRoute;