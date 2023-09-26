const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { connect } = require('./config/db')
const { api } = require('./routes/allroute')

const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("welcome to seerver")
})

app.use("/api", api)

app.listen(process.env.PORT, async () => {
    try {
        connect()
        console.log("your server is running at http://localhost:8000")
    } catch (error) {
        console.log(error)
    }

})