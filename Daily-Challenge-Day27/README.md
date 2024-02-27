<h1>Enhancing User Schema and Operations</h1>
<h2>Requirements</h2>
<h3>Create User Schema:</h3>
Create a user schema with fields name, email, age and a createdAt of type Date with a default value set to the current date and time.<br/>
<h3>Create a New User:</h3>
Create a new user using the enhanced User schema with the following details:<br/>
name: "Mike Ross"<br/>
email: "mike.ross@arkx.group"<br/>
age: 30<br/>
<h3>Fetch Users with Pagination:</h3>
Implement a function to fetch users.<br/>
Implement a function to fetch a single user by name and by email.<br/>
<h3>Update User Email:</h3>
Implement a function to update the email of a user with a given name.<br/>
Log the updated user if found; otherwise, indicate that the user was not found.<br/>
<h3>Delete Users Created Before a Certain Date:</h3>
Implement a function to delete all users created before a specific date (e.g., one week ago).<br/>
Log the number of deleted users.<br/>
<h3>Error Handling:</h3>
Enhance error handling for all operations.<br/>
Log appropriate error messages for different scenarios, such as validation errors, user not found, etc.