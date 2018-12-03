define([
  'jquery',
  'backbone',
  'text!templates/header/headerTemplate.html'
], function($, Backbone, headerTemplate)
{
  var HeaderView = Backbone.View.extend({
    el: $("#header"),

    initialize: function() {
      this.render();
    },

    render: function()
    {
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(headerTemplate);
    }

  });

  return HeaderView;
  
});
