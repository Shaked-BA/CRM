import '../styles/Status.css'

function Status({ status }) {

  return (
    <div className="status" id={status}>
      {status}
    </div>
  );
}

export default Status;
