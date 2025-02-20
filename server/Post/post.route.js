const {getAllPost, createPost, updatePost, deletePost} = require("./post.controller");

const express = require('express');
const router = express.Router();

router.route('/').get(getAllPost).post(createPost)
router.route('/:id').put(updatePost).delete(deletePost);


module.exports = router;