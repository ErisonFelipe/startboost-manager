async function buscarMentores() {
    const termo = document.getElementById('input-especialidade').value;
    const divResultado = document.getElementById('resultado-mentores');

    try {
        const resposta = await fetch(`http://localhost:3000/mentores/busca?especialidade=${termo}`);
        const mentores = await resposta.json();

        if (mentores.length === 0) {
            divResultado.innerHTML = "<p>Nenhum mentor encontrado com esta especialidade.</p>";
            return;
        }

        let html = '<ul class="mentor-list">';
        mentores.forEach(m => {
            html += `
                <li class="section-card" style="margin-bottom: 10px; border-left: 5px solid var(--primary);">
                    <strong>${m.nome}</strong> - <span class="badge">${m.especialidade}</span><br>
                    <small>${m.email}</small>
                </li>`;
        });
        html += '</ul>';
        divResultado.innerHTML = html;

    } catch (erro) {
        console.error("Erro na busca:", erro);
    }
}

