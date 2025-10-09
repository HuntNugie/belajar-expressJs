import { Router } from "express";
import { index } from "../Controller/ContactController.js";

const route = Router()

route.get("/",index)

export default route
