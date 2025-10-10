import { Router } from "express";
import { index,show,create } from "../Controller/ContactController.js";

const route = Router()
// untuk seluruh data
route.get("/",index)
// untuk menampilkan form tambah contact
route.get("/add",create)
// untuk detail berdasarkan email
route.get("/:email",show)

export default route
