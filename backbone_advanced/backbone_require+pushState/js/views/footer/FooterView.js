define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate)
{
  var FooterView = Backbone.View.extend({
    el: $("#footer"),

    initialize: function() {
      this.render();
    },

    render: function(){

      var data = {
        owner: { avatar_url : 'http://addyosmani.github.io/backbone-fundamentals/img/logo.jpg', name : 'Pierrick' }
      };

      var compiledTemplate = _.template( footerTemplate, data );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
