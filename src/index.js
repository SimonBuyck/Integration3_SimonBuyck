import "./style.css";

{
  const init = () => {
    document
      .getElementById("hamburger__nav")
      .addEventListener("click", function (e) {
        e.preventDefault();
        let navigation = document.getElementById("navigation");
        if (navigation.classList.contains("navigation--visible")) {
          navigation.classList.remove("navigation--visible");
        } else {
          navigation.classList.add("navigation--visible");
        }
      });
      startTimer();
  };

  const startTimer = () => {
        function getTimeRemaining(endtime) {
      var t = endtime - new Date().getTime();
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }

    function initializeClock(endtime) {
      var daysSpan = document.querySelector(".days");
      var hoursSpan = document.querySelector(".hours");
      var minutesSpan = document.querySelector(".minutes");
      var secondsSpan = document.querySelector(".seconds");

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

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
