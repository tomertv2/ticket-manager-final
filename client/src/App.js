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

  return (
    <main>
      <Search filterOnChangeFunc={filterOnChange} />
      {/* <input id="searchInput" onChange={e => filterData(e.target.value)}></input> */}
      {tickets.map(ticket =>
        <Ticket key={ticket.id} ticket={ticket} />
        )}
    </main>
  );
}

export default App;
