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
function initMap() {
   
    // Page objects
    let displayMap = document.getElementById("displayMap");
    let routeBox =    document.getElementById("routeBox");
    
    // Create a map to the Lakeside Haven
    let LakesideHaven = {lat: 45.33809183897189, lng: -93.74729501849258};
    
    let myMap = new google.maps.Map(displayMap, {
       zoom: 11,
       center: LakesideHaven,
       fullscreenControl: false
    });
    
    // Add a marker for the Lakeside Haven
    new google.maps.Marker({
       position: {lat: 45.33809183897189, lng: -93.74729501849258},
       map: myMap,
       title: "Lakeside Haven"
    });
    
    // Get the device's current position
    navigator.geolocation.getCurrentPosition(getPos, handleError);
    
    function getPos(pos) {
       let myPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
       }
             
       console.log(myPosition);
       
       // Set up direction service and rendering
       let routeFind = new google.maps.DirectionsService();
       let routeDraw = new google.maps.DirectionsRenderer();
          
       // Drive from current location to Oak Top House
       let  myRoute = {
          origin: myPosition,
          destination: LakesideHaven,
          travelMode: "DRIVING"
       }  
 
       // Generate directions for the route
       routeFind.route(myRoute, function(result, status) {
          if (status == "OK") {
             routeDraw.setDirections(result);
             // Display route and directions
             routeDraw.setMap(myMap);
             routeDraw.setPanel(routeBox);
          } else {
             routeBox.textContent = "Directions Unavailable: " + status;
          }
       }); 
       
    } 
    
    // In case of geolocation error
    function handleError(err) {
       console.log("Geolocation error: " + err.message);
    } 
 }