import './style.css'
import { getData } from '../helpers/getHelp.js'
import { render,loading } from '../Render/render.js'
import debounce from "debounce"
const api=import.meta.env.VITE_API
const input = document.getElementById("searchInput")

// untuk search
const resultSearch = async()=>{
  const data = await getData(`${api}/sekolah/search?s=${input.value}`)
  loading()
  render(data)
  history.pushState({page:"search",data},"",`/sekolah?search=${input.value}`)
}

input.addEventListener("input",debounce(resultSearch,1000))
window.onload = async function(){
  if(history.state === null){
    const data = await getData(`${api}/home/api`)
    loading()
    render(data)
  }else if(history.state?.page === "search"){
    render(history.state?.data)
  }
}
