// adding date to current day element
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// current time's hour block

var currentTime = moment().hours();

// interating through 24 times as there are 24 hours in a day (and 24 elements in my time block)
for (i = 0; i < 25; i++) {
  // if the current hour matches the current hour referenced by the index
  if (currentTime === i) {
    // give that block the class of "present"
    $(".container").children().eq(i).children().eq(1).addClass("present");
    // if the current hour is greater than the index's reference to the hour
  } else if (currentTime > i) {
    // give the blocks previous to the current time a class "past"
    $(".container").children().eq(i).children().eq(1).addClass("past");
  } else {
    // for all other cases, give the blocks a class of future
    $(".container").children().eq(i).children().eq(1).addClass("future");
  }
}

// save button event listener. this stores it in local storage in a key value pair
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var hr = $(this).parent().attr("id");

  localStorage.setItem(hr, text);
});

// reset button clears out local storage and reloads the poage
$(".resetBtn").on("click", function () {
  localStorage.clear();
  location.reload();
});

// getting the values from local storage and pasting them onto the text area
// of the classes

$("#hr1 .description").val(localStorage.getItem("hr1"));
$("#hr2 .description").val(localStorage.getItem("hr2"));
$("#hr3 .description").val(localStorage.getItem("hr3"));
$("#hr4 .description").val(localStorage.getItem("hr4"));
$("#hr5 .description").val(localStorage.getItem("hr5"));
$("#hr6 .description").val(localStorage.getItem("hr6"));
$("#hr7 .description").val(localStorage.getItem("hr7"));
$("#hr8 .description").val(localStorage.getItem("hr8"));
$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr13 .description").val(localStorage.getItem("hr13"));
$("#hr14 .description").val(localStorage.getItem("hr14"));
$("#hr15 .description").val(localStorage.getItem("hr15"));
$("#hr16 .description").val(localStorage.getItem("hr16"));
$("#hr17 .description").val(localStorage.getItem("hr17"));
$("#hr18 .description").val(localStorage.getItem("hr18"));
$("#hr19 .description").val(localStorage.getItem("hr19"));
$("#hr20 .description").val(localStorage.getItem("hr20"));
$("#hr21 .description").val(localStorage.getItem("hr21"));
$("#hr22 .description").val(localStorage.getItem("hr22"));
$("#hr23 .description").val(localStorage.getItem("hr23"));
$("#hr24 .description").val(localStorage.getItem("hr24"));
