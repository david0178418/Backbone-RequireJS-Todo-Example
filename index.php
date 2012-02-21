<?php

require 'libs/php/Slim/Slim.php';

$app = new Slim(array(
	'templates.path' => 'src/php/views'
));

$app->get('/', function() use($app) {
	$app->render('main.php');
});

$app->get('/todos', function() use($app) {
    $data = array(
		array(
			"label" => "Task 1",
			"order" => 1,
			"completed" => false
		),
		array(
			"label" => "Task 3",
			"order" => 3,
			"completed" => true
		),
		array(
			"label" => "Task 2",
			"order" => 2,
			"completed" => false
		)
    );

	$response = $app->response();
    $response->header('Cache-Control', 'no-cache, must-revalidate');
    $response->header('Expires', 'Mon, 26 Jul 1997 05:00:00 GMT');
    $response->header('Content-type', 'application/json');

    echo json_encode($data);
});

$app->run();