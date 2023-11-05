const axios = require('axios').default;
const fs = require('fs');

console.log('ABCD !!!!!')
API_KEY = "AIzaSyDIgf3QsO0MoyZwyN7q5KCRJz5Qj1Hv6bw"

function downloadImage(rgbUrl) {
    const imageUrl = rgbUrl; // Replace with your actual image URL
    const path = '/Users/swapnilkannojia/Documents/Projects/sunhack-caffeine/public/image.jpg'; // Replace with the path where you want to save the image

    axios({
        method: 'get',
        url: imageUrl,
        responseType: 'stream'
    })
    .then(function (response) {
    // Create a write stream to the file system
    const writer = fs.createWriteStream(path);

    // Pipe the image data to the file
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
    })
    .then(() => {
    console.log('Image downloaded successfully');
    })
    .catch(error => {
    console.error('Error downloading image:', error);
    });
}

async function solarData() {
    const response = await fetch("https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=37.4450&location.longitude=-122.1390&requiredQuality=HIGH&key=" + API_KEY);
    return response.json();
}
result = solarData();
result.then(function(result) {
    // console.log(result)
    sunshineHoursPerYear = result["solarPotential"]["maxSunshineHoursPerYear"] // total sunshine hours received per yer
    carbonOffsetFactorKgPerMwh = result["solarPotential"]["carbonOffsetFactorKgPerMwh"] // carbon offset factor per kg milliwatt hour
    areaMeters2 = result["solarPotential"]["wholeRoofStats"]["areaMeters2"] // building area
    maxArrayPanelsCount = result["solarPotential"]["maxArrayPanelsCount"] // Total panels required
    maxArrayAreaMeters2 = result["solarPotential"]["maxArrayAreaMeters2"] //Area occupied by solar panels
    console.log("Sunshine Hours Per Year: ", sunshineHoursPerYear)
    console.log("Carbon Offset Factor Kg Per Mwh: ", carbonOffsetFactorKgPerMwh)
    console.log("Area (in metre sq.): ", areaMeters2)
    console.log("Solar Array Panel Count: ", maxArrayPanelsCount)
    console.log("Roof Area Occupied by all solar panels", maxArrayAreaMeters2)
});

async function solarDataLayers() {
    const response = await fetch("https://solar.googleapis.com/v1/dataLayers:get?location.latitude=37.4450&location.longitude=-122.1390&radiusMeters=100&view=FULL_LAYERS&requiredQuality=HIGH&pixelSizeMeters=0.5&key=" + API_KEY);
    return response.json();
}
resultLayers = solarDataLayers();
resultLayers.then(function(resultLayers) {
    // console.log(resultLayers)
    rgbUrl = resultLayers["rgbUrl"]
    rgbUrl += ("&key=" + API_KEY)
    console.log(rgbUrl)
    // downloadImage(rgbUrl)
});



// ========================  AIR QUALITY =======================

response = fetch('https://airquality.googleapis.com/v1/currentConditions:lookup?key=' + API_KEY, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "universalAqi": true,
    "location": {
      "latitude": 37.419734,
      "longitude": -122.0827784
    },
    "extraComputations": [
      "HEALTH_RECOMMENDATIONS",
      "DOMINANT_POLLUTANT_CONCENTRATION",
      "POLLUTANT_CONCENTRATION",
      "LOCAL_AQI",
      "POLLUTANT_ADDITIONAL_INFO"
    ],
    "languageCode": "en"
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
  aqi = data["indexes"][0]["aqi"]
  console.log("AQI: ", aqi)
  pollutants = ""
  for (let i = 0; i < data["pollutants"].length; i++) {
    pollutant = data["pollutants"][i]
    console.log(pollutant["displayName"], ": ", pollutant["fullName"])
  }
})
.catch(error => {
  console.error('Error:', error);
});



// const https = require('https');

// // Construct the request data
// const postData = JSON.stringify({
//   "universalAqi": true,
//   "location": {
//     "latitude": 37.419734,
//     "longitude": -122.0827784
//   },
//   "extraComputations": [
//     "HEALTH_RECOMMENDATIONS",
//     "DOMINANT_POLLUTANT_CONCENTRATION",
//     "POLLUTANT_CONCENTRATION",
//     "LOCAL_AQI",
//     "POLLUTANT_ADDITIONAL_INFO"
//   ],
//   "languageCode": "en"
// });

// // Options for the HTTPS request
// const options = {
//   hostname: 'airquality.googleapis.com',
//   port: 443,
//   path: '/v1/currentConditions:lookup?key=' + API_KEY, // Replace YOUR_API_KEY with your actual API key
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': Buffer.byteLength(postData)
//   }
// };

// Make the request
// const req = https.request(options, (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//     aqi = typeof(chunk.json())
//     console.log("AQI: ", aqi)
//   });
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// });

// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// // Write data to request body
// req.write(postData);
// req.end()
  