const buttons = document.querySelectorAll(".ripple");

function handleButtonClick(e) {
  const x = e.pageX;
  const y = e.pageY;
  
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
}

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});