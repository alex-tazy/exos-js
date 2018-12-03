require.config({
  paths: {
    jquery: 'libs/jquery-1.8.2',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone-min',
    templates: '../templates'
  },
  shim: {
        'jquery': {
          exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([
  'app',
], function(App)
{
  App.initialize();
});
