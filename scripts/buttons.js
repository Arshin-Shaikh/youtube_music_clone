const slider = document.querySelector(".sliderbutton");
const slide = document.querySelector(".slidingbutton");
const hamburge = document.querySelector(".ham-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebar-buttons")
const sideBtn = document.querySelectorAll(".sidebar-btn");
const library = document.querySelector(".library-section")

slider.addEventListener("click", () => {
    slide.classList.toggle("dynamic-slider");
});

hamburge.addEventListener("click", () => {
    sidebar.classList.toggle("effect");
    sidebarBtn.classList.toggle("flex-ver");
    library.classList.toggle("hide");
    sideBtn.forEach((btn) => {
        btn.classList.toggle("hamburger-effect");
        btn.classList.toggle("m2");
        btn.classList.toggle("p1");
    });
})