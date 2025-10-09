import express from "express"
import route from "./Routes/indexRoute.js"
import { loadContact } from "./utils/indexUtils.js"
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.use("/",route.home);
app.use("/about",route.about)
app.use("/contact",route.contact)


// error handling
app.use((req,res)=>{
    res.send(`<h1>404 page not found</h1>`)
})
app.listen(3000,(error)=>{
    console.log("berjalan di port 3000")
})