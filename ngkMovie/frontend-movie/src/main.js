import './style.css'

const API = "http://localhost:3000/API/movie"
const mains = document.getElementById("mainContent")

const getData = async function(link){
  const response = await fetch(link)
  const parseJSON = await response.json()
  const data = parseJSON.data
  return data
}

const renderUI = function(response){
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

const cekGambar = function(){
 const gambar = document.querySelectorAll("img")
  gambar.forEach(el=>{
    el.onerror = ()=>{
      el.src = "/fallback.png"
    }
  })
}

window.onload = async(event)=>{
  const defaults = await getData(API)
  renderUI(defaults)
}

