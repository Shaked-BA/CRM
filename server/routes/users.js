require('dotenv').config();

const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
    const userId = req.cookies?.userId || uuidv4();
    res.cookie("userId", userId).send({id: userId});
});

module.exports = router;
