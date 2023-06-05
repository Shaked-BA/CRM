import { Link } from 'react-router-dom';

import '../styles/components/TicketCard.css';

import Avatar from './Avatar';
import Status from './Status';
import Priority from './Priority';
import ProgressBar from './ProgressBar';
import Delete from './Delete';

function TicketCard({ ticket, categoryId }) {

  const colors = [
    'plum',
    'lightsteelblue',
    'lightsalmon',
    'lightseagreen',
    'palegreen'
  ]

  return (
    <div className="ticket-card">
      <div className="ticket-color" style={{ backgroundColor: colors[categoryId % 5] }} />
      <Link to={`/tickets/${ticket.id}`} state={ticket} id="link">
        <h3>{ticket.title}</h3>
        <Avatar avatar={ticket.avatar} owner={ticket.owner} />
        <Status status={ticket.status} />
        <Priority priority={ticket.priority} />
        <ProgressBar progress={ticket.progress} />
      </Link>
      <Delete ticketId={ticket.id} />
    </div>
  );
}

export default TicketCard;
