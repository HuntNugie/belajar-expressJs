import dotenv from "dotenv"

dotenv.config()

const api = process.env.API

export const index = async (req,res)=>{
    try {
        const jenis = req.params.jenis
        const querys = req.query
        const response = await fetch(`${api}/sekolah/${jenis}?${querys.perPage}`)
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.send(error)
    }
}