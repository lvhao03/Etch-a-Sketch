let container = document.querySelector('.container')
let input = document.querySelector('.input')
let reset = document.querySelector('.reset')
let colors = document.querySelectorAll('.color')
let color_container = document.querySelector('.colors')
let generate_Color_Btn = document.querySelector('.generate')
let number_color = document.querySelector('.num')

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
    var cols = rows
    make_row(rows,cols)
}


function display_CurrentColor(bg_color){
    var current_color = document.querySelector('.current_color')
    current_color.style.backgroundColor = bg_color
}

function changing_current_color(colors){
    colors.forEach(color => {
        let first = Math.random() * 255 + 1
        let second = Math.random() * 255 + 1
        let third = Math.random() * 255 + 1
        color.style.backgroundColor = `rgb(${first} , ${second} , ${third})`
    })
}

function create_color(){
    let generate_Color = new Promise((resolve,reject) => {
        for (let i = 0 ; i < 25 ; i++){
            let first = Math.random() * 255 + 1
            let second = Math.random() * 255 + 1
            let third = Math.random() * 255 + 1
            let color = document.createElement('button')
            color.classList.add('color')
            color.style.backgroundColor = `rgb(${first} , ${second} , ${third})`
            color_container.appendChild(color)
        }
        resolve()
    })
    
    generate_Color
        .then(()=>{
            let colors = document.querySelectorAll('.color')
            changing_colors(colors)
        })
}

input.addEventListener('click', generate)
reset.addEventListener('click', ()=>{
    var grid_items = document.querySelectorAll('.item')
    grid_items.forEach(item =>{
        item.style.backgroundColor = "white"
    })
})

generate_Color_Btn.addEventListener('click', ()=>{
    let colors = color_container.childNodes
    if (colors.length < 25) create_color()
    changing_current_color(colors)
})

function changing_colors(colors){
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
}