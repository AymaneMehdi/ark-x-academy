const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const contacts = [];
function addContact() {
  //name
  rl.question('Enter name: ', (name) => {
    //phoneNumber
    rl.question('Enter phone number: ', (phoneNumber) => {
      contacts.push({name,phoneNumber})
      console.log('done!');
      //console.log(contacts);
      MainMenu();
    });
  });
};
function viewContacts() {
  console.log('Contacts:');
  contacts.forEach(function(name,phoneNumber) {
    console.log(name,phoneNumber);
});
MainMenu();
};
function searchContact() {
  rl.question('Enter name: ', (Name) => {
     const search = contacts.find(contact => contact.name === Name);
     if(search){
     console.log('yes');
     }else{
     console.log('Contact not found');}
    MainMenu();
  });
};
function MainMenu() {
  console.log('Main Menu:');
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit');
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        addContact();
        break;
      case '2':
        viewContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Please enter a number between 1 and 4');
        MainMenu();
    }
  });
};
MainMenu();
