<?php
session_start();
ini_set('display_errors', true);
error_reporting(E_ALL);

// basic .env file parsing
if (file_exists("../.env")) {
  $variables = parse_ini_file("../.env", true);
  foreach ($variables as $key => $value) {
     putenv("$key=$value");
  }
}

$routes = array(
  'home' => array(
    'controller' => 'Home',
    'action' => 'index'
  ),
  'overzicht' => array(
    'controller' => 'Home',
    'action' => 'overzicht'
  ),
  'shop' => array(
    'controller' => 'Shop',
    'action' => 'shop'
  ),
  'detail' => array(
    'controller' => 'Shop',
    'action' => 'detail'
  ),
  'confirm' => array(
    'controller' => 'Shop',
    'action' => 'confirm'
  ),
  'navigation' => array(
    'controller' => 'Tutorial',
    'action' => 'navigation'
  ),
  'tutorial_slede' => array(
    'controller' => 'Tutorial',
    'action' => 'tutorial_slede'
  ),
  'tutorial_harnas' => array(
    'controller' => 'Tutorial',
    'action' => 'tutorial_harnas'
  )
);

if(empty($_GET['page'])) {
  $_GET['page'] = 'home';
}
if(empty($routes[$_GET['page']])) {
  header('Location: index.php');
  exit();
}

$route = $routes[$_GET['page']];
$controllerName = $route['controller'] . 'Controller';

require_once __DIR__ . '/controller/' . $controllerName . ".php";

$controllerObj = new $controllerName();
$controllerObj->route = $route;
$controllerObj->filter();
$controllerObj->render();
