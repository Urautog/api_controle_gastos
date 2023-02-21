CREATE DATABASE muralis;

USE muralis;

CREATE TABLE tipos_pagamento (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    tipo TEXT NOT NULL
);

CREATE TABLE categorias (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    descricao TEXT
);

CREATE TABLE despesas (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    valor REAL NOT NULL,
    data_compra DATETIME,
    descricao TEXT,
    tipo_pagamento_id INTEGER NOT NULL,
    categoria_id INTEGER NOT NULL,
    FOREIGN KEY (tipo_pagamento_id) REFERENCES tipos_pagamento(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
