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
    json = json.filter((ticket) =>
      ticket.title.toLowerCase().includes(searchParam.toLowerCase())
    );
  }
  res.send(json);
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  try {
    const ticketJsonString = await fs.readFile('./data.json');
    const tickets = JSON.parse(ticketJsonString);
    const indexOfTicket = tickets.findIndex(
      (ticket) => ticket.id === req.params.ticketId
    );
    tickets[indexOfTicket].done = true;
    await fs.writeFile('./data.json', JSON.stringify(tickets));
    res.send({ updated: true });
  } catch (error) {
    console.error('Error occurred');
  }
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  try {
    const ticketJsonString = await fs.readFile('./data.json');
    const tickets = JSON.parse(ticketJsonString);
    const indexOfTicket = tickets.findIndex(
      (ticket) => ticket.id === req.params.ticketId
    );
    tickets[indexOfTicket].done = false;
    await fs.writeFile('./data.json', JSON.stringify(tickets));
    res.send({ updated: true });
  } catch (error) {
    console.error('Error occurred');
  }
});

module.exports = app;
