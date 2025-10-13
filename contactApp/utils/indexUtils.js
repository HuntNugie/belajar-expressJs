import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config ();
const folder = process.env.PATH_FOLDER_DATA;
const fileJson = process.env.PATH_JSON_DATA;

// membuat folder
if (!fs.existsSync (folder)) {
  fs.mkdirSync (folder);
}

// membuat file contact.json di folder data
if (!fs.existsSync (fileJson)) {
  fs.writeFileSync (fileJson, '[]', 'utf-8');
}

// fungsi untuk load contact.json
export const loadContact = () => {
  const data = fs.readFileSync (fileJson);
  const result = JSON.parse (data);
  return result;
};

// fungsi untuk load contact detail
export const detailContact = email => {
  const data = loadContact ();
  const result = data.find (el => {
    return el.email.toLowerCase () === email;
  });
  return result;
};

// fungsi untuk save
const saveContact = contact=>{
  fs.writeFileSync(fileJson,JSON.stringify(contact),"utf-8")
}

// fungsi untuk tambah data
export const addContact = contact=>{
  const data = loadContact();
  data.push(contact);
  saveContact(data)
}

// fungsi untuk mengecek apakah email nya sama
export const cekEmail = email=>{
  const data = loadContact();
  const result = data.find(el=>el.email === email)
  return result
}

// fungsi untuk menghapus data
export const destroyContact = email=>{
  const data = loadContact();
  if(cekEmail(email)){
    const result = data.filter(el=>el.email !== email);
    saveContact(result)
    return true
  }
  return false
}

// fungsi untuk mengupdate data
export const updateContact = (contactBaru,emailLama) =>{
  const contact = loadContact();
  const result = contact.filter(el=>el.email !== emailLama);
  delete contactBaru.oldEmail
  result.push(contactBaru)
  saveContact(result)
}