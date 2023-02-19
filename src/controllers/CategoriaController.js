const connection = require('../db_connect');

const Categoria = {
  getCategorias: (req, res) => {

    connection.execute('SELECT * FROM categorias', (error, results) => {
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

  createCategoria: (req, res) => {

    const { nome, descricao } = req.body;

    connection.execute(
      `INSERT INTO categorias (nome, descricao)
      VALUES(?,?)`,
      [nome, descricao],
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

module.exports = Categoria;
