import '../styles/components/Delete.css';

function Delete() {

  const deleteTicket = () => {}

  return (
    <div className="delete">
      <div className="delete-icon" onClick={deleteTicket}>✖</div>
    </div>
  );
}

export default Delete;
