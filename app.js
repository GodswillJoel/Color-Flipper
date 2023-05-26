const colors = [
  "red",
  "green",
  "orange",
  "purple",
  "rgba(72, 188, 255)",
  "indigo",
  "purple",
  "turquoise",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
