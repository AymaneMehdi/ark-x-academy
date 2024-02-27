const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";

const User = require ("./models/user");
/////////////////////////////////////////////////////////////////////////
mongoose
  .connect(url)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));
/////////////////////////////////////////////////////////////////////////
const createOne = () => {
const newUser = new User({
  name: "Mike Ross",
  email: "mike.ross@arkx.group",
  age: 30,
});
newUser
  .save()
  .then((user) => console.log("User created succesfully: ", user))
  .catch((error) => console.log("Error creating user: ", error));  
};
createOne();
/////////////////////////////////////////////////////////////////////////
const AllUsers = () => {
User.find({})
  .then((users) => console.log('all users',users))
  .catch((error) => console.log("Error fetching users: ", error));  
};
AllUsers(); 
/////////////////////////////////////////////////////////////////////////
const findOneName = () => {
  User.findOne({ name: "Aymane" })
  .then((user) => {
    if (user) console.log('fetch a single user by name : ',user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error fetching users: ", error));
};
findOneName();
/////////////////////////////////////////////////////////////////////////
const findOneEmail = () => {
  User.findOne({ email: "mike.ross@arkx.group" })
  .then((user) => {
    if (user) console.log('fetch a single user by email',user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error fetching users: ", error));
};
findOneEmail();
/////////////////////////////////////////////////////////////////////////
const updateOne = () => {
User.findOneAndUpdate(
  { name : "Mike Ross" },
  { $set: { email: "Aymane@arkx.group"} }
)
  .then((user) => {
    if (user) console.log("User updated successfully: ", user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error fetching users: ", error));  
};
updateOne();
/////////////////////////////////////////////////////////////////////////
const deleteMany = () => {
  const date = new Date("2024-02-28");
  User.deleteMany({ createdAt: { $lt: date } })
    .then((result) => {
      const deletedCount = result.deletedCount;
      console.log("Number of users deleted:", deletedCount);
    })
    .catch((error) => console.log("Error deleting users: ", error));
};
deleteMany();
/////////////////////////////////////////////////////////////////////////-