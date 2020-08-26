import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
import NavBar from './components/NavBar';

function App() {
  const [tickets, setTickets] = useState([]);
  const countHiddenTickets = tickets.filter((ticket) => ticket.invisible);

  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get('/api/tickets');
      setTickets(data);
    };
    fetchedData();
  }, []);

  const filterOnChange = async (filterValue) => {
    const { data } = await axios.get('/api/tickets', {
      params: {
        searchText: filterValue,
      },
    });
    setTickets(data);
  };

  const hideTicket = (ticket) => {
    const updatedTicketsList = [...tickets];
    updatedTicketsList.forEach((newTicket) => {
      if (newTicket.id === ticket.id) {
        newTicket.invisible = true;
      }
    });
    setTickets(updatedTicketsList);
  };

  const restoreHiddenTickets = () => {
    const updatedTicketsList = [...tickets];
    updatedTicketsList.forEach((ticket) => {
      if (ticket.invisible === true) {
        ticket.invisible = false;
      }
    });
    setTickets(updatedTicketsList);
  };

  return (
    <main>
      <NavBar
        filterOnChangeFunc={filterOnChange}
        restoreFunc={restoreHiddenTickets}
        countHiddenTickets={countHiddenTickets}
      />
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
          hideTicketFunc={hideTicket}
        />
      ))}
    </main>
  );
}

export default App;
