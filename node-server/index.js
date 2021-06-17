/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mongodb = require("./Database/db");
const BooksRoute = require("./Routes/Books.routes")
const app = express();

app.use(cors());
mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology:true
})
.then(() =>{
    console.log('====================================');
    console.log('Database connection');
    console.log('====================================');
})
.catch(err => console.error(err));

app.use(express.json());
express.urlencoded({
    extended : false,
})



app.use('/api' , BooksRoute);
app.get('/' , (req, res) => {
    return res.send('This nodejs')
})

const port = 3001;
app.listen(port , (req , res, next) =>{
    console.log("Connection port 3001");
})


app.use((req , res, next)=>{
    next(createError(404));
})