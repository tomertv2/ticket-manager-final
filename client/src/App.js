import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
import Search from './components/Search';

function App() {
  const [tickets, setTickets] = useState([]);
  const countHiddenTickets = tickets.filter(ticket => ticket.invisible);
  
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
    const updatedTicketsList = [...tickets];
    updatedTicketsList.forEach(newTicket => {
      if(newTicket.id === ticket.id) {
        newTicket.invisible = true;
      }
    })
    setTickets(updatedTicketsList);
  }
  
  return (
    <main>
      <div id="topBarContainer">
        <Search filterOnChangeFunc={filterOnChange} />
        <div>
          <span>Counter: </span>
          <span id="hideTicketsCounter">{countHiddenTickets.length}</span>
        </div>
      </div>
      {tickets.map(ticket =>
        <Ticket key={ticket.id} ticket={ticket} hideTicketFunc={hideTicket} />
        )}
    </main>
  );
}

export default App;
