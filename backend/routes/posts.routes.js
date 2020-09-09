const express = require('express');
const router = express.Router();

//const Post = require('../models/post.model');
const PostController = require('../controllers/posts.controller');

// router.get('/posts', async (req, res) => {
//   try {
//     const result = await Post
//       .find({status: 'published'})
//       .select('author created title')
//       .sort({created: -1});
//     if(!result) res.status(404).json({ post: 'Not found' });
//     else res.json(result);
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/posts/:id', async (req, res) => {
//   try {
//     const result = await Post
//       .findById(req.params.id);
//     if(!result) res.status(404).json({ post: 'Not found' });
//     else res.json(result);
//   }
//   catch(err) {
//     res.status(500).json(err);
//   }
// });

router.get('/posts', PostController.getPosts);
router.get('/posts/:id', PostController.getPostById);

module.exports = router;
