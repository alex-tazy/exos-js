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
            template : _.template( $( "#contact-template" ).html() ),
            initialize: function()
            {
                this.model.on( "change", this.render, this );
                this.render();
            },
            events :
            {
                "click a": "linkClicked"
            },
            render: function()
            {
                this.$el.html( this.template( this.model.toJSON() ) );
                return this;
            },
            linkClicked : function( event )
            {
                var contactRef = this;
                this.$el
                    .append( "<input type='text' placeholder='Modifier la valeur du nom' value='"+ this.$el.children( "a" ).text().trim() +"' />" )
                    .children( "input" )
                        .focus()
                        .change
                        (
                            function()
                            {
                                var newcontact = $(this).val().split( " " );
                                // Vérification des données saisies
                                if( newcontact.length < 2 )
                                {
                                    contactRef.render();
                                    return;
                                }
                                // Modification des valeurs du Model associé
                                contactRef.model.set
                                (
                                    {
                                        "prenom" : newcontact[ 0 ],
                                        "nom"    : newcontact[ 1 ]
                                    }
                                );
                            }
                        )
                        .end()
                    .children( "a" )
                        .hide( "slow" );
                return false;
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
                this.collection.on( "reset", this.initContacts, this );
                this.collection.on( "add", this.addContact, this );
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