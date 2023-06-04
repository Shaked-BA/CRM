import '../styles/Dashboard.css';

import TicketCard from '../components/TicketCard';
import data from '../dummy-data';

function Dashboard() {

  const ticketsByCategories = new Map([...data?.map
    (({ category }) => [category, [data.filter
      (
        (ticket) => ticket.category === category
      )]]
    )]
  );

  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {[...ticketsByCategories].map
          (
            ([category, tickets], i) => 
            <div key={i}>
            <h3>{category}</h3>
            {tickets.map
              (
                (ticket, j) => 
                <TicketCard key={j} ticket={ticket} />
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
