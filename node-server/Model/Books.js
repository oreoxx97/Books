const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let Books = new Schema({

    name:{ type: String},
    price:{ type: String},
    description:{ type: String}
})

module.exports = mongoose.model("Books" , Books)