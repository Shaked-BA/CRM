const { v4: uuidv4 } = require("uuid");

const express = require('express');
const router = express.Router();

const { getTickets, getTicketById, createTicket, editTicket, deleteTicket } = require('../utils/ticketUtil');

router.get('/', (req, res) => {
    const tickets = getTickets();
    if (tickets === null) {
        res.status(500).json({message: 'Internal error accured'}).end();
        return;
    }
    res.status(200).send({tickets}).end();
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({message: 'Ticket id is missing'}).end();
        return;
    }
    const ticket = getTicketById(id);
    if (!ticket) {
        res.status(400).json({message: `No ticket with id ${id}`}).end();
        return;
    }
    res.status(200).send({ticket}).end();
})

router.post('/', (req, res) => {
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }
    const { ticket } = req.body;
    if (!ticket) {
        res.status(400).json({message: 'Ticket is missing'}).end();
        return;
    }
    if (!ticket.title) {
        res.status(400).json({message: 'Ticket title is undefined'}).end();
        return;
    }
    if (!ticket.category) {
        res.status(400).json({message: 'Ticket category is undefined'}).end();
        return;
    }
    if (!ticket.owner) {
        res.status(400).json({message: 'Ticket owner is undefined'}).end();
        return;
    }
    const newTicket = {...ticket, id: uuidv4()};
    createTicket(newTicket);
    res.send({ticket: newTicket}).status(200).end();
});

router.put('/:id', (req, res) => {
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }
    const { id } = req.params;
    if (!id) {
        res.status(400).json({message: 'Ticket id is missing'}).end();
        return;
    }
    const { ticket } = req.body;
    if (!ticket) {
        res.status(400).json({message: 'Ticket is missing'}).end();
        return;
    }
    const newTicket = editTicket(id, {id: id, ...ticket});
    if (!newTicket) {
        res.status(400).json({message: 'Failed updating ticket'}).end();
        return;
    }
    res.send({ticket: newTicket}).status(200).end();
});

router.delete('/:id', (req, res) => {
    const userId = req.cookies?.userId;
    if (!userId) {
        res.status(403).end();
        return;
    }
    const { id } = req.params;
    if (!id) {
        res.status(400).json({message: 'Ticket id is missing'}).end();
        return;
    }
    const ticket = deleteTicket(id);
    if (!ticket) {
        res.status(400).json({message: `No ticket with id ${id}`}).end();
        return;
    }
    res.status(200).send({ticket}).end();
});

module.exports = router;