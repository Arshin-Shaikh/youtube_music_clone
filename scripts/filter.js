const slider = document.querySelector(".sliderbutton");
const slide = document.querySelector(".slidingbutton");

slider.addEventListener("click", () => {
    slide.classList.toggle("dynamic-slider");
});