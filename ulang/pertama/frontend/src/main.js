import './style.css'
import dotenv from "dotenv"
import axios from 'axios'


const API="http://localhost:3000"
const getData = async()=>{
  const response  = await axios.get(`${API}/home/api`)
  const data = response.data
  console.log(data)
}

getData()
