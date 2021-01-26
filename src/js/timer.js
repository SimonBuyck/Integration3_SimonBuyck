{
  const startTimer = () => {
    function getTimeRemaining(endtime) {
      const t = endtime - new Date().getTime();
      const minutes = Math.floor((t / 1000 / 60) % 60);
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
      };
    }

    function initializeClock(endtime) {
      const daysSpan = document.getElementById('days');
      const hoursSpan = document.getElementById('hours');
      const minutesSpan = document.getElementById('minutes');

      if (daysSpan || hoursSpan || minutesSpan) {
        const updateClock = () => {
          const t = getTimeRemaining(endtime);

          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        };

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
    }

    const deadline = Date.parse('April 30, 2021');
    initializeClock(deadline);
  };

  const init = () => {
    startTimer();

    const scrEl = document.getElementById('scr-el');
    if (scrEl) {
      scrEl.addEventListener('scroll', () => {
        const scrolled =
          (scrEl.scrollLeft / (scrEl.scrollWidth - scrEl.clientWidth)) * 100;
        document.getElementById('myBar').style.width = scrolled + '%';
      });
    }
  };

  init();
}
