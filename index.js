const PORT = process.env.PORT || 3000;
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const fuelSchema = require("./models/fuel");
const apiResponse = require("./helpers/apiResponse");
const uri = process.env.MONGODB_URI;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

try {
    mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, function (err) {
            if (err) {
                console.log(Date() + ": " + err);
            } else {
                console.log(Date() + " Connected to MongoDB");
            }
        });
} catch (err) {
    console.error(Date() + " Could not connect: " + err)
}

// GET Intro
app.get('/', (req, res) => {
    return apiResponse.successResponse(res,'Welcome to Uruguay Fuels API! A good place to get the current price for fuels in Uruguay. ' +
        'Current version: 0.1.1. ' +
        'Current prices of fuels in Uruguay. ' +
        'You can also get historical prices for fuels in Uruguay. ' +
        'Fuel rates are determined by the government and all companies have the same rates. ' +
        'We have improved ping times, please let us know if you run into issues using this API.' +
        'Contact us at hello.world@icanread.uy')
});

//POST request to save fuel prices to database
app.post('/api/save/', async (req, res) => {
    const newFuel = new fuelSchema(req.body);
    let newDocFuel = new fuelSchema(newFuel);
    await newDocFuel.save(function(err) {
        if (!err) {
            console.log(Date() + " JSON file successfully stored in MongoDB");
            return apiResponse.successResponse(res, "JSON file successfully stored in MongoDB");
        } else {
            console.error(Date() + " " + err);
            return apiResponse.ErrorResponse(res, err);
        }
    });
})

//GET request to provide fuel prices from the database based on fuel type
app.get('/api/get/:fuelType/', async (req, res) => {
    const newFuelType = req.params.fuelType;
    //const newFuel = new fuelSchema(req.body);
    let newInstanceFuel = await fuelSchema.find({request: newFuelType}).sort({since: -1}).limit(1);
    try {
        if (newInstanceFuel.length > 0) {
            console.log(Date() + " Fuel prices successfully obtained from MongoDB");
            return apiResponse.successResponseWithData(res, "Fuel prices found", newInstanceFuel);
        } else {
            console.error(Date() + " Fuel prices not found in MongoDB");
            return apiResponse.notFoundResponse(res, "Fuel prices not found");
        }
    } catch (err) {
        return apiResponse.ErrorResponse(res, err);
    }
})

// Throw 404 if URL not found
app.all("*", function(req, res) {
    console.log(Date() + " Request made resulted in page not found");
    return apiResponse.notFoundResponse(res, "Page not found")
});

setInterval(function() {
    http.get("http://fuels-uy-api.herokuapp.com/run/");
}, 500000); // every 5 minutes (300000)

module.exports = app;

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
