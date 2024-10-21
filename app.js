require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = 3000;
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI, {
    useNewUrlParser : true, 
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Atlas connected"))
.catch((err) => console.log("MongoDB connection error: ", err))

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)


app.listen(port, ()=>{
    console.log('Server is running')
})