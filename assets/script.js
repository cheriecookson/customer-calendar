
$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

// Change color for past, present, future
var hourPresent = (moment().format('HH'));
var hour = $("#09").attr('id');

if (hourPresent == hour) {
    $(".timeSlot").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot").addClass("bg-success");
} else {
    $(".timeSlot").addClass("bg-secondary");
}

var hour = $("#10").attr('id');
if (hourPresent == hour) {
    $(".timeSlot1").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot1").addClass("bg-success");
} else {
    $(".timeSlot1").addClass("bg-secondary");
}

var hour = $("#11").attr('id');
if (hourPresent == hour) {
    $(".timeSlot2").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot2").addClass("bg-success");
} else {
    $(".timeSlot2").addClass("bg-secondary");
}

var hour = $("#12").attr('id');
if (hourPresent == hour) {
    $(".timeSlot3").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot3").addClass("bg-success");
} else {
    $(".timeSlot3").addClass("bg-secondary");
}

var hour = $("#13").attr('id');
if (hourPresent == hour) {
    $(".timeSlot4").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot4").addClass("bg-success");
} else {
    $(".timeSlot4").addClass("bg-secondary");
}

var hour = $("#14").attr('id');
if (hourPresent == hour) {
    $(".timeSlot5").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot5").addClass("bg-success");
} else {
    $(".timeSlot5").addClass("bg-secondary");
}

var hour = $("#15").attr('id');
if (hourPresent == hour) {
    $(".timeSlot6").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot6").addClass("bg-success");
} else {
    $(".timeSlot6").addClass("bg-secondary");
}

var hour = $("#16").attr('id');
if (hourPresent == hour) {
    $(".timeSlot7").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot7").addClass("bg-success");
} else {
    $(".timeSlot7").addClass("bg-secondary");
}

var hour = $("#17").attr('id');
if (hourPresent == hour) {
    $(".timeSlot8").addClass("bg-danger");
} else if (hourPresent < hour) {
    $(".timeSlot8").addClass("bg-success");
} else {
    $(".timeSlot8").addClass("bg-secondary");
}




var list = JSON.parse(localStorage.getItem('todolist')) || [];
      function renderTodos(list) {
        $('#to-dos').empty();
        for (var i = 0; i < list.length; i++) {
          var toDoItem = $('<p>');
          toDoItem.text(list[i]);
          var toDoClose = $('<button>');
          toDoClose.attr('data-to-do', i);
          toDoClose.addClass('checkbox');     
          toDoClose.text('✓');
          toDoItem = toDoItem.prepend(toDoClose);
          $('#to-dos').append(toDoItem);
        }
      }
      $('#add-to-do').on('click', function(event) {
        event.preventDefault();
        var toDoTask = $('#to-do')
          .val()
          .trim();

        list.push(toDoTask);
        renderTodos(list);
        localStorage.setItem('todolist', JSON.stringify(list));      
        $('#to-do').val('');
      });

      $(document).on('click', '.checkbox', function() {    
        var toDoNumber = $(this).attr('data-to-do');
        list.splice(toDoNumber, 1);
        renderTodos(list);
        localStorage.setItem('todolist', JSON.stringify(list));
      });
      renderTodos(list);



