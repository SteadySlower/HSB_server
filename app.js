const express = require('express');
const studentRouter = require('./routes/student.js');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/students', studentRouter);

app.listen(8080);