import { Router } from "express";
import { index,show,create,store,destroy,edit, update} from "../Controller/ContactController.js";
import { cekEmail } from "../utils/indexUtils.js";
import { body,check } from "express-validator";
const route = Router()
// untuk seluruh data
route.get("/",index)
// untuk menampilkan form tambah contact
route.get("/add",create)

// route untuk menambahkan data ke json
route.post("/",[body("nama").notEmpty().withMessage("nama tidak boleh kosong"),body("nohp").isMobilePhone("id-ID").withMessage("nomor hp harus menggunakan nomor telepon indonesia"),body("email","Format email salah").isEmail().notEmpty().custom((value)=>{
    const result = cekEmail(value)
    if(result){
        throw new Error("email sudah di gunakan oleh orang lain")
    }
    return true
})],store)
// route untuk hapus 
route.delete("/delete/:email",destroy)
// route untuk form edit
route.get("/edit/:email",edit)
// route untuk update
route.put("/update/:email",[body("nama").notEmpty().withMessage("nama tidak boleh kosong"),body("nohp").isMobilePhone("id-ID").withMessage("nomor hp harus menggunakan nomor telepon indonesia"),body("email","Format email salah").isEmail().notEmpty().custom((value,{req})=>{
    const result = cekEmail(value)
    if( value !== req.body.oldEmail && result){
        throw new Error("email sudah di gunakan oleh orang lain")
    }
    return true
})],update)
// untuk detail berdasarkan email
route.get("/:email",show)



export default route
