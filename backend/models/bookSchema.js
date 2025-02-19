const mongoose=require("mongoose");


const bookModel=mongoose.Schema({
    title:{type:String},
    author:{type:String},
    genre:{type:String},
    condition: {
        type: String,
        enum: ['New', 'Like New', 'Good', 'Fair', 'Poor'],
        required: true
      },
      exchangeOption: {
        type: String,
        enum: ['Swap', 'Sell', 'Donate'],
        required: true
      }
})

const Book = mongoose.model('Book', bookSchema);