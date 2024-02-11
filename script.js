document.querySelector("body").onscroll = function () {
  if (window.scrollY >= 800) {
    document.getElementById("backTotop").style.visibility = "visible";
  } else {
    document.getElementById("backTotop").style.visibility = "hidden";
  }
};

let menuList = document.querySelector(".navlist");
let toggle = document.querySelector(".toggle");

document.querySelector(".menu-bar").addEventListener("click", () => {
  menuList.classList.toggle("toggle");
});
