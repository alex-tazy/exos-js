<?php
/**
 * Step 1: Require the Slim Framework
 *
 * If you are not using Composer, you need to require the
 * Slim Framework and register its PSR-0 autoloader.
 *
 * If you are using Composer, you can skip this step.
 */
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

/**
 * Step 2: Instantiate a Slim application
 *
 * This example instantiates a Slim application using
 * its default settings. However, you will usually configure
 * your Slim application now by passing an associative array
 * of setting names and values into the application constructor.
 */
$app = new \Slim\Slim();

/**
 * Step 3: Define the Slim application routes
 *
 * Here we define several Slim application routes that respond
 * to appropriate HTTP request methods. In this example, the second
 * argument for `Slim::get`, `Slim::post`, `Slim::put`, and `Slim::delete`
 * is an anonymous function.
 */

$app->map('/:x+', function () 
{
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    //header('Access-Control-Allow-Credentials: true');
    //header('Access-Control-Max-Age: 86400');
    //header('Access-Control-Allow-Headers: X-Requested-With');

	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

    //if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    //    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
})->via('OPTIONS');

// GET route
$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

// POST route
$app->post('/user', function () 
{	
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");

	$json = array("id" => 1);	
	echo json_encode($json);
});

// PUT route
$app->put('/put', function () {
    echo 'update user';
});

// DELETE route
$app->delete('/delete', function () {
    echo 'delete user';
});

/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
