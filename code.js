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
document.getElementById("greetings").innerHTML = greeting;
document.getElementById("days").innerHTML = " Today is " + day;

// adding an event listener to the "submit" event in the contact form
let contactForm = document.getElementById("contactForm");
if (contactForm){
  contactForm.addEventListener("submit", function(event) {
    // prevent the default form submission to allow validation first
    event.preventDefault();

    //get the values that the user input
    let name = document.getElementById("myName").value;
    let email = document.getElementById("email").value;
    // converting the check-in date to a Date object
    let checkInDate = new Date(document.getElementById("myCheckIn").value);
    // converting the check-out date to a Date object
    let checkOutDate = new Date(document.getElementById("myCheckOut").value);
    // the div will display any error messages
    let errorsDiv = document.getElementById("formErrors");

    // clears previous error messages
    errorsDiv.innerHTML = "";



    // start try-catch to handle validation errors
    try {
      // check if the name field is empty
      if (name === ""){
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
      if (checkOutDate <= checkInDate) {
        throw "Check-out Date must be after Check-in Date.";
      }

      alert("Form submitted successfully");

      // if all validation pass, submit the form
      this.onsubmit();
    }catch (error){
      errorsDiv.innerHTML = error;
      errorsDiv.style.color = "red";
      errorsDiv.style.fontWeight = "bold";
    }
  });
}
