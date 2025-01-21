function initializeBeforeAfterSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  const beforeImage = slider.querySelector(".before-image");
  const sliderLine = slider.querySelector(".slider-line");
  const sliderButton = slider.querySelector(".slider-button");
  const leftArrow = slider.querySelector("#left-move");
  const rightArrow = slider.querySelector("#right-move");
  const sliderWidth = slider.getBoundingClientRect().width;

  let isDragging = false;

  function updateSlider(newLeft) {
    newLeft = Math.min(Math.max(0, newLeft), sliderWidth);
    const widthPercentage = (newLeft / sliderWidth) * 100;

    beforeImage.style.clipPath = `inset(0 ${100 - widthPercentage}% 0 0)`;
    sliderLine.style.left = `${newLeft}px`;
  }

  function onDrag(event) {
    if (!isDragging) return;
    const pageX = event.pageX || event.touches[0].pageX;
    const sliderRect = slider.getBoundingClientRect();
    const newLeft = pageX - sliderRect.left;

    updateSlider(newLeft);
  }

  sliderButton.addEventListener("mousedown", () => {
    isDragging = true;
    document.addEventListener("mousemove", onDrag);
  });

  sliderButton.addEventListener("touchstart", () => {
    isDragging = true;
    document.addEventListener("touchmove", onDrag);
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      document.removeEventListener("mousemove", onDrag);
    }
  });

  document.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false;
      document.removeEventListener("touchmove", onDrag);
    }
  });

  leftArrow.addEventListener("click", () => {
    const currentLeft = parseFloat(sliderLine.style.left) || sliderWidth / 2;
    const moveLeft = currentLeft - sliderWidth * 0.001;
    updateSlider(moveLeft);
  });
  rightArrow.addEventListener("click", () => {
    const currentLeft = parseFloat(sliderLine.style.left) || sliderWidth / 2;
    const moveRight = currentLeft + sliderWidth * 0.001;
    updateSlider(moveRight);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeBeforeAfterSlider(".before-after-slider");
});
