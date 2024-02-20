const fs = require('fs').promises;
async function processFiles() {
  try {
    //reads multiple text files
    const [fileContent, fileContent1, fileContent2] = await Promise.all([
      fs.readFile('./content.txt', 'utf8'),
      fs.readFile('./content1.txt', 'utf8'),
      fs.readFile('./content2.txt', 'utf8')
    ]);
    //console.log(fileContent, fileContent1, fileContent2);
    const timestamp = new Date().toISOString();
    //console.log(timestamp);
    //Manipulates the content
    const modified = fileContent +' '+ fileContent1 +' '+ fileContent2 +' '+ timestamp;
    //console.log(modified);
    //modified content to new files
    await fs.writeFile('./content3.txt', modified, 'utf8');
    console.log('done!');
  }catch (error) {
    console.error('error', error);
  }
};
processFiles();
module.exports.processFiles;