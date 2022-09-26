const main = document.querySelector(".main");
const thanks = document.querySelector(".thanks");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanks.classList.remove("hidden");
  main.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thanks.classList.add("hidden");
  main.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
