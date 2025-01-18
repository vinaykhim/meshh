const container = document.querySelector(".carousel-container");
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;

cards.forEach((card) => {
  const cloneBefore = card.cloneNode(true);
  const cloneAfter = card.cloneNode(true);
  container.appendChild(cloneAfter);
  container.insertBefore(cloneBefore, container.firstChild);
});

const allCards = document.querySelectorAll(".card");
const totalAllCards = allCards.length;

let currentIndex = totalCards;
const cardWidth = allCards[0].offsetWidth;
container.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

function slideTo(index) {
  container.style.transition = "transform 0.7s ease";
  container.style.transform = `translateX(-${cardWidth * index}px)`;
  currentIndex = index;

  if (index < totalCards) {
    setTimeout(() => {
      container.style.transition = "none";
      container.style.transform = `translateX(-${cardWidth * totalCards}px)`;
      currentIndex = index + totalCards;
    }, 700);
  }
  if (index >= totalAllCards - totalCards) {
    setTimeout(() => {
      container.style.transition = "none";
      container.style.transform = `translateX(-${
        cardWidth * (index - totalCards)
      }px)`;
      currentIndex = index - totalCards;
    }, 700);
  }
}

function autoSlide() {
  slideTo(currentIndex + 1);
}

setInterval(autoSlide, 2000);

// let currentIndex = 0;
// const cardWidth = cards[0].offsetWidth;

// Clone first and last cards for seamless looping
// const firstCardClone = cards[0].cloneNode(true);
// const lastCardClone = cards[totalCards - 1].cloneNode(true);
// container.appendChild(firstCardClone);
// container.insertBefore(lastCardClone, cards[0]);

// if (index === 0) {
//   setTimeout(() => {
//     container.style.transition = "none";
//     container.style.transform = `translateX(-${
//       cardWidth * totalCards
//     }px)`;
//     currentIndex = totalCards;
//   }, 500); // Match the transition duration
// }

// if (index === totalAllCards - 1) {
//   setTimeout(() => {
//     container.style.transition = "none";
//     container.style.transform = `translateX(-${cardWidth}px)`;
//     currentIndex = 1;
//   }, 500);
// }
