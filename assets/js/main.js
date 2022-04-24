let lis = document.querySelectorAll("header div:not(.mobile-links) .links li");

lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

let mobileLinks = document.querySelector("header .mobile-links");
let mobLis = document.querySelectorAll("header .mobile-links .links li");
let free = document.querySelector("header .mobile-links > a");
let open = document.querySelector("header .bars");
let close = document.querySelector("header .mobile-links .close");

open.addEventListener("click", function () {
  mobileLinks.classList.add("open");
});
close.addEventListener("click", function () {
  mobileLinks.classList.remove("open");
});
mobLis.forEach((li) => {
  li.addEventListener("click", function (e) {
    mobLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    mobileLinks.classList.remove("open");
  });
});
free.addEventListener("click", function () {
  mobileLinks.classList.remove("open");
});

let btn = document.querySelector(".top");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
