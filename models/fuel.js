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
    pep: {
        type: Number,
        required: false,
    },
    pmit: {
        type: Number,
        required: false,
    },
    pvp: {
        type: Number,
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
        type: Date,
        required: true,
    }
});

//PEP = Precio Ex Planta de Ancap
//PMIT = Precio Máximo Intermedio Transitorio
//PVP = Precio máximo de Venta al Público

const Fuel = mongoose.model("Fuel", fuelSchema);

module.exports = Fuel;
