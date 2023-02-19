const express = require('express');
const router = express.Router();
const Despesa = require('../controllers/DespesaController');

router.get('/', Despesa.getDespesas);

router.post('/', Despesa.createDespesa);

module.exports = router;
