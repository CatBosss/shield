<?php

use Illuminate\Routing\Router;

Route::group([
    'prefix' => 'Api',
    'namespace' => 'App\\Api\\Controllers',
//    'middleware' => 'verifySign'
], function (Router $router) {
    $router->post('Home/index', 'HomeController@index')->name('home.index');
    $router->post('Home/lists', 'HomeController@lists')->name('home.lists');
});
