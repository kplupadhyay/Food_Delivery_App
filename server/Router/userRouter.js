const express = require("express")

const router = express.Router();

const user = require("../Models/user")

const createuser = router.post("/createuser" , async(req,res)=>{
    try{
        await user.create({
            name:req.body.name,
            password:req.body.password,
            location:req.body.location,
            email:req.body.email
        })
        return res.json({sucess:true})

    }catch(e){
        console.log(e)
    }
})

module.exports = createuser;