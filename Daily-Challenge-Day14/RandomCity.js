//Read the city name from the "input.txt" file
const fs = require('fs').promises;  
const content = 'input.txt';
const rc = async() => {
  try {
    const fileContent = await fs.readFile(content, 'utf8');
    const data = JSON.parse(fileContent);
    //console.log(fileContent);
    //console.log(data);
    return data;
  } catch (error) {
    console.error('error', error);
  }
}
rc();
const selectRandomCity = async() => {
  const cities = await rc();
  //console.log('data',cities);
  const randomIndex = Math.floor(Math.random() * cities.length);
  //console.log('city',cities[randomIndex]);
  return cities[randomIndex];
}
selectRandomCity();
// Deleting a file
async function Deleting (){ 
  const fileName = await selectRandomCity();
  try{
    await fs.unlink(`${fileName.name}.txt`, (err) => {
      console.log('File deleted successfully.')})
  }catch{
      console.log('File is not defined');
  }}
Deleting();
    //fetch data from API
const weatherAPI = async () => {
  const data1 = await selectRandomCity();
  //console.log('data1',data1.lat,data1.lng);
  const lat = data1.lat;
  const lng = data1.lng;
  const res = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
  const data2 = await res.json();
  //console.log(data2);
  return data2;
};
weatherAPI();
async function writeFileAsync (){ 
  const fileName = await selectRandomCity();
  //console.log(fileName.name);
  const content1 = await weatherAPI();
  //console.log(content1);
  await fs.writeFile(`${fileName.name}.txt`, `${content1.current_weather.temperature + '°C'}`, 'utf8')
  .then(() => {
    console.log('done!');
  })
  .catch(error => {
    console.error('error');
  });
};
writeFileAsync();