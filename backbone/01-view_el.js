<div id="search_container"></div>

SearchView = Backbone.View.extend
( {
	  // Construtor-like
	  initialize: function ()
	  {
		  console.log( "View !" );
	  }
} );

var search_view = new SearchView( { el: $("#search_container") } );