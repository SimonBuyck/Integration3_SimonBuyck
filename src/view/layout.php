<!DOCTYPE html>
<html lang="nl-BE">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <meta name="description" content="Maker faire Gent maar dan bij jou thuis!">

  <title>Maker Faire Gent - <?php echo $title; ?></title>
  <?php echo $css; ?>
</head>

<body>
  <header class="header<?php echo $title == 'slede' || $title == 'harnas' ? ' header__absolute' : '' ?>">
    <div class="header__wrapper">
      <a class="header__title__link" href="index.php">
        <img src="./assets/img/logo.png" alt="Maker fair Gent logo " width="40" height="40" />
        <h1 class="header__title">
          APRIL, 1 & 2 MEI 2021 • CHINASTRAAT GENT
        </h1>
      </a>
      <nav class="nav">
        <p class="nav__item">
          <a href="index.php" class="nav__link">home</a>
        </p>
        <p class="nav__item">
          <a href="index.php?page=overzicht" class="nav__link">tutorial</a>
        </p>
        <p class="nav__item">
          <a href="https://www.makerfairegent.be/" class="nav__link">maker fair</a>
        </p>
      </nav>
    </div>
  </header>
  <?php echo $content; ?>
  <footer class="footer">
    <div class="footer__wrapper">
      <ul class="footer__sponsors">
        <li class="sponsor__item">
          <a href="https://www.vlaanderen.be/">
            <img src="./assets/img/sponsors/flanders_state_of_the_art--logo.png" alt="Flanders state of the art" width="100" height="100" />
          </a>
        </li>
        <li class="sponsor__item">
          <a href="https://www.accentjobs.be/"><img src="./assets/img/sponsors/accent_logo.png" alt="Accent" width="100" height="100" /></a>
        </li>
        <li class="sponsor__item">
          <a href="https://stad.gent/"><img src="./assets/img/sponsors/gent_Logo.jpg" alt="Gent" width="100" height="100" /></a>
        </li>
        <li class="sponsor__item">
          <a href="https://www.detentzetter.be/"><img src="./assets/img/sponsors/tentzetter_logo.png" alt="Tentzetter" width="100" height="100" /></a>
        </li>
        <li class="sponsor__item">
          <a href="https://www.vellemanformakers.com/"><img src="./assets/img/sponsors/velleman_logo.png" alt="Velleman" width="100" height="100" /></a>
        </li>
        <li class="sponsor__item">
          <a href="https://www.ugent.be/"><img src="./assets/img/sponsors/uni_gent_logo.png" alt="Universiteit Gent" width="100" height="100" /></a>
        </li>
        <li class="sponsor__item">
          <a href="http://makezine.com/"><img src="./assets/img/sponsors/makeLogo_url.jpg" alt="Makezine.com" width="100" height="100" /></a>
        </li>
      </ul>
      <div class="footer__socials">
        <ul class="socials">
          <li>
            <a href="https://www.facebook.com/makerfairegent"><img src="./assets/img/facebook.png" alt="facebook maiker fair" width="40" height="40" /></a>
          </li>
          <li>
            <a href="https://www.twitter.com/makerfairegent"><img src="./assets/img/twitter.png" alt="twitter maiker fair" width="40" height="40" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/makerfairegent"><img src="./assets/img/instagram.png" alt="instagram maiker fair" width="40" height="40" /></a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/henkrijckaert"><img src="./assets/img/youtube.png" alt="youtube maiker fair" width="40" height="40" /></a>
          </li>
        </ul>
        <p>©2020 Make Community LLC. All rights reserved</p>
      </div>
    </div>
  </footer>
  <?php echo $js; ?>
</body>

</html>
