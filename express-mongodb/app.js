const {MongoClient} = require("mongodb")

let uri = "mongodb://127.0.0.1:27017"

const client = new MongoClient(uri)

async function run (){
    try {
    await client.connect();
        console.log("Berhasil terkoneksi")
    const db = client.db("ngk");
    const mahasiswa = db.collection("mahasiswa");

    const tampil = await mahasiswa.find().toArray();
    const tambah = await mahasiswa.insertOne({nama:"Alexander kurniawan",emaill:"aleksander@gmail.com"});
    
    } catch (error) {
        console.log(error)
    }
}
run()