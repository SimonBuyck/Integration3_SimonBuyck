import "./style.css";

import "./js/gsap";
import "./js/KNN";

{
  const init = () => {
    startTimer();

    let scrEl = document.getElementById("scr-el");
    scrEl.addEventListener("scroll", (event) => {
      let scrolled =
        (scrEl.scrollLeft / (scrEl.scrollWidth - scrEl.clientWidth)) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    });
  };

  const startTimer = () => {
    function getTimeRemaining(endtime) {
      var t = endtime - new Date().getTime();
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
      };
    }

    function initializeClock(endtime) {
      var daysSpan = document.querySelector(".days");
      var hoursSpan = document.querySelector(".hours");
      var minutesSpan = document.querySelector(".minutes");

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = Date.parse("April 30, 2021");
    initializeClock(deadline);
  };

  init();
}
