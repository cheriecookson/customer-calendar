

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

// Change color for past, present, future
var hourPresent = '13';
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




var list = JSON.parse(localStorage.getItem('editEventlist')) || [];
      function rendereditEvents(list) {
        $('#editEvents').empty();
        for (var i = 0; i < list.length; i++) {
          var editEventItem = $('<p>');
          editEventItem.text(list[i]);
          var editEventClose = $('<button>');
          editEventClose.attr('data-editEvent', i);
          editEventClose.addClass('checkbox');     
          editEventClose.text('X');
          editEventItem = editEventItem.prepend(editEventClose);
          $('#editEvents').append(editEventItem);
        }
      }
      $('#add-editEvent').on('click', function(event) {
        event.preventDefault();
        var editEventTask = $('#editEvent')
          .val()
          .trim();

        list.push(editEventTask);
        rendereditEvents(list);
        localStorage.setItem('editEventlist', JSON.stringify(list));      
        $('#editEvent').val('');
      });

      $(document).on('click', '.checkbox', function() {    
        var editEventNumber = $(this).attr('data-editEvent');
        list.splice(editEventNumber, 1);
        rendereditEvents(list);
        localStorage.setItem('editEventlist', JSON.stringify(list));
      });
      rendereditEvents(list);

