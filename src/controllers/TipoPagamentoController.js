const connection = require('../db_connect');

const TipoPagamento = {
  getTiposPagamentos: (req, res) => {

    connection.execute('SELECT * FROM tipos_pagamento', (error, results) => {
      if (error) {
        return res.status(400).send({
          data: error.sqlMessage,
        });
      }
      return res.status(201).send({
        data: results,
      });
    });
  },

  createTipoPagamento: (req, res) => {

    const { tipo } = req.body;

    connection.execute(
      `INSERT INTO tipos_pagamento (tipo)
      VALUES(?)`,
      [tipo],
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

module.exports = TipoPagamento;
