import { Router } from "express";

const route = Router()

route.get("/",(req,res)=>{
    const isi = {
        nama:"Nugie kurniawan",
        api:{
            home:"/home/api",
        }
    }
    res.json(isi)
})


export default route