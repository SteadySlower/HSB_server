const express = require('express');
const studentRouter = require('./routes/student.js');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/students', studentRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.sendStatus(500);
});

app.listen(8080);