const express = require ('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const {Users} = require('../models');
const {sign} = require('jsonwebtoken');

router.post("/createUser",async (req, res)=>{
    const {email,password,firstName,lastName} = req.body;
    const userInfo = await Users.findOne({where: {email:email}});
    
    if(userInfo){
        res.json({error: "User already exists"});
    }else{
    const user = await Users.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName 
    })
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.json(user)

    }
});
router.post("/getUser",async(req,res)=>{
    try{
        const email = req.body.email;
        const user = await Users.findOne({ where: { email: email } })
        res.json(user);
    }catch(error){
        res.status(400).json('unable to find user');
    }      
});

//routes: check old password, confirm, change to new password
router.put('/updatePassword', async(req, res) => {
    const {oldPassword, newPassword, UserID} = req.body
    const user = await Users.findOne({where: {UserID: UserID} })
    //res.json(user)
   // compare old password with existing password in database table
   bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match){
        res.json({ error: "Wrong Password Entered!" });
    }else{
        bcrypt.hash(newPassword, 10).then((hash) => {
            Users.update(
              { password: hash },
              { where: { UserID: req.body.UserID } }
            );
            res.json("SUCCESS");
          });
    } 
  });
});

router.put('/updateEmail', async(req, res) => {
    const {newEmail, UserID} = req.body
    //const user = await Users.findOne({where: {UserID: UserID} })
    try{
        Users.update(
            {email: newEmail},
            {where: { UserID: UserID }}
        )
        res.json("SUCCESS");
    }catch(error){
        res.json({error:"Unable to update Email"});  
    }
   
});

router.post("/login", async (req,res)=>{
    const {email,password} = req.body;

    const user = await Users.findOne({where: {email:email}});
    if(!user) res.json({error: "User does not Exist"});

    bcrypt.compare(password,user.password)
    .then((match)=>{
        if (!match){
            res.json({error:"Wrong Password or Email"});     
        }else{
            
        const accessToken = sign({firstName:user.firstName,email:user.email, id: user.UserID},
            "importantsecret"
            );
            //res.json(accessToken); 
            const userInfo = {name:user.firstName,email:user.email,UserID:user.UserID}
            res.json(userInfo)
        }
    }).
    catch((error)=>{
        res.json({error:error.message});
    })
        
});



module.exports = router;


