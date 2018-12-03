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
    /**
     * Document ready event
     * alias de $(document).ready( function(){} );
     */
    $( function ()
    {
        var contactsCollection = new mb.models.ContactsCollection();

        // Renseigne les éléments de la liste
        var contactListView = new mb.views.ContactListView( { el: "#contact_list", collection:contactsCollection } );

        // Rappatriement des données du serveur
        contactsCollection.fetch
        (
            {
                success : function( )
                {
                    // Annule le message de chargement
                    $( "#loading").remove();
                }
            }
        );

        $( "body" ).append( "<h1 id='loading'>Merci de patienter pendant le chargement des données</h1>" );
    });
})( jQuery, mb );