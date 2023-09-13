const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    id:  {type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true},
    description: { type: String, required: true},
    year: {type: Number},
    quantity: {type: Number, required:true} ,
    imageUrl: {type: String}
})

module.exports = mongoose.model('books', bookSchema);