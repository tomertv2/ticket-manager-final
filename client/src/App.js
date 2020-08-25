import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Ticket from './components/Ticket';
import Search from './components/Search';
import RestoreButton from './components/RestoreButton';

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

  const restoreHiddenTickets = () => {
    const updatedTicketsList = [...tickets];
    updatedTicketsList.forEach(ticket => {
      if(ticket.invisible === true) {
        ticket.invisible = false;
      }
    })
    setTickets(updatedTicketsList);
  } 
  
  return (
    <main>
      <div id="topBarContainer">
        <Search filterOnChangeFunc={filterOnChange} />
        <div id="restoreContainer">
          <span>Restore </span>
          <span id="hideTicketsCounter">{countHiddenTickets.length}</span>
          <span> hidden tickets</span>
          <RestoreButton restoreFunc={restoreHiddenTickets} />
        </div>
        
      </div>
      {tickets.map(ticket =>
        <Ticket key={ticket.id} ticket={ticket} hideTicketFunc={hideTicket} />
        )}
    </main>
  );
}

export default App;
