const express=require("express");
const router=express.Router();
const books=require("../controllers/bookController");


router.get("/",books.getAllBooks);
router.get("/:id",books.getBooks);
router.post("/",books.createBooks);
router.put("/:id",books.updateBooks);
router.delete("/:id",books.deleteBooks);

module.exports=router;