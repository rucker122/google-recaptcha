const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET
app.get('/api/submit', (req, res) => {
    console.log('Received GET Request');
  
    res.send({data: { d1: 1, d2: 2}});
  });

// POST
app.post('/api/submit', (req, res) => {
  const postData = req.body;

  console.log('Received POST data:', postData);

  res.send({ msg: 'POST request received successfully!'});
});

// start
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});