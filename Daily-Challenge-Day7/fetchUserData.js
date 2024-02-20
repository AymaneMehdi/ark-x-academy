//Fetch Users Data
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
async function fetchUserData () {
try {
const response = await fetch(apiUrl);
const data = await response.json();
//console.log(data);
return data;
} catch (error) {
console.error(error);
}};
fetchUserData();
//Process Data
//use arrow functions and array methods (like map, filter, reduce)
const processUserData = async () =>{
    const data = await fetchUserData();
    //console.log(data);
    const dataMap = data.map((user)=>(user.name));
    console.log(dataMap);
    const dataFilter = data.filter(user => user.address.city == 'Bartholomebury');
    console.log(dataFilter);
};
processUserData();
