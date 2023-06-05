const tickets = require('./db');

const getTickets = () => {
    return tickets;
}

const getTicketById = (id) => {
    return tickets.find
    (
        (ticket) => ticket.id === id
    );
}

const createTicket = (ticket) => {
    tickets.push(ticket);
}

const editTicket = (id, ticket) => {
    const ticketIndex = tickets.findIndex
    (
        (t) => t.id === id
    );
    if (ticketIndex === -1) {
        return null;
    }
    tickets[ticketIndex] = ticket;
    return ticket;
}

const deleteTicket = (id) => {
    const ticketIndex = tickets.findIndex
    (
        (ticket) => ticket.id === id
    );
    if (ticketIndex === -1) {
        return null;
    }
    const deletedTicket = tickets.splice(ticketIndex, 1);
    return deletedTicket;
}

exports.getTickets = getTickets;
exports.getTicketById = getTicketById;
exports.createTicket = createTicket;
exports.editTicket = editTicket;
exports.deleteTicket = deleteTicket;
