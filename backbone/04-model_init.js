Person = Backbone.Model.extend
( {
	initialize: function ()
	{
		console.log( "Bienvenue" );
	}
} );

var person = new Person();
