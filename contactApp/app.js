// import module express
import express from "express"
// import aggregator route
import route from "./Routes/indexRoute.js"
// import untuk mendapatkan path absolute dari app.js
import path from "path"
import { fileURLToPath } from "url"
// import dotenv untuk mendapatkan isi dari .env
import dotenv from "dotenv"
// pasang config nya agar bisa di baca isi dari .env nya
dotenv.config();
// instance express app nya
const app = express()
// merangkai path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// setting view engine
app.set("view engine","ejs")
// middleware express untuk file file static
app.use(express.static(path.join(__dirname,"public")))
// untuk mendapatkan isi kiriman dari form agar bisa di tangkap di req.body dan akan berbentuk object
app.use(express.urlencoded({extended:true}))

// ini adalah route utama nya
app.use("/",route.home);
app.use("/about",route.about)
app.use("/contact",route.contact)


// error handling
app.use((req,res)=>{
    res.send(`<h1>404 page not found</h1>`)
})
// server dari express nya
app.listen(process.env.PORT,(error)=>{
    console.log("berjalan di port 3000")
})