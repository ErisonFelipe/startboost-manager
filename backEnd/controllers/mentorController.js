const pool = require('../db');

const buscarPorEspecialidade = async (req, res) => {
    try {
        const { especialidade } = req.query; // Pega o termo da URL: ?especialidade=Marketing
        const resultado = await pool.query(
            "SELECT * FROM MENTOR WHERE especialidade ILIKE $1", 
            [`%${especialidade}%`] // O ILIKE permite busca parcial e ignora maiúsculas/minúsculas
        );
        res.json(resultado.rows);
    } catch (err) {
        res.status(500).json({ message: "Erro ao procurar mentores." });
    }
};

module.exports = { buscarPorEspecialidade };