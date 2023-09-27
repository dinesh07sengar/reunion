const mongoose = require("mongoose")

const propSchema = mongoose.Schema({
    propertyType: {
        type: String,
        required: true,
    },
    url:
    {
        type:String
    },
    Location: {
        type: String,
        required: true,
    },
    dateFrom: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    owner:{
        type:String,
        required:true
    }
});

const Propmodel= mongoose.model("property",propSchema,"properties")

module.exports = {Propmodel}