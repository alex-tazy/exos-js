// Namespace de l'application
var mb = mb || {};

( function( $, mb )
{
    // Namespace des modèles
    mb.models = mb.models || {};
    // Données et models
    /* Contact { id:1, nom:"ALLIOD", prenom:"Sebastien" }  */
    mb.models.ContactModel = Backbone.Model.extend
    (
        {
            defaults :
            {
                nom: "",
                prenom: ""
            }
        }
    );
    /* ContactCollection [ new Contact(), new Contact() ]  */
    mb.models.ContactsCollection = Backbone.Collection.extend
    (
        {
            model   : mb.models.ContactModel,
            url     : "api/getContacts.php"
        }
    );
} )( jQuery, mb );

