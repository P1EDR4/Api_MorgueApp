const express = require('express');
const ModelUser = require('./userModel');

const router = express.Router();

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const respuesta = await ModelUser.create(body);
        // Incrementa la cantidad total de información
        const totalInfo = await ModelUser.countDocuments({});
        res.send({ respuesta, totalInfo });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send({ error: 'Error interno del servidor', message: error.message });
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

router.get('/info', async (req, res) => {
    try {
        const totalInfo = await ModelUser.countDocuments({});
        const deletedInfo = await ModelUser.countDocuments({ deleted: true });
        res.send({ totalInfo, deletedInfo });
    } catch (error) {
        console.error('Error al obtener información:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const respuesta = await ModelUser.findByIdAndUpdate(id, body, { new: true });
        res.send(respuesta);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const respuesta = await ModelUser.findByIdAndDelete(id);
        // Disminuye la cantidad total de información al eliminar
        const totalInfo = await ModelUser.countDocuments({});
        res.send({ respuesta, totalInfo });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
