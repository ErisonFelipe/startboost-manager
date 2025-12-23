const corpoRelatorio = document.getElementById('corpo-relatorio');
const cabecalhoTabela = document.getElementById('cabecalho-tabela');
const tituloRelatorio = document.getElementById('titulo-relatorio');

async function gerarRelatorioAtraso() {
    tituloRelatorio.innerText = "Startups com KPIs Atrasados";
    cabecalhoTabela.innerHTML = `
        <th>ID</th>
        <th>Nome da Startup</th>
        <th>Última Atualização</th>
        <th>Status</th>
    `;

    try {
        const resposta = await fetch('http://localhost:3000/kpis/relatorios/atrasadas');
        const dados = await resposta.json();
        
        corpoRelatorio.innerHTML = '';
        dados.forEach(item => {
            const dataFormatada = item.ultima_atualizacao 
                ? new Date(item.ultima_atualizacao).toLocaleDateString('pt-BR') 
                : 'Nunca atualizado';
                
            corpoRelatorio.innerHTML += `
                <tr>
                    <td>${item.id_startup}</td>
                    <td>${item.nome}</td>
                    <td>${dataFormatada}</td>
                    <td><span class="badge" style="background:#ffcccb; color:#d90429">ATRASADO</span></td>
                </tr>
            `;
        });
    } catch (erro) {
        console.error("Erro ao carregar relatório:", erro);
    }
}

async function gerarRelatorioPerformance() {
    tituloRelatorio.innerText = "Ranking de Performance (Fase e Investimento)";
    cabecalhoTabela.innerHTML = `
        <th>Nome</th>
        <th>Fase Atual</th>
        <th>Valor Total Investido</th>
    `;

    try {
        const resposta = await fetch('http://localhost:3000/startups/relatorios/performance');
        const dados = await resposta.json();
        
        corpoRelatorio.innerHTML = '';
        dados.forEach(item => {
            corpoRelatorio.innerHTML += `
                <tr>
                    <td>${item.nome}</td>
                    <td><span class="badge">${item.fase_atual}</span></td>
                    <td>R$ ${parseFloat(item.valor_investido).toLocaleString('pt-BR')}</td>
                </tr>
            `;
        });
    } catch (erro) {
        console.error("Erro ao carregar relatório:", erro);
    }
}