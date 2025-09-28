import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("Ini dari get")
})
// ini namanya route parameter
app.get("/about/:id",(req,res)=>{
    const {id} = req.params
    res.send("<h1>"+id+"</h1>")
})

// ini untuk jika tidak ada route nya
app.use((req,res)=>{
    res.status(404).send("tidak ada halaman")
})
app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})