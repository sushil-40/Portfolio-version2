document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".moving-dot");
  const border = document.querySelector(".info-container");
  const borderWidth = border.offsetWidth;
  const borderHeight = border.offsetHeight;
  const perimeter = 2 * (borderWidth + borderHeight);

  let position = 0;

  function moveDot() {
    position = (position + 1) % perimeter;
    let x = 0,
      y = 0;

    if (position <= borderWidth) {
      // Top side
      x = position;
      y = -2;
    } else if (position <= borderWidth + borderHeight) {
      // Right side
      x = borderWidth - 24;
      y = position - borderWidth;
    } else if (position <= 2 * borderWidth + borderHeight) {
      // Bottom side
      x = 2 * borderWidth + borderHeight - position - 5;
      y = borderHeight - 2;
    } else {
      // Left side
      x = -24;
      y = perimeter - position;
    }

    dot.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveDot);
  }

  moveDot();
});
