const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// POST
app.post('/api/Submit', (req, res) => {
  const postData = req.body;

  console.log('Received POST data:', postData);

  res.send({ data: postData });
});

// start
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});