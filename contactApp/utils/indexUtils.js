import fs from "fs"
import dotenv from "dotenv"

dotenv.config()
const folder = process.env.PATH_FOLDER_DATA
const fileJson = process.env.PATH_JSON_DATA

// membuat folder 
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder)
}

// membuat file contact.json di folder data
if(!fs.existsSync(fileJson)){
  fs.writeFileSync(fileJson,"[]","utf-8")
}

// fungsi untuk load contact.json
export const loadContact = ()=>{
    const data = fs.readFileSync(fileJson)
    const result = JSON.parse(data)
    return result
}
