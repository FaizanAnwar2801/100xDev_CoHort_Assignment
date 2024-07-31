const express = require("express");
const { json } = require("express/lib/response");
const zod = require("zod"); 
const { User } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config");
const userRouter = express.Router();

const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
})

userRouter.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message:"Incorrect Inputs / Email taken"
        })
    }

    const existinguser = await User.findOne({
        username: req.body.username
    })

    if (existinguser){
        return res.ststus(411).json({
            message:"Incorrect Inputs / Email taken"
        })
    }

    const dbUser = await User.create(body);
    
    
    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        message:"User created sucessfully",
        token:token
    })

})

module.exports = userRouter;