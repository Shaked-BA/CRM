import { Link } from 'react-router-dom';

import '../styles/TicketCard.css';
import Avatar from './Avatar';
import Status from './Status';
import Priority from './Priority';
import ProgressBar from './ProgressBar';
import DeleteButton from './DeleteButton';

function TicketCard({ color, title, documentId, avatar, owner }) {

  return (
    <div className="ticket-card">
      <div className="ticket-color" />
      <Link to={`/ticket/${documentId}`} id="link">
        <h3>{title}</h3>
        <Avatar avatar={avatar} owner={owner}/>
        <Status />
        <Priority />
        <ProgressBar />
      </Link>
      <DeleteButton />
    </div>
  );
}

export default TicketCard;
  