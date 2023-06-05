import { deleteTicket } from '../services/tickets';

import '../styles/components/Delete.css';

function Delete({ ticketId }) {

  const handleDelete = () => {
    if (deleteTicket(ticketId) !== null) {
      window.location.reload();
    }
  }

  return (
    <div className="delete">
      <div className="delete-icon" onClick={handleDelete}>✖</div>
    </div>
  );
}

export default Delete;
