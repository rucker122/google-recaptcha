const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3300;
const SITE_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const SECRET_KEY = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// POST
app.post('/api/Submit', (req, res) => {
  const postData = req.body;

  console.log('Received POST data:', postData);
  verifyCaptcha(req.token);
  res.send({ data: postData });
});

// start
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

function verifyCaptcha(t) {
  fetch(SITE_VERIFY_URL, {
    method: 'POST',
    body: JSON.stringify({
      secret: SECRET_KEY,
      response: t
    })
  }).then(res => console.log(res));
}
