// Constructor function for Booking objects
function Booking(name, email, checkInDate, checkOutDate){
    // assigning input value to new object properties
    this.name = name;
    this.email = email;
    this.checkInDate = new Date (checkInDate);
    this.checkOutDate = new Date (checkOutDate);
}

// method to calculate the number of nights between check dates
Booking.prototype.getNights = function() {
    // calculating the milliseconds in one day
    const oneDay = 1000 * 60 * 60 * 24;
    // calculating the difference of the booked dates
    const diff = this.checkOutDate - this.checkInDate
    // returns the miliseconds into days
    return Math.round(diff / oneDay);
}
