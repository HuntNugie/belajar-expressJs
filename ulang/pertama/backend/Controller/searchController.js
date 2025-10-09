import dotenv from "dotenv"

dotenv.config()
const api = process.env.API
export const index = async(req,res)=>{
    const {s} = req.query
    const response = await fetch(`${api}/sekolah/s?sekolah=${s}`)
    const data = await response.json()
    const result = data.dataSekolah
    res.json(result)
}