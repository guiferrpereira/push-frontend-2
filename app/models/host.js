import DS from 'ember-data';

var Host = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});

export default Host;