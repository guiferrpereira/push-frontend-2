import DS from 'ember-data';
import config from '../config/environment';

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: config.APP.SERVER_URL
});

export default ApplicationAdapter;