import AuthorizedRoute from 'push-frontend/routes/authorized';

export default AuthorizedRoute.extend( {
	access: ['Host'],
  setupController: function(controller) {
    controller.set('fields', {});
  }
});