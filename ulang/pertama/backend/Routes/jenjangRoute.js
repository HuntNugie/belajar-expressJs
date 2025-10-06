import { Router } from "express";
import indexController from "../Controller/indexController.js";

const route = Router()

route.get("/:jenis",indexController.index)

export default route