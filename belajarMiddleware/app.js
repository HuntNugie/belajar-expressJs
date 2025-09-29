const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const morgan = require("morgan")


const port = 3000;
const app = express()

app.set("view engine","ejs")
app.use(expressEjsLayouts)
app.use(morgan("dev"))


app.get("/",(req,res)=>{
    res.render("index",{layout:"layouts/main",nama:"Aleksander Nugie kurniawan"})
})

app.listen(port,()=>{
    console.log(`berjalan di http://localhost:${port}`)
})