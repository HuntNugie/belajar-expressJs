import { Router } from "express";
import { index,show } from "../Controller/ContactController.js";

const route = Router()
// untuk seluruh data
route.get("/",index)

// untuk detail berdasarkan email
route.get("/:email",show)

export default route
