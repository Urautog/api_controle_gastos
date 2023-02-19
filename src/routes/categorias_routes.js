const express = require('express');
const router = express.Router();
const Categoria = require('../controllers/CategoriaController');

router.get('/categorias', Categoria.getCategorias);

router.post('/categorias', Categoria.createCategoria);

module.exports = router;
