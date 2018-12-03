define([
  'jquery',
  'backbone',
  'text!templates/medias/mediasListTemplate.html'
], function($, Backbone, mediasListTemplate){

  var MediasView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      this.$el.html(mediasListTemplate); 
    }

  });

  return MediasView;
  
});
