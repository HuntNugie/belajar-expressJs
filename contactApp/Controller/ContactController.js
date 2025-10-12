import { loadContact,detailContact,addContact } from "../utils/indexUtils.js"
import { validationResult } from "express-validator"
// untuk me render halaman daftar contact 
export const index = (req,res)=>{
    const contacts = loadContact()
    res.render("contact",{
        contacts
    })
}

// untuk me render halaman detail contact
export const show = (req,res)=>{
    const contact = detailContact(req.params.email)
    res.render("detailContact",{contact})
}

// untuk menambahkan data ke json
export const store = (req,res)=>{
    const result = validationResult(req)
    if(result.errors.length !== 0){
        res.status(400).json(result.array())
    }else{
        addContact(req.body)
        res.redirect("contact")
    }

}

// untuk me render halaman form tambah contact
export const create = (req,res)=>{
    res.render("add-contact")
}