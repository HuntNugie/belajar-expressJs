import { loadContact,detailContact,addContact } from "../utils/indexUtils.js"

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
    addContact(req.body)
    res.redirect("contact")
}

// untuk me render halaman form tambah contact
export const create = (req,res)=>{
    res.render("add-contact")
}