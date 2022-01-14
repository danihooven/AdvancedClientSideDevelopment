// Jumbotron Pagination
$("#page1 a").click(function(){
    $("#page2").removeClass('active');
    $("#page3").removeClass('active');
    $("#page1").addClass('active');
    $(".jumbo_image").attr("src", "images/jumbo1.jpg");
    $("h1").text("Getting Started");
    $(".lead").text("Go from Do to Done!");
});

// Jumbotron Pagination
$("#page2 a").on("click", function(){
    $("#page3").removeClass('active');
    $("#page1").removeClass('active');
    $("#page2").addClass('active');
    $(".jumbo_image").attr("src", "images/jumbo2.jpg");
    $("h1").text("Add a task");
    $(".lead").text("Take it one step at a time.");
});

// Jumbotron Pagination
$("#page3 a").on("click", function(){
    $("#page1").removeClass('active');
    $("#page2").removeClass('active');
    $("#page3").addClass('active');
    $(".jumbo_image").attr("src", "images/jumbo3.jpg");
    $("h1").text("Get to Work");
    $(".lead").text("Begin checking off your list!");

    // Scroll to Next Section
    var delay=3000; //3 seconds
    setTimeout(function(){
        location.hash = "#ToDoList"; //scrolls to element with given id
    },delay);
  
});




// Array of JavaScript Objects for To Do Table
// Constructor
var ToDo = function (task, date, desc, status) {
    this.task = task;
    this.date = date;
    this.desc = desc;
    this.status = status;

    return [task, date, desc, status]
};

// Array Items
var ToDo_Objects = [
    new ToDo("Homework", "10/25/2021", "WEBD335: Lab 2", "In Progress"),
    new ToDo("Scholarship", "10/31/2021", "Apply for Franklin Undergrad Scholarship", "In Progress"),
    new ToDo("Homework", "10/31/2021", "DATA300: Homework 11", "Not Started"),
    new ToDo("Homework", "10/31/2021", "DATA300: Module 11 Reading", "Not Started"),
    new ToDo("Homework", "10/31/2021", "DATA300: Quiz 11", "Not Started"),
    new ToDo("Homework", "10/31/2021", "WEBD335: Homework 6", "Not Started"),
    new ToDo("Homework", "10/31/2021", "COMP325: Requirements Specifications", "Not Started"),
];

// Display items in table
var i;
var j;

for (i = 0; i < ToDo_Objects.length; i++){
    $("tbody:last-child").append($("<tr></tr>"));
    $("tr:last-child").append("<td>" + (i+1) + "</td>");
    for (j = 0; j < ToDo_Objects[i].length; j++){
        $("tr:last-child").append("<td>" + ToDo_Objects[i][j] + "</td>");
    }
};

// Update Notification Badge 
$(".notify").text(ToDo_Objects.length - 1)





// Use the Constructor Invocation Pattern, and Write four "public method" functions to 
// create (new Object constructor), 
// read (find Object in global array), 
// update (push changed Object values back into global Array), and 
// delete (delete Object from global Array) functions for the Javascript Object you defined.  
// Set the functions on the prototype and to have them available to every object instance. 

var ToDo_List = [];

// Create
ToDo.prototype.create = function(task, date, desc, status){
    new ToDo(task, date, desc, status);
};

// Read
ToDo.prototype.read = function(index){
    return ToDo_List[index];
};

// Update
ToDo.prototype.update = function(index, task, date, desc, status){
    ToDo_List[index] = {task, date, desc, status};
};

// Delete
ToDo.prototype.delete = function(){
    ToDo_List[index].splice(pos, index)
};

