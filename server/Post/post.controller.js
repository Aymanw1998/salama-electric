const Post = require("./post.model")

const getAllPost = async(req, res) => {
   //console.log("start-getAllPost")
    try{
        const posts = await Post.find();
        return posts ? res.status(200).json(posts): res.status(400).json([]);
    }
    catch(err){
       //console.log("err getAllPost", err)
        return res.status(500).json([]);
    }
}

const createPost = async(req, res) => {
   //console.log("start-createPost")
    try{
       //console.log("body1", req.body)
        const post = new Post({...req.body,create: new Date()});
       //console.log("body2", post)
        await post.save();
        const posts = await Post.find();
        return posts ? res.status(200).json(posts): res.status(400).json([]);
    }
    catch(err){
       //console.log("err craetePost", err)
        return res.status(500).json([]);
    }
}

const updatePost = async(req, res) => {
   //console.log("start-updatePost")
    try{
        const {id} = req.params;
        const {msg} = req.body;
        const post = await Post.findByIdAndUpdate(id, {msg: msg})
        const posts = await Post.find();
        return posts ? res.status(200).json(posts): res.status(400).json([]);
    }
    catch(err){
       //console.log("err updatePost", err)
        return res.status(500).json([]);
    }
}
const deletePost= async(req, res) => {
   //console.log("start-deletePost")
    try{
        const {id} = req.params;
        await Post.findByIdAndDelete(id);
        const posts = await Post.find();
        return posts ? res.status(200).json(posts): res.status(400).json([]);
    }
    catch(err){
       //console.log("err deletePost", err)
        return res.status(500).json([]);
    }
}
module.exports = {getAllPost, createPost, updatePost, deletePost}