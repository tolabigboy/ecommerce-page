"use strict";
const source = document.querySelectorAll("img[data-src]");
const windowWidth = window.innerWidth;
console.log(windowWidth);
let getLatestOpenImg;
source.forEach((imgs, index) => {
  getLatestOpenImg = index + 1;
  imgs.addEventListener("click", (e) => {
    // create body and window width-----------
    const newWindowImg = document.createElement("div");
    newWindowImg.setAttribute("class", "newImg");
    const body = document.body;
    body.appendChild(newWindowImg);
    let newIMgSrc = document.createElement("img");
    newIMgSrc.setAttribute("class", "newImg2");
    newIMgSrc.setAttribute("src", "" + e.target.dataset.src);
    newIMgSrc.setAttribute("id", "current-image");
    newWindowImg.appendChild(newIMgSrc);
    // section for next and prev btn------------------------
    newIMgSrc.addEventListener("load", () => {
      let nextBtn = document.createElement("button");
      let nextImg = document.createElement("img");
      nextImg.setAttribute("src", "/Images/icon-next.svg");
      nextBtn.setAttribute("class", "gallery-btn");
      nextBtn.appendChild(nextImg);
      newWindowImg.appendChild(nextBtn);
      nextBtn.addEventListener("click", () => {
        console.log("clicked");
        changingImg(1);
      });
      let prevBtn = document.createElement("button");
      let prevImg = document.createElement("img");
      prevBtn.setAttribute("class", "gallery-btn");
      prevBtn.appendChild(prevImg);
      prevImg.setAttribute("src", "/Images/icon-previous.svg");
      newWindowImg.appendChild(prevBtn);
      prevBtn.addEventListener("click", () => {
        console.log("clicked");
        changingImg(1);
      });
      prevBtn.setAttribute("id", "prev-btn");
      nextBtn.setAttribute("id", "next-btn");
      // --close icon section----------------------
      const close = document.createElement("div");
      const closeImg = document.createElement("img");
      closeImg.setAttribute("class", "imgClose");
      closeImg.setAttribute("src", "Images/icon-close.svg");
      close.appendChild(closeImg);
      newWindowImg.appendChild(close);
      // click closing button--------------------------
      const closeBtn = document.querySelector(".imgClose");
      closeBtn.addEventListener("click", closeClose);
      // slide change and indexes------------------
    });
  });
});
// click closing effect---------------
const closeClose = function () {
  document.querySelector(".newImg").remove();
};

const changingImg = function (changeDir) {
  document.querySelector("#current-image").remove();
  const getImgWindow = document.querySelector(".newImg");
  const newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);
  let calcNewImage;
  if (changeDir === 1) {
    calcNewImage = getLatestOpenImg + 1;
    if (calcNewImage > source.length) {
      calcNewImage = 1;
    }
  } else if (changeDir === 0) {
    calcNewImage = getLatestOpenImg - 1;
    if (calcNewImage < 1) {
      calcNewImage = source.length;
    }
  }
  newImg.setAttribute("src", "/Images/image-product-" + calcNewImage + ".jpg");
  newImg.setAttribute("class", "newImg2");
  newImg.setAttribute("id", "current-image");
  getLatestOpenImg = calcNewImage;
};

// section for mobile carousel------------------------
const buttons = document.querySelectorAll("[data-carousel-btn]");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
// addition and subtraction click-----------
// const calcBtns = document.querySelectorAll("[data-calc]");
// let answer = document.querySelector(".cart-number").textContent;
// let sum = 0;
// let minus = 0;
// calcBtns.forEach((calcBtn) => {
//   calcBtn.addEventListener("click", () => {
//     console.log("clicked");
//     const panel = calcBtn.dataset.cartCalc === "add" ? -1 : 1;
//     console.log(panel);
//     const totalClicks = document.querySelector(".cart-numb");
//     console.log(totalClicks);
//     const sumValue = Number(totalClicks) + panel;
//     console.log(sumValue);
//     totalClicks.textContent = sumValue;
//   });
// });

const subt = document.querySelector(".subt");
const add = document.querySelector(".add");
const totalClicks = document.querySelector(".cart-numb");
let sum = 0;
subt.addEventListener("click", () => {
  sum--;
  sum = sum < 0 ? 0 : sum;
  totalClicks.textContent = sum;
});

add.addEventListener("click", () => {
  sum++;
  sum = sum > 0 ? sum : 0;
  totalClicks.textContent = sum;
});
// show number of add to cart------
const cartBox = document.querySelector(".cart-btn-box");
const totalCarts = document.querySelector(".total-carts");
cartBox.addEventListener("click", () => {
  totalCarts.style.visibility = "visible";
  totalCarts.textContent = sum;
  totalClicks.textContent = sum = 0;
});
// toggle click session open-----------------
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const asideNavBox = document.querySelector(".aside-nav-box");
const asideCloseNav = document.querySelector(".aside-close-nav");

menu.addEventListener("click", () => {
  console.log("clicked");
  asideNavBox.classList.toggle("active");
  overlay.style.display = "block";
  const body = document.body;
  body.style.overflowY = "hidden";
});
// toggle click session close ---------------
asideCloseNav.addEventListener("click", () => {
  asideNavBox.classList.toggle("active");
  overlay.style.display = "none";
  const body = document.body;
  body.style.overflowY = "visible";
});
