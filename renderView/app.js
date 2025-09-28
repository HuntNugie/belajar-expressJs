import express from "express"
import expressEjsLayouts from "express-ejs-layouts"
const app = express()

app.set("view engine","ejs")
app.use(expressEjsLayouts)

app.get("/",(req,res)=>{
    res.render("index",{nama:"aleksander kurniawan",layout:"layouts/main"})
})
app.get("/about",(req,res)=>{
    res.render("about",{nama:"aleksander kurniawan",layout:"layouts/main"})
})
app.get("/contact",(req,res)=>{
    res.render("contact",{nama:"aleksander kurniawan",layout:"layouts/main"})
})

app.listen(3000,()=>{
    console.log("berjalan di http://localhost:3000")
})