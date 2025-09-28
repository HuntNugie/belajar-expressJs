import express from "express"
import cors from "cors"
import axios from "axios"
const API = "http://www.omdbapi.com/?apikey=bb6e65b5"
const app = express()

app.use(cors())
app.get("/",(req,res)=>{
    res.json({message:"Ini adalah backend dari ngkMovie",author:"Nugie kurniawan"})
})

// ini untuk searching
app.get("/API/movie",async(req,res)=>{
    try{
        let response = await axios.get(API+"&s=ultraman")
        const searching = req.query?.search
        if(searching){
            response = await axios.get(`${API}&s=${searching}`)
        }
        if(response.data.Response === "False"){
            throw new Error(response.data.Error)
        }
        const status = {status:"true",result:"berhasil ambil film"}
        res.json({
            res:status,
            data:response.data.Search
        })
    } catch(err){
        res.json({status:"false",result:"gagal mengambil film"})
    }
})

app.get("/API/movie/detail/:id",async(req,res)=>{
    try {
        const request = req.params.id;
        const response = await axios.get(`${API}&i=${request}`)
        res.json(response.data)
    } catch (error) {
        console.log(error.message)    
    }
})


app.listen(3000,()=>{
    console.log("Express berjalan di http://localhost:3000")
})