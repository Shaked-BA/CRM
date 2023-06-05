import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { editTicket, createTicket } from '../services/tickets';
import { TicketsContext } from '../context';

import '../styles/pages/Ticket.css'

function Ticket({ editMode }) {
  const {categories} = useContext(TicketsContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [newTicketData, setNewTicketData] = useState
    (
      {
        title: editMode ? state.title : '',
        category: editMode ? state.category : '',
        description: editMode ? state.description : '',
        priority: editMode ? state.priority : '1',
        progress: editMode ? state.progress : '0',
        status: editMode ? state.status : 'not-started',
        owner: editMode ? state.owner : '',
        avatar: editMode ? state.avatar : '',
        timestamp: new Date().toISOString()
      }
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      if (editTicket(state.id, newTicketData) !== null) {
        navigate('/');
      }
    }
    else {
      if (createTicket(newTicketData) !== null) {
        navigate('/');
      }
    }
  }

  const handleChange = ({ target }) => {
    setNewTicketData
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
              value={newTicketData.title}
              type="text"
              required={true}
              onChange={handleChange}
            />
            <label>Category</label>
            <input
              name="category"
              value={newTicketData.category}
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
              value={newTicketData.description}
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
                        value={i + 1}
                        type="radio"
                        checked={newTicketData.priority ===`${i + 1}`}
                        onChange={handleChange}
                      />
                    </div>
                )}
            </div>
            <label>Progress</label>
            <input
              name="progress"
              value={newTicketData.progress}
              type="range"
              min="0"
              max="100"
              onChange={handleChange}
            />
            <label>Status</label>
            <select
              name="status"
              value={newTicketData.status}
              onChange={handleChange}
            >
              <option>done</option>
              <option>in-progress</option>
              <option>stuck</option>
              <option>not-started</option>
            </select>
          </section>
          <section>
            <label>Owner</label>
            <input
              name="owner"
              value={newTicketData.owner}
              type="owner"
              required={true}
              onChange={handleChange}
            />

            <label>Avatar</label>
            <input
              name="avatar"
              type="url"
              onChange={handleChange}
            />
            <div className="image-preview">
              {newTicketData.avatar && (
                <img src={newTicketData.avatar} alt="preview" />
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
