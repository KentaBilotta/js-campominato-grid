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

playButton.addEventListener("click", function() {
    document.querySelector(".play-title").classList.add("hide");
    document.querySelector(".container").classList.add("show");
});