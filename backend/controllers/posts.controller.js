const Post = require('../models/post.model');

exports.getPosts = async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('author created title')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};


exports.getPostById = async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.postPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
