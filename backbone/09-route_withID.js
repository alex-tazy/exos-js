<a href="#/posts/12" accesskey="">12ème post</a>

<script>
var AppRouter = Backbone.Router.extend
({
		routes:
		{
			"posts/:id": "getPost",
			"*actions": "defaultRoute"
		}
});


var app_router = new AppRouter();
app_router.on
(
	'route:getPost', function ( id )
	{

		console.log( "ID " + id );
	}
);

app_router.on
(
	'route:defaultRoute', function (actions)
	{
		console.log( actions );
	}
);

Backbone.history.start();

</script>