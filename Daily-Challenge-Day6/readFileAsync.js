const fs = require('fs').promises;
async function readFileAsync(content) {
  try {
    const fileContent = await fs.readFile(content, 'utf8');
    console.log(fileContent);
  } catch (error) {
    console.error('error', error);
  }
}
readFileAsync('./content.txt');
module.exports.readFileAsync;