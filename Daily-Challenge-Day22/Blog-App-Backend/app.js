const express = require('express');
const app = express();
const port = 9000;

app.use(express.json());

//const { body, validationResult } = require('express-validator');

const middlewareLog = require('./middlewares/middleware');
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware');

const PostRoute = require('./routes/postRoutes')
const Login = require('./routes/auth');

app.use(express.json());
app.use(middlewareLog);
app.use(errorHandlingMiddleware);

app.use("/posts",PostRoute);
app.use("/login",Login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});