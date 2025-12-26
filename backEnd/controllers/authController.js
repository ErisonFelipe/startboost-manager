const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 1. Registro de Usuário (Gerente)
const registrar = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        // Criptografa a senha com um custo de 10 (salt)
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        
        const novoUsuario = await pool.query(
            'INSERT INTO USUARIOS (nome, email, senha) VALUES ($1, $2, $3) RETURNING id_usuario, nome, email',
            [nome, email, senhaCriptografada]
        );
        
        res.status(201).json(novoUsuario.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Erro ao registrar usuário. O e-mail já existe?" });
    }
};

// 2. Login de Usuário
const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await pool.query('SELECT * FROM USUARIOS WHERE email = $1', [email]);
        
        if (usuario.rows.length === 0) {
            return res.status(401).json({ error: "E-mail ou senha incorretos." });
        }

        // Compara a senha digitada com a criptografada no banco
        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha);
        
        if (!senhaValida) {
            return res.status(401).json({ error: "E-mail ou senha incorretos." });
        }

        // Gera o Token JWT (Dura 24 horas)
        const token = jwt.sign(
            { id: usuario.rows[0].id_usuario }, 
            'SUA_CHAVE_SECRETA_SUPER_SEGURA', // Em produção, use o arquivo .env
            { expiresIn: '24h' }
        );

        res.json({ 
            auth: true, 
            token: token, 
            usuario: { nome: usuario.rows[0].nome, email: usuario.rows[0].email } 
        });

    } catch (err) {
        res.status(500).json({ error: "Erro ao processar login." });
    }
};

module.exports = { registrar, login };