const validator = require("email-validator");

const validation =(req,res,next)=>{
    let valid = validator.validate(req.body.email)
    if(valid){
        next()
    }
    else{
        res.status(408).send("Enter valid email")
    }
}
module.exports = {validation}

