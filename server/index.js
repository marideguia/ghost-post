const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database ={
    sessions:
    [
    {
        id: '123',
        code:'asdfg',
        title:'First Session',
        created: new Date()
    },
    {
        id: '124',
        code:'qwert',
        title:'Second Session',
        created: new Date()
    }
        
    ],

    users:
    [
        {
            username: 'methAmp',
            userid: '123',
            password: 'cookie',
            fname: 'meth',
            lname: 'amphetamine',
            school: 'zoom uni',
            email: 'meth.amp@zoom.edu',
            phone: '123-456-7890'
        },
        {
            username: 'mariJuan',
            userid: '125',
            password: 'coke',
            fname: 'mari',
            lname: 'juana',
            school: 'zoom uni',
            email: 'mari.juan@zoom.edu',
            phone: '098-765-4321'
        }
    ],

    login: [
        {
            id: '987',
            hash: '',
            email: 'meth.amp@zoom.edu'
        }
    ]
}

// app.get('/',(req,res)=>{
//     res.send(database.users);
// })

app.get('/',(req,res)=>{
    res.send(database.users);
})

app.post('/joinSession', (req,res)=>{
   if (req.body.code === database.sessions[0].code)
   {
       res.json('success');
   }else{
       res.status(400).json('Error joining session');
   }
    
})

app.post('/createSession',(req,res) =>{
    const {code,title} = req.body;
    bcrypt.hash(code, null, null, function(err, hash) {
        console.log(hash);
    });
    database.sessions.push({
        id: '125',
        code:code,
        title:title,
        created: new Date()
    })
   res.json(database.sessions[database.sessions.length-1])
})
app.get('/session/:id',(req,res) =>{
    const {id} = req.params;
    let found = false;
    database.sessions.forEach(session =>{
        if(session.id === id) {
            found = true;
            return res.json(session);
        }
          
    })
    if(!found){
        res.status(404).json("no such session");
    }
} )
app.listen(3000,()=>{
    console.log('App is running on port 3000');
});


app.post('/signin', (req, res) => {

    if(req.body.username === database.users[0].username && 
        req.body.password === database.users[0].password){
    res.json('success');
        }else{
            // console.log(req.body.username, req.body.password)
            res.status(400).json('Error logging in');
        }
})

app.post('/register', (req, res) => {
    const { username, email, school, phone, password} = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash)
    })
    database.users.push({
        username: username,
        email: email,
        school: school,
        phone: phone,
        userid: '1212',

        password: password
    })

    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:userid', (req,res) => {
    const { userid } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.userid === userid) {
            found = true;
            return res.json(user);
        }
    })
    if (!found){
        res.status(400).json('No such user')
    }
})

/*
// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});*/