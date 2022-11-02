const grid = document.querySelector(".grid");

for (i=1; i <= 100; i++) {
    const cellsEasy = document.createElement("div");
    cellsEasy.classList.add("cell-easy");
    cellsEasy.innerHTML += i;
    grid.append(cellsEasy);

    cellsEasy.addEventListener("click", function() {
        cellsEasy.classList.toggle("active");
    });
}

const playButton = document.getElementById("play");
const container = document.querySelector(".container");
const playTitle = document.querySelector(".play-title");

playButton.addEventListener("click", function() {
    playTitle.classList.add("hide");
    container.classList.add("show");
});