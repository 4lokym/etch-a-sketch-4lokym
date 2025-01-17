const grid = document.querySelector("#grid");

const clear = document.querySelector("button");


for(let row = 0; row<16; row++){
    for(let column = 0; column<16; column++){
        let element = document.createElement("div");
        element.setAttribute("id", `r${row}c${column}`);
        element.setAttribute("class", "square");
        //element.textContent = `${row}${column}`;
        grid.appendChild(element);
        
        element.addEventListener("mouseover", (e) =>{
            let id = e.target.id;
            e.target.classList.add("hovered");
        })
    }
}

const squares = document.querySelectorAll(".square");

clear.addEventListener("click", (e) =>{
    squares.forEach(element => {
        element.classList.remove("hovered");
    });
});
