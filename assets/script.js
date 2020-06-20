$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY hh'));

var currentHour = moment(currentDay, 'h');
console.log(currentHour);


var randomDate = '02/23/1999';
// Convert the `randomDate` to the "MM/DD/YYYY" format using `moment()`
var randomFormat = 'MM/DD/YYYY';
var convertedDate = moment(randomDate, randomFormat);
// Log `convertedDate` into the console
console.log(convertedDate);
console.log('----------------------------------------');








// // Save event function
// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

// // get the parent ul's id attribute
// var status = $(this)
// .closest(".list-group")
// .attr("id")
// .replace("list-", "");

// // get the task's position in the list of other li elements
// var index = $(this)
// .closest(".list-group-item")
// .index();

// // update task in array and re-save to localstorage
// tasks[status][index].date = date;
// saveTasks();