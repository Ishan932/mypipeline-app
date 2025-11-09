const express = require('express');
const app = express();
// Elastic Beanstalk will set the PORT environment variable
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World! My AWS Pipeline is working!');
});

app.listen(port, () => {
  console.log(App listening on port ${port});
});
