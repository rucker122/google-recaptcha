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
app.post('/api/Submit', async (req, res) => {
  const postData = req.body;
  await verifyCaptcha(req.token);
  res.send({ data: postData });
});

// start
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

async function verifyCaptcha(t) {
  let res = await fetch(SITE_VERIFY_URL, {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: `secret=${SECRET_KEY}&response=${t}`
  }).catch(e => console.log(e));
}
