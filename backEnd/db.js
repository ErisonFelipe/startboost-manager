const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('✅ Conexão com o PostgreSQL estabelecida com sucesso em:', res.rows[0].now);
  }
});

module.exports = pool;