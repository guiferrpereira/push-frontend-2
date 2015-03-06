import DS from 'ember-data';

var App = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  bio: DS.attr('string')
});

export default App;