import { Router } from "express";
import { index,show,create,store } from "../Controller/ContactController.js";
import { body,check } from "express-validator";
const route = Router()
// untuk seluruh data
route.get("/",index)
// untuk menampilkan form tambah contact
route.get("/add",create)

// route untuk menambahkan data ke json
route.post("/",[body("email").isEmail()],store)
// untuk detail berdasarkan email
route.get("/:email",show)

export default route
