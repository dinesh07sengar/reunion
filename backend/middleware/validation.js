const validator = require("email-validator");

const validation = (req, res, next) => {

    // Use a regular expression to match Gmail addresses
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const valid = gmailRegex.test(req.body.email);






    console.log(valid)
    if (valid) {
        next()
    }
    else {
        res.status(408).send("Enter valid email")
    }
}
module.exports = { validation }

