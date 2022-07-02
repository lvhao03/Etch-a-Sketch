let container = document.querySelector('.container')
let input = document.querySelector('.input')
let reset = document.querySelector('.reset')
let colors = document.querySelectorAll('.color')

function change_bg_hover(item, bg_color){
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = bg_color
    })
}

function make_row(rows,cols){
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
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


function display_CurrentColor(bg_color){
    var current_color = document.querySelector('.current_color')
    current_color.style.backgroundColor = bg_color
}



input.addEventListener('click', generate)
reset.addEventListener('click', ()=>{
    var grid_items = document.querySelectorAll('.item')

    grid_items.forEach(item =>{
        item.style.backgroundColor = "white"
    })
})

colors.forEach(color => {
    color.addEventListener("click", () => {
        let element = window.getComputedStyle(color)
        let bg_color = element.getPropertyValue('background-color')

        var grid_items = document.querySelectorAll('.item')

        display_CurrentColor(bg_color)

        grid_items.forEach(item =>{
            change_bg_hover(item, bg_color)
        })


    })
})