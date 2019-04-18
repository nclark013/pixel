// Select color input
var color = document.getElementById("colorPicker");

// Select size input
//height
var height = document.getElementById("inputHeight");

//width
var width = document.getElementById("inputWidth");

//identify the table element
var table = document.getElementById("pixelCanvas");

//submit button
var form = document.getElementById("sizePicker");

//makeGrid inserts rows and cells to create the table
function makeGrid() {
    //The user can reset the grid to a blank state.
    //if row count > 0, then delete all rows
    rows = table.getElementsByTagName('tr');
    if (rows.length > 0) {
        table.innerHTML = "";
    }
    //The user can create a canvas of any (reasonable) size.
    //then proceed to build the grid
    for (h = 0; h < height.value; h++) {
        // insert rows
        row = table.insertRow(h);
        for (w = 0; w < width.value; w++) {
            // insert columns
            cell = row.insertCell(w);
            //new event listener on table cells
            cell.addEventListener('click' , colorGrid, false );
        }
    }
    //prevents default behavior of refreshing the page after the form submit event
    event.preventDefault();
}

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', makeGrid);

//The user can color the pixels in the grid.
//function to change color of that given cell
function colorGrid() {
        //color picker sets color variable
        this.style.backgroundColor = color.value;
}