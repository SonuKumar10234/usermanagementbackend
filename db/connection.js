const mongoose = require('mongoose');

const DB = process.env.DB_CONN;

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Database Connection Successful");   
}).catch((err) =>{
    console.log("error", err)
});