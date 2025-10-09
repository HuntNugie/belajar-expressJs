import { Router } from "express";
import { index } from "../Controller/homeController.js";
const route = Router()

route.get("/",index)

export default route;