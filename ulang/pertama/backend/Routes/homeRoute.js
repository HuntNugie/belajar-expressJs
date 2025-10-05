import {Router} from "express"
import controller from "../Controller/indexController.js"
const route = Router()

route.get("/",controller.homeController)

export default route