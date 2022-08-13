const mongoose = require("mongoose");

const fuelSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true,
    },
    fuel_type: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    request: {
        type: String,
        required: true,
    },
    since: {
        type: String,
        required: true,
    }
});

const Fuel = mongoose.model("Fuel", fuelSchema);

module.exports = Fuel;