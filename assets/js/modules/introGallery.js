let firstPositionX,
  firstPositionY,
  currentPositionX,
  currentPositionY,
  currentSlide;
let record = true;
const THRESHOLD = window.innerWidth / 5;

// Create a cursor container for non-mobile devices

const cursorContainer = document.createElement("div");
cursorContainer.id = "cursor-container";
cursorContainer.innerText = "H&D";
document.body.append(cursorContainer);


function moveCursor(e) {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorContainer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

// Store cursor position on first load and every {THRESHOLD} pixels

function recordFirstPositionCursor(e) {
  if (record) {
    firstPositionY = e.clientY;
    firstPositionX = e.clientX;
    record = false;
  }
}

// Catch the first slide and stack it at the end of the "deck" every {THRESHOLD} pixels

function stackSlide(e) {
  currentPositionX = e.clientX;
  currentPositionY = e.clientY;

  if (
    currentPositionX >= firstPositionX + THRESHOLD ||
    currentPositionX <= firstPositionX - THRESHOLD ||
    currentPositionY >= firstPositionY + THRESHOLD ||
    currentPositionY <= firstPositionY - THRESHOLD
  ) {
    currentSlide = document.querySelectorAll("#intro-gallery > ul > li")[0];
    currentSlide.parentNode.appendChild(currentSlide);

    record = true;
  }
}

export { recordFirstPositionCursor, stackSlide, moveCursor};
