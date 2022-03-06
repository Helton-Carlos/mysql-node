const express = require("express")
const app =express()
require('dotenv').config({path:'config.env'})
const cors = require("cors")
const bodyParser =require("body-parser")

const routes = require("./routes")

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',routes)
app.listen(process.env.PORT,()=>{
    console.log(`servidor, porta ${process.env.PORT}`)
})