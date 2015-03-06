import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Get rid of the # in URLs
Router.reopen({
	location: 'auto',
	rootURL: '/'
});

Router.map(function() {
	this.route('login');
	this.route('unauthorized');
  this.route('signup');

	this.resource('apps', function () {
		this.route('new');
		this.route('edit', { path: '/:app_id/edit' });
		this.resource('apps.app', { path: '/:app_id'}, function () {});
	});
});

export default Router;
