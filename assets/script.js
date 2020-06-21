
$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

// Change color for past, present, future
var startHour = '9';
var hourPresent = (moment().format('HH'));
var hourPast = hourPast < hourPresent;
var hourFuture = hourFuture > hourPresent; 

console.log(hourPresent);

// How do I link it to my planner????
if (hourPresent == startHour) {
    $(".timeSlot").addClass("bg-danger");
} else if (hourPresent < startHour) {
    $(".timeSlot").addClass("bg-success");
} else {
    $(".timeSlot").addClass("bg-secondary");
}

// add and edit events



// local storage
