const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing industry.",
    image: "./assets/images/hero/human1.png",
  },
  {
    text: "The quick brown fox jumps over the lazy dog.",
    image: "./assets/images/hero/human2.png",
  },
  {
    text: "Design is not just what it looks like, but how it works.",
    image: "./assets/images/hero/human3.png",
  },
];

let currentIndex = 0;
const textElement = document.getElementById("testimonialText");
const imageElement = document.getElementById("testimonialImage");

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
});

function updateTestimonial() {
  // textElement.style.opacity = 0;
  // imageElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = testimonials[currentIndex].text;
    imageElement.src = testimonials[currentIndex].image;
    textElement.style.opacity = 1;
    imageElement.style.opacity = 1;
  }, 300);
}
