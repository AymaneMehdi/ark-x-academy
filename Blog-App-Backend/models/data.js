const fs = require('fs').promises; 
const path = require('path');
exports.readPosts = async () => {
  const FilePath = path.join(__dirname, './posts.json');
  try {
    const postsData = await fs.readFile(FilePath, 'utf8');
    const Dataposts = JSON.parse(postsData);
    //console.log(Dataposts);
    return Dataposts;
  } catch (error) {
    console.error('Error reading posts file:', error);
  }
};

exports.writePost = async (posts) => {
  const FilePath = path.join(__dirname, './posts.json');
  fs.writeFile(FilePath, JSON.stringify(posts, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('Error writing file');
    } else {
      console.log('Post added successfully');
      res.send(post);
    }
  });
};
