const mongoose = require('mongoose');

const dbURL = "mongodb+srv://jesus:Zeuschela1@morgue-prueba.tp72al1.mongodb.net/user_prueba";

const dbconnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(dbURL, {})
        .then(() => {
            console.log("Base de datos conectada local-linea");
        })
        .catch((err) => {
            console.log("Error de conexión", err);
        });
}

module.exports = dbconnect;