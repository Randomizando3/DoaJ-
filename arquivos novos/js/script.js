// -----------------------------------------
// NAVBAR
// -----------------------------------------
const navbarHTML = `
    <nav class="navbar">
        <a href="index.html" class="logo">
            <img src="../img/logo.png" alt="Logo Fundação DoaJá">
        </a>  
        <div class="menu-toggle" id="mobile-menu">
            <i class="fas fa-bars"></i>
        </div>
        <ul class="nav-links">
            <li><a href="../html/index.html"><i class="fas fa-home"></i> INÍCIO</a></li>
            <li><a href="../html/chat.html"><i class="fas fa-comments"></i> CHAT</a></li>
            <li><a href="#"><i class="fas fa-list"></i> MEUS ANÚNCIOS</a></li>
            <li><a href="#" class="btn-anunciar"><i class="fas fa-plus-circle"></i> ANUNCIAR GRÁTIS</a></li>
            <li><a href="../html/login.html" class="btn-login" title="Login"><i class="fas fa-user"></i></a></li>
        </ul>
    </nav>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Primeiro, coloca o HTML na tela
    document.getElementById('navbar-container').innerHTML = navbarHTML;
    
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// -----------------------------------------
// PRODUTOS DO BANCO DE DADOS
// -----------------------------------------

const produtos = [
    { id: 1, nome: 'Urso de Pelúcia Gigante', desc: 'Urso em ótimo estado, recém lavado. Perfeito para crianças.', categoria: 'brinquedo', img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 2, nome: 'Camiseta Básica Branca', desc: 'Tamanho M. Usada apenas duas vezes, sem manchas.', categoria: 'camiseta', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 3, nome: 'Calça Jeans Skinny', desc: 'Calça jeans masculina tamanho 40. Ótimo caimento.', categoria: 'calca', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 4, nome: 'Tênis Esportivo Nike', desc: 'Tênis de corrida tamanho 41. Solado ainda muito bom.', categoria: 'calcado', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 5, nome: 'Blocos de Montar', desc: 'Caixa com 500 peças coloridas. Algumas peças faltando.', categoria: 'brinquedo', img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { id: 6, nome: 'Jaqueta Corta Vento', desc: 'Tamanho G. Impermeável e super leve.', categoria: 'camiseta', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
];

const gridProdutos = document.getElementById('product-grid');
const botoesFiltro = document.querySelectorAll('.filter-btn');
const inputPesquisa = document.querySelector('.search-bar input');

// Variáveis para guardar o estado atual da busca e do filtro
let categoriaAtual = 'todos';
let termoBusca = '';

// Função principal pra filtra e renderizar os produtos
function atualizarTela() {
    // Limpa o grid antes de popular
    gridProdutos.innerHTML = '';
    
    // Filtra o array com basw na categoria e no termo de busca
    const produtosFiltrados = produtos.filter(produto => {
        const atendeCategoria = categoriaAtual === 'todos' || produto.categoria === categoriaAtual;
        
        const nomeEmMinusculo = produto.nome.toLowerCase();
        const descEmMinusculo = produto.desc.toLowerCase();
        const buscaEmMinusculo = termoBusca.toLowerCase();
        
        const atendeBusca = nomeEmMinusculo.includes(buscaEmMinusculo) || descEmMinusculo.includes(buscaEmMinusculo);

        return atendeCategoria && atendeBusca;
    });

    // Se não encontrar nada, exibe uma mensagem
    if (produtosFiltrados.length === 0) {
        gridProdutos.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #777; font-size: 18px; padding: 40px 0;">Nenhum produto encontrado.</p>';
        return;
    }

    // Cria os cards para cada item filtrado
    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.onclick = () => window.location.href = `produto.html?id=${produto.id}`;
        
        card.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <div class="card-content">
                <h3 class="card-title">${produto.nome}</h3>
                <p class="card-desc">${produto.desc}</p>
            </div>
        `;
        gridProdutos.appendChild(card);
    });
}

// -----------------------------------------
// EVENTOS DOS PRODUTOS E BUSCA
// -----------------------------------------

// Digitação na barra de pesquisa
inputPesquisa.addEventListener('input', (evento) => {
    termoBusca = evento.target.value;
    atualizarTela(); // Atualiza a tela a cada letra digitada
});

// Clique nos botões de Categoria
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Atualiza a parte visual dos botões
        botoesFiltro.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');
        
        // Atualiza a variável da categoria e refaz a tela
        categoriaAtual = botao.getAttribute('data-filter');
        atualizarTela();
    });
});

// Renderiza todos os produtos ao carregar a página inicialmente
atualizarTela();

// CRIADORES: GABRIEL LANDI, GABRIEL NERE, MAXIMIANO, NOAM FELIX