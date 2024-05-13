document.addEventListener("DOMContentLoaded", function() {
  const buttomDown = document.querySelector("#buttom-down");

  buttomDown.addEventListener("click", () => {
    window.scroll({ top:700, behavior: "smooth" });
    buttomDown.style.display = "none";
  });

  const buttomUp = document.querySelector("#buttom-up");

  buttomUp.addEventListener("click", () => {
    window.scroll({ top: 0, behavior: "smooth" });
  });
});