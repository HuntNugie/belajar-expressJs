import { Router } from "express";
import { index } from "../Controller/aboutController.js";
const route = Router()

route.get("/",index)

export default route