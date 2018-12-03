/**
 * Created with IntelliJ IDEA.
 * User: mediabox-2012-formateur
 * Date: 31/10/12
 * Time: 16:51
 * To change this template use File | Settings | File Templates.
 */
var mb = mb || {};

(function()
{
    mb.views = mb.views || {};

    mb.views.ContactFormView = Backbone.View.extend
    (
        {
            el : "#changeContact",
            model   : null,
            template : null,
            router : null,
            initialize: function( options )
            {
                this.router = options.router;
                this.template = _.template( templateLoader.get( "contact-form" ) );
                this.listenTo( this.model, "change", this.render );
                this.render();
            },
            events :
            {
                "click [type='button']": "validChange"
            },
            render: function()
            {
                this.$el.html( this.template( this.model.toJSON() ) );
                return this;
            },
            validChange : function()
            {
                var newPrenom = $( "#contactPreNom" ).val(),
                    newNom = $( "#contactNom" ).val()
                    nom = this.model.get( "nom" ),
                    prenom = this.model.get( "prenom" ) ;
                if( newPrenom !== prenom || newNom !== nom )
                {
                    this.model.set
                    (
                        {
                            prenom  : newPrenom,
                            nom     : newNom
                        }
                    ).save();
                }
                // Unbind events for later
                // Call default route : but Ugly !
                this.router.navigate( "", { trigger : true } );
            }
            ,dispose : function()
            {
                this.undelegateEvents();
                this.stopListening();
            }
        }
    );
})( jQuery, mb );