import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  actions: {
    register: function() {
      var self = this;
      var guest = this.store.createRecord('guest', this.get('fields'));
      guest.save().then(function() {
        self.transitionToRoute('/');
      });
    }
  }
});