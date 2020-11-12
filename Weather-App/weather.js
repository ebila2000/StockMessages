const request = require("postman-request")

const getweather = (address, callback) =>
{

    const url = "http://api.weatherstack.com/current?access_key=59560b7f77eb45859e7fa96493147b48&query=" + address.latitude + "," + address.longtitude + "&units=f"



    request({ url: url, json: true }, (err, res) => {

        if (err) {
            console.log("Cannot connect to the weather server!");
        }
        else if (res.body.error) {
            console.log("Error in Weather API:" + res.body.error.info);
        }
        else {
            console.log("It is " + res.body.current.weather_descriptions[0] + ". It is currently " + res.body.current.temperature + " degrees. But it feels like " + res.body.current.feelslike + ".");
        }

        callback(undefined, address.latitude);
    })
}


module.exports =
{
    getweather: getweather
}