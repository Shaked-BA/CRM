import { Link } from 'react-router-dom';

import '../styles/TicketCard.css';
import Avatar from './Avatar';
import Status from './Status';
import Priority from './Priority';
import ProgressBar from './ProgressBar';
import DeleteButton from './DeleteButton';

function TicketCard({ ticket }) {

  return (
    <div className="ticket-card">
      <div className="ticket-color" />
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <h3>{ticket.title}</h3>
        <Avatar avatar={ticket.avatar} owner={ticket.owner} />
        <Status status={ticket.status} />
        <Priority priority={ticket.priority} />
        <ProgressBar />
      </Link>
      <DeleteButton />
    </div>
  );
}

export default TicketCard;
