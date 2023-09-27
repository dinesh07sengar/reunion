const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String }
});

const Usermodel = mongoose.model("user", userSchema, "users");
module.exports = { Usermodel }