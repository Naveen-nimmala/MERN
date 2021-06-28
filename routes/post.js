const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


// Route  Post api/posts
// Create Post
// Private route
router.post('/',  async (req, res) => {
    console.log(req.body);
    try {
        const post = await new Post(req.body);
        post.save();
        res.json(post);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
});

// Route  Get api/posts
// Create get all posts
// Public route 

router.get('/', async (req,res) =>{
    try {
        const posts = await Post.find();
        // console.log(posts)
        return res.status(200).json({success: true, posts: posts})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})


router.get("/post/:id", async(req, res) => {

    let id = req.params.id;
    try {
        const post = await Post.findById(id);
        return res.json({post})
    } catch (error) {
        console.error(error.message)
    }
    
   
})






router.put('/update/:id', async (req,res) =>{
    try {
        const posts = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.json(posts)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

router.delete('/delete/:id', async (req,res) =>{
    try {
        const posts = await Post.findByIdAndRemove(req.params.id);
        res.json(posts)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;