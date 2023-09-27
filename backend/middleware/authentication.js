const jwt = require('jsonwebtoken');
require('dotenv').config()
const authentication = (req,res,next)=>{
    const token = req.headers.auth
     console.log(token)
   

    if(token){
        var decoded = jwt.verify(token, process.env.SECRETE_KEY );
        if(decoded){                                           
            let{email} = decoded;
            console.log(email)
            req.body.owner = email
            next();
        }
        else{
            res.status(407).send("Login first")
        }
    }
    else{
        res.status(408).send("Login first")
    }
   
}
module.exports={
    authentication
}