// kpis.js

// 1. Evento de submissão do formulário de KPI
const formKpi = document.getElementById('form-kpi');
if (formKpi) {
    formKpi.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dadosKpi = {
            id_startup: document.getElementById('kpi-id-startup').value,
            mes_referencia: document.getElementById('kpi-mes').value,
            faturamento_mensal: document.getElementById('kpi-faturamento').value,
            n_usuarios_ativos: document.getElementById('kpi-usuarios').value,
            churn_rate: document.getElementById('kpi-churn').value
        };

        try {
            const resposta = await fetch('http://localhost:3000/kpis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosKpi)
            });

            if (resposta.ok) {
                alert('✅ KPI registado com sucesso!');
                formKpi.reset();
            } else {
                const erro = await resposta.json();
                alert('❌ Erro: ' + (erro.message || 'Verifique se já existe um registo para este mês.'));
            }
        } catch (erro) {
            console.error('Erro ao enviar KPI:', erro);
        }
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o dropdown de startups no formulário de KPI
    if (document.getElementById('form-kpi')) {
        // Chama a função do arquivo startups.js
        if (typeof atualizarDropdownStartups === 'function') {
            atualizarDropdownStartups();
        }
    }
});