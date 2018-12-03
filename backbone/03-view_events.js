<script type="text/template" id="search_template">
	<label>Recherche</label>
	<input type="text" id="search_input" />
	<input type="button" id="search_button" value="Search" />
</script>

<div id="search_container"></div>

<script>
SearchView = Backbone.View.extend
( {
	// Construtor-like
		initialize: function ()
		{
		console.log( "View !" );
		this.render();
		},
		render: function()
		{
			// Compile le template
				var template = _.template( $("#search_template").html(), {} );
			// Charge dans "el" via une objet jQuery mis en cache par Backbone
			this.$el.html( template );
		},
		events:
		{
				"click input[type=button]": "doSearch"
		},
		doSearch: function( event )
		{
			// Le bouton cliqué est référencé dans event.currentTarget
				console.log( "Recherche " + $( "#search_input" ).val() );
		}
} );

var search_view = new SearchView( { el: $("#search_container") } );
</script>