import { index } from "../Controller/searchController.js";
import { Router } from "express";

const route = Router()

route.get("/search",index)

export default route