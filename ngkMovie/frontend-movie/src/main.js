import './style.css'
import debounce from "debounce"
const API = "http://localhost:3000"
const mains = document.getElementById("mainContent")
const searching = document.getElementById("search")

const getData = async function(link){
  try {
    const response = await fetch(link)
    const parseJSON = await response.json()
    if(parseJSON.status === "false"){
        throw new Error(parseJSON.result)
    }
    const data = parseJSON.data
    return data
  } catch (error) {
    throw new Error(error)
  }
}

const renderUI = function(response=[]){
  const component = response.map((el)=>{
    return ` <div class="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
        <img src="${el.Poster}" alt="Movie Poster" class="w-full h-56 object-cover" >
        <div class="p-5">
          <h2 class="text-xl font-bold mb-2">${el.Title}</h2>
          <p class="text-sm text-gray-300">${el.Year}</p>
          <button class="p-3 bg-indigo-600 rounded-lg my-4">Detail</button>
        </div>
      </div>`
  }).join("")

  mains.innerHTML = component
  cekGambar()
}

// untuk defauults
const defaults = async (link=API)=>{
  try {
  const response = await getData(link+"/API/movie")
  renderUI(response)
  } catch (error) {
  mains.innerHTML = `<h1>${error.message}</h1>`  
  }
}

// untuk searching
const searchings = async(event)=>{
  try {
  const hasil = event.target.value
  const response = await getData(`${API}/API/movie?search=${hasil}`)
  renderUI(response)
  history.pushState({page:"search",data:response},"",`?search=${hasil}`)
  } catch (error) {
  mains.innerHTML = `<h1>${error}</h1>`
  }
}

const cekGambar = function(){
 const gambar = document.querySelectorAll("img")
  gambar.forEach(el=>{
    el.onerror = ()=>{
      el.src = "/fallback.png"
    }
  })
}
searching.addEventListener("input",debounce(searchings,1000))

window.addEventListener("popstate",(event)=>{
  if(event.state == null){
    defaults()
  }else{
    renderUI(event.state?.data)
  }
})

window.onload = async()=>{
  if(history.state === null){
    defaults()
  }else{
    renderUI(history.state?.data)
  }
}

