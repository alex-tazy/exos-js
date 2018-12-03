var UserModel = Backbone.Model.extend
( {
	  urlRoot : '/user.php',
	  defaults: {
		  name : '',
		  email: ''
	  }
} );


var user = new UserModel();
// No id
var userDetails =
{
	name : 'Eric',
	email: 'eric.priou@mediabox.fr'
};
// Puisqu'il n'y a pas d'id défini,
// une requête POST avec les paramètres
// {name:'Eric', email: 'eric.priou@mediabox.fr'}
// Le serveur doit avoir la bonne donnée et retourner un id
user.save
(
    userDetails,
	{
		success: function ( user )
		{
			console.log( user.toJSON() );
		}
    }
);