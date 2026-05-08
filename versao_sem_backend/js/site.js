document.addEventListener("DOMContentLoaded", function () {
    protegerPaginasPrivadas();
    montarMenu();
    montarHome();
    montarDashboard();
    montarProduto();
    montarMeusAnuncios();
    montarMeusPedidos();
    montarPerfil();
    montarAdmin();
    ligarLogin();
    ligarRegistro();
    ligarAnuncio();
    ligarChat();
    ligarSenha();
});

function protegerPaginasPrivadas() {
    var usuario = pegarUsuarioLogado();
    var arquivo = window.location.pathname.split("/").pop();
    var paginasPrivadas = [
        "chat.html",
        "anunciar.html",
        "meus-anuncios.html",
        "meus-pedidos.html",
        "dashboard.html",
        "perfil.html",
        "admin.html"
    ];
    var i = 0;

    while (i < paginasPrivadas.length) {
        if (arquivo === paginasPrivadas[i] && !usuario) {
            window.location.href = "login.html";
            return;
        }

        i = i + 1;
    }
}

function pegarUsuarioLogado() {
    var texto = localStorage.getItem("usuarioLogado");

    if (!texto) {
        return null;
    }

    return JSON.parse(texto);
}

function salvarUsuario(usuario) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
}

function sair() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
}

function montarMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    var navLinks = document.getElementById("nav-links");
    var loginIcon = document.getElementById("login-icon");
    var usuario = pegarUsuarioLogado();
    var linksPrivados = document.querySelectorAll('a[href="chat.html"], a[href="meus-anuncios.html"]');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    if (loginIcon && usuario) {
        loginIcon.href = "perfil.html";
        loginIcon.title = usuario.nome;
    }

    if (!usuario) {
        var i = 0;

        while (i < linksPrivados.length) {
            linksPrivados[i].parentElement.classList.add("hidden");
            i = i + 1;
        }
    }
}

function montarHome() {
    var grid = document.getElementById("product-grid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    var i = 0;

    while (i < produtos.length) {
        var produto = produtos[i];
        var card = document.createElement("article");
        card.className = "card item-card";
        card.setAttribute("data-nome", produto.nome.toLowerCase());
        card.setAttribute("data-descricao", produto.descricao.toLowerCase());
        card.setAttribute("data-categoria", produto.categoria.toLowerCase());
        card.innerHTML =
            '<a href="produto.html?id=' + produto.id + '">' +
                '<img src="' + produto.foto + '" alt="' + produto.nome + '">' +
            '</a>' +
            '<div class="card-content">' +
                '<h3 class="card-title">' + produto.nome + '</h3>' +
                '<p class="card-desc">' + produto.descricao + '</p>' +
            '</div>';
        grid.appendChild(card);
        i = i + 1;
    }

    ligarFiltro();
}

function ligarFiltro() {
    var searchInput = document.getElementById("busca-item");
    var filterButtons = document.querySelectorAll(".filter-btn");
    var cards = document.querySelectorAll(".item-card");
    var emptyItems = document.getElementById("empty-items");
    var currentFilter = "todos";

    function atualizarTela() {
        var text = "";

        if (searchInput) {
            text = searchInput.value.toLowerCase();
        }

        var visiveis = 0;
        var i = 0;

        while (i < cards.length) {
            var card = cards[i];
            var nome = card.getAttribute("data-nome");
            var descricao = card.getAttribute("data-descricao");
            var categoria = card.getAttribute("data-categoria");
            var bateTexto = nome.indexOf(text) >= 0 || descricao.indexOf(text) >= 0;
            var bateFiltro = currentFilter === "todos" || categoria === currentFilter;

            if (bateTexto && bateFiltro) {
                card.style.display = "block";
                visiveis = visiveis + 1;
            } else {
                card.style.display = "none";
            }

            i = i + 1;
        }

        if (emptyItems) {
            if (visiveis === 0) {
                emptyItems.classList.remove("hidden");
            } else {
                emptyItems.classList.add("hidden");
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", atualizarTela);
    }

    var j = 0;

    while (j < filterButtons.length) {
        filterButtons[j].addEventListener("click", function () {
            var k = 0;

            while (k < filterButtons.length) {
                filterButtons[k].classList.remove("active");
                k = k + 1;
            }

            this.classList.add("active");
            currentFilter = this.getAttribute("data-filter");
            atualizarTela();
        });

        j = j + 1;
    }
}

function ligarLogin() {
    var form = document.getElementById("form-login");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;
        var aviso = document.getElementById("aviso-login");
        var achou = null;
        var i = 0;

        while (i < usuarios.length) {
            if (usuarios[i].email === email && usuarios[i].senha === senha) {
                achou = usuarios[i];
            }

            i = i + 1;
        }

        if (achou) {
            salvarUsuario(achou);

            if (achou.tipo === "admin") {
                window.location.href = "admin.html";
            } else {
                window.location.href = "dashboard.html";
            }
        } else {
            aviso.textContent = "Email ou senha incorretos.";
            aviso.classList.remove("hidden");
        }
    });
}

function ligarRegistro() {
    var form = document.getElementById("form-registro");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        alert("Cadastro visual feito. Na versao sem backend os dados nao sao salvos de verdade.");
        window.location.href = "login.html";
    });
}

function montarDashboard() {
    var total = document.getElementById("total-itens");

    if (!total) {
        return;
    }

    var doados = 0;
    var restantes = 0;
    var i = 0;

    while (i < produtos.length) {
        if (produtos[i].status === "doado") {
            doados = doados + 1;
        } else {
            restantes = restantes + 1;
        }

        i = i + 1;
    }

    total.textContent = produtos.length;
    document.getElementById("itens-doados").textContent = doados;
    document.getElementById("itens-restantes").textContent = restantes;
    document.getElementById("meus-pedidos").textContent = pedidos.length;
}

function pegarProdutoDaUrl() {
    var params = new URLSearchParams(window.location.search);
    var id = Number(params.get("id"));
    var i = 0;

    while (i < produtos.length) {
        if (produtos[i].id === id) {
            return produtos[i];
        }

        i = i + 1;
    }

    return produtos[0];
}

function montarProduto() {
    var titulo = document.getElementById("produto-nome");

    if (!titulo) {
        return;
    }

    var produto = pegarProdutoDaUrl();
    document.getElementById("produto-foto").src = produto.foto;
    document.getElementById("produto-foto").alt = produto.nome;
    document.getElementById("produto-nome").textContent = produto.nome;
    document.getElementById("produto-descricao").textContent = produto.descricao;
    document.getElementById("produto-categoria").textContent = produto.categoria;
    document.getElementById("produto-localizacao").textContent = produto.localizacao;
    document.getElementById("produto-doador").textContent = produto.doador;
    document.getElementById("produto-avaliacao").textContent = produto.avaliacao;
}

function montarMeusAnuncios() {
    var lista = document.getElementById("lista-meus-anuncios");

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    var i = 0;

    while (i < produtos.length) {
        lista.innerHTML += "<li><strong>" + produtos[i].nome + "</strong><span class='badge badge-" + produtos[i].status + "'>" + produtos[i].status + "</span></li>";
        i = i + 1;
    }
}

function montarMeusPedidos() {
    var lista = document.getElementById("lista-meus-pedidos");

    if (!lista) {
        return;
    }

    lista.innerHTML = "";

    var i = 0;

    while (i < pedidos.length) {
        lista.innerHTML += "<li><strong>" + pedidos[i].produto + "</strong><span class='badge badge-" + pedidos[i].status + "'>" + pedidos[i].status + "</span></li>";
        i = i + 1;
    }
}

function montarPerfil() {
    var nome = document.getElementById("perfil-nome");

    if (!nome) {
        return;
    }

    var usuario = pegarUsuarioLogado();

    if (!usuario) {
        usuario = usuarios[1];
    }

    nome.textContent = usuario.nome;
    document.getElementById("perfil-tipo").textContent = usuario.tipo;
    document.getElementById("perfil-localizacao").textContent = usuario.localizacao;
    document.getElementById("perfil-avaliacao").textContent = usuario.avaliacao;
}

function montarAdmin() {
    var usuariosTotal = document.getElementById("admin-usuarios");

    if (!usuariosTotal) {
        return;
    }

    usuariosTotal.textContent = usuarios.length;
    document.getElementById("admin-anuncios").textContent = produtos.length;
    document.getElementById("admin-pedidos").textContent = pedidos.length;
}

function ligarAnuncio() {
    var form = document.getElementById("form-anuncio");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        alert("Anuncio visual criado. Na versao sem backend ele nao salva no banco.");
        window.location.href = "meus-anuncios.html";
    });
}

function ligarChat() {
    var chatForm = document.getElementById("chat-form");
    var chatInput = document.getElementById("chat-input");
    var chatMessages = document.getElementById("chat-messages");

    if (!chatForm || !chatInput || !chatMessages) {
        return;
    }

    chatForm.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (chatInput.value.trim() === "") {
            return;
        }

        var novaMensagem = document.createElement("div");
        novaMensagem.className = "message sent";
        novaMensagem.textContent = chatInput.value;
        chatMessages.appendChild(novaMensagem);
        chatInput.value = "";
    });
}

function ligarSenha() {
    var botoes = document.querySelectorAll(".toggle-password");
    var i = 0;

    while (i < botoes.length) {
        botoes[i].addEventListener("click", function () {
            var alvo = document.getElementById(this.getAttribute("data-target"));

            if (alvo.type === "password") {
                alvo.type = "text";
            } else {
                alvo.type = "password";
            }
        });

        i = i + 1;
    }
}
