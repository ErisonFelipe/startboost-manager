// startups.js

// 1. Função para carregar e exibir as startups na tabela
async function carregarStartups() {
    try {
        const resposta = await fetch('http://localhost:3000/startups');
        const startups = await resposta.json();

        // Correção do seletor para bater com o ID no seu HTML
        const corpoTabela = document.getElementById('startup-table-body');
        corpoTabela.innerHTML = '';

        startups.forEach(startup => {
            // Unificamos a criação da linha com os botões de Editar e Excluir
            const linha = `
                <tr>
                    <td>${startup.id_startup}</td>
                    <td>${startup.nome}</td>
                    <td>${startup.setor}</td>
                    <td>${startup.fase_atual}</td>
                    <td>R$ ${parseFloat(startup.valor_investido).toLocaleString('pt-BR')}</td>
                    <td>
                        <button onclick="prepararEdicao(${startup.id_startup}, '${startup.nome}', '${startup.cnpj}', '${startup.setor}', '${startup.fase_atual}', ${startup.valor_investido}, ${startup.id_gerente})">Editar</button>
                        <button onclick="deletarStartup(${startup.id_startup})" class="btn-delete">Excluir</button>
                    </td>
                </tr>                
            `;
            corpoTabela.innerHTML += linha;
        });
    } catch (erro) {
        console.error('Erro ao buscar startups:', erro);
    }
}

// 2. Ouvinte ÚNICO para o formulário (Gerencia Cadastro e Atualização)
const form = document.getElementById('form-startup');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // O ID oculto define se é uma atualização (PUT) ou novo cadastro (POST)
    const id = document.getElementById('startup-id').value;

    const dados = {
        nome: document.getElementById('nome').value,
        cnpj: document.getElementById('cnpj').value,
        setor: document.getElementById('setor').value,
        fase_atual: document.getElementById('fase').value,
        data_investimento: document.getElementById('data').value,
        valor_investido: document.getElementById('valor').value,
        id_gerente: document.getElementById('id_gerente').value
    };

    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:3000/startups/${id}` : 'http://localhost:3000/startups';

    try {
        const resposta = await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            alert(id ? '✅ Atualizado com sucesso!' : '✅ Cadastrado com sucesso!');
            limparFormulario();
            carregarStartups(); // Atualiza a lista visualmente
            atualizarDropdownStartups(); // Atualiza também o dropdown no formulário de KPIs
        } else {
            const erro = await resposta.json();
            alert('❌ Erro no Banco: ' + (erro.message || 'Verifique os dados.'));
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro);
    }
});

// 3. Funções Auxiliares para Startups
async function deletarStartup(id) {
    if (confirm('Tem certeza que deseja excluir esta startup?')) {
        await fetch(`http://localhost:3000/startups/${id}`, { method: 'DELETE' });
        carregarStartups();
        atualizarDropdownStartups(); // Atualiza o dropdown após exclusão
    }
}

function prepararEdicao(id, nome, cnpj, setor, fase, valor, id_gerente) {
    document.getElementById('startup-id').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('cnpj').value = cnpj;
    document.getElementById('setor').value = setor;
    document.getElementById('fase').value = fase;
    document.getElementById('valor').value = valor;
    document.getElementById('id_gerente').value = id_gerente;

    document.getElementById('btn-salvar').innerText = 'Atualizar Dados';
    document.getElementById('btn-cancelar').style.display = 'inline';
    window.scrollTo(0, 0);
}

function limparFormulario() {
    form.reset();
    document.getElementById('startup-id').value = '';
    document.getElementById('btn-salvar').innerText = 'Salvar Startup';
    document.getElementById('btn-cancelar').style.display = 'none';
}

// Função para atualizar dropdown de startups (também usada no kpis.js)
async function atualizarDropdownStartups() {
    try {
        const resposta = await fetch('http://localhost:3000/startups');
        const startups = await resposta.json();
        const select = document.getElementById('kpi-id-startup');

        if (select) { // Verifica se o elemento existe (pode não estar na página atual)
            // Mantém apenas a primeira opção padrão
            select.innerHTML = '<option value="">Selecione a Startup...</option>';

            startups.forEach(s => {
                select.innerHTML += `<option value="${s.id_startup}">${s.nome}</option>`;
            });
        }
    } catch (erro) {
        console.error('Erro ao carregar startups para o select:', erro);
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o formulário de startups
    if (document.getElementById('form-startup')) {
        carregarStartups();
    }
});