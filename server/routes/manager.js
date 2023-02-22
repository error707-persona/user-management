const router = require("express").Router();
const {check, validationResult} = require("express-validator");
const checkAuth = require("../middleware/checkAuth")
const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")

router.get("/employees", async (req,res)=>{
    
    const allEmployees = await userModel.find({role:"employee"});
   
    res.json(allEmployees);
})

router.get("/employee", async (req,res)=>{
    const {email} = req.body;
    const employee = await userModel.find({email:email});
   
    res.json(employee);
})



router.post("/manager", async (req,res)=>{
    const {email} = req.body;

    let manager = await userModel.updateOne({email:email})
    console.log(manager)
    return res.json({user:manager});
   
})
module.exports = router;