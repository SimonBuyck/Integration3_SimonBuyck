import lottie from 'lottie-web';

lottie.loadAnimation({
  container: document.getElementById('gear_left'), // Required
  path: './assets/lottie/TW_Links.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Tandwielen links', // Name for future reference. Optional.
});

lottie.loadAnimation({
  container: document.getElementById('gear_right'), // Required
  path: './assets/lottie/TW_Rechts.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'Tandwielen links', // Name for future reference. Optional.
});

lottie.loadAnimation({
  container: document.getElementById('gestures_click'), // Required
  path: './assets/lottie/gestures_Click.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'gestures_click', // Name for future reference. Optional.
});

lottie.loadAnimation({
  container: document.getElementById('gestures_left'), // Required
  path: './assets/lottie/gestures_Left.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'gestures_left', // Name for future reference. Optional.
});

lottie.loadAnimation({
  container: document.getElementById('gestures_right'), // Required
  path: './assets/lottie/gestures_Rechts.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: 'gesture rechts', // Name for future reference. Optional.
});
