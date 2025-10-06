import dotenv from "dotenv"

dotenv.config()

const api = process.env.API

export const index = async (req,res)=>{
    const jenis = req.params.jenis
    const {perPage,page} = req.query

    const response = await fetch(`${api}/sekolah/${jenis}?page=${page}&perPage=${perPage}`)
    const data = await response.json()
    res.json(data)
}