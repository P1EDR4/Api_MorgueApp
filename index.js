const app = require("./app");
const dbconnect = require("./config");

const PORT = process.env.PORT || 4000;

dbconnect();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});