var AppRouter = Backbone.Router.extend
({
   routes:
   {
	   "": "defaultRoute" // http://example.com/#tout
   }
});
// Initiate the router
var app_router = new AppRouter();

app_router.on
(
		'route:defaultRoute', function( actions )
		{
			console.log(actions);
		}
);

// Démarre l'historique Backbone, nécéssaire à des URLs représentant l'état de l'application
Backbone.history.start();