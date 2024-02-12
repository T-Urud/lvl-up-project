const lvlContainer = document.getElementById("lvl");
const pointsAvailableContainer = document.getElementById("pointsAvailable");

const points = () => {
  lvl = 1;
  pointsAvailable = 5;
  for (i = 0; i < 10; i++) {
    lvl++;
    pointsAvailable++;
    if (lvl++) {
      pointsAvailable++;
    }
  }
  lvlContainer.textContent = lvl;
  pointsAvailableContainer.textContent = pointsAvailable;
};
points();
