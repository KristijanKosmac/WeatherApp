const request = require('request');

// CALLBACK REQUEST FUNCTION

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3Jpc3RpamFua29zbWFjIiwiYSI6ImNrcGNsaTA4NjAxN2Uybm8xMzJqdmFtMDkifQ.--kYpUvEls_bAF4AhWeP2A&limit=1';

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            const longitude = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            const location = body.features[0].place_name;

            callback(undefined, { longitude, latitude, location });
        }

    })

}

module.exports = geocode;