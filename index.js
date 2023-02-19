const express = require('express');
const app = express();

const despesasRoutes = require('./src/routes/despesas_routes');
const categoriasRoutes = require('./src/routes/categorias_routes');
const tiposPagamentosRoutes = require('./src/routes/tipos_pagamentos_routes');

app.use(express.json());
app.use('/api/despesas',despesasRoutes);
app.use('/api/despesas',categoriasRoutes);
app.use('/api/despesas',tiposPagamentosRoutes);

app.listen(3030, () => {
  console.log('Servidor rodando em http://localhost:3030');
});
