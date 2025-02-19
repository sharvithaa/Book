const model=require('../models/productmodel')


exports.getAllBooks=async(req,res)=>{
    try{
        const books=await model.find({});
        res.status(200).json({status:"Get books",data:books});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({status:"Get failed",Error:err});
    }
}

exports.getBooks=async(req,res)=>{
    try{
        const book=await model.findById(req.params.id);
        if(!book)
        {
            res.status(404).json({status:"failed",message:"Book not found"});
        }
        res.status(200).json({status:"Sucess",data:book});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({status:"failed",Error:err});
    }
}

exports.createBooks=async(req,res)=> {
    const bookData=req.body();
    try{
       const newBook=new model(bookData);
       await newBook.save();
       res.status(200).json({status:"Created sucessfully",data:bookData });
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({status:"Failed",Error:err});
    }
}

exports.updateBooks=async(req,res)=>{
    try{
        const update=await model.updateOne({id:req.params.id,$set:req.body});
        res.status(200).json({status:"Updated",data:update});
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({status:"Failed",Error:err});
    }
}

exports.deleteBooks=async(req,res)=>{
    try {
        const deletedProduct = await model.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ status: "failed", message: "Product not found" });
        }
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(400).json({ status: "failed", error: error.message });
    }
};