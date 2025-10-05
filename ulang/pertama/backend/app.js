import express from "express"
import cors from "cors"
import Routes from "./Routes/indexRoutes.js"
import dotenv from "dotenv"
import morgan from "morgan"
// ini untuk dotenv agar bisa memabca env
dotenv.config()
// setup express
const app = express()
const port = process.env.PORT 



app.use(cors())
app.use(morgan("dev"))

app.use("/home/api",Routes.homeRoute)

// setup untuk server
app.listen(port,(error)=>{
    if(error){
        throw new Error(error)
    }
    console.log(`berjalan di http://localhost:${port}`)
})
