import dotenv from "dotenv"

dotenv.config()

const api = process.env.API

export const index = async (req,res)=>{
    const jenis = req.params.jenis
    const response = await fetch(`${api}/sekolah/${jenis}?page=1&perPage=5`)
    const data = await response.json()
    res.json(data)
}