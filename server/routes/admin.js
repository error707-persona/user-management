const router = require("express").Router();
const {check, validationResult} = require("express-validator");
const checkAuth = require("../middleware/checkAuth")
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")

router.get("/delete", async (req,res)=>{
    
    const allUsers = await userModel.find();
   
    res.json(allUsers);
})

router.post("/edit", async (req,res)=>{
    const {username, email, password, role} = req.body;

    // let hashedPassword = await bcrypt.hash(password, 10);
    let edit = await userModel.updateOne({email:email}, {"$set":{username:username, password:password, role:role}})
    console.log(edit)
    return res.json({user:edit});
   
})
module.exports = router;