import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
import Search from './components/Search';

function App() {
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get('/api/tickets');
      setTickets(data);
    }
    fetchedData();
  }, [])

  const filterOnChange = async (filterValue) => {
    const { data } = await axios.get('/api/tickets', {
      params: {
        searchText: filterValue
      }
    });
    setTickets(data);
  }

  const hideTicket = (ticket) => {
    const UpdatedTicketsList = [...tickets];
    UpdatedTicketsList.forEach(newTicket => {
      if(newTicket.id === ticket.id) {
        newTicket.invisible = true;
      }
    })
    setTickets(UpdatedTicketsList.filter(e => !e.invisible));
  }

  return (
    <main>
      <Search filterOnChangeFunc={filterOnChange} />
      {tickets.map(ticket =>
        <Ticket key={ticket.id} ticket={ticket} hideTicketFunc={hideTicket} />
        )}
    </main>
  );
}

export default App;
