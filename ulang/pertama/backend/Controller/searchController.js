import dotenv from "dotenv"

dotenv.config()
const api = process.env.API
export const index = async(req,res)=>{
    const {s} = req.query
    const response = await fetch(`${api}/sekolah/s?sekolah=${s}`)
    const data = await response.json()
    res.json(data)
}