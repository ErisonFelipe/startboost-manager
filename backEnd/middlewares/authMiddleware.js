const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    // O token geralmente vem no cabeçalho 'Authorization'
    const authHeader = req.headers['authorization'];
    
    // O formato padrão é "Bearer TOKEN_AQUI"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Acesso negado. Token não fornecido." });
    }

    try {
        // Verifica se o token é válido usando a mesma chave secreta do Controller
        const verificado = jwt.verify(token, 'SUA_CHAVE_SECRETA_SUPER_SEGURA');
        req.usuario = verificado; // Adiciona os dados do usuário na requisição
        next(); // Passa para a próxima função (o Controller)
    } catch (err) {
        res.status(403).json({ error: "Token inválido ou expirado." });
    }
};

module.exports = verificarToken;