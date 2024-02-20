<h1>Daily Challenge</h1>
You are working on a project where you need to process a list of user data. The data is received from an API in JSON format. Your task is to use modern JavaScript (ES6) features to handle this data efficiently.
<h3>Fetch User Data:</h3> Write an async function named fetchUserData that uses fetch to retrieve data from a the API:    . The function should use await to wait for the response.
<h3>Process Data:</h3> After fetching the data, use arrow functions and array methods (like map, filter, reduce) to process it. Create a function named processUserData that:
<br>*Filters out users who has male as gender.
<br>*Maps the remaining users to an array of strings in the format: "Name: [name], Age: [age]".
<br>*Use destructuring to extract user properties from the data.
<h3>Summarize Data:</h3> Write a function named summarizeAge that uses reduce to calculate the total age of all the male users.
<h3>Display Results:</h3> In your fetchUserData function, after processing and summarizing, log the processed user data and the total age to the console.
<h3>Requirements</h3>
*Use async/await for asynchronous operations.
<br/>*Use arrow functions.
<br/>*Employ destructuring where appropriate.
<br/>*Use array methods (map, filter, reduce) for data processing.
