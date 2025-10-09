import { loadContact } from "../utils/indexUtils.js"
export const index = (req,res)=>{
    const contacts = loadContact()
    res.render("contact",{
        contacts
    })
}