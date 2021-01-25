<main class="detail">
  <div class="detail__grid">
    <img class="detail__img" src="./assets/img/slede_top_1.png" alt="slede" sizes="251px" srcset="
              ./assets/img/slede_top_1@0.5x.png 126w,
              ./assets/img/slede_top_1@2x.png   502w,
              ./assets/img/slede_top_1@3x.png   753w
            " />
    <div class="detail__title">
      <h2 class="title"><?php echo $item['name']; ?> - pakket</h2>
      <p class="title price">€ <?php echo $item['price']; ?>,99</p>
    </div>
    <p class="button">
      <a class="button__link" href="index.php?page=confirm&tutorial=<?php echo $item['tutorial']; ?>&id=<?php echo $item['id']; ?>">Pakket kopen</a>
    </p>
    <ul class="detail__contents body">
      <li class="detail__content__title">Inhoud</li>
      <li>
        <ul class=<?php if ($item['id'] == '2') {
                    echo 'hide';
                  } ?>>
          <li class="detail__content">- hout</li>
          <li class="detail__content">
            <ul class="detail__content__hout">
              <li>- 4x houten platen: 1000mm x 250mm x 18mm</li>
              <li>- 6x houten platen: 300 mm x 230mm x 18mm</li>
              <li>- 2x huoten stokken: 1050mm x 36mm x 18mm</li>
              <li>- 3x houten stokken: 1050mm x 36mm x 18mm</li>
            </ul>
          </li>
          <li class="detail__content">- houtlijm</li>
          <li class="detail__content">- schuurpapier</li>
          <li class="detail__content">- 18x deuvels</li>
          <li class="detail__content">- 3x deuvel pinnen</li>
          <li class="detail__content">- vijzen</li>
        </ul>
        <ul class=<?php if ($item['id'] == '1') {
                    echo 'hide';
                  } ?>>
          <li class="detail__content">- leer</li>
          <li class="detail__content">- secondelijm</li>
          <li class="detail__content">- schuurpapier</li>
        </ul>
      </li>
    </ul>
  </div>
</main>
