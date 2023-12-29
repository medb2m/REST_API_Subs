require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Database Connection
/* mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error)=> console.log(error))
db.on('open', ()=> console.log('Connected to Database')) */

mongoose.connect('mongodb://127.0.0.1:27017/subs').then(()=> {
    console.log('Connected to Database !')
}).catch(err =>{
    console.log(err)
}) 

app.use(express.json())

const subsRouter = require('./routes/subs')
app.use('/subs', subsRouter)

app.listen(8080, ()=>{
    console.log('Server Started !')
})