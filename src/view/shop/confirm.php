<main class="order">
  <form class="order__grid" action="index.php?page=confirm&id=<?php echo $_GET['id'] ?>" method="post">
    <input type="text" name="order_id" id="order_id" value=<?php echo $_GET['id'] ?> hidden />
    <input type="hidden" name="action" value="insirtOrder">
    <div class="order__adres">
      <h2 class="title">bezorgadres</h2>
      <label for="city">
        Postcode of gemeente<span class="error"><?php if (!empty($errors['city'])) {
                                                  echo $errors['city'];
                                                } ?></span><input class="input" type="text" name="city" id="city" placeholder="somewhere 9999" required /> </label>
      <label for="street"> Straatnaam<span class="error"><?php if (!empty($errors['street'])) {
                                                            echo $errors['street'];
                                                          } ?></span><input class="input" type="text" name="street" id="street" placeholder="somewherestreet" required /></label>
      <label for="house_number">
        Huisnummer<span class="error"><?php if (!empty($errors['house_number'])) {
                                        echo $errors['house_number'];
                                      } ?></span><input class="input" type="text" name="house_number" id="house_number" placeholder="123" required /></label>
      <label for="extra_adres">
        Extra adresregel (optioneel)<span class="error"></span><input type="text" name="extra_adres" id="extra_adres" placeholder="4A" /></label>
      <div class="gender">
        <p>Aanhef </p>
        <div class="gender__inputs">
          <span class="error"><?php if (!empty($errors['gender'])) {
                                echo $errors['gender'];
                              } ?></span>
          <input class="input radio__input" type="radio" name="gender" id="female" value="1" required />
          <label for="female"> Mevrouw </label>
          <input class="input radio__input" type="radio" name="gender" id="male" value="2" required />
          <label for="male"> De Heer </label>
          <input class="input radio__input" type="radio" name="gender" id="x" value="3" required />
          <label for="x"> X </label>
        </div>
      </div>
      <label for="firstname"> Voornaam<span class="error"><?php if (!empty($errors['firstname'])) {
                                                            echo $errors['firstname'];
                                                          } ?></span><input class="input" type="text" name="firstname" id="firstname" placeholder="john" required /> </label>
      <label for="lastname"> Achternaam<span class="error"><?php if (!empty($errors['lastname'])) {
                                                              echo $errors['lastname'];
                                                            } ?></span><input class="input" type="text" name="lastname" id="lastname" placeholder="john" required /></label>

    </div>
    <div class="order__payment">
      <h2 class="title">betaalMethode</h2>
      <span class="error"><?php if (!empty($errors['lastname'])) {
                            echo $errors['lastname'];
                          } ?></span>
      <div class="radioBtn__grid">
        <input class="bancontact radio__input" type="radio" name="pay_method" id="bancontact" value="bancontact" required />
        <label for="bancontact"> bancontact </label>
        <div class="bancontact__info">
          <label for="kaartnummer">
            Kaartnummer<span class="error"><?php if (!empty($errors['card_number'])) {
                                              echo $errors['card_number'];
                                            } ?></span>
          </label>
          <input class="input" type="text" name="kaartnummer" id="kaartnummer" placeholder="1234 1234 1234 1234 1" />
          <label for="vervaldatum">
            vervaldatum<span class="error"><?php if (!empty($errors['expiration_date'])) {
                                              echo $errors['expiration_date'];
                                            } ?></span>
          </label>
          <input class="input" type="text" name="vervaldatum" id="vervaldatum" placeholder="12/25" />
          <label for="naam__kaart">
            Naam op de kaart<span class="error"><?php if (!empty($errors['name_on_card'])) {
                                                  echo $errors['name_on_card'];
                                                } ?></span><input class="input" type="text" name="naam__kaart" id="naam__kaart" placeholder="johnDoe" />
          </label>

        </div>
      </div>
      <div class="radioBtn__grid">
        <input class="radio__input" type="radio" name="pay_method" id="pay_later" value="pay_later" required />
        <label for="pay_later"> achteraf betalen </label>
      </div>
    </div>
    <div class="order__overview">
      <h2 class="title">overzicht</h2>
      <div class="order__items">
        <div class="order__item order__item__price">
          <p><?php echo $item['name'] ?>- pakket</p>
          <p class="order__price">€ <?php echo $item['price']; ?>,99</p>
          <a href="index.php?page=shop" class="secondairy__button">
            <p class="button__link">verwijderen</p>
          </a>
        </div>
        <div class="order__item">
          <p>verzendingskosten</p>
          <p>Gratis</p>
        </div>
        <div class="order__item order__item__total">
          <p>nog te betalen:</p>
          <p>€ <?php echo $item['price']; ?>,99</p>
        </div>
      </div>
    </div>
    <button href="#" class="no__style button order__submit" type="submit">
      <p class="button__link">bestelling afronden</p>
    </button>
  </form>
</main>
