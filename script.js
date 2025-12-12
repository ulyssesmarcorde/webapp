document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});



const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 0;

document.querySelector(".next").addEventListener("click", () => {
  counter++;
  if (counter >= images.length) counter = 0;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = images.length - 1;
  updateSlide();
});

function updateSlide() {
  const width = document.querySelector(".carousel-container").clientWidth;
  slide.style.transform = `translateX(${-counter * width}px)`;
}

window.addEventListener("resize", updateSlide);
