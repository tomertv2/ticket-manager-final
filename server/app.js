const express = require('express');
const fs = require('fs').promises;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/tickets', async (req, res) => {
  const tickets = await fs.readFile('./data.json');
  const searchParam = req.query.searchText;
  let json = JSON.parse(tickets);
  if (searchParam) {
    json = json.filter((ticket) => ((ticket.title).toLowerCase()).includes(searchParam));
  }
  res.send(json);
});

module.exports = app;
