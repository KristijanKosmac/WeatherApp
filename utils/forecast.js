const request = require('request');

// CALLBACK REQUEST FUNCTION
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3eb3376e7de4067a89e58aaddc0fc1d4&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            const current = body.current;

            const data = current.weather_descriptions[0] + " Currently tempreture is " + current.temperature + " feels like " + current.feelslike;
            callback(undefined, data)
        }

    })
}

module.exports = forecast;