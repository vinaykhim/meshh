const lines = document.querySelectorAll(".line");

// lines.forEach((line) => {
//   const randomTop = Math.random() * 90.31;
//   line.style.setProperty("--random-top", `${randomTop}%`);
// });

function generateFixedRandom(index, max) {
  const x = Math.sin(index) * 10000;
  return Math.abs(x % max);
}

lines.forEach((line, index) => {
  const randomTop = generateFixedRandom(index + 1, 90.31);
  line.style.setProperty("--random-top", `${randomTop}%`);
});
