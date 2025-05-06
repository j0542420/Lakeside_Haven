// declaring variables by getElementById
let postalCode = document.getElementById("zipcode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

// creating a function with zipCode.onblur
postalCode.onblur = function(){
    // declaring variables with their values
    let codeValue = postalCode.value;
    let countryValue = country.value;
    // declaring empty variables
    place.value = "";
    region.value = "";

    // using a fetch method to access the API where country has the value countryValue
    // also where zipCode has the value of zipValue
    fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    // adding a .then() method to parse with JSON
    .then(promise => promise.json())
    // adding another .then() method to get the values for location and region
    .then(json =>{
        place.value = json.places[0]["place name"];
        region.value = json.places[0]["state abbreviation"];
    })
    // catching if there is an error
    .catch(console.log("failed"))
}