<?php

require_once __DIR__ . '/Controller.php';

class TutorialController extends Controller
{

  public function navigation()
  {
    $this->set('title', 'navigation');
  }

  public function tutorial_slede()
  {
    $this->set('title', 'slede');
  }

  public function tutorial_harnas()
  {
    $this->set('title', 'harnas');
  }
}
