const http = require("http");
const express = require("express");
const userRouter = require('./routes/user');
const connecMongoDb = require('./connection');
const app = express();


//connection
connecMongoDb("mongodb://127.0.0.1:27017/user-backend")
.then(() => console.log("Mongodb Connected"))
.catch((err) => console.log('err', err));


//middle-ware
app.use(express.json());


//Route
app.use("/users",userRouter);

const myServer = http.createServer(app);

myServer.listen(8000, ()=> console.log("server has been started"));