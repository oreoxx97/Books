/* eslint-disable array-callback-return */
const express = require('express');

const booksRoute = express.Router();
const BooksModel = require('../Model/Books');


//Add booksRoute
booksRoute.route('/add-books').post((req , res, next)=>{
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    BooksModel.create(req.body , (err , data) =>{
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    })
})

//Get all Books
booksRoute.route('/get-books').get((req , res, next)=>{
    BooksModel.find((err , data) =>{
        if(err){
            return next(err);
        }else{
            res.json(data);
        }
    })
})

module.exports = booksRoute;