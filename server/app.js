const express = require('express');
const fs = require('fs').promises;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/tickets', async (req, res) => {
  const tickets = await fs.readFile('./data.json');
  const json = JSON.parse(tickets);
  res.send(json);
});

module.exports = app;
