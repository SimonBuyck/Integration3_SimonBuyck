<main class="navigation">
  <h2 class="title">navigeren</h2>
  <p>Je kan natuurlijk niet navigeren met vuile handen!</p>
  <ul class="navigation__items">
    <li class="navigation__item">
      <img src="./assets/img/both_hands.png" alt="beide handjes in de lucht" sizes="409px" srcset="
              ./assets/img/both_hands@0.5x.png  204w,
              ./assets/img/both_hands@2x.png    816w,
              ./assets/img/both_hands@0.5x.png 1223w
            " />
      <h2 class="subtitle">Klikken</h2>
      <p>Steek je beide handen omhoog om te klikken.</p>
    </li>
    <li class="navigation__item">
      <img src="./assets/img/both_hands.png" alt="beide handjes in de lucht" sizes="409px" srcset="
              ./assets/img/both_hands@0.5x.png  204w,
              ./assets/img/both_hands@2x.png    816w,
              ./assets/img/both_hands@0.5x.png 1223w
            " />
      <h2 class="subtitle">Vooruit scrollen</h2>
      <p>Steek je rechterhand omhoog om verder te scrollen.</p>
    </li>
    <li class="navigation__item">
      <img src="./assets/img/both_hands.png" alt="beide handjes in de lucht" sizes="409px" srcset="
              ./assets/img/both_hands@0.5x.png  204w,
              ./assets/img/both_hands@2x.png    816w,
              ./assets/img/both_hands@0.5x.png 1223w
            " />
      <h2 class="subtitle">Terug scrollen</h2>
      <p>Steek je linkerhand omhoog om terug te scrollen.</p>
    </li>
  </ul>
  <p class="button">
    <a class="button__link" href=<?php if($_GET['id'] == 1) {
                                    echo 'index.php?page=tutorial_slede&id=1';
                                  } else if ($_GET['id'] == 2) {
                                    echo 'index.php?page=tutorial_harnas&id=2';
                                  } else {
                                    echo 'index.php?page=tutorial_slede&id=3';
                                  } ?>>Ik begrijp het</a>
  </p>
</main>
