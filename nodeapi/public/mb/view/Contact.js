/**
 * Created with IntelliJ IDEA.
 * User: mediabox-2012-formateur
 * Date: 31/10/12
 * Time: 13:48
 * To change this template use File | Settings | File Templates.
 */


var mb = mb || {};

( function( $, mb )
{
    mb.views = mb.views || {};

    // Vues
    mb.views.ContactView = Backbone.View.extend
    (
        {
            tagName : "li",
            model   : null,
            template : null,
            initialize: function()
            {
                this.template = _.template( templateLoader.get( "contact-template" ) );
                this.model.on( "change", this.render, this );
                this.render();
            },
            events :
            {

            },
            render: function()
            {
                this.$el.html( this.template( this.model.toJSON() ) );
                return this;
            }
        }
    );

    mb.views.ContactListView = Backbone.View.extend
    (
        {
            collection : null,
            initialize : function()
            {
                // Liaison événementielle entre la collection et la vue
                this.listenTo( this.collection, "reset", this.initContacts );
                this.listenTo( this.collection, "add", this.addContact );

                this.initContacts( this.collection );
            },
            initContacts : function( contacts )
            {
                var self = this;
                contacts.each
                (
                    function( contact )
                    {
                        self.addContact( contact )
                    }
                );
            },
            addContact : function( contact )
            {
                this.$el.append
                (
                    new mb.views.ContactView( { model : contact } ).el
                );
            }
        }
    );
})( jQuery, mb );