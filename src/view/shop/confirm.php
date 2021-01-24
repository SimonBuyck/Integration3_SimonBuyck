<main class="order">
  <form class="order__grid" action="order" method="post">
    <div class="order__adres">
      <h2 class="title">bezorgadres</h2>
      <label for="city">
        Postcode of gemeente<span class="error"></span> </label><input type="text" name="city" id="city" placeholder="somewhere 9999" required />
      <label for="street"> Straatnaam<span class="error"></span> </label><input type="text" name="street" id="street" placeholder="somewherestreet" required />
      <label for="house_number">
        Huisnummer<span class="error"></span> </label><input type="number" name="house_number" id="house_number" placeholder="123" required />
      <label for="extra_adres">
        Extra adresregel (optioneel)<span class="error"></span> </label><input type="text" name="extra_adres" id="extra_adres" placeholder="4A" />
      <div class="gender">
        <p>Aanhef</p>
        <div class="gender__inputs">
          <div class="radioBtn__grid">
            <input class="radio__input" type="radio" name="gender" id="female" value="female" />
            <label for="female"> Mevrouw </label>
          </div>
          <div class="radioBtn__grid">
            <input class="radio__input" type="radio" name="gender" id="male" value="male" />
            <label for="male"> De Heer </label>
          </div>
          <div class="radioBtn__grid">
            <input class="radio__input" type="radio" name="gender" id="x" value="x" />
            <label for="x"> X </label>
          </div>
        </div>
      </div>
      <label for="firstname"> Voornaam<span class="error">dsdsqsfsdfsdf</span> </label><input type="text" name="firstname" id="firstname" placeholder="john" required />
      <label for="lastname"> Achternaam<span class="error"></span> </label>
      <input type="text" name="lastname" id="lastname" placeholder="john" required />
    </div>
    <div class="order__payment">
      <h2 class="title">betaalMethode</h2>
      <div class="radioBtn__grid">
        <input class="bancontact radio__input" type="radio" name="betalen" id="bancontact" value="bancontact" />
        <label for="bancontact"> bancontact </label>
        <div class="bancontact__info">
          <label for="kaartnummer">
            Kaartnummer<span class="error"></span> </label><input type="text" name="kaartnummer" id="kaartnummer" placeholder="1234 1234 1234 1234 1" />
          <label for="vervaldatum">
            vervaldatum<span class="error"></span>
          </label>
          <input type="text" name="vervaldatum" id="vervaldatum" placeholder="12/25" required />
          <label for="naam__kaart">
            Naam op de kaart<span class="error">dit is een error</span>
          </label>
          <input type="text" name="naam__kaart" id="naam__kaart" placeholder="johnDoe" />
        </div>
      </div>
      <div class="radioBtn__grid">
        <input class="radio__input" type="radio" name="betalen" id="achteraf" value="achteraf" />
        <label for="achteraf"> achteraf betalen </label>
      </div>
    </div>
    <div class="order__overview">
      <h2 class="title">overzicht</h2>
      <div class="order__items">
        <div class="order__item order__item__price">
          <p>slede & harnas pakket</p>
          <p class="order__price">€ 25,99</p>
          <button href="#" class="button no__style">
            <p class="button__link">verwijderen</p>
          </button>
        </div>
        <div class="order__item">
          <p>verzendingskosten</p>
          <p>Gratis</p>
        </div>
        <div class="order__item order__item__total">
          <p>nog te betalen:</p>
          <p>€ 25,99</p>
        </div>
      </div>
    </div>
    <button href="#" class="no__style button order__submit" type="submit">
      <p class="button__link">bestelling afronden</p>
    </button>
  </form>
</main>
