let container = document.querySelector('.container')
let input = document.querySelector('.input')
let reset = document.querySelector('.reset')
console.log(input);
function change_bg_hover(grid_item, bg_color){
    grid_item.addEventListener("mouseover", () => {
        grid_item.style.backgroundColor = bg_color
    })
}

function make_row(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        var grid_item = document.createElement('div')
        grid_item.classList.add("item")
        change_bg_hover(grid_item, "black")
        container.appendChild(grid_item)
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


input.addEventListener('click', generate)
reset.addEventListener('click', ()=>{
    var grid_items = document.querySelectorAll('.item')

    grid_items.forEach(item =>{
        item.style.backgroundColor = "white"
    })
})