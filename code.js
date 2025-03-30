// declaring variable "day" using let
let day;
//using the switch statement to pick out the name of the current day
// newDate.getDay() returns the number representing the day of the week
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
// outputs the result into the HTML element with the id "day"
document.getElementById("day").innerHTML = "Today is " + day;

