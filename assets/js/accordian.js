// Single Accordion Open at a Time
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const plus = item.querySelector("#plus");
  const minus = item.querySelector("#minus");

  header.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
        otherItem.querySelector("#plus").style.opacity = "1";
        otherItem.querySelector("#minus").style.opacity = "0";
        otherItem.querySelector(".accordion-content").style.maxHeight = null;
      }
    });

    const isOpen = item.classList.toggle("open");
    if (isOpen) {
      plus.style.opacity = "0";
      minus.style.opacity = "1";
      const content = item.querySelector(".accordion-content");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      plus.style.opacity = "1";
      minus.style.opacity = "0";
      const content = item.querySelector(".accordion-content");
      content.style.maxHeight = null;
    }
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
