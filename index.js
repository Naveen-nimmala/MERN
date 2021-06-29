const express = require('express');
const cors = require ('cors');
const connectDB = require('./config/db');


const app = express();


connectDB();

// Init Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());

app.get('/', (req,res) => {
    res.send("Hello")
})

// Define routes 
app.use('/posts', require('./routes/post'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`App is running on ${PORT}`)); 