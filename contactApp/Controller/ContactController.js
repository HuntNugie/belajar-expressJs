import { loadContact,detailContact,addContact,destroyContact,updateContact } from "../utils/indexUtils.js"
import { validationResult } from "express-validator"
// untuk me render halaman daftar contact 
export const index = (req,res)=>{
    const contacts = loadContact()
    res.render("contact",{
        contacts,
        berhasil:req.flash("success")
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
        req.flash("errors",result.array())
        return res.redirect("/contact/add")
    }else{
        addContact(req.body)
        req.flash("success","berhasil menambahkan kontak")
        return res.redirect("/contact")
    }

}

// untuk me render halaman form tambah contact
export const create = (req,res)=>{
    res.render("add-contact",{errors:req.flash("errors")})
}

// untuk hapus
export const destroy = (req,res)=>{
    const email = req.params.email;
    const hapus = destroyContact(email)
    if(hapus){
        req.flash("success","Berhasil menghapus kontak")
        return res.redirect("/contact")
    }else{
        req.flash("error","gagal menghapus kontak")
        return res.redirect("/contact")
    }
}

// untuk form edit
export const edit = (req,res)=>{
    const data = detailContact(req.params.email)
    res.render("edit-contact",{contact:data,errors:req.flash("errors")})
}

// untuk update
export const update = (req,res)=>{
    const data = req.body
    updateContact(data,data.oldEmail)
   res.redirect("/contact")
}