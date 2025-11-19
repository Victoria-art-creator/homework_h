"use strict";

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openSlider");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => (modal.style.display = "flex");
closeBtn.onclick = () => (modal.style.display = "none");

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.style.display = "none";
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.querySelector(".dots");

let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

function goToSlide(i) {
  current = i;
  updateSlider();
}

nextBtn.addEventListener("click", () => {
  if (current < slides.length - 1) current++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (current > 0) current--;
  updateSlider();
});

updateSlider();
