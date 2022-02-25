const canvas = document.querySelector("div.canvas")
const button = document.querySelector("button");
button.addEventListener("click",makeGrid)
makeGrid();
function makeGrid() {
    const size = prompt("Enter number of squares on side");
    if(size>100) {
        alert("size too big");
        return;
    }
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    canvas.style.gridTemplateColumns = "repeat("+size+","+640/size+"px)";
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.id = i.toString();
        square.addEventListener("mouseenter", () => square.style.backgroundColor = "black");
        canvas.appendChild(square);
    }
}
