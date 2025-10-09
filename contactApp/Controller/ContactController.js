import { loadContact,detailContact } from "../utils/indexUtils.js"


export const index = (req,res)=>{
    const contacts = loadContact()
    res.render("contact",{
        contacts
    })
}


export const show = (req,res)=>{
    const contact = detailContact(req.params.email)
    res.render("detailContact",{contact})
}