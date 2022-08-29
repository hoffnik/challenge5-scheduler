var currentDay = document.getElementById("currentDay");
var today = document.createElement("p");
var actualTime = moment().hour();

// get today's date with
today.textContent = moment().format("dddd, MMMM Do, YYYY"); 
currentDay.appendChild(today);

function Color() {
    $("textarea").each(function () {
        var rowTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(rowTime, actualTime);
        $(this).removeClass(".past .present .future");
        
        if (actualTime > rowTime) {
            $(this).addClass("past");
        } 
        else if (actualTime < rowTime) {
            $(this).addClass("future");
        } 
        else {
            $(this).addClass("present");
        }
    })
}

// get text that is stored in local storage
$("#hour9").val(localStorage.getItem("hour9"));
$("#hour10").val(localStorage.getItem("hour10"));
$("#hour11").val(localStorage.getItem("hour11"));
$("#hour12").val(localStorage.getItem("hour12"));
$("#hour13").val(localStorage.getItem("hour13"));
$("#hour14").val(localStorage.getItem("hour14"));
$("#hour15").val(localStorage.getItem("hour15"));
$("#hour16").val(localStorage.getItem("hour16"));
$("#hour17").val(localStorage.getItem("hour17"));

function saveTask() {
    var text = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
    
    localStorage.setItem(time, text);
}

$(".saveBtn").click(saveTask);

Color();