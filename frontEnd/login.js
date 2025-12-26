   const form = document.getElementById('form-login');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const senha = document.getElementById('login-senha').value;

            try {
                const resposta = await fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, senha })
                });

                const dados = await resposta.json();

                if (resposta.ok) {
                    // 🔑 GUARDA O TOKEN NO NAVEGADOR
                    localStorage.setItem('token', dados.token);
                    localStorage.setItem('usuarioNome', dados.usuario.nome);
                    window.location.href = 'index.html'; // Redireciona para o dashboard
                } else {
                    const msg = document.getElementById('mensagem-erro');
                    msg.innerText = dados.error;
                    msg.style.display = 'block';
                }
            } catch (err) {
                console.error("Erro no login:", err);
            }
        });

         // Adicione estes estilos dinâmicos
        document.querySelectorAll('.login-input').forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--primary)';
                this.style.boxShadow = '0 0 0 3px rgba(67, 97, 238, 0.1)';
                this.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = 'var(--gray-200)';
                this.style.boxShadow = 'none';
                this.style.transform = 'translateY(0)';
            });
        });

        document.getElementById('btn-entrar').addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        document.getElementById('btn-entrar').addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });

         // Adicionar efeito visual de sucesso
                // const btn = document.getElementById('btn-entrar');
                // btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
                // btn.style.background = 'var(--success)';
                // btn.disabled = true;

        // Adicionar animação shake
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            #btn-entrar {
                box-shadow: var(--shadow-md);
            }
        `;
        document.head.appendChild(style);


        