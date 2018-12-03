define([
  'jquery',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.$el.html(homeTemplate);
    }
  });

  return HomeView;
  
});
