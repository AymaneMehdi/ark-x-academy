<h1>Daily Challenge</h1>
<h3>Setup:<h3> Create a new Node.js project. Include necessary modules like fs for file operations.
<h3>File Reading Function:</h3> Write a function readFileAsync that takes a file path as an argument and returns a Promise. This function should use fs.readFile to read the file asynchronously. Handle any errors that might occur (e.g., file not found) and return an appropriate message.
<h3>File Writing Function:</h3> Implement a function writeFileAsync that takes a file path and content as arguments and writes to the file asynchronously using fs.writeFile. It should return a Promise. Include error handling for potential issues like write permissions.
<h3>Processing Logic:</h3> Develop a function processFiles that:
<br/>* Reads multiple text files (you can create some sample text files in your project).
<br/>* Manipulates the content of these files in some way (e.g., adding a timestamp, reversing the content, converting it to uppercase).
<br/>* Writes the modified content to new files.
<h3>Module Export:</h3> Structure your functions (readFileAsync, writeFileAsync, and processFiles) in separate JS modules and export them. This will demonstrate your understanding of JS modules.
<h3>Main Application File:</h3> In your main application file (e.g., index.js), import your modules and call processFiles. Use async/await syntax for cleaner and more readable asynchronous code.
