import express from "express"
import route from "./Routes/indexRoute.js"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded())


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