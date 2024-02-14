const lvlContainer = document.getElementById("lvl");
const pointsAvailableContainer = document.getElementById("pointsAvailable");

let addBtn = document.querySelectorAll(".add");
let reduceBtn = document.querySelectorAll(".reduce");
let valueAttribute = document.querySelectorAll(".valueAttribute");

let lvl;
let pointsAvailable;

const points = () => {
  lvl = 1;
  pointsAvailable = lvl * 5;

  if (lvl++) {
    pointsAvailable += 5;
  }

  lvlContainer.textContent = lvl;
  pointsAvailableContainer.textContent = pointsAvailable;
};
points();

let counterSpan = valueAttribute < span.value;
console.log(counterSpan);
for (i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", () => {
    counterSpan.value++;
    counterSpan.textContent = `${counterSpan.value}`;
    console.log(counterSpan.value);
  });
}
