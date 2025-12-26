# 🚀 StartBoost Manager
Sistema de gestão de Startups e monitoramento de KPIs mensais.

## 🛠️ Tecnologias
- **Back-end:** Node.js, Express
- **Banco de Dados:** PostgreSQL
- **Front-end:** HTML5, CSS3 (Modern Dashboard), JavaScript Vanilla

## ⚙️ Como rodar o projeto
1. Clone o repositório.
2. Execute `npm install` na pasta `backEnd`.
3. Configure seu banco no arquivo `.env`.
4. Inicie o servidor com `node index.js`.

# StartBoost Pro - Sistema de Gestão de Startups

![StartBoost Pro](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Sistema completo de gerenciamento de startups com dashboard, cadastro, mentores e relatórios.

## 📋 Versão 1.2.0 - Atualização Completa

### 🚀 **Novas Funcionalidades**

#### 1. **🎨 Sistema de Design Unificado**
- Implementação de design system completo com variáveis CSS
- Cores, gradientes, sombras e bordas padronizadas
- Animações e transições consistentes em todos os componentes

#### 2. **🔐 Sistema de Autenticação**
- Tela de login totalmente integrada ao design system
- Feedback visual com animações e validações
- Sistema de logout com interface intuitiva
- Proteção de área administrativa

#### 3. **👥 Módulo de Mentores**
- Página de busca e listagem de mentores
- Cards informativos com especialidades e contato
- Sistema de tags e filtros por área de atuação
- Avaliação por estrelas e experiência

#### 4. **📊 Módulo de Relatórios**
- Dashboard com múltiplos tipos de relatórios
- Indicadores visuais de status (atrasados, em dia)
- Botões interativos com efeitos visuais
- Tabelas responsivas com highlighting

### 🎯 **Principais Melhorias**

#### 🎨 **Interface do Usuário**
- Header redesenhado com navegação intuitiva
- Sistema de cards padronizado em todas as páginas
- Estatísticas visuais com ícones e gradientes
- Scrollbar personalizada e animações suaves

#### 📱 **Responsividade**
- Layout adaptativo para todos os dispositivos
- Breakpoints otimizados (480px, 768px, 1024px)
- Grid layouts flexíveis
- Componentes que se adaptam ao tamanho da tela

#### ⚡ **Performance**
- CSS otimizado e unificado
- Animações CSS em vez de JavaScript
- Código limpo e comentado
- Arquivos consolidados (remoção de arquivos CSS separados)

### 🔧 **Correções de Bugs**

#### 🐛 **Problemas Resolvidos**
1. **Sobreposição de elementos no header** ✅
   - Layout reorganizado usando CSS Grid/Flexbox
   - Z-index corrigido para camadas
   - Margens e padding ajustados

2. **Inconsistências visuais entre páginas** ✅
   - Unificação completa do CSS
   - Padronização de cores, fontes e espaçamentos
   - Botões com comportamentos consistentes

3. **Problemas de responsividade** ✅
   - Correção de quebras de layout em mobile
   - Font-size adaptativo
   - Containers com overflow controlado

### 📁 **Estrutura de Arquivos Atualizada**


### 🎨 **Sistema de Design**

#### **Cores Principais**
- `--primary: #4361ee` - Azul principal
- `--secondary: #7209b7` - Roxo secundário
- `--accent: #f72585` - Rosa de destaque
- `--success: #4cc9f0` - Verde/azul para sucesso
- `--danger: #f94144` - Vermelho para erros

#### **Gradientes**
- Dashboard: `linear-gradient(135deg, #4361ee 0%, #7209b7 100%)`
- Primary: `linear-gradient(135deg, #4361ee 0%, #3a56d4 100%)`
- Cards: Variações suaves para diferentes estados

#### **Componentes Padronizados**
- `.section-card` - Container para seções
- `.btn-nav` - Botões de navegação
- `.mentor-card` - Cards de mentores
- `.stat-card` - Cards de estatísticas
- `.notification` - Sistema de notificações

### 🔒 **Sistema de Segurança**

#### **Tela de Login**
- Validação de email e senha
- Feedback visual imediato
- Proteção contra tentativas múltiplas
- Redirecionamento seguro

#### **Controle de Acesso**
- Área administrativa protegida
- Botão de logout com confirmação visual
- Limpeza de sessão ao sair
- Interface de usuário logado

### 📊 **Componentes Adicionados**

#### **Dashboard**
- Cards de estatísticas com animações
- Tabelas interativas com hover effects
- Formulários com validação visual
- Botões com efeitos de ripple

#### **Módulo de Mentores**
- Sistema de busca com autocomplete
- Tags de especialização
- Cards com informações completas
- Botões de contato e perfil

#### **Relatórios**
- Múltiplos tipos de relatórios
- Status coloridos (atrasado, em dia)
- Botões com contadores
- Exportação visual

### 📱 **Responsividade**

#### **Breakpoints Implementados**
- **Desktop (>1024px)**: Layout completo
- **Tablet (768px-1024px)**: Grid de 2 colunas
- **Mobile (<768px)**: Layout de 1 coluna
- **Small Mobile (<480px)**: Otimização extrema

#### **Componentes Responsivos**
- Header que se transforma em mobile
- Cards que empilham verticalmente
- Tabelas com scroll horizontal
- Botões que ocupam largura total

### 🚀 **Próximos Passos**

#### **Planejado para v1.3.0**
- [ ] Sistema de persistência com localStorage
- [ ] Gráficos interativos com Chart.js
- [ ] Exportação de relatórios em PDF
- [ ] Sistema de notificações em tempo real
- [ ] Modo escuro/claro
