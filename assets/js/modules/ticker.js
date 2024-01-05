import { gsap } from "gsap";
import { isMobile } from "mobile-device-detect";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

// Ticker animation

const animateTicker = (container, speed) => {
  let original_html = container.innerHTML;
  let new_html =
    "<div class='ticker-container__items'>" + original_html + "</div>";
  container.innerHTML = new_html;
  container.innerHTML += new_html;

  let tickerWidth = document.querySelector(
    ".ticker-container__items"
  ).offsetWidth;
  let initDuration = tickerWidth / speed;

  let tickerAnimation = gsap.to(".ticker-container__items", {
    duration: initDuration,
    xPercent: -100,
    ease: "none",
    repeat: -1,
  });

  if (!isMobile) {
    container.addEventListener("mouseenter", () => {
      tickerAnimation.pause();
    });

    container.addEventListener("mouseleave", () => {
      tickerAnimation.resume();
    });
  }
};

// Content reveal

const revealHotNews = (button, content) => {

  button.addEventListener("click", function () {
    // On click, close the panel if already open.
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      gsap.to(content, {
        height: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    } else {
      // Add class to the header above the open section.
      button.classList.add("active");

      // We use "auto" for the height to let GSAP calculate the target height for us.
      gsap.fromTo(
        content,
        { height: 0 },
        {
          height: "auto",
          duration: 0.25,
          ease: "power2.out",
        }
      );
    }
    // Manual resize after accordion toggle
  });
};

export { animateTicker, revealHotNews };
