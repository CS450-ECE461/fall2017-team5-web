/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'sojo-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        
        // This must be enabled for account adapter to work.
        'ds-improved-ajax': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    gatekeeper: {
        baseUrl: 'localhost:5000/gatekeeper',
        tokenOptions: {
          client_id: '5a010245bcc0dc12b2098ba7',
          client_secret: 'cbJtt4YKjvj20B5eeLWTwQ4WFR1yYBxN4pP2ct8NR882FdVnZQ2clXeM6iSNv-Jvu8mMz7MVGN7QCkruBa0JQtnJmReSHLNdgI_gNoqQU9ywU6I-JDhlj3k-VNVHi3ZoxnHxOQlslWrFYqRfaMROqcOqdRorr-7-CVmaCWfPWkE'
        },
        signInRoute: 'login'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
