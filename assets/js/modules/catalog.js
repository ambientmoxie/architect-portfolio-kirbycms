import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function closePanel(button, content, duration) {
  button.classList.remove("active");
  gsap.to(content, {
    height: 0,
    duration: duration,
    ease: "power2.out",
  });
}

function closeOtherPanels(buttons, button, duration) {
  buttons.forEach((btn) => {
    if (btn !== button && btn.classList.contains("active")) {
      btn.classList.remove("active");
      closePanel(btn, btn.nextElementSibling, duration);
    }
  });
}

function expandPanel(button, content, duration) {
  gsap.fromTo(
    content,
    { height: 0 },
    {
      height: "auto",
      duration: duration,
      ease: "power2.out",
      onComplete: adjustPosition(button, duration),
    }
  );
}

function adjustPosition(button, duration) {
  gsap.to(window, {
    scrollTo: {
      y: button.parentElement.offsetTop,
    },
    duration: duration,
    ease: "power2.out",
  });
}

const accordionCatalog = (buttons, duration, multipanel) => {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      if (this.classList.contains("active")) {
        closePanel(this, content, duration);
      } else {
        !multipanel ? closeOtherPanels(buttons, this) : null;
        this.classList.add("active");
        expandPanel(this, content, duration);
      }
    });
  });
};

const setHiddenContentHeight = (cells) => {
  Array.from(cells).forEach((cell) => {
    const itemHeader = cell.closest(".catalog__item").getBoundingClientRect(); // Get the closest parent with defined class and return floating height
    if (window.innerWidth > 768) {
      cell.style.height = `calc(100svh - (var(--banner-height) * 3 + ${itemHeader.height}px))`;
    } else {
      cell.style.height = `70svh`;
    }
  });
};

export { accordionCatalog, setHiddenContentHeight };
