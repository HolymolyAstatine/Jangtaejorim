const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 9000;

app.use(cors());

app.get('/random-number', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // 1에서 100 사이의 랜덤 숫자
  console.log(randomNumber)
  res.json({ number: randomNumber });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
