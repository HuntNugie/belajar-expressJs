export const render = data=> {
  const result = data.map (el => {
    return `<li class="p-4 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer transition">
              <p class="font-medium">${el.sekolah}</p>
              <p class="text-sm text-gray-600">${el.kabupaten_kota} • ${el.kecamatan}</p>
              <p class="text-xs text-gray-500">${el.alamat_jalan}</p>
            </li>`;
  }).join("");
  const list = document.getElementById("lists")
  list.innerHTML = result

};

export const loading = ()=>{
  const loading = document.querySelector(".animate-pulse")
  setTimeout(()=>{
    loading.setAttribute("hidden","")
  },500)
}