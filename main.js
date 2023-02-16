"use strict";
const source = document.querySelectorAll("img[data-src]");
const windowWidth = window.innerWidth;
console.log(windowWidth);
let getLatestOpenImg;
source.forEach((imgs, index) => {
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
      getLatestOpenImg = index + 1;
      console.log(getLatestOpenImg);
      const changingImg = function (changeDir) {
        document.querySelector("#current-image").remove();
        const getImgWindow = document.querySelector(".newImg");
        const newImg = document.createElement("img");
        getImgWindow.appendChild(newImg);
        let calcNewImage;
        if (changeDir === 1) {
          calcNewImage = getLatestOpenImg + 1;
          if (calcNewImage > source.length - 5) {
            calcNewImage = 1;
          }
        } else if (changeDir === 0) {
          calcNewImage = getLatestOpenImg - 1;
          if (calcNewImage < 1) {
            calcNewImage = source.length - 5;
            console.log(calcNewImage);
          }
        }
        newImg.setAttribute(
          "src",
          "/Images/image-product-" + calcNewImage + ".jpg"
        );
        newImg.setAttribute("class", "newImg2");
        newImg.setAttribute("id", "current-image");
        getLatestOpenImg = calcNewImage;
      };
    });
  });
});
// click closing effect---------------
const closeClose = function () {
  document.querySelector(".newImg").remove();
};
