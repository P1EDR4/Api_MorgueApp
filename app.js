const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnect = require('./config');
const userRoutes = require('./userRoutes');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'none'; font-src 'self' http://localhost:3000"
    );
    next();
});


app.use(userRoutes);

app.listen(3001, () => {
    console.log("El servidor está en el puerto 3001");
});

dbconnect();

module.exports = app;
