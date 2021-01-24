<?php

require_once __DIR__ . '/Controller.php';

class HomeController extends Controller
{
  public function index()
  {
    $this->set('title', 'Home');
  }

  public function overzicht()
  {
    $this->set('title', 'Tutorials');
  }
}
