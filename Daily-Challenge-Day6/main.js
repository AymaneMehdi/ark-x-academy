const { readFileAsync } = require('./readFileAsync');
const { writeFileAsync } = require('./writeFileAsync');
const { processFiles } = require('./processFiles');
async function main (){
    const readFile = await readFileAsync;
    const writeFile = await writeFileAsync;
    const processF = await processFiles;
    console.log(readFile);  
    console.log(writeFile);
    console.log(processF);
};
main();