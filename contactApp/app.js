import express from "express"
import route from "./Routes/indexRoute.js"
const app = express()

app.set("view engine","ejs")

app.use("/",route.home);

app.use(express.static("public"))
app.listen(3000,(error)=>{
    console.log("berjalan di port 3000")
})