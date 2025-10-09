import dotenv from "dotenv"

dotenv.config()

const api = process.env.API
export const homeController = async(req,res)=>{
    const response = await fetch(`${api}/sekolah?page=1&perPage=5`)
    const data = await response.json()
    const result = data.dataSekolah
    res.json(result)
}
