/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
  	modulePrefix: 'push-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      SERVER_URL: 'https://ember-wknd-server.herokuapp.com',
      CSRF_URL: 'https://ember-wknd-server.herokuapp.com/api/csrf',
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    // 'script-src': "'self' https://cdn.mxpnl.com", // Allow scripts from https://cdn.mxpnl.com
    'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://macacadamaster3250.ninefold-apps.com http://localhost:3000 http://staging-push.ndrive.com" , // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true; // this helps us see where hooks are being called
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.SERVER_URL = 'http://localhost:3000',
    ENV.APP.CSRF_URL = 'http://localhost:3000/api/csrf'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

		ENV.APP.SERVER_URL = 'http://localhost:3000',
    ENV.APP.CSRF_URL = 'http://localhost:3000/api/csrf'
  }

  if (environment === 'production') {
		ENV.APP.SERVER_URL = 'https://ember-wknd-server.herokuapp.com';
		ENV.APP.CSRF_URL = 'https://ember-wknd-server.herokuapp.com/api/csrf';
  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    crossOriginWhitelist:[
      ENV.APP.SERVER_URL
    ]
  };

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: ENV.APP.SERVER_URL + '/users/sign_in'
  };

  return ENV;
};
