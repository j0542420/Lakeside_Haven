"use strict"
// debugger;
// declaring variable "day" using let
let day;
// declaring the variable of "hour"
let hours = new Date().getHours();
//declaring the variable of a "greeting" depending on the time of the day
let greeting;
if (hours < 12){
  greeting = "Good Morning! ";
} else if (hours < 18){
  greeting = "Good afternoon! ";
} else {
  greeting = "Good evening! ";
}
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
// document.getElementById("greetings").innerHTML = greeting;
// document.getElementById("days").innerHTML = " Today is " + day;

// changing the getElementById with JQuery
$("#greetings").html(greeting);
$("#days").html(" Today is " + day);


// adding an event listener to the "submit" event in the contact form
// let contactForm = document.getElementById("contactForm"); to JQuery
let contactForm = $("#contactForm");
if (contactForm){
  // contactForm.addEventListener("submit", function(event) { to JQuery
  contactForm.on("submit", function(event) {
    // prevent the default form submission to allow validation first
    event.preventDefault();

    //get the values that the user input
    // let name = document.getElementById("myName").value; to JQuery
    // let email = document.getElementById("email").value; to JQuery

    let name = $("#myName").val();
    let email = $("#email").val();

    // // converting the check-in date to a Date object
    // let checkInDate = new Date(document.getElementById("myCheckIn").value); to JQuery
    // // converting the check-out date to a Date object
    // let checkOutDate = new Date(document.getElementById("myCheckOut").value); to JQuery

    let checkInDate = new Date($("#myCheckIn").val());
    let checkOutDate = new Date($("#myCheckOut").val());

    // the div will display any error messages
    // let errorsDiv = document.getElementById("formErrors"); to JQuery

    // clears previous error messages
    // errorsDiv.innerHTML = ""; to JQuery

    $("#formErrors").html("");

    // Create Booking object
    let booking = new Booking(name, email, checkInDate, checkOutDate);

    // start try-catch to handle validation errors
    try {
      // check if the name field is empty
      if (name === " "){
        throw "Name cannot be empty.";
      }
      // check to see if the email has a @ to be valid
      if (!email.includes("@")){
        throw "Please enter a valid email.";
      }
      // blocking an Email domain that has gmail.com
      let bannedDomain = /@gmail\.com$/i;
      // testing the email that the user provided and if it has @gmail.com
      if(bannedDomain.test(email)){
        // stops the form from being submited by and telling the user to use a different email
        throw "Gmail addresses are not accepted. Please use a different email."
      }
      // check if the check-out date is later than the check-in date
      if (booking.getNights() <= 0 ) {
        throw "Check-out Date must be after Check-in Date.";
      }

      alert("Booking complete for " + booking.name + " for " + booking.getNights() + " nights. We'll contact you at " + booking.email + " about the details of your booking.");

      // if all validation pass, submit the form
      this.submit();
    }catch (error){
      // errorsDiv.innerHTML = error;
      // errorsDiv.style.color = "red";
      // errorsDiv.style.fontWeight = "bold";

      // changing the catch error to JQuery with .css()
      $("#formErrors").html(error).css({
        "color" : "red",
        "font-weight" : "bold"
      });
    }
  });
}
