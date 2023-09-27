const express = require('express')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const { Usermodel } = require('../model/User.model')
const { Propmodel } = require('../model/Prop.model');
const { validation } = require('../middleware/validation');
const { authentication } = require('../middleware/authentication');

const api = express.Router()

api.post("/signup", validation, async (req, res) => {
    console.log(req.body)
    try {
        let check = await Usermodel.findOne({ email: req.body.email })
        if (check) {
            res.status(409).send("already register please login or use new gmail")
        }
        else {
            let data = await Usermodel.create(req.body)
            res.status(200).send("your accoount create succefully now set password and loging")
        }


    } catch (error) {
        res.status(417).send("something wrong")

    }

})

api.get("/list-properties", async (req, res) => {
    try {
        let data = await Propmodel.find()
        res.status(200).send({ data })

    } catch (error) {
        res.status(404).send("internal errors")

    }
})
api.post("/login", async (req, res) => {
    let { email, password } = req.body
    try {
        let data = await Usermodel.findOne({ email })
        //console.log("Now you here")
        if (data) {
            const token = jwt.sign({ email }, process.env.SECRETE_KEY);
            res.status(200).send({ "msg": "succesfully login", token })
        }
        else {
            res.status(404).send("wrong credentail")
        }
    } catch (error) {
        res.status(408).send(error)

    }
})
api.use(authentication)

api.post("/property", async (req, res) => {

    try {
        let data = await Propmodel.create(req.body)
        res.status(201).send("proerty added succesfully")

    } catch (error) {
        res.status(408).send(error)

    }
})

api.patch("/property/:id", async (req, res) => {
    let id = req.params.id
    console.log(id)

    try {
        let data = await Propmodel.findByIdAndUpdate({ _id: id }, req.body);

        res.status(200).send({"update property":data})

    } catch (error) {
        res.status(404).send(error)


    }
})
api.delete("/property/:id", async (req, res) => {
    let id = req.params.id

    try {

        let data = await Propmodel.findByIdAndDelete({ _id: id });

        res.status(200).send({"delete property":data})

    } catch (error) {
        res.status(404).send(error)


    }
})
api.get("/property", async (req, res) => {
    try {
        let data = await Propmodel.find({ owner: req.body.email })
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = { api }

