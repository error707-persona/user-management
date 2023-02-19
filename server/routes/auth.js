const router = require("express").Router();
const {check, validationResult} = require("express-validator");
const {users} = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

router.post("/signup",[
    check("email", "Pleaase provide a valid email")
        .isEmail(),
    check("password", "Please provide a password that is greater than 5 letters")
        .isLength({
            min:6
        })

], async (req,res)=>{
    const {email, password, role} = req.body;

    //validate the input
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            error:errors.array()
        })
    }

    //validate user doesnt already exists
   const user = await userModel.find({email:email})

   if(user.email===email){
    return res.status(400).json(user)
   }

   let hashedPassword = await bcrypt.hash(password, 10);
   const newuser = await new userModel(
    {
        email,
        password:hashedPassword,
        role:role
       }
   )
   newuser.save();
//    console.log(hashedPassword);

   const token = await jwt.sign({
    email
   }, "dhoei7w72bd83290b4udsuen",{
    expiresIn:3600000
   })

    res.json({token:token});
})


router.get("/all", async (req,res)=>{
    const allUsers = await userModel.find();
   
    res.json(allUsers);
})

router.post("/login", async (req,res)=>{
    const {password, email, role} = req.body;

    // let user = users.find((user) => {
    //     return user.email === email
    // });
    let hashedPassword = await bcrypt.hash(password, 10);
    let findUser = await userModel.find({email:email, password:hashedPassword, role:role})

    if (findUser!=[]){
        const token = await jwt.sign({
            email
           }, "dhoei7w72bd83290b4udsuen",{
            expiresIn:3600000
           })
        //    let isMatch = await bcrypt.compare(password, findUser.password);

        //    if (!isMatch){
        //        return res.status(400);
        //    }
       
        // console.log(findUser,"finduser", token)
            return res.json({token:token});
    } else {
        return res.status(400).json({
            "errors": "Invalid credentials"
                
        })
    }
    // if (!user){
    //     return res.status(400).json({
    //         "errors":[
    //             {
    //                 "msg":"Invalid credentials"
    //             }
    //         ]
    //     })
    // }

    
    
    


})
module.exports = router;