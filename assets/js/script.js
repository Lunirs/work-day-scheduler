$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

var currentTime = moment().hours();

for (i = 0; i < 25; i++) {
  if (currentTime === i) {
    $(".container").children().eq(i).children().eq(1).addClass("present");
  } else if (currentTime > i) {
    $(".container").children().eq(i).children().eq(1).addClass("past");
  } else {
    $(".container").children().eq(i).children().eq(1).addClass("future");
  }
}
