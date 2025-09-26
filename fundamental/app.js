import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("Berhasil anjing kontol bangsat")
})

// buat server
app.listen(3000,()=>{
    console.log("berjalan di port 3000")
})