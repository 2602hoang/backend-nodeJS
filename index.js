// const express = require ('express')
// const cors = require ('cors')
import cors  from 'cors'
import express from 'express'
require('dotenv').config() 
// const router = require('./src/routh')
//require('./connectitonSQL')
import { router } from './src/routh'

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET','POST','PUT','DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

router(app)

const PORT = process.env.PORT || 8080

const listtenner = app.listen(PORT , ()=>{
    console.log("server on post "+listtenner.address().port);
})


