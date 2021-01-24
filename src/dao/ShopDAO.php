<?php

require_once(__DIR__ . '/DAO.php');

class ShopDAO extends DAO
{

  public function selectById($id)
  {
    $sql = "SELECT * FROM `shop_items` WHERE `id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function insertQuote($data)
  {
    $errors = $this->validate($data);
    if (empty($errors)) {
      $sql = "INSERT INTO `quotes` (`episode_id`,`quote`,`author`) VALUES(:episode_id,:quote,:author)";
      $stmt = $this->pdo->prepare($sql);
      $stmt->bindValue(':episode_id', $data['episode_id']);
      $stmt->bindValue(':quote', $data['quote']);
      $stmt->bindValue(':author', $data['author']);
      if ($stmt->execute()) {
        return $this->selectQuoteById($this->pdo->lastInsertId());
      }
    }
    return false;
  }

  public function validate($data)
  {
    $errors = [];
    if (empty($data['quote'])) {
      $errors['quote'] = 'Gelieve een quote in te geven';
    }
    if (empty($data['author'])) {
      $errors['author'] = 'Gelieve een auteur in te geven';
    }
    return $errors;
  }
}
