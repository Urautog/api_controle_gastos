const express = require('express');
const router = express.Router();
const TipoPagamento = require('../controllers/TipoPagamentoController');

router.get('/tiposPagamentos', TipoPagamento.getTiposPagamentos);

router.post('/tiposPagamentos', TipoPagamento.createTipoPagamento);

module.exports = router;
