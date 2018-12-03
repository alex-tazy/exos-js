define([
  'jquery',
  'underscore',
  'backbone',
  'views/header/HeaderView',
  'views/home/HomeView',
  'views/medias/MediasView',
  'views/footer/FooterView'
], function($, _, Backbone, HeaderView, HomeView, MediasView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'medias': 'showMedias',

      // Default
      '': 'defaultAction'
    }
  });
  
  var initialize = function()
  {
    var appRouter = new AppRouter();

    appRouter.on('route:showMedias', function()
    {
        var mediasView = new MediasView();
        mediasView.render();
    });

    appRouter.on('route:defaultAction', function (actions)
    {
        var homeView = new HomeView({router:appRouter});
        homeView.render();
    });

    var headerView = new HeaderView();
    var footerView = new FooterView();

    Backbone.history.start({root: "/medias"});
  };
  return { 
    initialize: initialize
  };
});
