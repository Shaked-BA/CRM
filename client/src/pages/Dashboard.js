import { useEffect, useContext } from 'react';

import '../styles/pages/Dashboard.css';

import { getTickets } from '../services/tickets';
import TicketCard from '../components/TicketCard';
import { TicketsContext } from '../context';

function Dashboard() {
  const {categories, ticketsData, setTicketsData} = useContext(TicketsContext);

  useEffect(() => {
    getTickets(setTicketsData);
  }, []);

  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {categories.map
          (
            (category, i) =>
              <div key={i}>
                <h3>{category}</h3>
                {ticketsData.filter
                  (
                    (ticket) => ticket.category === category
                  ).map
                  (
                    (ticket, j) =>
                      <TicketCard key={j} ticket={ticket} categoryId={i} />
                  )
                }
              </div>
          )
        }
      </div>
    </div>
  );
}

export default Dashboard;
