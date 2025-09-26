import express from "express";
1
const app = express()


// ini untuk request get
app.get("/",(req,res)=>{
    res.send("Berhasil anjing kontol bangsat")
})
// ini untuk middleware
app.use("/",(req,res)=>{
    res.send("Ini dari middleware")
})


// buat server
app.listen(3000,()=>{
    console.log("berjalan di port 3000")
})