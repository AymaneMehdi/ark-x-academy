var fs = require('fs').promises;
async function writeFileAsync (file,content){  
  await fs.writeFile(file,content,'utf8')
  .then(() => {
    console.log('done!');
  })
  .catch(error => {
    console.error('error');
  });
}
writeFileAsync('./content.txt','content');
module.exports.writeFileAsync;