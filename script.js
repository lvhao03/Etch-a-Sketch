let container = document.querySelector('.container')
let btn = document.querySelector('button')
function change_bg_hover(grid_item){
    grid_item.addEventListener("mouseover", () => {
        grid_item.style.backgroundColor = "black"
    })
}

function make_row(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        var grid_item = document.createElement('div')
        grid_item.classList.add("item")
        container.appendChild(grid_item)
        change_bg_hover(grid_item)
    };
}

function generate(){
    var rows = prompt("Chose grid")
    if (rows > 100) {
        alert("Smaller than 100 pls")
    }
    var cols = rows
    make_row(rows,cols)
}
btn.addEventListener('click', generate)