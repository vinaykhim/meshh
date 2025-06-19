function initializeBeforeAfterSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);
  const beforeImage = slider.querySelector(".before-image");
  const sliderLine = slider.querySelector(".slider-line");
  const sliderWidth = slider.getBoundingClientRect().width;

  function updateSlider(newLeft) {
    newLeft = Math.min(Math.max(0, newLeft), sliderWidth);
    const widthPercentage = (newLeft / sliderWidth) * 100;

    beforeImage.style.clipPath = `inset(0 ${100 - widthPercentage}% 0 0)`;
    sliderLine.style.left = `${newLeft}px`;
  }

  function onMouseMove(event) {
    const pageX = event.pageX || event.touches?.[0]?.pageX;
    const sliderRect = slider.getBoundingClientRect();
    const newLeft = pageX - sliderRect.left;

    updateSlider(newLeft);
  }

  slider.addEventListener("mousemove", onMouseMove);
  slider.addEventListener("touchmove", onMouseMove);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeBeforeAfterSlider(".before-after-slider");
});
