const express = require("express")

const app = express();

const mongodb = require("./db")

const createuser = require("./Router/userRouter")

app.use(express.Router())
app.use(express.json())

app.get("/" , (req,res)=>{
    res.send("hello world")
})

app.use("/api" , createuser)




app.listen(4500)

mongodb();
// app.listen(4500 , (req,res)=>{

//     res.write(`app is listening`)
// })