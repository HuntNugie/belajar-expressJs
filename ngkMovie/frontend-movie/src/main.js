import "./style.css";
import debounce from "debounce";

const API = "http://localhost:3000";
const mains = document.getElementById("mainContent");
const searching = document.getElementById("search");
const content = document.getElementById("content");
const containerSearch = document.getElementById("contentSearch")
const containerDetail = document.getElementById("detail")
// untuk mengambil data
const getData = async function (link) {
    try {
        const response = await fetch(link);
        const parseJSON = await response.json();
        if (parseJSON.status === "false") {
            throw new Error(parseJSON.result);
        }
        const data = parseJSON.data;
        return data;
    } catch (error) {
        throw new Error(error);
    }
};
// untuk merender ui detail
const renderDetail = function (response) {
    const render = ` <!-- Judul -->
      <h1 class="text-4xl font-extrabold text-center mb-10 tracking-wide">🎬 Movie Detail</h1>

      <!-- Detail Movie -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-8">
        <!-- Poster -->
        <div class="flex justify-center">
          <img
            src="${response.Poster}"
            alt="${response.Title}"
            class="rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          />
        </div>

        <!-- Info Utama -->
        <div class="md:col-span-2 space-y-6">
          <h2 class="text-3xl font-bold">${response.Title}<span class="text-gray-400 text-lg">(${response.Year})</span></h2>
          <p class="italic text-gray-300">"${response.Plot}"</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="space-y-2">
              <p><span class="font-semibold">🎞 Rated:</span> ${response.Rated}</p>
              <p><span class="font-semibold">⏱ Runtime:</span> ${response.Runtime}</p>
              <p><span class="font-semibold">📅 Released:</span> ${response.Released}</p>
              <p><span class="font-semibold">🏆 Awards:</span> ${response.Awards}</p>
            </div>
            <div class="space-y-2">
              <p><span class="font-semibold">🎭 Genre:</span>${response.Genre}</p>
              <p><span class="font-semibold">🎬 Director:</span> ${response.Director}</p>
              <p><span class="font-semibold">✍ Writer:</span> ${response.Writer}</p>
              <p><span class="font-semibold">⭐ Actors:</span>${response.Actors}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <span class="px-4 py-2 rounded-lg bg-indigo-600 text-sm shadow hover:bg-indigo-500 transition">Language: ${response.Language}</span>
            <span class="px-4 py-2 rounded-lg bg-indigo-600 text-sm shadow hover:bg-indigo-500 transition">Country: ${response.Country}</span>
          </div>
        </div>
      </div>`;
    if(containerDetail.hasAttribute("hidden")){
      containerDetail.removeAttribute("hidden")
    }
    containerSearch.setAttribute("hidden","")
    containerDetail.innerHTML = render;
    cekGambar();
};

// untuk merender ui searching
const renderUI = function (response = []) {
    const component = response
    .map((el) => {
        return ` <div class="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
        <img src="${el.Poster}" alt="Movie Poster" class="w-full h-56 object-cover" >
        <div class="p-5">
          <h2 class="text-xl font-bold mb-2">${el.Title}</h2>
          <p class="text-sm text-gray-300">${el.Year}</p>
          <button class="buttonDetail p-3 bg-indigo-600 rounded-lg my-4" data-omdbid="${el.imdbID}">Detail</button>
        </div>
      </div>`;
    })
    .join("");
    if(containerSearch.hasAttribute("hidden")){
      containerSearch.removeAttribute("hidden")
    }
    containerDetail.setAttribute("hidden","")
    mains.innerHTML = component;
    cekGambar();
};

// untuk defauults
const defaults = async (link = API) => {
    try {
        const response = await getData(link + "/API/movie");
        renderUI(response);
    } catch (error) {
        mains.innerHTML = `<h1>${error.message}</h1>`;
    }
};

// untuk searching
const searchings = async (event) => {
    try {
        const hasil = event.target.value;
        const response = await getData(`${API}/API/movie?search=${hasil}`);
        renderUI(response);
        history.pushState({page: "search", data: response}, "", `?search=${hasil}`);
    } catch (error) {
        mains.innerHTML = `<h1>${error}</h1>`;
    }
};

// untuk cek gambar jika gagal di muat
const cekGambar = function () {
    const gambar = document.querySelectorAll("img");
    gambar.forEach((el) => {
        el.onerror = () => {
            el.src = "/fallback.png";
        };
    });
};

// main searching dengan debounce
searching.addEventListener("input", debounce(searchings, 1000));

// ketika memencet tombol detail
const getDetail = async (id) => {
    const response = await fetch(`${API}/API/movie/detail/${id}`).then((res) => res.json());
    return response;
};

// menggunakan event binding
content.addEventListener("click", async (event) => {
    if (event.target.classList.contains("buttonDetail")) {
        const id = event.target.dataset.omdbid;
        const response = await getDetail(id);
        renderDetail(response);
        history.pushState({page:"detail",data:response},"",`?detail=${id}`)
    }
});

// ketika di back
window.addEventListener("popstate", (event) => {
    if (event.state == null) {
        defaults();
    } else if (event.state?.page == "detail") {
        renderDetail(event.state?.data);
    } else {
        renderUI(event.state?.data);
    }
});

// ketika di load
window.onload = async () => {
    if (history.state === null) {
        defaults();
    } else if (history.state?.page == "detail") {
        renderDetail(history.state?.data);
    } else {
        renderUI(history.state?.data);
    }
};
