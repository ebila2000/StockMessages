const request = require("postman-request")
const geocode = require("./geocode.js")
const weather = require("./weather.js") 
const url_geo = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZWJpbGEyMDAwIiwiYSI6ImNrZnlkc2dtajA5amYycXIwdzlqNGlheTYifQ.DXZ0WYfexXw-HUJ83ywZ5Q&limit=1"



geocode.getgeocode("Toronto", (error, data) => {
    if (error)
    {
        console.log("Error in GeoCode API" + error)
    }
    else
    {
        console.log(data)
        weather.getweather(data, (error, out) => {
            if (error) {
                console.log("Error in Weather API:" + error)
            }
            else {
                console.log("Weather:" + out)
            }
        })
    }
})



