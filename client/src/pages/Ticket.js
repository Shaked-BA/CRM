import { useState } from 'react';
import '../styles/pages/Ticket.css'

function Ticket({ editMode }) {
  const categories = ["test1", "test2", "test3"];

  const [ticketData, setTicketData] = useState
    (
      {
        priority: 1,
        progress: 0,
        status: 'not-started',
        timestamp: new Date().toISOString()
      }
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ticketData);
  }

  const handleChange = ({ target }) => {
    setTicketData
      (
        (prevTicketData) => {
          return { ...prevTicketData, [target.name]: target.value }
        }
      )
  }

  return (
    <div className="ticket">
      <h1>{editMode ? "Edit Your Ticket" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label>Title</label>
            <input
              name="title"
              value={ticketData.title}
              type="text"
              required={true}
              onChange={handleChange}
            />
            <label>Category</label>
            <input
              name="category"
              value={ticketData.category}
              type="text"
              list="categories"
              required={true}
              onChange={handleChange}
            />
            <datalist id="categories">
              {categories?.map
                (
                  (category, i) =>
                    <option key={i}>
                      {category}
                    </option>
                )
              }
            </datalist>
            <label>Description</label>
            <input
              name="description"
              value={ticketData.description}
              type="text"
              onChange={handleChange}
            />
            <label>Priority</label>
            <div className="inputs-container">
              {Array(5).fill(0).map
                (
                  (priority, i) =>
                    <div key={i} className="priority-input">
                      <label>{i + 1}</label>
                      <input
                        name="priority"
                        value={ticketData.priority}
                        type="radio"
                        onChange={handleChange}
                      />
                    </div>
                )}
            </div>
            <label>Progress</label>
            <input
              name="progress"
              value={ticketData.progress}
              type="range"
              min="0"
              max="100"
              onChange={handleChange}
            />
            <label>Status</label>
            <select
              name="status"
              value={ticketData.status}
              onChange={handleChange}
            >
              <option>Done</option>
              <option>In-progress</option>
              <option>Stuck</option>
              <option>Not Started</option>
            </select>
          </section>
          <section>
            <label>Owner</label>
            <input
              name="owner"
              value={ticketData.owner}
              type="owner"
              required={true}
              onChange={handleChange}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              name="avatar"
              type="url"
              onChange={handleChange}
            />
            <div className="image-preview">
              {ticketData.avatar && (
                <img src={ticketData.avatar} alt="preview" />
              )}
            </div>
            <input type="submit" />
          </section>
        </form>
      </div>
    </div>
  );
}

export default Ticket;
