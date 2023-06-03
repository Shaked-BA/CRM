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
      <div className="ticket-container">{ticketsByCategories?.forEach((tickets, category) => 
        <div key={category}>
          <h3>{category}</h3>
          {tickets.map((ticket, i) => <TicketCard key={i} ticket={ticket} />)}
        </div>)}
      </div>
    </div>
  );
}

export default Dashboard;
