const express = require('express')
const {default:mongoose}=require('mongoose');
const app = express()
const port=5000;
const path=require('path')
const studentRouter=require("./Router/studentRouter");
const { log } = require('console');

app.set('view engine','eje')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://rnw:FinalPass123@cluster0.5yybt.mongodb.net/')

.then(()=>{
    console.log("db connected")
})

.catch((err)=>{console.log(err)})
app.use('/api/Student',studentRouter)

app.listen(port,()=> console.log(`Example app listening on port http://localhost:${port}`))