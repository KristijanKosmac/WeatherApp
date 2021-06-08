// const request = require('request');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

//REQUEST !

// const url = 'http://api.weatherstack.com/current?access_key=3eb3376e7de4067a89e58aaddc0fc1d4&query=37.8267,-122.4233&units=f'

// request({ url, json: true }, (error, response) => {

//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log("Unable to find location");
//     } else {
//         const current = response.body.current;

// console.log(current.weather_descriptions[0]);
// console.log("Currently tempreture is " + current.temperature + " feels like " + current.feelslike)
//     }

// })


//REQUEST !!

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3Jpc3RpamFua29zbWFjIiwiYSI6ImNrcGNsaTA4NjAxN2Uybm8xMzJqdmFtMDkifQ.--kYpUvEls_bAF4AhWeP2A&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {

//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log("Unable to find location");
//     } else {
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];

//         console.log("longiture: " + longitude + " latitude: " + latitude);
//     }

// })


// // REQUEST FUNCTIONS Calls
// geocode("New York", (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

// forecast(-122.4233, 37.8267, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })


// CHAINED REQUEST FUNCTIONS
const address = process.argv[2];

if (!address) {
    console.log("Please add address!");
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error);
        } else {
            console.log(location);

            forecast(latitude, longitude, (error, data) => {
                if (error) {
                    return console.log(error);
                } else {
                    console.log(data);
                }
            })
        }
    })
}
