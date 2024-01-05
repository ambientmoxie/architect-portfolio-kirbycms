import "../scss/main.scss";
import { animateTicker, revealHotNews } from "./modules/ticker";
import { accordionCatalog, setHiddenContentHeight } from "./modules/catalog";
import {
  stackSlide,
  recordFirstPositionCursor,
  moveCursor,
} from "./modules/introGallery";

import Flickity from "flickity";
import "flickity/css/flickity.css";

//? Lazy loading
//? ---------------------

import Loadeer from "loadeer";
import lazySizes from "lazysizes";

const loadeer = new Loadeer();
loadeer.observe();

//? Ticker animation
//? ---------------------

if (document.querySelector("#home")) {
  const tickerButton = document.querySelector("#ticker-container");
  const newsContainer = document.querySelector("#fresh-news");

  animateTicker(tickerButton, 10);
  revealHotNews(tickerButton, newsContainer);
}

//? Accordion Catalog
//? ---------------------

const catalogButtons = document.querySelectorAll(".acc-button");
accordionCatalog(catalogButtons, 0.25, false);

//? Hidden content height
//? ---------------------

const cells = document.querySelectorAll(".carousel-cell");
setHiddenContentHeight(cells);

//? Flickity
//? ---------------------

const carousels = document.querySelectorAll(".carousel");
carousels.forEach(function (carousel) {
  new Flickity(carousel, {
    prevNextButtons: false,
    pageDots: false,
    freeScroll: true,
    cellAlign: "left",
    contain: true,
    // lazyLoad: true,
  });
});

//? Intro Gallery
//? ---------------------

let introContainer = document.querySelector("#intro-gallery");

if (introContainer) {
  document.body.style.position = "fixed"; // Prevent user from scrolling

  // Display the cursor on hover
  introContainer.addEventListener("mouseover", (e) => {
    document.querySelector("#cursor-container").style.opacity = "1";
  });

  // When moving the cursor...
  introContainer.addEventListener("mousemove", (e) => {
    moveCursor(e); // ...custom cursor following you
    recordFirstPositionCursor(e); // ...keep track of cursor position every
    stackSlide(e);
  });

  introContainer.addEventListener("click", function () {
    this.remove();
    document.querySelector("#cursor-container").remove();
    document.body.style.position = "initial";
  });
}

// Change text on smartphone

const desktopFooterContent = document.querySelector("#footer__copyright");

if (window.innerWidth <= 768) {
  desktopFooterContent.innerHTML = "2023 ©";
} else {
  desktopFooterContent.innerHTML = "2023 © All rights reserved.";
}
