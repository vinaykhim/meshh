const lines = document.querySelectorAll(".line");

const startDelays = [
  0, 5000, 10000, 4000, 15000, 5000, 10000, 3580, 12510, 5000, 18000, 1000,
];

function animateLine(line, delay) {
  let position = -5;

  function move() {
    position += 0.1;

    if (position > 110) {
      position = -10;
    }

    line.style.top = `${position}%`;
    requestAnimationFrame(move);
  }

  setTimeout(move, delay);
}

lines.forEach((line, index) => {
  const delay = startDelays[index] || 0;
  line.style.top = "0%";
  animateLine(line, delay);
});
