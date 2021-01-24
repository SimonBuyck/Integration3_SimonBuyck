<?php

require_once __DIR__ . '/Controller.php';

require_once __DIR__ . '/../dao/ShopDAO.php';

class ShopController extends Controller
{
  function __construct()
  {
    $this->shopDAO = new ShopDAO();
  }

  public function shop()
  {
    $this->set('title', 'shop');
  }

  public function detail()
  {
    if (!empty($_GET['id'])) {
      $item = $this->shopDAO->selectById($_GET['id']);
    }

    if (empty($item)) {
      $_SESSION['error'] = 'Het shop item werd niet gevonden';
      header('Location:index.php?page=shop');
      exit();
    }

    // // in het geval van een POST request uit JavaScript
    // $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    // if ($contentType === "application/json") {
    //   // data ophalen via php://input (is nu éénmaal zo voor formdata)
    //   $content = trim(file_get_contents("php://input"));
    //   $data = json_decode($content, true); // JSON omzetten naar assoc array

    //   // ter controle van wat je binnen haalt
    //   //var_dump($data);

    //   // toevoegen van een quote in de database en geef een error terug in geval van fout
    //   $insertedQuote = $this->quoteDAO->insertQuote($data);
    //   if (!$insertedQuote) {
    //     $errors = $this->quoteDAO->validate($data);
    //     $errors['error'] = "Er zijn fouten opgetreden";
    //     //$this->set('errors',$errors);
    //     echo json_encode($errors);
    //   } else {
    //     // geef alle quotes uit de database terug indien gelukt
    //     $quotes = $this->quoteDAO->selectQuotesByEpisode($data['episode_id']);
    //     echo json_encode($quotes);
    //   }
    //   // stop met PHP uit te voeren, JavaScript mag overnemen
    //   exit();
    // }

    // // dit gedeelte wordt dus enkel uitgevoerd indien JavaScript niet beschikbaar was
    // if (!empty($_POST['action'])) {
    //   if ($_POST['action'] == 'insertQuote') {
    //     $insertedQuote = $this->quoteDAO->insertQuote($_POST);
    //     if (!$insertedQuote) {
    //       $errors = $this->quoteDAO->validate($_POST);
    //       $this->set('errors', $errors);
    //     } else {
    //       $_SESSION['info'] = 'Bedankt voor je quote';
    //       header('Location:index.php?page=detail&id=' . $_GET['id']);
    //       exit();
    //     }
    //   }


    $this->set('item', $item);
    $this->set('title', 'Detail');
  }

  public function confirm()
  {
    $this->set('title', 'confirm');
  }
}
