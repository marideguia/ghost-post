const e = require('express');
const express = require ('express')
const router = express.Router()
const {Sessions} = require ("../models");
const {Users} = require('../models');
const { QueryTypes } = require('sequelize');
//import db from '../../models';



router.get('/:id',async (req, res)=>{
    const id = req.params.id;
   // const session = await Sessions.findOne({ where: { id: id } });
    const session = await Sessions.findByPk(id);
    res.json(session);
    
});

// router.post('/getSessionID',async (req, res)=>{
//     const code = req.body.codeValue;
//    // const session = await Sessions.findOne({ where: { id: id } });
//     const session = await Sessions.findOne({ where: { code: code } })
//     res.json(session);
    
// });

router.post("/getUserSession",async(req,res)=>{
    try{
        let sessions;
        const userID = req.body.UserID;
        sessions= await Users.sequelize.query("SELECT sessionID FROM user_session where userID =?",{raw:true, replacements: [userID],model: Users}) ;
        
        var finalArray = sessions.map(function (obj) {
            return obj.sessionID;
          });
        
        sessionInfo = await Sessions.findAll({
            where:{
                SessionID: finalArray
            }
        });
        res.json(sessionInfo);
     
    }catch(error){
        res.status(400).json({error:error.message});
    }      
});

router.post("/getCreatorSession",async(req,res)=>{
    try{
        const id = req.body.UserID;
        const session = await Sessions.findAll({ where: { creatorID: id } })
        res.json(session);
    }catch(error){
        res.status(400).json('unable to find session');
    }      
});

router.post("/join",async(req,res)=>{
    try{
        const code = req.body.code;
        const session = await Sessions.findOne({ where: { code: code } })
        res.json(session.SessionID);
    }catch(error){
        res.status(400).json('unable to find session');
    }      
});

router.post("/addUserSession",async(req,res)=>{
    try{
        const code = req.body.code;
        const userID = req.body.UserID
        const session = await Sessions.findOne({ where: { code: code } })
        if (userID == session.creatorID){
            res.json(session);
        }else{
            const user = await Users.findOne({ where: { UserID: userID } })
            session.addUsers(user)
            res.json(session);
        }
        
    }catch(error){
        res.status(400).json('unable to find session');
    }      
});

router.post("/create", async(req,res) => {
    const session = req.body
    await Sessions.create(session);
    res.json(session);
});

router.put('/update/:sessionID', async(req,res) => {
    try{
        Sessions.update(
            { title: req.body.title},	
            { where: { SessionID: req.params.sessionID } },	 			
          )
          res.json("success");
    }catch(error){
        res.status(400).json('unable to update session');
    }
    
});

router.put('/archive/:sessionID', async(req,res) => {
    try{
        Sessions.update(
            { isActive: false},	
            { where: { SessionID: req.params.sessionID } },	 			
          )
          res.json("success");
    }catch(error){
        res.status(400).json('unable to archive session');
    }
    
});


module.exports = router;