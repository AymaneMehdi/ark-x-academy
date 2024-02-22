const data = require('../models/data');
exports.getAll = async (req,res) => {
  try {
    const posts = await data.readPosts();
    res.json(posts);
    //console.log(posts);
  } catch (error) {
    res.json({ message: 'Post not found' });
  }
};

exports.getOne = async (req,res) => {  
  const posts = await data.readPosts();
  const id = req.params.id
  let post = posts.find(p => p.id == id);
  //console.log(post);
  if(post){
      res.send(post)
  } else{
      res.send('Post not found')
  }
}

exports.createPost = async (req, res) => {
  const posts = await data.readPosts();
  let post = req.body;
  post.id = posts.length +1;
  posts.push(post)  
  res.json({ message: 'Post added successfully' });
  const writePost = await data.writePost(posts);
  res.send(writePost);
};

exports.updatePost = async (req, res) => {
  const posts = await data.readPosts();
  const id = req.params.id;
  const index = posts.findIndex(p => p.id == id);
  //console.log(posts);
    if(index){

      let updatedPost = {
      id : id,
      title : req.body.title,
      name : req.body.name }

      posts[index] = updatedPost;
      //console.log(posts);

      res.json({ message: 'Post updated successfully' });
      const writePost = await data.writePost(posts);
      res.send(writePost);
    } else{
      res.json({ message: 'Post not found' });
    }
  };

exports.deletePost = async (req, res) => {
  const posts = await data.readPosts();
  const id = req.params.id;
  const index = posts.findIndex(p => p.id == id);
  //console.log(posts);
  if(index){
  posts.splice(index, 1);
  res.json({ message: 'Post deleted successfully' });
  const writePost = await data.writePost(posts);
  res.send(writePost);
  } else{
    res.json({ message: 'Post not found' });
  }
};