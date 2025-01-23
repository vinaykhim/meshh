// Single Accordion Open at a Time
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const button = item.querySelector(".toggle-btn");

  header.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
        otherItem.querySelector(".toggle-btn").innerText = "+";
      }
    });

    item.classList.toggle("open");
    button.innerText = item.classList.contains("open") ? "-" : "+";
  });
});

// Optional: Allow multiple accordions open at once
// Uncomment the following code if multiple accordions should be allowed open
/*
accordionItems.forEach((item) => {
const header = item.querySelector(".accordion-header");
const button = item.querySelector(".toggle-btn");

header.addEventListener("click", () => {
  item.classList.toggle("open");
  button.innerText = item.classList.contains("open") ? "-" : "+";
});
});
*/