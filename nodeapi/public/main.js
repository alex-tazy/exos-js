/**
  * Created with IntelliJ IDEA.
 * User: mediabox-2012-formateur
 * Date: 31/10/12
 * Time: 14:04
 * To change this template use File | Settings | File Templates.
 */
var mb = mb || {};

(function( $, mb )
{
    var router;

    // Hijax all links to use pushstate
    $(document).on
    (
        "click", "a", function (event)
        {
            var href = $(event.currentTarget).attr('href');


            // Remove leading slashes and hash bangs (backward compatablility)
            var url = href.replace(/^\//, '').replace('\#\!\/', '')

            // Instruct Backbone to trigger routing events
            router.navigate(url, { trigger: true });

            // Allow shift+click for new tabs, etc.
            if ( !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
                event.preventDefault();
                return false;
            }
        }
    );

    /**
     * Document ready event
     * alias de $(document).ready( function(){} );
     */
    $( function ()
    {
        var contactsCollection = new mb.models.ContactsCollection()
            ,contactListView
            ,contactForm;

        // Load external templates
        templateLoader.loadTemplates
        (
            "/tpl/"
            ,[
                "contact-template",
                "contact-form"
            ]
        )
        .done
        (
            function()
            {
                // Rappatriement des données du serveur
                contactsCollection.fetch
                (
                    {
                        success : function( )
                        {
                            // Annule le message de chargement
                            $( "#loading").remove();

                            router = new Backbone.Router
                            (
                                {
                                    routes :
                                    {
                                        "" : "main"
                                        ,"contact/:id" : "contact"
                                    }

                                }
                            );

                            // Gestionnaires d'événements des routes
                            router.on
                            (
                                "route:main", function()
                                {
                                    if( ! contactListView )
                                    {
                                        // Renseigne les éléments de la liste
                                        contactListView = new mb.views.ContactListView( { el: "#contact_list", collection:contactsCollection } );
                                    } else
                                    {
                                        contactListView.$el.show( "slow" );
                                    }

                                    if( contactForm )
                                    {
                                        contactForm.$el.hide
                                        (
                                            "slow", function()
                                            {
                                                contactForm.dispose();
                                                contactForm = null;
                                            }
                                        );
                                    }
                                }
                            );

                            /**
                             * Route directe vers l'affichage d'un contact
                             */
                            router.on
                            (
                                "route:contact", function( id )
                                {
                                    // Hide main HIM
                                    if( contactListView )
                                    {
                                        contactListView.$el.hide( "slow" );
                                    }
                                    if( ! contactForm )
                                    {
                                        contactForm = new mb.views.ContactFormView( { model : contactsCollection.get( id ), router : router } );
                                        contactForm.$el
                                            .hide()
                                            .show( "slow" );
                                    }
                                }
                            );

                            // Activation de l'écoute des URLs
                            Backbone.history.start( { pushState : true } );
                        }
                    }
                );
            }

        );

        $( "body" ).append( "<h1 id='loading'>Merci de patienter pendant le chargement des données</h1>" );

    });
})( jQuery, mb );