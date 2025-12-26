const express = require('express');
const cors = require('cors');
const path = require('path');
const startupRoutes = require('./routes/startups');
const kpiRoutes = require('./routes/kpis');
const mentorRoutes = require('./routes/mentores');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontEnd')));

// Usando as rotas modularizadas
app.use('/startups', startupRoutes);
app.use('/kpis', kpiRoutes);
app.use('/mentores', mentorRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('✅ Servidor modularizado rodando em http://localhost:3000');
});