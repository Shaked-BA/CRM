require('dotenv').config();
const cors = require('cors');
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

const user = require('./routes/users');
const ticket = require('./routes/tickets');

var port = process.env.PORT || "80"; // local=8000 remote=80

const corsOptions = {
    origin:  process.env.BASE_URL,
    credentials: true
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Welcom to the CRM app!");
});

app.use('/users', user);
app.use('/tickets', ticket);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});