const pool = require('../db');

// Relatório: Startups com KPIs atrasados (> 30 dias)
const listarAtrasadas = async (req, res) => {
    try {
        const query = `
            SELECT s.id_startup, s.nome, MAX(k.mes_referencia) as ultima_atualizacao
            FROM STARTUP s
            LEFT JOIN KPI_MENSAL k ON s.id_startup = k.id_startup
            GROUP BY s.id_startup, s.nome
            HAVING MAX(k.mes_referencia) < CURRENT_DATE - INTERVAL '30 days' 
               OR MAX(k.mes_referencia) IS NULL;
        `;
        const resultado = await pool.query(query);
        res.json(resultado.rows);
    } catch (err) {
        res.status(500).json({ message: "Erro ao gerar relatório de atrasos." });
    }
};

module.exports = { listarAtrasadas };