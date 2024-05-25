const  express = require("express");
require("dotenv").config();
const app = express();
const port =  process.env.PORT ||  8005;
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require('./routes');
const cors = require('cors');
require("./db/conn");
app.use(bodyParser.json());
app.use(cors())
// app.get('/', async(req,res) => {
//     res.send('Hello wordl')
// })

routes(app);

app.listen(port,() => {
    console.log(`sever is running on port number ${port}`);
});
