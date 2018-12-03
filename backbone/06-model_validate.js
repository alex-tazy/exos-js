Person = Backbone.Model.extend
( {
	defaults  :
	{
	  name: 'Foetus',
	  age : 0
	},
	initialize: function ()
	{
	  console.log( "Bienvenue" );
	  // Evénement
	  this.on( "change:name", function ( model )
	  {
		  var name = model.get( "name" );
		  console.log( "My name is " + name );
	  } );
	},
	validate : function( attribut )
	{
		if( attribut.name == "Mickael Jackon" )
		{
			console.log( "Beat it !" );
			return "Nom invalide";
		}
	}
  } );

var person = new Person( { name: "Eric", age: 40 } );
person.set( { name: 'James… James Bond !'} );
person.set( { name: 'Mickael Jackon !'} );
