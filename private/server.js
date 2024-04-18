const express = require('express')
const app = express()
const { db } = require('./config');
const cors = require("cors")

const {getEx, getExById, updateEx, addEx} = require('./controller');

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

app.get('/exercise', getEx)
app.get('/exercise/:id', getExById)
app.post('/exercise/:id', updateEx)
app.post('/exercise', addEx)


const {getSentence} = require('./controller');

app.get('/sentence', getSentence)
