const mongoose = require('mongoose');

const connecMongoDb = async (url)=>{
return mongoose.connect(url);
}

module.exports = connecMongoDb;