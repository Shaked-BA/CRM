import axios from 'axios';

axios.defaults.withCredentials = true;
const api = axios.create({baseURL: process.env.REACT_APP_SERVERURL});

export const getTickets = (setTicketsData) => {
    api
    .get('/tickets')
    .then((response) => { setTicketsData(response.data.tickets); })
    .catch((error) => console.error(error));
  };

export const getTicketById = (id) => {
    api
    .get(`/tickets/${id}`)
    .then((response) => { return response.data.ticket; })
    .catch((error) => console.error(error));
  };

export const createTicket = (ticket) => {
    api.post('/tickets',
        {
            ticket
        },
        {
            headers: { "content-type": "application/x-www-form-urlencoded" }
        }
    )
    .then((response) => { return response.data.ticket; })
    .catch((error) => { console.error(error); });
}

export const editTicket = (id, ticket) => {
    api.put(`/tickets/${id}`,
        {
            ticket
        },
        {
            headers: { "content-type": "application/x-www-form-urlencoded" }
        }
    )
    .then((response) => { return response.data.ticket; })
    .catch((error) => { console.error(error); });
}

export const deleteTicket = (id) => {
    api.delete(`/tickets/${id}`,
        {
            headers: { "content-type": "application/x-www-form-urlencoded" }
        }
    )
    .then((response) => { return response.data.ticket; })
    .catch((error) => { console.error(error); } )
}