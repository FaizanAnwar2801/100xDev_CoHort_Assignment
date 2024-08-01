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

/************************************************************************************************************/ 

const signinSchema = zod.object({
    username:zod.string().email(),
    password:zod.string() 
})

userRouter.post("/signin" , async(req,res)=>{
    const body= req.body;
    const {success} = signinSchema.safeParse(body)
    if(!success){
        return res.status(411).json({
            message:"Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username:body.username,
        password:body.password,
    });

    if(user){
        const token = jwt.sign({
            userId: user._id
        },JWT_SECRET);

        res.status(200).json({
            token:token
        })
        return;
    }

    res.status(411).json({
        message:"Error while logging in."
    })

})

/************************************************************************************************************/

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

userRouter.put("/", authMiddleware, async(req,res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message:"Error while updating info."
        })
    }

    await User.updateOne(req.body,{
        _id:req.userId
    });

    res.status(200).json({
        message:"Updated successfully."
    })

})

/************************************************************************************************************/

userRouter.get("/bulk", async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or:[{

            firstName:{
                "$regex": filter
            },
        },{
            lastName:{
                "regex": filter
            }
        }]
    })

    res.status(200).json({
        user:users.map(user =>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

/************************************************************************************************************/

module.exports = userRouter;