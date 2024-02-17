const express = require('express');
const app = express();
const port = 5000;

const middlewareLog = require('./middlewares/middleware');
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware');

const PostRoute = require('./routes/postRoutes')

app.use(express.json());

app.use(middlewareLog);
app.use(errorHandlingMiddleware);

app.use("/posts",PostRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});