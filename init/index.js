const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

if (process.env.NODE_ENV != "production") {
    require('dotenv').config({ path: __dirname + '/../.env' });
}

// Top of app.js ya server file mein
const dns = require('dns');
dns.setServers(['1.1.1.1', '1.0.0.1']);   // Cloudflare DNS (SRV records achhe se handle karta hai)

// const MONGO_URL = "mongodb://127.0.0.1:27017/realwonderlust";



const dbUrl = process.env.ATLASDB_URL;

main() 
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  // await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({ ...obj, owner: "69a5c6d89a4035f1999d668e",}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");  
};
 
initDB();