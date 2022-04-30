const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(cors());



const db = require("./models");

//Routers
const sessionRouter = require('./routes/Sessions')
app.use("/sessions",sessionRouter);
const postRouter = require('./routes/Posts')
app.use("/posts",postRouter);
const userRouter = require('./routes/Users')
app.use("/auth",userRouter);

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("server on port 3000");
    });
});



