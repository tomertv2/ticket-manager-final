import React, {useEffect, useState} from 'react';
import Ticket from './components/Ticket'
import './App.css';
import axios from 'axios';

function App() {
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get('/api/tickets');
      setTickets(data);
    }
    fetchedData();
  }, [])

  return (
    <main>
      <Ticket tickets={tickets}/>
    </main>
  );
}

export default App;
