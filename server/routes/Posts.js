const express = require ('express')
const router = express.Router()
const {Posts} = require ("../models");

router.get('/:sessionID',async (req, res)=>{
    const sessionID = req.params.sessionID;
   // const session = await Sessions.findOne({ where: { id: id } });
    const posts = await Posts.findAll({ where: {SessionId :sessionID}});
    res.json(posts);
    
});

//Making parent comments
router.post("/ask", async (req,res) =>{
    const post = req.body;
    const postInfo = await Posts.create(post);
    res.json(postInfo);
   
})

router.delete("/delete/:postID", async(req,res)=>{
    const postID = req.params.postID;

    await Posts.destroy({
        where:{
            PostID:postID,
        },
    });
    res.json("Succesful Delete");
});

router.put('/upvote/:postID', async(req,res) => {
    try{
        Posts.update(
            { Upvotes: req.body.Upvotes},	
            { where: { PostID: req.params.postID } },	 			
          )
          res.json("success");
    }catch(error){
        res.status(400).json('unable to update likes');
    }
});

router.put('/edit', async(req,res) => {
    try{
        const id = req.body.id;
        const post = await Posts.findOne({ where: { PostID: id } })
        post.Text=req.body.Text;
        post.save();
        res.json(post);
    }catch(error){
        res.status(400).json('unable to find session');
    } 
});

// router.put("/edit", async(req,res) => {
//     try{
//         const {newText,id} = req.body;
//         Posts.update(
//             { Text: newText},	
//             { where: { PostID: id } },	 			
//           )
//           res.json("success");
//     }catch(error){
//         res.status(400).json('unable to update likes');
//     }
// });


module.exports = router;


