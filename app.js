const express = require("express");
const router = require("./routes/router");
const app = express();
require("dotenv").config();
require('./db/connection')

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);


const PORT_NO = process.env.PORT_NO || 8000;

app.listen(PORT_NO, ()=>{
    console.log(`server has started at Port No ${PORT_NO}`);
})