import express from "express"

const app = express()

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index",{nama:"aleksander kurniawan"})
})

app.listen(3000,()=>{
    console.log("berjalan di http://localhost:3000")
})