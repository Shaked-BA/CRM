import { Link } from 'react-router-dom';

import '../styles/TicketCard.css';
import Avatar from './Avatar';
import Status from './Status';
import Priority from './Priority';
import ProgressBar from './ProgressBar';
import DeleteButton from './DeleteButton';

function TicketCard({ color, ticket }) {

  return (
    <div className="ticket-card">
      <Link>
        <div className="ticket-color" />
        <h3>title</h3>
        <Avatar />
        <Status />
        <Priority />
        <ProgressBar />
      </Link>
      <DeleteButton />
    </div>
  );
}

export default TicketCard;
  