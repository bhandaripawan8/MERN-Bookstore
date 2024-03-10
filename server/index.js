const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const bookRoutes = require('./Routes/Book.Routes.js')

const app = express()

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
  mongoose.connect(process.env.MONGOURI)
  .then(() =>{
    console.log('Database connected successfully')
    app.listen(port, () => {
      console.log(`listening to port ${port}`)
    })
  }).catch((error)=>{
    console.log(error)
  })

// Routes
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

