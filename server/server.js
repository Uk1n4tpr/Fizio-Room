const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const PORT = 8000;
const cors = require('cors')

const app = express()

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5173'
    })
)

app.use('/', require('./routes/auth'))

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
 })