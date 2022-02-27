const mongoose = require('mongoose');
const { config } = require('../config/secret');

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://localhost:27017/feb22');
 await mongoose.connect(`mongodb+srv://${config.userMongo}:${config.passMongo}@cluster0.09exe.mongodb.net/Feb22`);
  console.log("mongo connect Feb22 atlas...")
  
}