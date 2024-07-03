const  express = require("express");
require("dotenv").config();
const app = express();
const port =  process.env.PORT ||  8005;
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser')
require("./db/conn");

//Nhận được 1 req.body từ client gửi lên 
app.use(bodyParser.json());
app.use(cors())
app.use(cookieParser());

app.get('/', async(req,res) => {
    res.send('Hello world')
})
app.get('/user', async(req,res) => {
    res.send('User page')
})
routes(app);

app.listen(port,() => {
    console.log(`sever is running on port number ${port}`);
});
