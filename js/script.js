const grid = document.querySelector(".grid");

for (i=1; i <= 100; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cell");
    cells.innerHTML += i;
    grid.append(cells);

    cells.addEventListener("click", function() {
        cells.classList.toggle("active");
    });
}