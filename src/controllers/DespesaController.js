const connection = require('../db_connect');

const Despesa = {
  getDespesas: (req, res) => {
    const date = new Date();
    const mes = 1 + date.getMonth();
    connection.execute(
      'SELECT * FROM despesas WHERE MONTH(data_compra) = ?;',
      [mes],
      (error, results) => {
        if (error) {
          return res.status(400).send({
            data: error.sqlMessage,
          });
        }
        return res.status(201).send({
          data: results,
        });
      }
    );
  },

  createDespesa: (req, res) => {
    const { valor, data_compra, descricao, tipo_pagamento_id, categoria_id } =
      req.body;

    connection.execute(
      `INSERT INTO despesas (valor, data_compra, descricao, tipo_pagamento_id, categoria_id)
      VALUES(?,?,?,?,?)`,
      [valor, data_compra, descricao, tipo_pagamento_id, categoria_id],
      (error, results) => {
        if (error) {
          return res.status(400).send({
            data: error.sqlMessage,
            success: false,
          });
        }
        return res.status(201).send({
          data: { id: results.insertId },
          success: true,
        });
      }
    );
  },
};

module.exports = Despesa;
