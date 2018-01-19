$(document).ready(function() {
  
	// Define your variables: the submit button, the table, and the color picker
var canvas=$("#pixelCanvas");
var selectedColor=$("#colorPicker");
var submitButton=$("#submitButton");
var clearCanvas = $("#clearAllButton");
var deleteCanvas= $("#deleteCanvasButton");
	// function to make canvas
function makeGrid() {
	//store values height and width
var width=$("#canvasWidth").val();
var height=$("#canvasHeight").val();
 // If value is >100, alert
 if (width<=0 || width>100 || height<=0 || height>100) {
 alert("Please insert values between 5 and 100!");
 return true;
 }
	//remove any previous canvas
   canvas.children().remove();
	//Create canvas : a table is created by iterrating over its rows and (nested for loop) columns
    for (var r=0; r<height; r++){
     	canvas.append("<tr></tr>");
 			for (var c=0;c<width;c++){
				canvas.children().last().append("<td></td>")
     }
   }
}
  ///on click on submit button -> create canvas
  submitButton.click( function(e){
e.preventDefault();
       makeGrid();
});
	
  //on click on delete button -> remove canvas
 deleteCanvas.click(function(){
    $("#canvasHeight, #canvasWidth").val("");
    $("#pixelCanvas").empty();  
  });
	
  //fill the cell with the selected color
 $("#pixelCanvas").on("click","td",function(){
   var selectedColor = $("#colorPicker").val(); 
   $(this).css( "background-color", selectedColor);
 });
	
	//on click on clear button -> remove drawing 
 clearCanvas.click(function(){
    var selectedColor = $("#colorPicker").val(); 
   $(this).css( "background-color", "");
  });
	
 //remove the filled color from the cell
 $("#pixelCanvas").on("dblclick","td",function(){
   $(this).css( "background-color", ""); 
 });
});
