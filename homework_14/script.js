"use strict";

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openSlider");
const closeBtn = document.getElementById("closeModal");

//Modal open / close
openBtn.addEventListener("click", () => {
  modal.classList.add("modal_open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal_open");
});

// Close on click to the modal`s background
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.classList.remove("modal_open");
});

//Close on click to Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.classList.remove("modal_open");
});

//Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".dots");

let current = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Go to slide
function goToSlide(i) {
  current = i;
  updateSlider();
}

// Refresh state of slider
function updateSlider() {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

//Button Next
nextBtn.addEventListener("click", () => {
  if (current < slides.length - 1) current++;
  updateSlider();
});

//Button Prev
prevBtn.addEventListener("click", () => {
  if (current > 0) current--;
  updateSlider();
});

updateSlider();
