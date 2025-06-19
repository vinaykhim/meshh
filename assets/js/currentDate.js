const today = new Date();
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
};

const formattedDate = new Intl.DateTimeFormat("en-US", options).format(today);

document.getElementById("current_date").textContent = formattedDate;
document.getElementById("current_date1").textContent = formattedDate;
document.getElementById("current_date2").textContent = formattedDate;
