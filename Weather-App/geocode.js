const request = require("postman-request")
const getgeocode = (address, callback) => {
    const url_geo = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZWJpbGEyMDAwIiwiYSI6ImNrZnlkc2dtajA5amYycXIwdzlqNGlheTYifQ.DXZ0WYfexXw-HUJ83ywZ5Q&limit=1"
    request({ url: url_geo, json: true }, (err, res) => {
        if (err) {
            callback("Unable to connect to the location services", undefined)
        }
        else if (res.body.features === undefined) {
            callback("Error in GeoCode API:" + res.body.message, undefined)
        }
        else if (res.body.features.length === 0) {
            callback("Did not find anything about this location", undefined)
        }
        else {
            callback(undefined, { latitude: res.body.features[0].center[1], longtitude: res.body.features[0].center[0], location: res.body.features[0].place_name });
        }
    })
}


module.exports=
{
    getgeocode: getgeocode
}