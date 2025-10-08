import './style.css'
import { getData } from '../helpers/getHelp.js'
import { defaults } from '../Render/renderDefault.js'

const api=import.meta.env.VITE_API


window.onload = async function(){
  const data = await getData(`${api}/home/api`)
  defaults(data)
}
