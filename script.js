let prevPos = window.scrollY;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  let currentPos = window.scrollY;

  if (prevPos < currentPos) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  prevPos = currentPos;
});
function setFavicon(url) {
  let link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon";
  link.href = url;
  document.head.appendChild(link);
}

setFavicon("../Assets/logo.png");