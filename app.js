window.onscroll = function () {
  const button = document.getElementById("top");
  const nav = document.querySelector("nav");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.display = "block";
    nav.classList.add("hide");
  } else {
    button.style.display = "none";
    nav.classList.remove("hide");

  }
};
function irArriba() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
