const express = require('express');
const cors = require('cors');
const dbconnect = require('./config');
const ModelUser = require('./userModel');

const app = express();
const router = express.Router();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const respuesta = await ModelUser.create(body);
        res.send(respuesta);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/', async (req, res) => {
    try {
        const respuesta = await ModelUser.find({});
        res.send(respuesta);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.findById(id);
        res.send(respuesta);
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const respuesta = await ModelUser.findOneAndUpdate({ _id: id }, body);
        res.send(respuesta);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.deleteOne({ _id: id });
        res.send(respuesta);
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.use(router);
app.listen(3001, () => {
    console.log("El servidor está en el puerto 3001");
});

dbconnect();