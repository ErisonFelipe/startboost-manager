const pool = require('../db');

const listarStartups = async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM STARTUP ORDER BY id_startup ASC');
        res.json(resultado.rows);
    } catch (err) {
        res.status(500).send('Erro no servidor');
    }
};

const criarStartup = async (req, res) => {
    const { nome, cnpj, setor, fase_atual, data_investimento, valor_investido, id_gerente } = req.body;
    try {
        const novo = await pool.query(
            `INSERT INTO STARTUP (nome, cnpj, setor, fase_atual, data_investimento, valor_investido, id_gerente) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [nome, cnpj, setor, fase_atual, data_investimento, valor_investido, id_gerente]
        );
        res.status(201).json(novo.rows[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const atualizarStartup = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cnpj, setor, fase_atual, valor_investido, id_gerente } = req.body;

        const resultado = await pool.query(
            `UPDATE STARTUP 
             SET nome = COALESCE($1, nome), 
                 cnpj = COALESCE($2, cnpj), 
                 setor = COALESCE($3, setor), 
                 fase_atual = COALESCE($4, fase_atual), 
                 valor_investido = COALESCE($5, valor_investido), 
                 id_gerente = COALESCE($6, id_gerente)
             WHERE id_startup = $7 RETURNING *`,
            [nome, cnpj, setor, fase_atual, valor_investido, id_gerente, id]
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: "Startup não encontrada" });
        }

        res.json(resultado.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Erro ao atualizar startup" });
    }
};

const deletarStartup = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('DELETE FROM STARTUP WHERE id_startup = $1 RETURNING *', [id]);

        if (resultado.rowCount === 0) {
            return res.status(404).json({ message: "Startup não encontrada" });
        }

        res.json({ message: "Startup eliminada com sucesso!" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Erro ao eliminar startup" });
    }
};

// Listar startups ordenadas por fase e valor investido
const listarPorPerformance = async (req, res) => {
    try {
        const query = `
            SELECT nome, fase_atual, valor_investido 
            FROM STARTUP 
            ORDER BY fase_atual ASC, valor_investido DESC;
        `;
        const resultado = await pool.query(query);
        res.json(resultado.rows);
    } catch (err) {
        res.status(500).json({ message: "Erro ao listar performance." });
    }
};

module.exports = { 
    listarStartups, 
    criarStartup, 
    atualizarStartup, 
    deletarStartup,
    listarPorPerformance 
};