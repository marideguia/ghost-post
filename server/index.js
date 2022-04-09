const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const { response } = require('express');
const app = express();
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'summer',
      password : 'ghostfruit',
      database : 'ghostpost'
    }
  });

/*knex.select('*').from('session').then(data=>{
    console.log(data);
})*/
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
            userid: '123',
            password: 'cookie',
            fname: 'meth',
            lname: 'amphetamine',
            school: 'zoom uni',
            email: 'meth.amp@zoom.edu',
            phone: '123-456-7890'
        },
        {
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

/*app.get('/',(req,res)=>{
    res.send(database.users);
})*/

app.get('/',(req,res)=>{
    res.send(database.sessions);
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
    knex('session')
    .insert({
        code:code,
        title:title,
        created: new Date()
    })
    .then(session =>{
        res.json(session[0]);
    })
    .catch(err => res.status(400).json('unable to create session'))
 
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

    if(req.body.email === database.users[0].email && 
            req.body.password === database.users[0].password){
        res.json('success');
    }else{
        console.log(req.body.email, req.body.password)
        res.status(400).json('Error logging in');
    }
})

app.post('/register', (req, res) => {
    const { email, password, fname } = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash)
    })
    database.users.push({
        userid: '1212',
        password: password,
        fname: fname,
        lname: 'urie',
        school: 'zoom uni',
        email: email,
        phone: '098-865-4321'
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