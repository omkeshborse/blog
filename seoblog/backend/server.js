require('dotenv').config() ;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors"); 


const app = express() ;

/* middle ware */

app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser()) ;

/* cors */
app.use(cors())

/* routes */
app.get('/api' , (req, res)=>{
    res.json({
        time :Date().toString() 
    })
})

const PORT = process.env.PORT || 8080 ;
app.listen(PORT , () =>{
    console.log(`server is running at http://localhost:${PORT}`);
})