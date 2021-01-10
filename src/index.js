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
  };

  init();
}
