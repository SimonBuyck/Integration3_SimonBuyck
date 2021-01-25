<?php

require_once(__DIR__ . '/DAO.php');

class ShopDAO extends DAO {

  public function selectById($id)
  {
    $sql = "SELECT * FROM `shop_items` WHERE `id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }


  public function selectOrderById($id){
    $sql = "SELECT * FROM `orders` WHERE `id` = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function insertOrder($data)
  {
    $errors = $this->validate($data);
    if (empty($errors)) {
      $sql = "INSERT INTO `orders` (`city`,`street`,`house_number`,`extra_adresrule`,`gender`,`firstname`,`lastname`, `pay_method`,`card_number`, `expiration_date`,`name_on_card`,`order_id`) VALUES (:city, :street,:house_number,:extra_adresrule,:gender,:firstname,:lastname, :pay_method,:card_number, :expiration_date,:name_on_card,:order_id)";
      $stmt = $this->pdo->prepare($sql);
      $stmt->bindValue(':city', $data['city']);
      $stmt->bindValue(':street', $data['street']);
      $stmt->bindValue(':house_number', $data['house_number']);
      if(!empty($data['extra_adresrule'])){
        $stmt->bindValue(':extra_adresrule', $data['extra_adresrule']);
      } else {
        $stmt->bindValue(':extra_adresrule', '-');
      }
      $stmt->bindValue(':gender', $data['gender']);
      $stmt->bindValue(':firstname', $data['firstname']);
      $stmt->bindValue(':lastname', $data['lastname']);
      $stmt->bindValue(':pay_method', $data['pay_method']);
      if($data['pay_method'] == 'bancontact'){
        $stmt->bindValue(':card_number', $data['card_number']);
        $stmt->bindValue(':expiration_date', $data['expiration_date']);
        $stmt->bindValue(':name_on_card', $data['name_on_card']);
      } else {
        $stmt->bindValue(':card_number', 0);
        $stmt->bindValue(':expiration_date', '-');
        $stmt->bindValue(':name_on_card', '-');
      }
      $stmt->bindValue(':order_id', $data['order_id']);
      if($stmt->execute()){
        return $this->selectOrderById($this->pdo->lastInsertId());
      }
    }
    return false;
  }

  public function validate($data)
  {
    $errors = [];
    if (empty($data['city'])) {
      $errors['city'] = 'Gelieve een gemeente in te geven';
    }
    if (empty($data['street'])) {
      $errors['street'] = 'Gelieve een straat in te geven';
    }
    if (empty($data['house_number'])) {
      $errors['house_number'] = 'Gelieve een huisnummer in te geven';
    }
    if (empty($data['gender'])) {
      $errors['gender'] = 'Gelieve een aanhef te kiezen';
    }
    if (empty($data['firstname'])) {
      $errors['firstname'] = 'Gelieve een voornaam in te geven';
    }
    if (empty($data['lastname'])) {
      $errors['lastname'] = 'Gelieve een achternaam in te geven';
    }
    if (empty($data['pay_method'])) {
      $errors['pay_method'] = 'Gelieve een betaalmethode te kiezen';
    } else if ($data['pay_method'] == 'bancontact') {
      if (empty($data['card_number'])) {
        $errors['card_number'] = 'Gelieve een kaartnummer in te geven';
      }
      if (empty($data['expiration_date'])) {
        $errors['expiration_date'] = 'Gelieve een vervaldatum in te geven';
      }
      if (empty($data['name_on_card'])) {
        $errors['name_on_card'] = 'Gelieve een naam in te geven';
      }
    }

    return $errors;
  }
}
