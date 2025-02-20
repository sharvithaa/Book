const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({  
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    condition: {
        type: String,
        enum: ["New", "Like New", "Good", "Fair", "Poor"],
        required: true
    },
    exchangeOption: {
        type: String,
        enum: ["Swap", "Sell", "Donate"],
        required: true
    }
});


const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
